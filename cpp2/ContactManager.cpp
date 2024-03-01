#include<bits/stdc++.h>
#include"ContactManager.hpp";
// #include<iostream>

using namespace std;
int main (){
ContactManager::ContactManager()
{
    firstName="priya";
    lastName="Agrawal";
    email="priya@gmail.com";
number=8975766502;
}

ContactManager::ContactManager(const string firstName,string lastName,string email,unsigned long int)
{
    this->firstName=firstName;
    this->lastName=lastName;
    this->email=email;
    this->number=number;
}
void ContactManager::displayContactManager()const
{
    std::cout<<"\n firstName::"<<lastName<<"\t lastName"<<email<<"\t email"<<number<<"\t number";
    }
}
// #include "contactManager.hpp";

// using namespace std;

// ContactM::ContactM()
// {

// }



// void ContactM::addContact(string firstName, string lastName, long long int);
// {
// struct data temp;

// temp.firstName = firstName;

// temp.lastName = lastName,

// temp.phoneNumber = phoneNumber;

// temp.email email;

// info.push_back(temp);

// }
// void ContactM::addContact()


// {



// }

// {


// °F Sunny

// struct data temp;

// cout << "Enter first name: ";

// cin >> temp.firstName;

// cout << "Enter last name: ";

// cin >> temp.lastName;

// cout << "Enter phone number: ";

// cin >> temp.phoneNumber;

// cout << "Enter email: ";

// cin >> temp.email;


// }


// {






// }


// }

// R



// info.push_back(temp);