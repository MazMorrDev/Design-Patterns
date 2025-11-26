import type { ButtonAbstractProduct } from "../AbstractProducts/ButtonAbstractProduct.js"
import type { CheckboxAbstractProduct } from "../AbstractProducts/CheckboxAbstractProduct.js"


// Fábrica abstracta que declara métodos para crear productos
export interface GUIAbstractFactory{
  createButton() : ButtonAbstractProduct
  createCheckbox(): CheckboxAbstractProduct
}