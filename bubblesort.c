#include<stdio.h>

void printArray(int* A,int n)
//int * a is a pointer to the integer
{    
for(int i=0;i<n;i++){
    printf("%d ",A[i]);
}
printf("\n");
}
void bubblesort(int n,int* A){

for(int i=0;i<n-1;i++){
for(int j=0;j<n-1-i;j++){
    if(A[j]>A[j+1]){
       int temp=A[j];
        A[j]=A[j+1];
        A[j+1]=temp;
    }
}
}
}
int main(){
    int A[]={12,22,34,12,67};

    int n=5;
    printArray(A,n);   //to print array before sorting 
    bubblesort(n,A);    //to work on bubble sort
 printArray(A,n); //to print array after sorting

 return 0;

}