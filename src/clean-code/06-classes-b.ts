(() => {
  //single responsability -> sin aplicación ->

  type Gender = "M" | "F";

  class Person {
    constructor(
      public name: string,
      public gender: Gender,
      public birthdate: Date
    ) {}
  }

  class User extends Person {
    public lastAccess: Date;
    constructor(
      public email: string,
      public role: string,

      name: string,
      gender: Gender,
      birtdate: Date
    ) {
      super(name, gender, birtdate);
      this.lastAccess = new Date();
    }

    checkCredentials() {
      return true;
    }
  }

  class UserSettings extends User {
    constructor(
      public workingDirectory: string,
      public lastOpenFolder: string,

      email: string,
      role: string,
      name: string,
      gender: Gender,
      birthdate: Date
    ){
      super(email, role, name, gender, birthdate)
    }
  }

  // esta clase viola el principio Single Responsability: aunque hay herencia se hace complicado seguir el código. aplicar single responsability es complicado con herencia
  const userSettings = new UserSettings(
    '/usr/home',
    '/home',
    'olme.orozco@gmail.com',
    'Admin',
    'Olmeiro',
    'M',
    new Date('1990-07-12')
  )
  console.log({userSettings, areCredentialValid: userSettings.checkCredentials() })

  //para esta instancia tengo mas de tres props que mandar como args ->
  //  const newUser = new User()
})();
