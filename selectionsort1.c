#include<stdio.h>
void printArray(int *A,int n){
for(int i=0;i<n;i++){
    printf("%d\n",A[i]);

}
printf("\n");
}
void selectionsort(int *A,int n ){
    int indexOfMin;
    for(int i=0;i<n-1;i++){
        indexOfMin=i;
for (int j=i+1;j<n;j++){
    if(A[j]<A[indexOfMin]){
    indexOfMin=j;
}
    }
   int temp=A[i];
    A[i]=A[indexOfMin];
    A[indexOfMin]=temp;
}
}
int main(){
   int n=5;
  
   printf("enter the number of elements");
   scanf("%d",&n);
   int A[n];
printf("enter %d elements",n);
for(int i=0;i<n;i++){
scanf("%d\n",&A[i]);
}
// Input Array (There will be total n-1 passes. 5-1 = 4 in this case!)
    //  00  01  02  03  04
    // |03, 05, 02, 13, 12

    // After first pass
    //  00  01  02  03  04
    //  02,|05, 03, 13, 12

    // After second pass
    // 00  01  02  03  04
    // 02, 03,|05, 13, 12

    // After third pass
    // 00  01  02  03  04
    // 02, 03, 05,|13, 12

    // After fourth pass
    // 00  01  02  03  04
    // 02, 03, 05, 12,|13

   
    printArray(A,n);   //to print array before sorting 
    selectionsort(A,n);    //to work on bubble sort
 printArray(A,n); //to print array after sorting

 return 0;

}