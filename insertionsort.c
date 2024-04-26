#include<stdio.h>

void printArray(int* A,int n)
//int * a is a pointer to the integer
{    
for(int i=0;i<n;i++){
    printf("%d ",A[i]);
}
printf("\n");
}


void insertionsort(int *A,int n){
    int key;int j;
for(int i=1;i<n-1;i++){
    key=A[i];
    j=i-1;

while(j>=0 && A[j]>key){
    A[j+1]=A[j];
    j--;
}
A[j+1]=key;
}
}

int main(){
    int A[]={4,5,2,4,8};

    int n=5;
    printArray(A,n);   //to print array before sorting 
    insertionsort(A,n);    //to work on bubble sort
 printArray(A,n); //to print array after sorting

 return 0;

}