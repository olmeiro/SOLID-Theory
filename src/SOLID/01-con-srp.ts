(() => {
  interface Product {
    id: number;
    name: string;
  }

  //Aqui trabajaremos todo lo relacionado a los request de data:
  class ProductService {
    // private httpAdapter: Object;

    getProduct(id: number) {
      console.log("Producto:", { id, name: "OLED Tv" });
    }

    saveProduct(product: Product) {
      console.log("Guardando en base de datos", product);
    }
  }

  //Mailer se va encargar de manejar todo lo relacionado con emails:
  class Mailer {
    private email: string = "fernando@google.com";

    sendEmail(emailList: string[], template: "to-clients" | "to-admins") {
      console.log("Enviando correo a los clientes", template);
    }
  }

  // Usualmente, esto es una clase para controlar la vista que es desplegada al usuario
  // Recuerden que podemos tener muchas vistas que realicen este mismo trabajo.
  class ProductBloc {
    // loadProduct(id: number) {
    //   // Realiza un proceso para obtener el producto y retornarlo
    //   console.log("Producto: ", { id, name: "OLED Tv" });
    // } esta parte mejor la delegamos a ProductService
    // saveProduct(product: Product) {
    //   // Realiza una petición para salvar en base de datos
    //   console.log("Guardando en base de datos", product);
    // }
    // notifyClients() {
    //   console.log("Enviando correo a los clientes");
    // } esto queda delegado en Mailer
    // onAddToCart(productId: number) {
    //   // Agregar al carrito de compras
    //   console.log("Agregando al carrito ", productId);
    // } este método no tiene sentido en esta clase

    private productService: ProductService;
    private mailer: Mailer;

    constructor(productService: ProductService, mailer: Mailer) {
      this.productService = productService;
      this.mailer = mailer;
    }

    loadProduct(id: number) {
      this.productService.getProduct(id);
    }

    saveProduct(product: Product) {
      this.productService.saveProduct(product);
    }

    notifyClients() {
      this.mailer.sendEmail(["decode@gmail.com"], "to-clients");
    }
  }

  class CartBloc {
    private itemsInCart: Object[] = [];

    addToCar(productId: number) {
      console.log("Agregando al carrito: ", productId);
    }
  }

  const productService = new ProductService();
  const mailer = new Mailer();

  const productBloc = new ProductBloc(productService, mailer);
  const cartBloc = new CartBloc();

  productBloc.loadProduct(10);
  productBloc.saveProduct({ id: 10, name: "OLED TV" });
  productBloc.notifyClients();
  cartBloc.addToCar(10);
})();
