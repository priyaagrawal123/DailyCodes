#include <iostream>
#include<cstdlib>
using namespace std;
int main(){
    cout<<"Fahranheit:";
     double fahranheit;
    cin>>fahranheit;
    double celcius=(fahranheit-32)/1.8; //(f-32/1.8) is the formula for calculation celcius using fahranheit
    cout<<celcius;


//Find area of circle
    cout<<"Enter radius:";
    double radius;
    cin>>radius;
    double area=3.14*(radius*radius);
    cout<<area;


int number=100000;
short another=number;
cout<<another;

//rand is the function in the cstdlib
int number=rand();
cout<<number;
 return 0;
}
 int srand(5); //seed rand this takes random number 
