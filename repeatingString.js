/*
Lilah has a string, s, of lowercase English letters that she repeated infinitely many times.

Given an integer, n, find and print the number of letter a's in the first  letters of Lilah's infinite string.

For example, if the string s = 'abacac' and n=10, the substring we consider is abacacabacac, the first 10 characters of her infinite string. There are 4 occurrences of a in the substring.

Function Description

Complete the repeatedString function in the editor below. It should return an integer representing the number of occurrences of a in the prefix of length  in the infinitely repeating string.

repeatedString has the following parameter(s):

s: a string to repeat
n: the number of characters to consider
Input Format

The first line contains a single string,s .
The second line contains an integer, n.


*/



function repeatedString(s, n) {
    let times = Math.floor(n / s.split("").length);
    let end = s.slice(0, n % s.split("").length);
    let a = 0;
    let a1 = 0;

    s.split("").forEach(el => {
        if (el === "a") {
            a++
            console.log(el);
        }
    });


    end.split("").forEach(el => {
        if (el === "a") {
            a1++
        }
    });

    return (a * times) + a1;
}
