// Estrategia
 interface Strategy{
   execute(): void
}

// Estrategia concreta Saludo formal
class SaludoFormal implements Strategy{
  execute(): void {
    console.log("Hola muy buenos dias, mucho gusto");
  }
}

// Estrategia concreta Saludo informal
class SaludoInformal implements Strategy{
  execute(): void {
    console.log("Hablate mi chino");
  }
}

// Estrategia concreta Saludo motivacional
class SaludoMotivacional implements Strategy{
  execute(): void {
    console.log("Guapea que tu puedes con to'");
  }
}

// Contexto
 class Persona{
  constructor(private strategy: Strategy){}

  setStrategy(strategy: Strategy): void{
    this.strategy = strategy
  }

  saludar(): void{
    this.strategy.execute()
  }
}

// Uso
const persona = new Persona(new SaludoFormal())
persona.saludar()

persona.setStrategy(new SaludoInformal)
persona.saludar()

persona.setStrategy(new SaludoMotivacional)
persona.saludar()