(() => {
  // No aplicando el principio de responsabilidad única
  type Gender = "M" | "F";

  // Alto Acoplamiento

  //Digamos vamos a cambiar name por firstName y agregar lastName, la clase en sí no pone problema por que tiene un bajo acoplamiento :
  class Person {
    // constructor(
    //   public name: string,
    //   public gender: Gender,
    //   public birthdate: Date
    // ) {} antes
    constructor(
      public firtsName: string,
      public lastName: string,
      public gender: Gender,
      public birthdate: Date
    ) {}
  }

  //aqui tenemos problemas por que User tiene un acoplamiento alto con Person, en el constructor ahora se exige el firstName y lastName:
  class User extends Person {
    // constructor(
    //   public email: string,
    //   public role: string,
    //   private lastAccess: Date,
    //   name: string,
    //   gender: Gender,
    //   birthdate: Date
    // ) {
    //   super(name, gender, birthdate);
    //   this.lastAccess = new Date();
    // } antes sin el cambio en Person de firstName y lastName
    constructor(
      public email: string,
      public role: string,
      private lastAccess: Date,
      firstName: string,
      lastName: string,
      gender: Gender,
      birthdate: Date
    ) {
      super(firstName, lastName, gender, birthdate); //ya tenemos 4 args lo que va haciendo dificil saber que parámetros pasar.
      this.lastAccess = new Date();
    }

    checkCredentials() {
      return true;
    }
  }

  //Igualmente esta clase esta altamente acoplada con User, debemos modificar UserSettings para aceptar los cambios en Person:
  class UserSettings extends User {
    // constructor(
    //   public workingDirectory: string,
    //   public lastFolderOpen: string,
    //   email: string,
    //   role: string,
    //   name: string,
    //   gender: Gender,
    //   birthdate: Date
    // ) {
    //   super(email, role, new Date(), name, gender, birthdate);
    // } // antes del cambio en Person.
    constructor(
      public workingDirectory: string,
      public lastFolderOpen: string,
      email: string,
      role: string,
      firstName: string,
      lastName: string,
      gender: Gender,
      birthdate: Date
    ) {
      super(email, role, new Date(), firstName, lastName, gender, birthdate);
    }
  }

  //userSettings cambia de constructor con el cambio en Person:
  // const userSettings = new UserSettings(
  //   "/urs/home",
  //   "/development",
  //   "fernando@google.com",
  //   "F",
  //   "Fernando",
  //   "M",
  //   new Date("1985-10-21")
  // ); antes del cambio

  const userSettings = new UserSettings(
    "/urs/home",
    "/development",
    "fernando@google.com",
    "F",
    "Fernando",
    "Herrera",
    "M",
    new Date("1985-10-21")
  );

  console.log({ userSettings, credentials: userSettings.checkCredentials() });
})();

// Un par de cambios en Person desencadenaron cambios en el resto de las clases porque tenemos alto acoplamiento.
