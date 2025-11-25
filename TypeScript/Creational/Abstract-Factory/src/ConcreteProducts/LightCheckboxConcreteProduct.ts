import type { CheckboxAbstractProduct } from "../AbstractProducts/CheckboxAbstractProduct.js";

// Producto concreto que implementa checkbox de tipo Light
export class LightCheckboxConcreteProduct implements CheckboxAbstractProduct{
  paint(): void {
    console.log("Renderizando un checkbox claro");
  }
}