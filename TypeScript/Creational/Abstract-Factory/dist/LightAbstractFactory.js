import { LightButtonConcreteProduct } from "./LightButtonConcreteProduct.js";
import { LightCheckboxConcreteProduct } from "./LightCheckboxConcreteProduct.js";
export class LightAbstractFactory {
    createButton() {
        return new LightButtonConcreteProduct();
    }
    createCheckbox() {
        return new LightCheckboxConcreteProduct();
    }
}
//# sourceMappingURL=LightAbstractFactory.js.map