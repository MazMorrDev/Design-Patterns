import type { ButtonAbstractProduct } from "../AbstractProducts/ButtonAbstractProduct.js";

// Producto concreto que implementa botón de tipo Dark
export class DarkButtonConcreteProduct implements ButtonAbstractProduct{
  paint(): void {
    console.log("Renderizando un boton oscuro");
  }
}