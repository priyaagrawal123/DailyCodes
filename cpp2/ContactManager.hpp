#include <bits/stdc++.h>

typedef struct
{
    std::string name;
    std::string email;
    std::string title;
    unsigned long number;
} info;

class ContactManager
{
public:
    std::vector<info> data;

    // Constructor
    ContactManager();

    // Member functions

    void add(unsigned long, std::string, std::string, std::string);
    void edit(); // accept details from user

    void list();

    // function to edit details

    void edit();
    void editPhoneNumber();
    void editName();
    void editEmail();

    // delete user from system

    void removeUser();
    void removeUserName();
    void removeUserNumber();
    void removeUserEmail();

    void searchName();
    void searchNumber();
    void searchEmail();

    void backUp();
    void restore();
};
