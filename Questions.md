Simplify the following big O expressions as much as possible:

1. O(n + 10)
O(n)

2. O(100 * n)
O(n)

3. O(25)
O(1)

4. O(n^2 + n^3)
O(n^3)

5. O(n + n + n + n)
O(n)

6. O(1000 * log(n) + n)
O(n)

7. O(1000 * n * log(n) + n)
O(n log n)

8. O(2^n + n^2)
O(2^n)

9. O(5 + 3 + 1)
O(1)

10. O(n + n^(1/2) + n^2 + n * log(n)^10)
O(n^2)


__________________________________________________________________
1. True or false: n^2 + n is O(n^2).
True because it will keep growing

2. True or false: n^2 * n is O(n^3).
True

3. True or false: n^2 + n is O(n).
False it would not be a fixed number

4. What’s the time complexity of the .indexOf array method?
O(n) - fixed number what ever is in indexOf

5. What’s the time complexity of the .includes array method?
O(n) - fixed number what ever is in the array

6. What’s the time complexity of the .forEach array method? 
O(n) - fixed number depending on the comparisons

7. What’s the time complexity of the .sort array method?
O(n log n) - It can rearrange what is in the array

8. What’s the time complexity of the .unshift array method?
O(n) - fixed number for whatever is added to the array

9. What’s the time complexity of the .push array method?
O(1) - not dependent on input size

10. What’s the time complexity of the .splice array method?
O(n) - based on a fixed number whatever is in the array and what we want to cut out or add in

11. What’s the time complexity of the .pop array method?
O(1) - can add to end

12. What’s the time complexity of the Object.keys() function?
O(n) - fixed number. Can have as much keys as you want

13. What’s the space complexity of the Object.keys() function? 
O(n) - fixed number. Can have as much keys as you want