import type { ButtonAbstractProduct } from "../AbstractProducts/ButtonAbstractProduct.js";
import type { CheckboxAbstractProduct } from "../AbstractProducts/CheckboxAbstractProduct.js";
import type { GUIAbstractFactory } from "../AbstractFactory/GUIAbstractFactory.js";
import { LightButtonConcreteProduct } from "../ConcreteProducts/LightButtonConcreteProduct.js";
import { LightCheckboxConcreteProduct } from "../ConcreteProducts/LightCheckboxConcreteProduct.js";

//Fábrica concreta que implementa los métodos para crear productos Light
export class LightAbstractFactory implements GUIAbstractFactory{
  createButton(): ButtonAbstractProduct {
    return new LightButtonConcreteProduct()
  }
  createCheckbox(): CheckboxAbstractProduct {
   return new LightCheckboxConcreteProduct()
  }
}