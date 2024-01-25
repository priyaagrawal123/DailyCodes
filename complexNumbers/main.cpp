#include <iostream>
#include "MyComplex.hpp"
using namespace std;
int main()
{

    MyComplex c1, c2, c3;
    c1.print();
    c1.real = 10;
    c2.img = 5;
    cout << endl;
    c1.print();
    cout << endl;

    c2.real = 2;
    c3.img = 3;
    cout << endl;
    c2.print();
    cout << endl;

    c3.print();
    cout << endl;
    c3.add(c1, c2);
    c3.print();
    cout << endl;
}
