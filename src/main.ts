import "./style.css";

// import "./clean-code/07-tarea-SingleResponsability-solution";
// import "./code-smell/02-high-coupling";
// import "./code-smell/02-low-coupling";

// SOLID:
// import "./SOLID/01-sin-srp";
// import "./SOLID/01-con-srp";
// import "./SOLID/02-open-close-a";
// import "./SOLID/03-liskov-a";
import "./SOLID/03-liskov-c";

const app = document.querySelector<HTMLDivElement>("#app")!;

app.innerHTML = `
  <h1>CleanCode y SOLID</h1>
  <span>Revisar la consola de JavaScript</span>
`;
