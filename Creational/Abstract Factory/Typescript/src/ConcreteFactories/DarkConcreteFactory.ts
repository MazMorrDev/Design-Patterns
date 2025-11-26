import type { ButtonAbstractProduct } from "../AbstractProducts/ButtonAbstractProduct.js";
import type { CheckboxAbstractProduct } from "../AbstractProducts/CheckboxAbstractProduct.js";
import { DarkButtonConcreteProduct } from "../ConcreteProducts/DarkButtonConcreteProduct.js";
import { DarkCheckboxConcreteProduct } from "../ConcreteProducts/DarkCheckboxConcreteProduct.js";
import type { GUIAbstractFactory } from "../AbstractFactory/GUIAbstractFactory.js";

//Fábrica concreta que implementa los métodos para crear productos Dark
export class DarkAbstractFactory implements GUIAbstractFactory{
  createButton(): ButtonAbstractProduct {
    return new DarkButtonConcreteProduct()
  }
  createCheckbox(): CheckboxAbstractProduct {
    return new DarkCheckboxConcreteProduct()
  }
}