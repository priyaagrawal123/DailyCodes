#include <iostream>
#include "MyComplex.hpp"
using namespace std;
MyComplex::MyComplex()
{
    real = 0;
    img = 0;
}
void MyComplex::print()
{
    cout << real << "+" << img << "i";
}
void MyComplex::add(MyComplex c1, MyComplex c2)
{
    real = c1.real + c2.real;
    img = c1.img + c2.img;
}
