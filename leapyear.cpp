/*Let’s try a challenging problem that will put all your brain cells to the test.

Write a leap_year.cpp program that:

1)Takes a year as input.
2)Checks to see if the year is a four-digit number.
3)Displays whether or not the year falls on a leap year.

There are 3 criteria that must be taken into account to identify a leap year:
a)If the year can be evenly divided by 4 then it is a leap year, however…
b)If that year can be evenly divided by 100, and it is not evenly divided by 400, then it is NOT a leap year.
c)If that year is evenly divisible by 400, then it is a leap year.

Take some time to research and brainstorm before starting to write the code! */

#include <iostream>

bool isLeapYear(int year) {
    // A leap year is divisible by 4
    // But if it's divisible by 100, it must also be divisible by 400 to be a leap year
    return (year % 4 == 0 && year % 100 != 0) || (year % 400 == 0);
}

int main() {
    int year;
    std::cout << "Enter a year: ";
    std::cin >> year;

    if (isLeapYear(year)) {
        std::cout << year << " is a leap year." << std::endl;
    } else {
        std::cout << year << " is not a leap year." << std::endl;
    }

    return 0;
}
