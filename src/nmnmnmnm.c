#include <stdio.h>
int main() {
    int arr[3] = {1, 2, 3};
    int *p = arr + 5;
    printf("%d", *p);
    return 0;
}