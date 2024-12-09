class Solution {
  /**
   * @param {number[]} nums
   * @return {boolean}
   */

  hasDuplicate(nums) {
    let isTrue = false;
    let numbers = nums;
    numbers.sort(function (a, b) {
      return a - b;
    });

    for (let i = 0; i < nums.length; i++) {
      if (numbers[numbers.length - numbers.length + i] === numbers[i + 1]) {
        isTrue = true;
        break;
      } else {
        isTrue = false;
      }
    }
    return isTrue;
  }
}

/* Attempt with Do While:
  
    hasDuplicate(nums) {
      let counter = 0;
      let numbers = nums;
      let isTrue = false;
      numbers.sort(function (a, b) {
        return a - b;
      });
      if (numbers.length === 0) {
        isTrue = false;
      } else {
        do {
          if (
            numbers[numbers.length - numbers.length + counter] ===
            numbers[counter + 1]
          ) {
            isTrue = true;
            counter++;
            break;
          } else {
            counter++;
            isTrue = false;
          }
        } while (counter < nums.length);
      }
      return isTrue;
    }
  }*/
