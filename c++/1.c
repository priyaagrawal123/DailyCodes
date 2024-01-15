#include <stdio.h>

int factorial(int n)
{
    int fact=1;
    if(n==1|| n==0)
    return fact;
    else{
        for(int i=1;i<=n;i++)
    
    {
        fact*=i;
    }
    }
    return fact;
}
int main()
{
    int n,ans;
    printf("/nenter n:");
    scanf("%d",&n);
    ans=factorial(n);
    printf("output:%d",ans);
    return 0;
}