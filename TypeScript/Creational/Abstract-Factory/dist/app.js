import { DarkAbstractFactory } from "./DarkAbstractFactory.js";
import { LightAbstractFactory } from "./LightAbstractFactory.js";
function app(factory) {
    const btn = factory.createButton();
    const chk = factory.createCheckbox();
    btn.paint();
    chk.paint();
}
const ui = new LightAbstractFactory();
app(ui);
const uiDark = new DarkAbstractFactory();
app(uiDark);
//# sourceMappingURL=app.js.map