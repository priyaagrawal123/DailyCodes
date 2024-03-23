/*Little Mac is an interplanetary space boxer, who is trying to win championship belts for various weight categories on other planets within the solar system.

Write a space.cpp program that helps him keep track of his target weight by:

It should ask him what his earth weight is.
Ask him to enter a number for the planet he wants to fight on.
It should then compute his weight on the destination planet.
#	    Planet	      Relative Gravity
1	    Mercury	          0.38
2	    Venus	          0.91
3	    Mars	          0.38
4	    Jupiter	          2.34
5	    Saturn	          1.06
6	    Uranus	          0.92
7	    Neptune	          1.19*/

#include <iostream>

int main()
{

    int weight;

    std::cout << "Enter the Value: ";
    std::cin >> weight;

    switch (weight)
    {
    case 1:
        std::cout << "Mercury";

        break;
    case 2:
        std::cout << "Venus";
        break;
    case 3:
        std::cout << "Mars";
        break;
    case 4:
        std::cout << "Jupyter";
        break;
    case 5:
        std::cout << "Saturn";
        break;
    case 6:
        std::cout << "Uranus";
        break;
    case 7:
        std::cout << "Neptune";
        break;
    default:
        break;
    }
}