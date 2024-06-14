#include "BisectionMethod.hpp"

// Constructor for the BisectionMethod class
BisectionMethod::BisectionMethod(double tol, int maxIter)
    : tolerance(tol), maxIterations(maxIter), root(0.0) {}

// Method to find the root of the function using the bisection method
double BisectionMethod::findRoot(std::function<double(double)> func, double a, double b)
{
    // Check if the function has different signs at the endpoints a and b
    if (func(a) * func(b) >= 0)
    {
        std::cerr << "Error: The function must have different signs at the endpoints a and b.\n";
        return NAN; // Return NaN if the function does not satisfy the condition
    }

    double c = a; // Initialize c to a
    for (int i = 0; i < maxIterations; ++i)
    {                      // Loop until the maximum number of iterations
        c = (a + b) / 2.0; // Calculate the midpoint
        // Check if the value at c is close enough to zero or if the interval is sufficiently small
        if (std::abs(func(c)) < tolerance || (b - a) / 2.0 < tolerance)
        {
            root = c; // Set the root to the midpoint
            return c; // Return the root
        }

        // Decide which subinterval to keep
        if (func(c) * func(a) > 0)
        {          // If the function has the same sign at a and c
            a = c; // Move the left endpoint to c
        }
        else
        {          // If the function has different signs at a and c
            b = c; // Move the right endpoint to c
        }
    }

    root = c; // Set the root to the midpoint after maxIterations
    return c; // Return the root
}

// Method to print the found root
void BisectionMethod::printRoot() const
{
    std::cout << "Root found: " << root << std::endl;
}
