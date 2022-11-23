(() => {

  //forma larga->
  type Gender=  'M' | 'F';

  class Person {
    public name: string;
    public gender: Gender; 
    public birthdate: Date;

    //estado inicial de la clase:
    constructor(name: string, gender: Gender, birthdate: Date){
      this.name=  name;
      this.gender = gender;
      this.birthdate= birthdate;
    }
  }

  //forma corta de la clase anterior ->
  class Person1 {
    constructor(
      public name: string,
      public gender: Gender,
      public birthdate: Date
    ){}
  }

  const newPerson = new Person('olme', 'M', new Date('12-07-1990'));
  console.log({newPerson});

  const newPerson1 = new Person1('olme', 'M', new Date('12-07-1990'));
  console.log({newPerson1});










})()