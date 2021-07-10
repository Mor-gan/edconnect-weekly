const DataModel = require('./data_model');

class Project {
    constructor(id, name, abstract, authors, tags, createdBy) {
this.id=id;
this.name=name;
this.abstract=abstract;
this.authors=authors;
this.tags=tags;
this.createdBy=createdBy;
    }
}

class Projects extends DataModel {

    validate(obj) {
    this.errors = [];
    var validationCheck = true;
    for(let objKey in obj)
    {
        if(objKey == 'authors' && !Array.isArray(obj[objKey]))
        {              
            validationCheck = false;
            this.errors.push("Authors should be an array");
        }
       
        else if(objKey == 'tags' && !Array.isArray(obj[objKey]))
        {
            validationCheck = false
            this.errors.push("Tags should be an array");
        }

        else 
            if(obj[objKey] === null || obj[objKey] === '' || obj[objKey] === [])
            {
                this.errors.push(objKey + " should not be empty");
                validationCheck = false;
            
            }
    }
   
    return validationCheck;

}
}
module.exports = {
    Project,
    Projects
};