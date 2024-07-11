// Bài 1: Viết chương trình khởi tạo nhập vào một
// mảng số nguyên gồm 10 phần tử.
// Chương trình thực hiện tính và hiển thị xem
// có bao nhiêu số nguyên lớn hơn hoặc bằng 10.

// let mang = [];

// for (i = 0; i < 10; i++) {
// let chuoi = +prompt(`hãy nhập số nguyên vào số thứ ${i+1} :`); // nhập
// let so = parseInt(chuoi); // chuyển chuỗi thành số
// if (Number.isInteger(so)) {
//   mang.push(so);
// }
// }
// console.log(mang);

// let dem = 0;
// for (let j = 0; j <= mang.length - 1; j++) {
//   if (mang[j] >= 10) {
//     dem = dem + 1;
//     console.log(`số ${mang[j + 1]} ở vị trí thứ ${j}`);
//   }
// }
// console.log("có " + dem + " số nguyên lớn hơn 10");

//=================================================================================================

// Bài 2: Viết chương trình khởi tạo nhập vào một mảng số nguyên gồm 10 phần tử khác nhau.
// Chương trình hiển thị ra được phần tử có giá trị lớn nhất trong mảng và vị trí của phần tử đó.

// let mang = [];

// for (i = 0; i < 10; i++) {
//   let chuoi = +prompt(`hãy nhập số nguyên vào số thứ ${i + 1} :`); // nhập
//   let so = parseInt(chuoi); // chuyển chuỗi thành số
//   if (Number.isInteger(so)) {
//     mang.push(so);
//   }
//    else{alert("hãy nhập lại")}
// }
// console.log(mang);
// let max = 0;
// let vitri;
// for (let j = 0; j <= mang.length - 1; j++) {
//   if (max <= mang[j]) {
//     max = mang[j];
//     vitri = j;
//   }
// }
// console.log("số lớn nhất là" + max);
// console.log(vitri);

//===============================================

// Bài 3: Viết chương trình khởi tạo nhập vào một mảng số nguyên.
// Hiển hiện giá trị lớn nhất trong mảng đó và giá trị trung bình của các phần tử trong mảng.

// let a = [1, 5, -9, -10, 11, 12, 15, 16]; // cho mảng bất kì
// let max = 0;
// let sum = 0;
// for (let i = 0; i <= a.length - 1; i++) {
//   sum = sum + a[i];
//   if (max <= a[i]) {
//     max = a[i];
//   }
// }
// console.log("số lớn nhất là :" + max);
// console.log(
//   "giá trị trung bình của các phần tử trong mảng là :" + sum / a.length
// );

//===============================================
// Bài 4: Viết chương trình khởi tạo nhập vào một mảng
// số nguyên và đảo ngược các phần tử trong mảng đó.

// let a = [1, 5, -9, -10, 11, 12, 15, 16];
// let anew = [];
// for (let i = a.length - 1; i >= 0; i--) {
//   anew.push(a[i]);
// }
// console.log(anew);

//===============================================
// Bài 5: Viết chương trình đếm số nguyên âm trong một chuỗi.
// let dem = 0;
// let a = [1, 5, -9, -10, 11, 12, 15, 16];
// for (let i = 0; i <= a.length - 1; i++) {
//   if (a[i] < 0) {
//     dem = dem + 1;
//   }
// }
// console.log(dem);

//===============================================

// Bài 6: Viết chương trình khởi tạo nhập vào một mảng số nguyên gồm 10 phần tử.
// Nhập phần tử số nguyên và tìm xem số đó có nằm trong mảng số nguyên không?
// Nếu có thuộc mảng số nguyên thì in ra "Number X is in the array"
// còn lại in ra "Number X is not in the array".

// let a = [1, 5, -9, -10, 11, 12, 15, 16];
// let num = +prompt("hãy nhập số X của bạn muốn tìm");
// let check = false;
// for (i = 0; i <= a.length - 1; i++) {
//   if (a[i] === num) {   // hỏi lại thầy num=a[i] thì sao
//     check = true;
//   }
// }
// if (check) {
//   alert("Number X is in the array");
// } else {
//   alert("Number X is not in the array");
// }

