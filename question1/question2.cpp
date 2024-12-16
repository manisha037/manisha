#include <iostream>
#include <vector>
#include <algorithm>


using namespace std;

bool isPrime(int n) {
    if (n <= 1) {
        return false;
    }
    for (int i = 2; i * i <= n; i++) {
        if (n % i == 0) {
            return false;
        }
    }
    return true;
}

int main() {
    vector<int> arr = {1,6,4,13,9,3}; 

    int largestPrime = -1;
    int smallestPrime = INT_MAX;

    vector<int> primes;
    
    for (int num : arr) {
        if (isPrime(num)) {
            primes.push_back(num);
            largestPrime = max(largestPrime, num);
            smallestPrime = min(smallestPrime, num);
        }
    }

    vector<int> nonPrimes;
    for (int num : arr) {
        if (!isPrime(num)) {
            nonPrimes.push_back(num);
        }
    }

   
    sort(nonPrimes.begin(), nonPrimes.end(), greater<int>());

    arr.clear(); 

   
    if (largestPrime != -1) {
        arr.push_back(largestPrime);
    }

   
    for (int num : nonPrimes) {
        arr.push_back(num);
    }

  
    for (int prime : primes) {
        if (prime != largestPrime && prime != smallestPrime) {
            arr.push_back(prime);
        }
    }

   
    if (smallestPrime != INT_MAX) {
        arr.push_back(smallestPrime);
    }

   
    for (int num : arr) {
        cout << num << " ";
    }
    cout << endl;

    return 0;
}
