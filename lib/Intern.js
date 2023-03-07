// importing Employee constructor 
const Employee = require('./Employee');

// intern constructor extends employee constructor 
class Intern extends Employee  {
    constructor (name, id, email, ...args) {
        // calling employee constructor with args as an array
       // super (name, id, email, ...args); 
        super(...[name, id, email]);
        this.school = args[0]; 
    }

    // returning school from input 
    getSchool () {
        return this.school;
    }

    // override employee role to intern
    getRole () {
        return "Intern";
    }
}


module.exports = Intern;