//===============================================
// Bài 7: Viết chương trình khởi tạo nhập vào một mảng số nguyên gồm 10 phần tử.
// Nhập phần tử số nguyên và kiểm tra xem số đó có thuộc mảng đã cho không?
// Nếu có thuộc mảng đã cho xoá số đó khỏi mảng.

// let mang = [];

// for (i = 0; i < 10; i++) {
//   let chuoi = +prompt(`hãy nhập số nguyên vào số thứ ${i + 1} :`); // nhập
//   let so = parseInt(chuoi); // chuyển chuỗi thành số
//   if (Number.isInteger(so)) {
//     mang.push(so);
//   }
// }
// console.log(mang);

// let check = -1;
// let num = +prompt("hãy nhập số mà bạn muốn kiểm tra để xóa");
// for (j = 0; j <= mang.length - 1; j++) {
//   if (mang[j] === num) {
//     check = j;
//   }
// }
// mang.splice(check, 1);
// mang.push(0);
// console.log(mang);

//=======================================
// Bài 8: Viết chương trình khởi tạo nhập vào
// một mảng số nguyên gồm 10 phần tử.
// Chương trình sắp xếp mảng theo thứ tự giảm dần và
// hiển thị ra mảng đã được sắp xếp.
// let mang = [];
// for (let k = 0; k < 10; k++) {
//   let chuoi = +prompt(`hãy nhập số nguyên vào số thứ ${k + 1} :`);
//   let so = parseInt(chuoi);
//   if (Number.isInteger(so)) {
//     mang.push(so);
//   }
// }
// console.log(mang);

// let m = 0;
// for (let i = 0; i <= mang.length - 1; i++) {
//   for (let j = i + 1; j <= mang.length - 1; j++) {
//     if (mang[j] > mang[i]) {
//       m = mang[i];
//       mang[i] = mang[j];
//       mang[j] = m;
//     }
//   }
// }
// console.log(mang);

//=======================================

// Bài 9: Viết chương trình khởi tạo nhập vào 2 mảng số nguyên gồm 10 phần tử, gọi là mảng a và b.
//  Mảng c là một mảng được khai báo gồm 20 phần tử số nguyên. Chương trình sẽ lưu các phần tử được
//  nối từ hai mảng b và a vào mảng c. Hiển thị mảng c.

// let manga = [];
// let dem1 = 0;
// for (let i = 0; dem1 < 3; i++) {
//   let chuoia = +prompt(
//     `tạo mảng a hãy nhập só nguyên vào, đây là số thứ ${dem1 + 1}`
//   );
//   let so1 = parseInt(chuoia);
//   if (Number.isInteger(so1)) {
//     manga.push(so1);
//     dem1 = dem1 + 1;
//   } else {
//     alert("vui lòng nhập lại");
//   }
// }
// console.log(manga);

// let mangb = [];
// let dem2 = 0;
// for (let i = 0; dem2 < 3; i++) {
//   let chuoib = +prompt(
//     `tạo mảng b hãy nhập só nguyên vào, đây là số thứ ${dem2 + 1}`
//   );
//   let so2 = parseInt(chuoib);
//   if (Number.isInteger(so2)) {
//     mangb.push(so2);
//     dem2 = dem2 + 1;
//   } else {
//     alert("vui lòng nhập lại");
//   }
// }
// console.log(mangb);

// let mangc = [];
// for (let i = 0; i <= manga.length - 1; i++) {
//   mangc.push(manga[i]);
//   mangc.push(mangb[i]);
// }
// console.log(mangc);

