class SmartHike {
    constructor(username) {
        this.username = username;
        this.goals = {}; // peakName: altitude
        this.listOfHikes = [];
        this.resources = 100;
    }

    addGoal(peak, altitude) {
        if(Object.keys(this.goals).includes(peak)) return `${peak} has already been added to your goals`;

        this.goals[peak] = altitude;
        return `You have successfully added a new goal - ${peak}`;
    }

    hike(peak, time, difficultyLevel) {
        if(!(Object.keys(this.goals).includes(peak))) throw new Error(`${peak} is not in your current goals`);

        if (this.resources === 0) throw new Error("You don't have enough resources to start the hike");
        
        const difference = this.resources - (time * 10);

        if (difference < 0) return "You don't have enough resources to complete the hike";

        this.resources -= (time * 10);

        const hike = {
            peak,
            time,
            difficultyLevel
        };

        this.listOfHikes.push(hike);

        return `You hiked ${peak} peak for ${time} hours and you have ${this.resources}% resources left` 

    }

    rest(time) {
        const newResourses = time * 10;
        if (newResourses + this.resources > 100) {
            this.resources = 100;
            return 'Your resources are fully recharged. Time for hiking!';
        } else {
            this.resources += newResourses;
            return `You have rested for ${time} hours and gained ${newResourses}% resources`
        }

    }

    showRecord(criteria) {
        if(this.listOfHikes.length === 0) return `${this.username} has not done any hiking yet`
    
        if (criteria === "all") {
            const returnArr = ['All hiking records:'];
            for (const hike of this.listOfHikes) {
                returnArr.push(`${this.username} hiked ${hike.peak} for ${hike.time} hours`);
            }

            return returnArr.join('\n');

        } else {
            if(!(this.listOfHikes.some((hike) => hike.difficultyLevel === criteria))) return `${this.username} has not done any ${criteria} hiking yet`;

            const filterHikes = this.listOfHikes.filter((hike) => hike.difficultyLevel === criteria);
            let shortestTime = 1000;
            let bestHike;

            for (const hike of filterHikes) {
                if (hike.time < shortestTime) {
                    shortestTime = hike.time;
                    bestHike = hike
                }
            }
            return `${this.username}'s best ${criteria} hike is ${bestHike.peak} peak, for ${bestHike.time} hours`
            
        }
    }
}

const user = new SmartHike('Vili');
user.addGoal('Musala', 2925);
user.hike('Musala', 8, 'hard');
console.log(user.showRecord('easy'));
user.addGoal('Vihren', 2914);
user.hike('Vihren', 4, 'hard');
console.log(user.showRecord('hard'));
user.addGoal('Rui', 1706);
user.hike('Rui', 3, 'easy');
console.log(user.showRecord('all'));


