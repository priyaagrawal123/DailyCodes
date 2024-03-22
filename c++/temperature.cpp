#include<iostream>

int main(){

// declare and intilization

// double tempf = 29.5;
// double tempc = (tempf - 32) / 1.8;

// std::cout << "The temp is " << tempc << " degrees Celsius.\n";

double tempf;
double tempc;

// Ask the user

std::cout << "Enter the temperature in Fahrenheit";
std::cin >> tempf ;


 tempc = (tempf - 32) / 1.8;
std::cout << "The temp is " << tempc << " degrees Celsius.\n";
return 0;

}