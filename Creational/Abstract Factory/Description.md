# Abstract Factory Pattern

## 🔄 How It Works  

Provides an interface for creating **families of related or dependent objects** without specifying their concrete classes. A client uses one abstract factory (and one product family) throughout, switching the whole family by swapping the concrete factory.

## ✅ Pros  

Family Consistency – Guarantees that created objects work together.  

Easy Swap – Change product family at runtime by injecting a different factory.  

Open/Closed – Add new families without touching client code.  

Hidden Details – Client sees only interfaces, never construction logic.

## ❌ Cons  

Complexity Explosion – Interface + concrete factories + product hierarchies = many classes.  

Hard to Extend – Adding a new product requires changing **every** concrete factory.  

Runtime Overhead – Extra indirection and object creation layers.  

Factory Proliferation – One factory per family can clutter the codebase.
