console.log('app');


//Create
var todos = ['운동'];
var todos = '게임';
todos.push(todo);
console.log(todos);

//Read
todos.forEach(function(todo){
    console.log(todo);
});
//Update
var todos = ['운동', '게임'];
var updateTodo = '게임';
var updateIndex = todos.findIndex(function(todo) {
  return todo === updateTodo;
});
todos[updateIndex] = '공부';
console.log(todos);

var todos = ['운동', '게임'];
var updateTodo = '게임';

var newTodos = todos.map(function(todo) {
  if (todo === updateTodo) {
    return '공부';
  }
  return todo;
});

console.log(newTodos);
//dalete
var todos = ['운동', '공부', '목욕'];
var deleteTodo = '공부';
var deleteIndex = todos.findIndex(function(todo) {
  return todo === deleteTodo;
});

todos.splice(deleteIndex, 1);
console.log(todos);
var todos = ['운동', '공부'];
var deleteTodo = '공부';
var newTodos = todos.filter(function(toods) {
  return todo !== delteTodo;
});
console.log(newTodo);

//구문
var isMan=false;
if (isMan) {

    console.log('1');
  } else {
    console.log('2');
  }
  
  var gender = isMan ?
  //for
  for (var count = 0; count < 5; count++) {
    //총 5번 실행
  }
  
  var obj = { a: 1, b: 2 };
  
  //느리다.비권장
  for (var prop in obj) {
    console.log(prop, obj[prop]);
  }
  //
  
  alert('안녕하세요');
  var who = prompt('당신은 누구세요?');

  var isDelete = confirm('정말 삭제합니까?');
  //함수
  function sum(a, b) {
    return a + b;
  }
  sum(1, 3);

  //멤버 변수
  var car = {
    year: '2014',
    starting: function() {
      console.log('starting..');
    },
  };
  
  car.starting();
  //
  (function(){
    var a ='a';
    console.log(a);
  })();
  //
  
















