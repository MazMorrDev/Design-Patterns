import { ExampleSingleton } from "./ExampleSingleton.js";

const s1 = ExampleSingleton.getInstance()

const s2 = ExampleSingleton.getInstance()

s1.saludar()

// true → Ambas referencian al mismo objeto
console.log(s1 === s2);