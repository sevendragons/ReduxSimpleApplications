class Person {
  static species(){
    return 'Homo sapiens'
  }

  static species(){
    return `Human are classified as ${this.species()}`
  }

  constructor() {
    this.firstName = firstName;
    this.lastName = lastName;
    this.hasJob = false;

  }
  fullName() {                //this is instance
    return `${this.firstName} ${this.lastName}`;
  }
  setFirstName(firstName) {      //this is instance
    this.firstName = firstName;
  }
  setLastName(lastName) {        //this is instance
    this.lastName = lastName;
  }
}

class Worker extends Person  {
  constructor(firstName, lastName, job) {
    super(firstName, lastName);  //this SUPER is come from the constructor in Person class
    this.job = job;
    this.hasJob = true;
  }

  setJob(job) {
    this.job = job;
  }
}

/*--------------------------------------------------------------*/
/* Getter Setter in JS
/*--------------------------------------------------------------*/
