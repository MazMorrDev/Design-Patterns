import { DarkButtonConcreteProduct } from "./DarkButtonConcreteProduct.js";
import { DarkCheckboxConcreteProduct } from "./DarkCheckboxConcreteProduct.js";
export class DarkAbstractFactory {
    createButton() {
        return new DarkButtonConcreteProduct();
    }
    createCheckbox() {
        return new DarkCheckboxConcreteProduct();
    }
}
//# sourceMappingURL=DarkAbstractFactory.js.map