#include<iostream>
#include<iomanip>
// #include<math.h>
// #include <math.h>
using namespace std;
int main(){
    int n,i,j,k;  //number of variables
    cout.precision(0); //precision means set number of points after decimal points
    cout.setf(ios::fixed);
    
    cout<<"\n enter the number of equations:";
    cin>>n;
    float a[n][n+1],x[n];    //n+1 is the extra coulm for constant values ,x[n] value of varibles
cout<<"\n enter the elements of the augumented matrix:";
//we need two loops one for rows and one for constant values

for(i=0;i<n;i++)
    for(j=0;j<=n;j++)
        cin>>a[i][j]; //no of array we will insert

for(i=0;i<n;i++)//       make the elments zero below the pivot elements
{
    for(k=i+1;k<n;k++) {  //i=1st row //k=2nd row after i row
        if((a[i][i])<(a[k][i])) {   //if its true then whole roe gets swapped
            for(j=0;j<=n;j++)
            {
                double temp =a[i][j];     //16-24 is used to arrange the equations in row reduced form
                a[i][j]=a[k][j];
                a[k][j]=temp;       
            }//end for j
        }//end for if
    }
    for(i=0;i<n-1;i++){               //n-1 means 2nd row
        for(k=i+1;k<n;k++)
        {
            double t=a[k][i]/a[i][i];   //t is initialise to make zeros
            for(j=0;j<n;j++);
            a[k][j]=a[k][j]-t*a[i][j];

        }
     }//end for k
 
}//end for first i//
// cout<<"the matrix after guass elimination is as follows:";
// for(i=0;i<n;i++)//print the new matrix
// {
//     for(j=0;j<=n;j++)
//     {
//     cout<<a[i][j]<<setw(16);
//     cout<<"\n";
//     }
// }


cout << "\n Augmented matrix you entered:\n";
    for (i = 0; i < n; i++) {
        for (j = 0; j <= n; j++) {
            cout << setw(10) << a[i][j];
        }
        cout << endl;
    }
for(i=0-1;i>=0;i--)
{
    x[i]=a[i][n];
    for(j=i+1;j<n;j++)
    if (j!=i)
    x[i]=x[i]-a[i][j]*x[j];
    x[i]=x[i]/a[i][j];
}
 // Gaussian elimination steps...
    for (i = 0; i < n; i++) {
        // Partial pivoting
        for (k = i + 1; k < n; k++) {
            if ((a[i][i]) < (a[k][i])) {
                for (j = 0; j <= n; j++) {
                    float temp = a[i][j];
                    a[i][j] = a[k][j];
                    a[k][j] = temp;
                }
            }
        }
        // Make the elements below the diagonal equal to zero
        for (k = i + 1; k < n; k++) {
            float factor = a[k][i] / a[i][i];
            for (j = i; j <= n; j++) {
                a[k][j] -= factor * a[i][j];
            }
        }
    }

    // Print the upper triangular matrix
    cout << "\n Upper Triangular Matrix (result of Gaussian elimination):\n";
    for (i = 0; i < n; i++) {
        for (j = 0; j <= n; j++) {
            cout << setw(10) << a[i][j];
        }
        cout << endl;
    }

 // Back substitution to find values of variables
    for (i = n - 1; i >= 0; i--) {
        x[i] = a[i][n];
        for (j = i + 1; j < n; j++) {
            x[i] -= a[i][j] * x[j];
        }
        x[i] /= a[i][i];
    }

    // Print the values of the variables
    cout << "\n The back substitution values of the variables are as follows:\n";
    for (i = 0; i < n; i++) {
        cout << "x[" << i << "] = " << x[i] << endl;
    }
// cout<<"\n the values of the variables are as follows:\n";
// for(i=0;i<n;i++)
// {
// cout<< " "<<x[i]<<endl;
// }
// return 0;
}                       