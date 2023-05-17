// Tính giá trị trung bình của mảng
export const average = (arr) => {
    const sum = arr.reduce((acc, num) => acc + num, 0);
    return sum / arr.length;
  };
  
  // Sắp xếp mảng theo thứ tự giảm dần
  export const sortDescending = (arr) => {
    return arr.sort((a, b) => b - a);
  };
  
  // Tính tổng các số dương trong mảng
  export const positiveNumbers = (arr) => {
    return arr.filter(num => num > 0).reduce((acc, num) => acc + num, 0);
  };
  
  // Tính tổng các số lẻ trong mảng
  export const oddNumbers = (arr) => {
    return arr.filter(num => num % 2 !== 0).reduce((acc, num) => acc + num, 0);
  };
  
  // Tìm số lớn thứ 2 trong mảng
  export const secondBiggestNum = (arr) => {
    const sortedArr = arr.sort((a, b) => b - a);
    return sortedArr[1];
  }
  
  // Đếm các số chính phương có trong mảng
  export const countSquareNumbers = (arr) => {
    return arr.filter(num => Math.sqrt(num) % 1 === 0).length;
  }
  