#include<stdio.h>

void printArray(int* A,int n){
    for(int i=0;i<n;i++){
        printf("%d");
    }
    printf("\n");
}

void bubblesort(int* A,int n){
    for(int i=0;i<n-1;i++){
        for(int j=0;j<n-1-i;j++){
            if(A[j]>A[j+1]){
            int temp=A[j];
            A[j]=A[j+1];
            A[j+1]=temp;
            }
        }
    };
}

int main(){
    int A[90];
    int n;
    printf("enteelements in array: ");
    scanf("%d",&n);
    printf("enter the elements in array",n);
    for(int i=0;i<n;i++){
       
    scanf("%d",&A[i]);
    }
    printf("array before sorting :");
printArray(A,n);
bubblesort(A,n);
printf("array after sorting :");
printArray(A,n);
return 0;
}


