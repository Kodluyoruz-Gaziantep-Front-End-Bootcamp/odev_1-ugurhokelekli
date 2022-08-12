let arr1 = ["2", "a", "3", 3, 4, 3, 5, 5];
let arr2 = ["c", "c", "h", 1, 1, 1, 4];
let arr3 = [
  { name: "ali", id: 221 },
  { name: "veli", id: 343 },
  { name: "konya", id: 333 },
  { name: "ali", id: 664 },
  { name: "selim", id: 112 },
];
let arr4 = [1, 1, 1, 4, 5, 5, 3, 2];
/* 
1- arr1 başına 'a' elemanını ekleyiniz
2- arr1 sonuna 6 elemanını ekleyiniz
3- arr1 sonundaki elemanı siliniz
4- arr1 başındaki elemanı siliniz
5- arr1 ile arr2 arraylerini iki farklı yöntemle birleştiriniz
6- kendisine gönderilen arrayde verilen elemanın olup olmadığını bulan array ve 
    aranan eleman olmak üzere iki parametre alan ve geriye boolean değer döndüren bir fonksiyon yazınız
    ve bu fonkisiyona arr2 ve 'h' parametresini verip çağırınız
7- arr2 içindeki 'h' elemanın indexsini bulunuz
8- arr2 nin eleman sayısını 3 adete 2 faklı yöntemle düşrünüz
9- kendisine verilecek array elemanlarını döngü ile dönüp, array içindeki number
    değerlerinin toplamını geriye dönen bir fonkiyon yazınız ve arr1 değeri ile çağırınız   
10- arr1 elemanlarını string değere çeviren bir map fonksiyonu yazınız    
11- arr3 içindeki id değeri 221 olan elemanı bulunuz
12- arr3 içindeki user değerleri ali olan elemanları bulunuz
13- arr3 içindeki elemanlarının id değerlerinin toplamlarını bulan bir reduce fonsiyonu yazınız

her sorunun cevabını console.log ile yazıdırın
*/

/***************** SORU 1 *****************/
arr1.unshift("a");
console.log(arr1);

/***************** SORU 2 *****************/
arr1.push(6);
console.log(arr1);

/***************** SORU 3 *****************/
arr1.pop();
console.log(arr1);

/***************** SORU 4 *****************/
arr1.shift();
console.log(arr1);

/***************** SORU 5 *****************/
// 1. Yöntem
let arr5 = arr1.concat(arr2);
console.log(arr5);

// 2. Yöntem
let arr6 = [...arr1, ...arr2];
console.log(arr6);

/***************** SORU 6 *****************/
const isIncludes = (arr, item) => {
  console.log(arr.includes(item));
};
isIncludes(arr2, "h");

/***************** SORU 7 *****************/
console.log(arr2.indexOf("h"));

/***************** SORU 8 *****************/
// 1. Yöntem
let newArr = arr2.slice(0, 3);
console.log(newArr);

// 2. Yöntem
let newArr2 = arr2.slice();
newArr2.splice(0, 4);
console.log(newArr2);

// 3. Yöntem
let newArr4 = new Array();
arr2.map((e) => (typeof e === "string" ? newArr4.push(e) : null));
console.log(newArr4);

/***************** SORU 9 *****************/
const sumNumbers = (arr) => {
  let filtered = arr.filter((e) => typeof e === "number");
  let sum = filtered.reduce((a, b) => a + b);
  return sum;
};
console.log(sumNumbers(arr1));

/***************** SORU 10 *****************/
const stringAll = arr1.map((e) => e.toString());
console.log(stringAll);

/***************** SORU 11 *****************/
console.log(arr3.find((e) => e.id === 221));

/***************** SORU 12 *****************/
console.log(arr3.find((e) => e.name === "ali"));

/***************** SORU 13 *****************/
const sumIdNumbers = (arr = arr3) =>
  arr.reduce((sum, item) => sum + item.id, 0);
console.log(sumIdNumbers());
