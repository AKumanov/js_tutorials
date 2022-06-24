class Company {
    constructor() {
        this.departments = {};
    }

    addEmployee(name, salary, position, department) {
        if(!name || !salary || !position || !department) throw new Error('Invalid input!');
        
        
        if (Number(salary) < 0) throw new Error('Invalid input!');

        if(Object.keys(department).includes(department)) {
            console.log('found dep..');
        } else {
            this.departments[department] = []
            this.departments[department].push({
                name,
                salary,
                position
            })
        }
        for (let dep of Object.keys(c.departments)) {
            console.log(c.departments[dep]);
        }

    }

    bestDepartment() {

    }
}

const c = new Company()
c.addEmployee("Stanimir", 2000, "engineer", "Construction");
c.addEmployee("Pesho", 1500, "electrical engineer", "Construction");
c.addEmployee("Slavi", 500, "dyer", "Construction");
c.addEmployee("Stan", 2000, "architect", "Construction");
c.addEmployee("Stanimir", 1200, "digital marketing manager", "Marketing");
c.addEmployee("Pesho", 1000, "graphical designer", "Marketing");
c.addEmployee("Gosho", 1350, "HR", "Human resources");

console.log(c.departments);
