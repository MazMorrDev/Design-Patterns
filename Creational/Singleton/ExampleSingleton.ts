export class ExampleSingleton{

  // Instancia estática de la misma clase
  private static instance: ExampleSingleton;

  // Constructor privado de la clase
  private constructor(){
    console.log("Instancia creada");
  }

  // Método que controla el acceso a la instancia
  public static getInstance() : ExampleSingleton{
    if(!ExampleSingleton.instance){
      ExampleSingleton.instance = new ExampleSingleton();
    }

    return ExampleSingleton.instance
  }

  // Método de clase
  public saludar(): void{
    console.log("Hola soy un Singleton");
  }
}

const s1 = ExampleSingleton.getInstance()

const s2 = ExampleSingleton.getInstance()

s1.saludar()

// true → Ambas referencian al mismo objeto
console.log(s1 === s2);