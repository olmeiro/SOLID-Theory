// import axios from "axios";

import { HttpClient } from "./02-open-close-d";

// Vamos a desacoplar la dependencia de nuestras clases a axios-> vamos al archivo 02-open-close-d.ts y trabajamos estas mismas clases pero aplicando el principio open-close en 02-open-close-c

export class TodoService {
  constructor(private http: HttpClient) {}

  async getTodoItems() {
    const { data, status } = await this.http.get(
      "https://jsonplaceholder.typicode.com/todos/"
    );
    console.log("status: ", status);
    return data;
  }
}

export class PostService {
  constructor(private http: HttpClient) {}

  async getPosts() {
    const { data } = await this.http.get(
      "https://jsonplaceholder.typicode.com/posts"
    );
    return data;
  }
}

export class PhotosService {
  constructor(private http: HttpClient) {}

  async getPhotos() {
    const { data } = await this.http.get(
      "https://jsonplaceholder.typicode.com/photos"
    );
    return data;
  }
}
