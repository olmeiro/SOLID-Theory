//Principio de segregación de interfacez, no muy enfocado en Javascript por ser debilmente tipado, para ello usamos TS.

//como las dos clases implementan los mismos métodos creamos una interfaz
interface Bird {
  fly(): void;
  // fly(): number;
  eat(): void;
  run(): void;
  // swin(): void;
}

class Tucan implements Bird {
  public fly() {}
  public eat() {}
  // public run() {} // Tucan no implementa run lo que viola la interfaz
}

//Colibrí:
class Humminbird implements Bird {
  public fly() {}
  public eat() {}
  public run() {}
}

//Avestruz: para esta ave volar no aplica, pero se ve forzada a implementar el método. Aquí violamos el principio de la segregación de interfaces:
class Ostrich implements Bird {
  public fly() {
    throw new Error("Esta ave no vuela");
    // peor aún es si ahora fly devuelve un número en Bird, nos arrojaría error lo que nos obliga nuevamente a cambiar este método aqui en esta clase.
  }
  public eat() {}
  public run() {}
}

//Pinguino aun que come y corre no vuela, pero adicionalmete debería nadar. esto obliga que agreguemos este método en Bird y ahora nos veríamos forzados a agregarlo también en las otras clases.
class Penguin implements Bird {
  public fly() {
    throw new Error("Esta ave no vuela");
  }
  public eat() {}
  public run() {}
  public swim() {}
}
