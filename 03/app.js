//문제풀기
//01.
const year = 2022;
const month = 11;
const day = 3;

// Tạo đối tượng Date với ngày được biểu diễn bởi các biến year, month, day
const date = new Date(year, month - 1, day);

// Sử dụng phương thức toISOString() để chuyển đổi sang chuỗi "YYYY-MM-DD"
const dateString = date.toISOString().slice(0, 10);

// In ra kết quả "2022-11-03"
console.log(dateString);

//02
const dateString = "2022-12-12";


const dateArray = dateString.split("-");

// Chuyển đổi các chuỗi 
const numericDateArray = dateArray.map(str => parseInt(str, 10));
//[2022,12,12];
console.log(numericDateArray);

//03
const text = "나는 XX를 좋아해";
const item = "JS";

// Sử dụng phương thức replace() để thay thế chuỗi "XX" bằng chuỗi item
const replacedText = text.replace("XX", item);

// In ra kết quả "나는 JS를 좋아해"
console.log(replacedText);

//04
const text = "안녕하세요. 나는 사람입니다.";
const searchText = "사람";

// Sử dụng phương thức includes() để kiểm tra chuỗi searchText có xuất hiện trong chuỗi text hay không
const result = text.includes(searchText);

// In ra kết quả true hoặc false tương ứng
console.log(result);

//05.
const point1 = [12, 34, 80, 72];
const point2 = [1, 80, 94];
const point3 = [50, 60, 70];

// Tạo một mảng chứa các mảng con
const allPoints = [point1, point2, point3];

// Sử dụng phương thức reduce() để tính tổng của tất cả các phần tử trong mảng allPoints
const sum = allPoints.reduce((acc, curr) => acc.concat(curr), []).reduce((total, num) => total + num, 0);

// In ra kết quả 373
console.log(sum);

//06
const a = 1.2;
const b = 3.4;

// Làm tròn tổng của a và b đến gần nhất
const result = Math.round(a + b);

// In ra kết quả 4
console.log(result);

//07.
const min = 1;
const max = 10;

// Tạo một số ngẫu nhiên trong khoảng từ min đến max
const randomNumber = Math.floor(Math.random() * (max - min + 1)) + min;

// In ra số ngẫu nhiên, ví dụ 3
console.log(randomNumber);

//08
const target = 10;
const num = 3;

// Kiểm tra xem target có phải là bội số của num hay không
const isMultiple = target % num === 0;

// In ra kết quả (false trong trường hợp này)
console.log(isMultiple);

//09
const nick = "kakao";

// Chuyển đổi nick thành chữ in hoa
const uppercaseNick = nick.toUpperCase();

// In ra kết quả (KAKAO trong trường hợp này)
console.log(uppercaseNick);

//10.
const items = [1, "a", true, ["a"], { n: 1 }];

// Lấy ra các phần tử đầu tiên của mảng items
const firstItems = items.slice(0, 3);

// In ra kết quả (mảng [1, 'a', true] trong trường hợp này)
console.log(firstItems);

//11.
const items = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j"];
const pageSize = 3;

// Chia mảng items thành các mảng con với kích thước pageSize
const result = [];
for (let i = 0; i < items.length; i += pageSize) {
  const pageItems = items.slice(i, i + pageSize);
  result.push(pageItems);
}

// Tạo chuỗi kết quả từ các mảng con
const finalResult = result.map((pageItems) => pageItems.join(",")).join("---");

// In ra kết quả (chuỗi a,b,c---d,e,f---g,h,i---j trong trường hợp này)
console.log(finalResult);

//12.
const items = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j"];
const pageSize = 3;

const result = [];
for (let i = 0; i < items.length; i += pageSize) {
  result.push(items.slice(i, i + pageSize));
}

console.log(result);
// Output: [ [ 'a', 'b', 'c' ], [ 'd', 'e', 'f' ], [ 'g', 'h', 'i' ], [ 'j' ] ]

//13.
startIndex = (page - 1) * pageSize;
const getStartIndexByPage = function (page) {
    return (page - 1) * pageSize;
  };
  getStartIndexByPage(1); // 0
getStartIndexByPage(2); // 3
getStartIndexByPage(3); // 6

//14.
const phoneNumber = `010-1234-1234`;
const pattern = /^\d{3}-\d{4}-\d{4}$/;
const isValidPhoneNumber = pattern.test(phoneNumber);
console.log(isValidPhoneNumber); // true

//15
const user = { nick: "nio", age: 20, location: "제주" };
const updatedUser = { ...user, age: 21, name: '부산' };
console.log(updatedUser); // {nick:'nio', age:21, name:'부산'}

//16
const text = "{a:1, b:2}";
const obj = JSON.parse(text.replace(/'/g, '"'));
console.log(obj); // {a:1, b:2}

//17
const user = { nick: "nio", age: 20, location: "제주" };
const str = JSON.stringify(user);
console.log(str); // "{ "nick": "nio", "age": 20, "location": "제주" }"

//18
const items = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const evenItems = items.filter(item => item % 2 === 0);
console.log(evenItems); // [2, 4, 6, 8, 10]


//19
const list = [
    {
      id: 1,
      title: "JS",
      isPublic: true,
    },
    {
      id: 2,
      title: "기본",
      isPublic: true,
    },
    {
      id: 3,
      title: "ecma",
      isPublic: true,
    },
    {
      id: 4,
      title: "dom",
      isPublic: false,
    },
  ];
  
  const publicTitles = list.filter(item => item.isPublic).map(item => item.title);
  console.log(publicTitles); // ['JS', '기본', 'ecma']

  //20
  const dday = "2022-02-02";

const nextDay = new Date(dday);
nextDay.setDate(nextDay.getDate() + 1);
const result = nextDay.toISOString().slice(0, 10);
console.log(result); // '2022-02-03'





