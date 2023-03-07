// importing Employee constructor 
const Employee = require("./Employee");

// engineer constructor extends employee constructor 
class Engineer extends Employee {



    constructor (name, id, email, ...args) {
        // calling employee constructor with args as an array
        super(...[name, id, email]);
        this.github=args[0]
        // this.args = args; 
    }

    // returning github from input 
    getGithub () {
        // return this.args[0];
        return this.github ;
    }

     // override employee role to engineer
    getRole () {
        return "Engineer";
    }
}

// to be exported 
module.exports = Engineer;
