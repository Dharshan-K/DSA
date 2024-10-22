#include<iostream>
using namespace std;

// time complexity n*2

void selectionSort(int arr[], int n){
    for(int i =0; i<n-1;i++){
        int minIndex = i;
        for(int j=i+1;j<n;j++){
            if(arr[j]<arr[minIndex]){
                minIndex = j;
            }            
        }
        int temp = arr[i];
        arr[i] = arr[minIndex];
        arr[minIndex] = temp;
    }
}

void bubbleSort(int arr[], int n){
    for(int i = n; i>=0; i--){
        for(int j=0; j<i-1; j++){
            if(arr[j]>arr[j+1]){
                int temp = arr[j];
                arr[j] = arr[j+1];
                arr[j+1] = temp;
            }
        }
    }
}

void insertionSort(int arr[],int n){
    for(int i =0;i<n;i++){
        int j = i;
        while(j>0 && arr[j-1]> arr[j]){
            int temp = arr[j-1];
            arr[j-1] = arr[j];
            arr[j] = temp;
            j--;
        }
    }  
}

// void mergeSort(int arr[], int n){

// }

// void mergeArray(int arr[],int low, int mid,int low){
    
// }

int main(){
    // int arr[] = {13,5,45,99,3,23};
    // int n = 6;
    // for(int i=0;i<n;i++){
    //     cout << arr[i] << " " << endl;
    // }
    // cout << "after sorting" << endl;

    // // selectionSort(arr, n);

    // bubbleSort(arr, n);

    
    // //insertionSort(arr,n);

    // for(int i=0;i<n;i++){
    //     cout << arr[i] << " " << endl;
    // }
    cout << (101<<1);
    return 0;
}