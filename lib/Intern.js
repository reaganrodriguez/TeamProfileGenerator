// importing Employee constructor 
const Employee = require('./Employee');

// intern constructor extends employee constructor 
class Intern extends Employee  {
    constructor (name, id, email, ...args) {
        // calling employee constructor with args as an array
       // super (name, id, email, ...args); 
        super(...[name, id, email, ...args]);
        this.args = args; 
    }

    // returning school from input 
    getSchool () {
        return this.args[0];
    }

    // override employee role to intern
    getRole () {
        return "Intern";
    }
}

// to be exported 
module.exports = Intern;
