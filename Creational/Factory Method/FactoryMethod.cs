// 1. Product Interface - Defines the contract that all database connections must implement
public interface IDatabaseConnection
{
    void Connect();
}

// 2. Concrete Product Implementations - Actual database connection classes that implement the interface
public class PostgresqlConnection : IDatabaseConnection
{
    public void Connect() =>
        Console.WriteLine("You have been made the connection to the Postgres DB");
}

public class MysqlConnection : IDatabaseConnection
{
    public void Connect() =>
        Console.WriteLine("You have been made the connection to the Mysql DB");
}

// 3. Abstract Factory Class - Declares the factory method that subclasses will implement
public abstract class DatabaseConnectionFactory
{
    // Factory Method - Subclasses will override this to create specific connection types
    public abstract IDatabaseConnection CreateConnection();
}

// 4. Concrete Factory Classes - Implement the factory method to create specific products
public class PostgresqlConnectionFactory : DatabaseConnectionFactory
{
    // Creates and returns a PostgreSQL connection instance
    public override IDatabaseConnection CreateConnection() =>
        new PostgresqlConnection();
}

public class MysqlConnectionFactory : DatabaseConnectionFactory
{
    // Creates and returns a MySQL connection instance
    public override IDatabaseConnection CreateConnection() =>
        new MysqlConnection();
}

// 5. Client Code - Uses the factory to create objects without knowing the concrete classes
public class Program
{
    public static void Main(string[] args)
    {
        DatabaseConnectionFactory factory;
        
        // Determine which factory to use based on user input or condition
        string input = Console.ReadLine();
        
        // Factory selection logic - decides which concrete factory to instantiate
        if (!string.IsNullOrEmpty(input) && input.ToLower() == "postgres")
        {
            factory = new PostgresqlConnectionFactory();
        }
        else
        {
            factory = new MysqlConnectionFactory();
        }
        
        // Use the factory to create the appropriate database connection
        // Client code depends on abstraction (factory) not concrete implementations
        IDatabaseConnection connection = factory.CreateConnection();
        
        // Use the created connection object
        connection.Connect();
    }
}