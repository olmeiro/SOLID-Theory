(() => {
  // Aplicando el principio de responsabilidad única
  // Prioriza la composición frente a la herencia

  type Gender = "M" | "F";

  // interface PersonProps {
  //   name: string;
  //   gender: Gender;
  //   birthdate: Date;
  // } antes sin el cambio de firstName y lastName

  //Digamos que vamos agregar firstName en lugar de name y lastName:
  interface PersonProps {
    firstName: string;
    lastName: string;
    gender: Gender;
    birthdate: Date;
  }

  //ahora TS nos ayuda con los campos que no cumplen la interface:
  class Person {
    // public name: string;
    public firstName: string;
    public lastName: string;
    public gender: Gender;
    public birthdate: Date;

    // constructor({ name, gender, birthdate }: PersonProps) {
    constructor({ firstName, lastName, gender, birthdate }: PersonProps) {
      // this.name = name;
      this.firstName = firstName;
      this.lastName = lastName;
      this.gender = gender;
      this.birthdate = birthdate;
    }
  }

  //en User no tenemos que hacer ningún cambio gracias al bajo acoplamiento de la clase User
  interface UserProps {
    email: string;
    role: string;
  }
  class User {
    public email: string;
    public role: string;
    private lastAccess: Date;

    constructor({ email, role }: UserProps) {
      this.lastAccess = new Date();
      this.email = email;
      this.role = role;
    }

    checkCredentials() {
      return true;
    }
  }

  //Aqui tampoco hay que hacer nada porque Settings no tiene relación con Person: bajo acoplamiento.
  interface SettingsProps {
    lastFolderOpen: string;
    workingDirectory: string;
  }

  class Settings {
    public workingDirectory: string;
    public lastFolderOpen: string;

    constructor({ workingDirectory, lastFolderOpen }: SettingsProps) {
      this.workingDirectory = workingDirectory;
      this.lastFolderOpen = lastFolderOpen;
    }
  }

  // Nuevo User Settings
  // Aquí si tenemos acoplamiento con Person por lo que se requieren cambios:
  interface UserSettingsProps {
    birthdate: Date;
    email: string;
    gender: Gender;
    lastFolderOpen: string;
    // name: string;
    firstName: string;
    lastName: string;
    role: string;
    workingDirectory: string;
  }

  class UserSettings {
    // constructor(
    //     public person: Person,
    //     public user  : User,
    //     public settings: Settings,
    // ){}
    public person: Person;
    public user: User;
    public settings: Settings;

    constructor({
      // name,
      firstName,
      lastName,
      gender,
      birthdate,
      email,
      role,
      workingDirectory,
      lastFolderOpen,
    }: UserSettingsProps) {
      // this.person = new Person({ name, gender, birthdate });
      this.person = new Person({ firstName, lastName, gender, birthdate });
      this.user = new User({ email, role });
      this.settings = new Settings({ workingDirectory, lastFolderOpen });
    }
  }

  //Ahora realizamos el cambio en la instancia:
  const userSettings = new UserSettings({
    birthdate: new Date("1985-10-21"),
    email: "fernando@google.com",
    gender: "M",
    lastFolderOpen: "/home",
    // name: "Fernando",
    firstName: "Fernando",
    lastName: "Herrera",
    role: "Admin",
    workingDirectory: "/usr/home",
  });

  console.log({
    userSettings,
    credentials: userSettings.user.checkCredentials(),
  });
})();
