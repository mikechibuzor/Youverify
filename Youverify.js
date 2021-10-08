class Youverify {
  static isUnique(string) {
    //   split and store the string into an array
    const splitString = string.split("");
    // default value of unique
    let unique = "is unique";

    // use a nested loop to compare each characters in splitString
    for (let i = 0; i < splitString.length; i++) {
      for (let j = i + 1; j < splitString.length; j++) {
        if (splitString[i] === splitString[j]) {
          // changes when at least one character is not unique
          unique = "is not unique";
        }
      }
    }
    console.log(`The characters in -${string}- ${unique}`);
  }

  static checkPermutation(firstString, secondString) {
    //   remove empty spaces from strings
    const s1 = firstString.trim().replaceAll(" ", "");
    const s2 = secondString.trim().replaceAll(" ", "");

    //   get the lengths of both strings
    const string1 = s1.length;
    const string2 = s2.length;

    // compare lengths
    if (string1 !== string2) {
      console.log(
        `${firstString} and ${secondString} are not a permutation of each other`
      );
      return;
    }

    // change to lowercase,  split and sort both strings
    const sortedString1 = s1.toLowerCase().split("").sort();
    const sortedString2 = s2.toLowerCase().split("").sort();

    // compare sorted strings
    for (let i = 0; i < string2; i++) {
      if (sortedString1[i] !== sortedString2[i]) {
        console.log(
          `${firstString} and ${secondString} are not a permutation of each other`
        );
        return;
      }
    }

    // This will be printed only when both strings are a permutation of each other
    console.log(
      `${firstString} and ${secondString} are a permutation of each other`
    );
  }

  static URLify(string) {
    const urlify = string.trim().replaceAll(" ", "%20");
    console.log(urlify);
  }

  static palindromePermutation(string) {
    //   change string to lowercase, and remove empty spaces
    const originalString = string.toLowerCase().trim().replaceAll(" ", "");

    //   First check if string is a palindrome
    const splitString = originalString.split("");
    const reversedString = splitString.reverse().join("");

    console.log(originalString, reversedString);

    if (reversedString !== originalString) {
      console.log(
        `${string} is not a palindrome, so it can't be a palindrome permutation`
      );
      return;
    }

    // Now check if the reversed string is a permutation of the original string
    Youverify.checkPermutation(reversedString, originalString);
  }

  static stringCompression(string = "") {
    let result = "";
    let count = 1;
    for (let i = 0; i < string.length; i++) {
      let current = string[i];
      let next = string[i + 1];
      if (current === next) {
        count++;
      } else {
        result += current + String(count);
        count = 1;
      }
    }
    const displayResult = result.length < string.length ? result : string;
    console.log(displayResult);
  }
}

Youverify.isUnique("tunmise");
Youverify.checkPermutation("C A T ", "T Ac");
Youverify.URLify("Mr John Smith ");
Youverify.palindromePermutation("Tact Coa");
Youverify.stringCompression("aabcccccaaa");
