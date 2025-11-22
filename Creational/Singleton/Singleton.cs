public class PointsCalculator
{
    // 1. Single Instance - must be static and readonly
    private readonly static PointsCalculator _instance;

    // 2. Property to access to the instance
    public static PointsCalculator Instance
    {
        get
        {
            _instance ??= new PointsCalculator();
            return _instance;
        }
    }

    // 3. Property for the points
    public int Points { get; private set; } = 0;

    // 4. Private Constructor - esencial for Singleton Pattern
    private PointsCalculator(){}

    // 5. Method to gain points
    public void GainPoint()
    {
        Points++;
        Console.WriteLine($"¡Gain Point! Total: {Points}");
    }
}

public class Program
{
    public static void Main(string[] args)
    {
        Console.WriteLine("SINGLETON PATTERN DEMOSTRATION");

        // Try to create instances directly will cause compiler errors
        // PointsCalculator calc = new PointsCalculator(); // ❌ ERROR - private constructor

        // Obtain the Singleton instance
        PointsCalculator calculator1 = PointsCalculator.Instance;
        PointsCalculator calculator2 = PointsCalculator.Instance;

        // Verify that both variables are aiming to the same instance
        Console.WriteLine($"¿Misma instancia? {calculator1 == calculator2}");

        // Use the methods
        calculator1.GainPoint();  // Points: 1
        calculator2.GainPoint();  // Points: 2 (same instance)
    }
}
