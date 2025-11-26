import type { CheckboxAbstractProduct } from "../AbstractProducts/CheckboxAbstractProduct.js";

// Producto concreto que implementa checkbox de tipo Dark
export class DarkCheckboxConcreteProduct implements CheckboxAbstractProduct{
  paint(): void{
    console.log("Renderizando checkbox oscuro");
  }
}