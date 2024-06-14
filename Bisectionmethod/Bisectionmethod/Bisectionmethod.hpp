#ifndef BISECTIONMETHOD_HPP
#define BISECTIONMETHOD_HPP

#include <functional>
#include <iostream>
#include <cmath>

// Declaration of the BisectionMethod class
class BisectionMethod
{
public:
    // Constructor: initializes tolerance and maximum iterations
    BisectionMethod(double tol, int maxIter);

    // Method to find the root of a function within a given interval [a, b]
    double findRoot(std::function<double(double)> func, double a, double b);

    // Method to print the found root
    void printRoot() const;

private:
    double tolerance;  // The tolerance for the root finding method
    int maxIterations; // The maximum number of iterations to perform
    double root;       // The root found by the bisection method
};

#endif // BISECTIONMETHOD_HPP
