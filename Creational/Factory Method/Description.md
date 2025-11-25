# Factory Method Pattern

## 🔄 How It Works

Delegates object creation to subclasses. A parent class declares the “factory method” (often abstract) and lets each subclass decide which concrete product to instantiate.

## ✅ Pros  

Open/Closed Principle – Add new products without touching existing client code.  

Decoupling – Client code depends on abstractions, not concrete classes.  

Single Responsibility – Creation logic lives in one place per product family.  

Runtime Flexibility – Swap factories (subclasses) to change behavior dynamically.

## ❌ Cons  

More Classes – One extra class per product (concrete creator + concrete product).  

Complexity Overhead – Indirection can feel heavy for simple object creation.  

Discovery Cost – Clients must know which concrete factory to instantiate.  

Parallel Hierarchies – Creator hierarchy mirrors product hierarchy, doubling maintenance.
