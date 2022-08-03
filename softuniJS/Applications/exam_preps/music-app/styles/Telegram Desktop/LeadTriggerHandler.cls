public without sharing class LeadTriggerHandler extends TriggerHandler
{
    private List<Lead> newList;
    private Map<Id, Lead> oldMap;
    private Map<Id, Lead> newMap;

    
    public LeadTriggerHandler()
    {
        newList = Trigger.new;
        oldMap = (Map<Id, Lead>)Trigger.oldMap;
        newMap = (Map<Id, Lead>)Trigger.newMap;
    }

    public override void afterUpdate()
    {
        System.debug('---CALLING THE UPDATE TASK METHOD ---');
        updateTasks();
    }

    private void updateTasks ()
    {
        Map<Id, Lead> leadMap = new Map<Id, Lead>();
        for (Lead lead :newList)
        {
            if( newMap.get(lead.Id).OwnerId != oldMap.get(lead.Id).OwnerId || 
                newMap.get(lead.Id).Phone != oldMap.get(lead.Id).Phone || 
                newMap.get(lead.Id).MobilePhone != oldMap.get(lead.Id).MobilePhone)
            {
                leadMap.put(lead.Id, lead);
            }
        }
        if(!leadMap.isEmpty())
        {
            Map<Id, Lead> selLeadMap = new Map<Id, Lead>
            (
                [SELECT Id, MobilePhone, Phone, OwnerId,  
                        (SELECT Id FROM Tasks) 
                 FROM Lead WHERE Id IN :leadMap.keySet()]
            );
            System.debug('------FOUND NEW ID - LEAD PAIRS -----' + selLeadMap);
            List<Task> tasks = new List<Task>();
            System.debug('------Iterating the ID - LEAD PAIRS...----');
            for(Lead l : selLeadMap.values())
            {   
                System.debug('-----CURRENT LEAD----' + l);
                System.debug('-----ITERATING THROUGH THE TASKS FOR LEAD ----' + l);
                for(Task t : l.Tasks)
                {   
                    System.debug('-----CURRENT TASK-----' + t);
                    if(((String)l.OwnerId).startsWith('005'))
                    {
                        System.debug('-----TASK\'s OWNER ID---- ' + (String)l.OwnerId);
                        System.debug('-----USER__C-----' + t.User__c);
                        t.User__c = l.OwnerId;
                    }
                    System.debug('----PARENT_PHONE__C------' + t.Parent_Phone__c);
                    System.debug('----PARENT_MOBILE__C------' + t.Parent_Mobile__c);

                    t.Parent_Phone__c = l.Phone;
                    t.Parent_Mobile__c = l.MobilePhone;
                    tasks.add(t);
                    System.debug('----ADDED UPDATED TASK TO ARRAY----');
                }
            }
            System.debug('----ALL UPDATED TASKS-----' + tasks);
            update tasks;
        }
    }
}