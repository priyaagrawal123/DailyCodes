// #include<iostream>
// #include<math.h>
// using namespace std;
// void printMatrix(double **mat,int row ,int col);
// {
// for(int r=0;r<col;r++)
// {
//     for(c=0;c<col;c++)
// cout<<mat[r][c]<<"",
// cout<<endl;
// }
// }

// int main (){
//     string fileName_l="L_3.txt";
//     string fileName_r="R_3.txt";

// }


#include <iostream>
#include <vector>
#include <iomanip>

using namespace std;

// Function to perform Gaussian elimination and print upper triangular
void gaussianEliminationAndPrintUpperTriangular(vector<vector<double>>& matrix) {
    int rows = matrix.size();
    int cols = matrix[0].size();

    for (int i = 0; i < rows; i++) {
        // Find the pivot element
        int maxRow = i;
        for (int k = i + 1; k < rows; k++) {
            if ((matrix[k][i]) > (matrix[maxRow][i])) {
                maxRow = k;
            }
        }

        // Swap the max row with current row (if needed)
        // if (maxRow != i) {
        //     for (int j = i; j <= cols; j++) {
        //         swap(matrix[maxRow][j], matrix[i][j]);
        //     }
        // }

        // Make all rows below this one 0 in current column
        for (int k = i + 1; k < rows; k++) {
            double factor = -matrix[k][i] / matrix[i][i];
            for (int j = i; j <= cols; j++) {
                if (i == j) {
                    matrix[k][j] = 0;
                } else {
                    matrix[k][j] += factor * matrix[i][j];
                }
            }
        }
    }

    // Print the upper triangular portion
    cout << "Upper Triangular Matrix:" << endl;
    for (int i = 0; i < rows; i++) {
        for (int j = 0; j < cols; j++) {
            if (j >= i) {
                cout << setw(5) << matrix[i][j] << " ";
            } else {
                cout << setw(5) << "0 ";
            }
        }
        cout << endl;
    }
}

int main() {
    const int size = 49;
    vector<vector<double>> matrix(size, vector<double>(size + 1));

    // Populate the matrix with random values
    for (int i = 0; i < size; i++) {
        for (int j = 0; j < size + 1; j++) {
            matrix[i][j] = rand() % 100; // Random numbers between 0 and 99
        }
    }

    // Print the original matrix
    cout << "Original Matrix:" << endl;
    for (int i = 0; i < size; i++) {
        for (int j = 0; j < size + 1; j++) {
            cout << setw(5) << matrix[i][j] << " ";
        }
        cout << endl;
    }

    // Perform Gaussian elimination and print upper triangular
    gaussianEliminationAndPrintUpperTriangular(matrix);

    return 0;
}
