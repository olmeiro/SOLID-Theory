// Hay que agregar la dependencia de axios ```yarn add axios or npm i axios```
import axios from "axios";

// Aquí nuestras clases tienen una fuerte dependencia a axios, además si queremos modificar un método de las clases debemos abrir la clase para modificarla

// Vamos a desacoplar la dependencia de nuestras clases a axios-> vamos al archivo 02-open-close-d.ts y trabajamos estas mismas clases pero aplicando el principio open-close en 02-open-close-c
export class TodoService {
  async getTodoItems() {
    const { data } = await axios.get(
      "https://jsonplaceholder.typicode.com/todos/"
    );
    return data;
  }
}

export class PostService {
  async getPosts() {
    const { data } = await axios.get(
      "https://jsonplaceholder.typicode.com/posts"
    );
    return data;
  }
}

export class PhotosService {
  async getPhotos() {
    const { data } = await axios.get(
      "https://jsonplaceholder.typicode.com/photos"
    );
    return data;
  }
}