//===================================================
// // bài 1 phần 2
// let a = [
//   [1, 2, 1, 24],
//   [8, 11, 9, 4],
//   [7, 0, 7, 27],
//   [7, 4, 28, 14],
//   [3, 10, 26, 7],
// ];
// for (let i in a) {
//   console.log(` mảng ${i}`);
//   for (let j in a[i]) {
//     console.log(`${a[i][j]}`);
//   }
// }

//====================================================

// bài 2 phần 2
// let mangnew = [];
// let a = ["c", "s", "c", "2", "6", "1"];
// for (i = a.length - 1; i >= 0; i--) {
//   mangnew.push(a[i]);
// }
// console.log(mangnew);
// let moi = mangnew.join(""); // khi chuyển đôi join cần lưu vào 1 biến
// console.log(moi);

//==================================================
// bài 3 : phần
// let mang = ["d", "a", "s", "f", "g", 1, 4, 56, 1, 5, 4];
// let dem = 0;
// for (i = 0; i <= mang.length - 1; i++) {
//   if (Number(mang[i])) {
//     dem = dem + 1;
//   }
// }
// console.log(dem);

//=================================================
// Bài 4: Viết một chương trình để đếm số từ trong một chuỗi.

// let a = prompt(" hãy nhập câu chuỗi của bạn");
// let b = " ";
// let dem = 1;
// for (i = 0; i <= a.length - 1; i++) {
//   if (b == a[i]) {
//     dem = dem + 1;
//   }
// }
// console.log(` có tổng số từ là ` + dem);
//==========
// // cách 2
// A = "Hello world A";

// let convert = A.split(" ");// chuyển chuối thành mảng split

// convert.join(); // cộng vào với nhau

// console.log(convert);
// console.log(convert.length);

//========================================================
//Bài 5: Viết một chương trình nhập vào 2 chuỗi,
// sau đó kiểm tra xem hai chuỗi có giống nhau hay không.

// let a = prompt("nhập chuỗi 1");
// let b = prompt("nhập chuỗi 2");
// let check = true;
// for (i = 0; i <= a.length - 1; i++) {
//   if (a[i] !== b[i]) {
//     check = false;
//     break;
//   }
// }
// if (check == false) {
//   alert("khác nhau");
// } else {
//   alert("giống nhau");
// }

//========================================================
// Bài 6: Viết chương trình nhập vào một mảng ký tự,
//tìm tất cả các ký tự trong mảng là (-) và
// thay thế các ký tự này bởi ký tự ( _ )

// let mang = ["a", "-", "b", "-", "c", "-", "d"];
// for (let i = 0; i < mang.length; i++) {
//   if (mang[i] === "-") {
//     mang[i] = "_";
//   }
// }

// console.log(mang);
//=================
// let root = prompt("nhập").split("");
// //================split dùng để chuyển chuỗi thành mảng chắc các chuỗi nhỏ================
// console.log(root);
// let subArray = [];
// let result = [];
//bài 7 : cách 1 ==========================
// for (let k = 1; k <= root.length - 1; k = k + 1) {
//   for (let i = 0; i <= root.length - k + 1; i = i + 1) {
//     let subArr = [];
//     for (let j = i; j < i + k; j = j + 1) {
//       subArr.push(root[j]);
//     }
//     result.push(subArr.join(""));
//   }
// }
// result.push(root.join(""));
// //========================= join là nối các phần tử của mảng thành chuỗi====================
// console.log(result);
// //=========================================******************************************************
// let root = prompt("Enter a string :").split("");

// let rs = [];
// for (let i = 0; i < root.length; i++) {
//   let newArr = [];
//   for (let j = i; j < root.length; j++) {
//     newArr.push(root[j]);
//     rs.push(newArr.join(""));
//   }
// }
// console.log(rs);
// bài 7: cách 2 ==========================
// let str = "abc";
// let substrings = [];
// for (let i = 0; i < str.length; i++) {
//   for (let j = i + 1; j <= str.length; j++) {
//     let sliceArray = str.slice(i, j);
//     substrings.push(sliceArray);
//   }
// }

// console.log(substrings);
