const Employee = require('./Employee')

class Intern extends Employee {
    constructor(school){
    super(name, id, email);
    this.school = school;
    }
getName(){
    return this.name;
}

getId(){
    return this.id
}
getEmail(){
    return this.email
}



getRole(){
    return "Intern"
}
}