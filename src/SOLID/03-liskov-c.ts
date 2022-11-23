import {
  Tesla,
  Audi,
  Toyota,
  Honda,
  Vehicle,
  Volvo,
  Ford,
} from "./03-liskov-d";

//Solución aplicando los principios de OCP y LSP:
//Cambiamos la interfaz a Vehicle. lo que nos obliga a cambiar el método en printCarSeats (deuda técnica)
(() => {
  //aunque aplicamos liskov estamos violando open-close porque aún modificamos la función printCarSeats cada vez que agregamos una nueva clase de vehiculo
  const printCarSeats = (cars: Vehicle[]) => {
    // for (const car of cars) {
    //   if (car instanceof Tesla) {
    //     // console.log("Tesla", car.getNumberOfTeslaSeats());
    //     console.log("Tesla", car.getNumberOfSeats());
    //     continue;
    //   }
    //   if (car instanceof Audi) {
    //     console.log("Audi", car.getNumberOfSeats());
    //     continue;
    //   }
    //   if (car instanceof Toyota) {
    //     console.log("Toyota", car.getNumberOfSeats());
    //     continue;
    //   }
    //   if (car instanceof Honda) {
    //     console.log("Honda", car.getNumberOfSeats());
    //     continue;
    //   }
    //   if (car instanceof Volvo) {
    //     console.log("Volvo", car.getNumberOfSeats());
    //     continue;
    //   }
    // }

    //Aplicando principio de open-close ->
    cars.forEach((car) => {
      console.log(car.constructor.name, car.getNumberOfSeats());
    });
  };

  const cars = [
    new Tesla(7),
    new Audi(2),
    new Toyota(5),
    new Honda(5),
    new Volvo(2),
    new Ford(4),
  ];

  printCarSeats(cars);
})();
