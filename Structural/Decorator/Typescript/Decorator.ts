// Componente
interface Coffee{
  cost(): number
  description(): string
}

// Componente concreto
class SimpleCoffee implements Coffee{
  cost(): number {
   return 5
  }
  description(): string {
    return 'Café simple'
  }
}

// Decorador base
class CoffeeDecorator implements Coffee{

  protected coffee: Coffee

  constructor(coffee: Coffee){
    this.coffee = coffee
  }

  cost(): number {
   return this.coffee.cost()
  }
  description(): string {
    return this.coffee.description()
  }
}

// Decorador concreto para café con leche
class MilkDecorator extends CoffeeDecorator{
  cost(): number {
    return super.cost() + 5
  }

  description(): string {
    return super.description() + ', con leche'
  }
}

// Decorador concreto para café con azúcar
class SugarDecorator extends CoffeeDecorator{
  cost(): number {
    return super.cost() + 1
  }

  description(): string {
    return super.description() + ', con azucar'
  }
}

// Uso
let coffee = new SimpleCoffee()

console.log(coffee.description(), coffee.cost());

coffee = new MilkDecorator(coffee)
console.log(coffee.description(), coffee.cost());


coffee = new SugarDecorator(coffee)
console.log(coffee.description(), coffee.cost());
