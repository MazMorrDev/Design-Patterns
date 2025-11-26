import type { ButtonAbstractProduct } from "../AbstractProducts/ButtonAbstractProduct.js";

// Producto concreto que implementa botón de tipo Light
export class LightButtonConcreteProduct implements ButtonAbstractProduct{
  paint(): void {
   console.log("Renderizando botón claro");
  }

}