import type { ButtonAbstractProduct } from "./ButtonAbstractProduct.js";
import type { CheckboxAbstractProduct } from "./CheckboxAbstractProduct.js";
export interface GUIAbstractFactory {
    createButton(): ButtonAbstractProduct;
    createCheckbox(): CheckboxAbstractProduct;
}
//# sourceMappingURL=GUIAbstractFactory.d.ts.map