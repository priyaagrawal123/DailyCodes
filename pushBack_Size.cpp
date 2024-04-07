#include <iostream>
#include <vector>

using namespace std;

int main()
{
    // Creating a vector

    std::vector<std::string> grocery = {"Apple", "Mango", "Banana", "Watermelon"};

    // using push_back function add some element in the grocery

    grocery.push_back("Priya");
    grocery.push_back("Darshan");

    // print the size of elements

    std::cout << grocery.size();
}