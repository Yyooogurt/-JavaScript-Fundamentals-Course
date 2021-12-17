// //Task 1
let mentor = { 
    course: "JS fundamental", 
    duration: 3,
    direction: "web-development" 
};

function  propsCount(mentor){
    return Object.keys(mentor).length;
}
console.log("The number of properties of this object: " + propsCount(mentor));

// //Task 2
let obj = {
    key1: 1, 
    key2: 2, 
    key3: 3, 
    key4: 4, 
    key5: 5
};
const arrKeys = [];
const arrValues = [];

function showProps(obj){
    arrKeys.push(Object.keys(obj));
    arrValues.push(Object.values(obj));
}
showProps(obj);
console.log("Keys: " + arrKeys);
console.log("Values: " + arrValues);

//Task 3
class Person{
    constructor(name, surname){
        this.name = name;
        this.surname = surname;
    }
    showFullName(){
        return this.name + " " + this.surname;
    }
};

class Student extends Person{
    constructor(name, surname, year){
        super(name, surname);
        this.year = year;
    }
    showFullName(midleName){
        return super.showFullName() + " " + midleName;
    }
    showCourse(){
        let realYear = new Date();
        let course = realYear.getFullYear() - this.year;
        if (course > 6 || course < 1){throw new Error("You are not a student");} 
        return course;
    }
};
const stud1 = new Student("Petro", "Petrenko", 2015);
console.log(stud1.showFullName("Petrovych"));
console.log("Current course: " + stud1.showCourse());
//Task 4
const workers = [];
class Worker{
    #experience = 1.2;
    constructor(fullName, dayRate, workingDays){
        this.fullName = fullName;
        this.dayRate = dayRate;
        this.workingDays = workingDays;
        workers.push(this);
    }
    showSalary(){
        return this.fullName + " salary: " + this.dayRate * this.workingDays;
    }
    showSalaryWithExperience(){
        return this.fullName + " salary: " + this.dayRate * this.workingDays * this.#experience;
    }
    amoundOfSalary(salary){   
        return this.dayRate * this.workingDays * this.#experience;
    }
    get experience(){return this.#experience;}
    set experience(value){this.#experience = value;}
    sortSalary(){
        let sortWorekrs = workers.sort(function(a,b){
            return a.amoundOfSalary() - b.amoundOfSalary();
        })
        for(let i = 0; i <  sortWorekrs.length; i++){
            console.log(sortWorekrs[i].fullName + ": " + sortWorekrs[i].amoundOfSalary());
        }
    } 
};
console.log("")
let worker1 = new Worker("John Johnson", 20, 23);
console.log(worker1.fullName); 
console.log(worker1.showSalary()); 
console.log("New experience: " + worker1.experience);
console.log(worker1.showSalaryWithExperience()); 
worker1.experience = 1.5;
console.log("New experience: " + worker1.experience);
console.log(worker1.showSalaryWithExperience());
console.log("")
let worker2 = new Worker("Gera Gubanov", 65, 13);
console.log(worker2.fullName); 
console.log(worker2.showSalary()); 
console.log("New experience: " + worker2.experience);
console.log(worker2.showSalaryWithExperience()); 
worker2.experience = 1.5;
console.log("New experience: " + worker2.experience);
console.log(worker2.showSalaryWithExperience());
console.log("")
let worker3 = new Worker("Eva Wotson", 3, 43);
console.log(worker3.fullName); 
console.log(worker3.showSalary()); 
console.log("New experience: " + worker3.experience);
console.log(worker3.showSalaryWithExperience()); 
worker3.experience = 1.5;
console.log("New experience: " + worker3.experience);
console.log(worker3.showSalaryWithExperience());
console.log(" ");
worker1.sortSalary();

//Task 5
class GeometricFigure{
    getArea(){
        return 0;
    }
    toString(){
        return Object.getPrototypeOf(this).constructor.name;
    }
}
    class Triangle extends GeometricFigure{
        constructor(a, h){
            super();
            this.a = a;
            this.h = h;
        }
        getArea(){
            return 0.5 * this.a * this.h;
        }
    }
    class Square extends GeometricFigure{
        constructor(b){
            super();
            this.b = b;
        }
        getArea(){
            return this.b * this.b;
        }
    }
    class Circle extends GeometricFigure{
        constructor(r){
            super();
            this.r = r;
        }
        getArea(){
            return Math.PI * this.r**2;
        }
}
function handleFigures(figures){
        return figures.reduce(function(sum, figure) {
            if(figure instanceof GeometricFigure){
                console.log("Geometric figure: " + figure.toString() + " - area: " + figure.getArea()); 
                let total = sum + figure.getArea();
                console.log(total);
                return total; 
            }else{
                console.log("Object does not belong to this class");
            } 
        }, 0);

}
const figures = [new Triangle(4, 5), new Square(7), new Circle(5)];	
handleFigures(figures);


