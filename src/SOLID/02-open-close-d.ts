import axios from "axios";

// Vamos a desacoplar la dependencia de nuestras clases a axios->

// ahora podemos hacer otros tipos de request diferentes a axios y nuestros servicios seguir trabajando sin modificación alguna.

// export class HttpClient {
//   async get(url: string) {
//     const { data, status } = await axios.get(url);
//     console.log({ status });
//     return { data, status };
//   }
// }
// }

// La parte de cerrado al cambio, se refiere a que con la refactorizacion realizada si necesitas cambiar la libreria (o usar alguna funcion nativa) para hacer las peticiones http ya no es necesario ir a tus clases (PhotosService, PostService, TodoService en el ejemplo) y modificarlo 1 a 1.

// Solo debes hacer la modificacion en la clase HttpClient para hace uso de ello.

//digamos que la app crece mucho y ahora debemos remover axios-> npm uninstall axios. comentamos axios.

// El error sólo aparece en esta clase y no en las demás.
// Cuando dependamos de una libreria de terceros debemos usar una clase adaptadora para que sea fácil hacer cambios a futuro.

// Ahora hacemos los cambios en la forma de como el get trabaja-> hacemos el request ahora con fetch

export class HttpClient {
  //este código funciona pero no hace call
  // async get(url: string) {
  //   return { data: "", status: 500 };
  // }

  async get(url: string) {
    const resp = await fetch(url);
    const data = resp.json();
    return { data: data, status: resp.status };
  }
}
