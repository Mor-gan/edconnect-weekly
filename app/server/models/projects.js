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
        if (!obj.authors===this.authors){
            this.errors.push(`Authors should be an array`);
    }
    if (!obj.tags===this.tags){
        this.errors.push(`Tags should be an array`);
}

for (const property in obj) {
    if(obj[property] === ""){
        this.errors.push(`${property} should not be empty`)
    }
}
return (this.errors.length > 0) ? false : true;
}
}

module.exports = {
    Project,
    Projects
};