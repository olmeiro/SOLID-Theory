import { Tesla, Audi, Toyota, Honda } from "./03-liskov-b";

//este código viola dos principios: el principio de Open and Close y el de sustitución de Liskov:
// todas las clases tienen en común el número de asientos por vehiculo.
//Si queremos aceptar un nuevo vehiculo, tenemos que modificar la función printCarSeats porque nuestra interface se ha modificado.

//Por ejemplo si agregamos un vehiculo Volvo en el archivo b:
// export class Volvo {
//   constructor(private numberOfSeats: number) {}

//   getNumberOfVolvoSeats() {
//     return this.numberOfSeats;
//   }
// }
// luego agregarlo al array:
// const cars = [new Tesla(7), new Audi(2), new Toyota(5), new Honda(5), new Volvo(2)];

// Ahora   printCarSeats(cars); debe marcar error por que la interfaz ya no cumple el contrato.
//Y luego tenemos que modificar la interfaz cars: (Tesla | Audi | Toyota | Honda | Volvo)

//violamos el principio open close porque tenemos que modificar el método printCarSeat para que acepte ahora la nueva instancia Volvo ->
//  if (car instanceof Volvo) {
//    console.log("Volvo", car.getNumberOfHondaSeats());
//    continue;
//  }

//Solución en archivos c y d

(() => {
  const printCarSeats = (cars: (Tesla | Audi | Toyota | Honda)[]) => {
    for (const car of cars) {
      if (car instanceof Tesla) {
        console.log("Tesla", car.getNumberOfTeslaSeats());
        continue;
      }
      if (car instanceof Audi) {
        console.log("Audi", car.getNumberOfAudiSeats());
        continue;
      }
      if (car instanceof Toyota) {
        console.log("Toyota", car.getNumberOfToyotaSeats());
        continue;
      }
      if (car instanceof Honda) {
        console.log("Honda", car.getNumberOfHondaSeats());
        continue;
      }
    }
  };

  const cars = [new Tesla(7), new Audi(2), new Toyota(5), new Honda(5)];

  printCarSeats(cars);
})();
