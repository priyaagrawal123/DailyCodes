// class is a template
class MyComplex
{
public:
  double real;
  double img;
  // default constructor
  MyComplex();
  // fuction to print complex numbers
  void print();
  void add(MyComplex, MyComplex);
  void sub(MyComplex, MyComplex);
  void mul(MyComplex, MyComplex);
  void div(MyComplex, MyComplex);
  void norm(MyComplex);
  void complexConjugate();
};