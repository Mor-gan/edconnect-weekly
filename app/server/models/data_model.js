class DataModel {
  constructor() {
    this.data = [];
    this.errors = [];
  }

  getAll() {
    return this.data;
  }

  getById(id) {
    this.data.map((obj)=> obj.id)
    if (obj.id===id) {
      return true;
    } else {
      return null;
    }
  }

  save(obj) {
    if (this.validate(obj)) {
      this.data.push(obj);
      return true;
    }
    return false;
  }

  update(obj, id) {
    this.data.map((obj)=> {
    if (obj.id===id){ 
      return true;
    } 
      return false;   
  })

}

  delete(id) {
   this.data.map((obj)=> {
  if( obj.splice(id)===id){
      return true
  }
return false
  
  })
}
  // this method will be overriden in the sub classes
  validate(obj) {
    return false;
  }
}

// Do not worry about the below for now; It is included so that we can test your code
// We will cover module exports in later parts of this course
module.exports = DataModel;
