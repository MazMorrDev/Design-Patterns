import { DarkAbstractFactory } from "./ConcreteFactories/DarkConcreteFactory.js";
import type { GUIAbstractFactory } from "./AbstractFactory/GUIAbstractFactory.js";
import { LightAbstractFactory } from "./ConcreteFactories/LightConcreteFactory.js";

function app(factory: GUIAbstractFactory){
  const btn = factory.createButton()
  const chk = factory.createCheckbox()

  btn.paint()
  chk.paint()
}

// Elegimos tema Light
const ui = new LightAbstractFactory()
app(ui)

// O elegimos tema Dark
const uiDark = new DarkAbstractFactory()
app(uiDark)