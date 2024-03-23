#include <iostream>

int main()
{
    int pin = 0;
    int tries = 0;

    std::cout << "BANK OF DCADEMY: ";
    std::cin >> pin;

    tries++;

    // If password not correct try three times

    while (pin != 5148 && tries < 3)
    {
        std::cout << "Enter your pin: ";
        std::cin >> pin;
        tries++;
    }
    if (pin = 1234)
    {
        std::cout << "Pin Successfull!\n";
        std::cout << "You now have access.\n";
    }
    return 0;
}