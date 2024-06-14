#include "BisectionMethod.hpp"

// Test function for which we want to find the root
double testFunction(double x)
{
    return x * x * x - x - 2; // This is the function f(x) = x^3 - x - 2
}

int main()
{
    double a = 1.0;          // Left endpoint of the interval [a, b]
    double b = 2.0;          // Right endpoint of the interval [a, b]
    double tolerance = 1e-6; // Tolerance for the root-finding method
    int maxIterations = 100; // Maximum number of iterations to perform

    // Create an instance of the BisectionMethod class with the specified tolerance and maximum iterations
    BisectionMethod bisection(tolerance, maxIterations);

    // Find the root of the testFunction within the interval [a, b]
    double root = bisection.findRoot(testFunction, a, b);

    // Check if a valid root was found (i.e., not NaN)
    if (!std::isnan(root))
    {
        // Print the found root
        bisection.printRoot();
    }

    return 0; // Return 0 to indicate successful execution
}
