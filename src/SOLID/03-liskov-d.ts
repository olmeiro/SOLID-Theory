//aunque hay carros electricos, queremos enfocarnos en que printSeatCars reciba cualquier vehiculo.

//las clases abstractas sirven para trabajar con la herencia, buscamos que las subclases tengas los métodos que la clase abstracta tenga. son solo para heredar metodos y propiedades.
export abstract class Vehicle {
  // constructor(parameters) {}

  // getNumberOfSeats():number {
  //   throw Error('Method not implemented')
  // } mejor utilizamos métodos abstractos

  abstract getNumberOfSeats(): number;
}

//ahora todas estas clases deben extender de la clase Vehicle:
export class Tesla extends Vehicle {
  constructor(private numberOfSeats: number) {
    super();
  }

  getNumberOfSeats(): number {
    //el heredado por la clase abstracta
    // throw new Error("Method not implemented.");
    return this.numberOfSeats;
  }

  // getNumberOfTeslaSeats() {
  //   //en caso de necesita un método propio de la clase
  //   return this.numberOfSeats;
  // }
}

export class Audi extends Vehicle {
  //ctrl + . -> implemente inherited class

  constructor(private numberOfSeats: number) {
    super(); // ctrl + . -> add missign super call
  }

  getNumberOfSeats(): number {
    // throw new Error("Method not implemented.");
    return this.numberOfSeats;
  }

  // getNumberOfAudiSeats() {
  //   return this.numberOfSeats;
  // }
}

export class Toyota extends Vehicle {
  constructor(private numberOfSeats: number) {
    super();
  }

  getNumberOfSeats(): number {
    return this.numberOfSeats;
  }
}

export class Honda extends Vehicle {
  constructor(private numberOfSeats: number) {
    super();
  }
  getNumberOfSeats(): number {
    return this.numberOfSeats;
  }
}

//ahora podemos agregar los Vehiculos que deseemos:
//Aplicamos el principio de Sustitución de liskov porque nuestra función printCarSeats puede tolerar cualquier clase que sea subclase de Vehicle

export class Volvo extends Vehicle {
  constructor(private numberOfSeats: number) {
    super();
  }
  getNumberOfSeats(): number {
    return this.numberOfSeats;
  }
}

export class Ford extends Vehicle {
  constructor(private numberOfSeats: number) {
    super();
  }
  getNumberOfSeats(): number {
    return this.numberOfSeats;
  }
}
