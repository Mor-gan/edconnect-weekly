class DataModel {
  constructor() {
    this.data = [];
    this.errors = [];
  }

  getAll() {
    return this.data;
  }

  getById(id) {
    for (let obj of this.data) {
    if (obj.id===id) {
      return obj;
    } 
  }
      return null;
    }
  

  save(obj) {
    if (this.validate(obj)) {
      this.data.push(obj);
      return true;
    }
    return false;
  }

  update(obj, id) {
  let updateUsers = this.data.find(obj => obj.id===id) 
 if(!updateUsers){
        return false
    }
  
    for(let key in obj){
        updateUsers[key] = obj[key]

    }
    return true;
}

  

  delete(id) {
    let index = this.data.findIndex(item => item.id === id);
    if (index>=0) {
        this.data.splice(index, 1);
        return true;
    }
    return false;

}

  // this method will be overriden in the sub classes
  validate(obj) {
    return false;
  }
}

// Do not worry about the below for now; It is included so that we can test your code
// We will cover module exports in later parts of this course
module.exports = DataModel;
