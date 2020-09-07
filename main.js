const myArr = [4, 5, 2, 25];
const myArr2 = [13, 7, 6, 12];

function nextGreater(anArr) {
  const result = Array(anArr.length).fill(-1);
  const stack = [];

  for (let i = 0; i < anArr.length; i++) {
    let curNum = anArr[i];
    let j = stack.length - 1;

    while (j >= 0) {
      let prevIdx = stack[j];

      if (curNum > anArr[prevIdx]) {
        result[prevIdx] = curNum;
        j--;
        stack.pop();
      } else break;
    }
    stack.push(i);
  }
  return result;
}

console.log(nextGreater(myArr2));

// function nextGreater(anArr) {
//   const result = Array(anArr.length).fill(-1);
//   const stack = [];

//   for (let i = 0; i < anArr.length; i++) {
//     let curNum = anArr[i];
//     // get index of last num in the stack
//     let j = stack.length -1;

//     // run until isn't empty or current number is less then previous
//     while(j >= 0) {
//       let prevIdx = stack[j];

//       // check if current number is greater
//       if(curNum > anArr[prevIdx]) {
//         // if yes, make all previous = current
//         result[prevIdx] = curNum;
//         j--;
//         // unwind the stack
//         stack.pop();
//       }
//       // otherwise exit while loop and push index if curNum to stack
//       // that means curNum < any number before in array
//       else break;
//     }
//     stack.push(i);
//   }
//   return result;
// }

// nextGreater(myArr2)
