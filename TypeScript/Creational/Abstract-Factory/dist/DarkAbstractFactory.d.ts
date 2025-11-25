import type { ButtonAbstractProduct } from "./ButtonAbstractProduct.js";
import type { CheckboxAbstractProduct } from "./CheckboxAbstractProduct.js";
import type { GUIAbstractFactory } from "./GUIAbstractFactory.js";
export declare class DarkAbstractFactory implements GUIAbstractFactory {
    createButton(): ButtonAbstractProduct;
    createCheckbox(): CheckboxAbstractProduct;
}
//# sourceMappingURL=DarkAbstractFactory.d.ts.map