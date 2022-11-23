//
interface Bird1 {
  eat(): void;

  // fly(): void; //segregamos este método en FlyingBird
  // run(): void;
  // swin(): void;
}

//segregation
interface FlyingBird {
  // fly(): void;
  fly(): number;
}

interface SwimmerBird {
  swim(): void;
}

interface RunningBird {
  run(): void;
}

class Tucan1 implements Bird1, FlyingBird {
  // public fly() {}
  public fly() {
    return 100;
  }
  public eat() {}
}

class Humminbird1 implements Bird1, FlyingBird {
  // public fly() {}
  public fly() {
    return 200;
  }
  public eat() {}
}

//no vuela
class Ostrich1 implements Bird1, RunningBird {
  public eat() {}
  public run() {}
}

//no vuela
class Penguin1 implements Bird1, SwimmerBird, RunningBird {
  public eat() {}
  public run() {}
  public swim() {}
}

//Estos cambios hacen nuestro código más tolerantes al cambio. Por ejemplo si ahora el método fly devuelve un número sólo tendremos que hacer cambios en Tucan1 y Humminbird1.

// ? Extends e Implements aunque parecieran iguales, son muy diferentes....

// * Si usáramos extends: entonces heredamos el comportamiento creado de la clase que extendimos (aunque en este caso es una interfaz) no siempre es el caso, entonces automáticamente tendríamos toda la funcionalidad heredada (que puede ser lo que queiras)

// ! Si usáramos implements: es responsabilidad de la clase que estoy definiendo, implementar TODO lo que estoy queriendo "extender (implementar)"... es decir, YO EN MI NUEVA CLASE tengo que crear la funcionalidad... no se hereda del padre, sólo me obliga a que tengo que crearme los métodos que la clase a implementar requiere.

// * Detectar violaciones ISP
// Si las interfaces que diseñamos nos obligan a violar los principios de responsabilidad única y substitución de Liskov.
