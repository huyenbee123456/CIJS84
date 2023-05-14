//BT1
function reverseString(str) {
    const [...arr] = str;
    arr.reverse();
    return arr.join('');
  }

  

  //BT2
  function removeDuplicates(arr) {
    return arr.filter((value, index, self) => self.indexOf(value) === index);
  }
  
  const arr2 = [1, 2, 3, 5, 4, 2, 6, 4];
  const result = removeDuplicates(arr2);
  console.log(result); 

  //BT3
  function findMostFrequent(arr3) {
    const mostFrequent = arr3.reduce((acc3, count1) => {
      if (typeof acc3[count1] == 'undefined') {
        acc3[count1] = 1;
      } else {
        acc3[count1]++;
      }
      
      return acc3;
    }, {});
    
    const maxCount = Math.max(...Object.values(mostFrequent));
    const mostFrequentItem = Object.keys(mostFrequent).find(key => mostFrequent[key] === maxCount);
    
    return {
      value: parseInt(mostFrequentItem),
      count: maxCount
    };
  }
  
  const arr3 = [1, 2, 3, 5, 6, 4, 2, 1, 6, 3, 5, 3];
  const mostFrequent = findMostFrequent(arr3);
  console.log(mostFrequent); 
  
  