var board = document.getElementById("board");
var boardCount =16;
var iswite = false;
var className = '';
var boardLineCount = 4;
var str ='';

for(var i=0; i<boardCount; i++){
    className=iswite ?'black' : 'white';
    str += '<span class="' + className+ '"></span';
    iswite = !iswite;

    if (i % boardLineCount === boardCount -1) {
        iswite = !iswite;
    }
    $board.innerHTML = str;
}
function select(event) {
    if ($select) {
        $select.className= $select.className.replace('select,'');
    }
    var el = evant.currentTarget;
    el.className += select;
}
function addEvent(){
    var $board = document.querySelectorAll('span');
    var boardsLength =$board.length;
    for (var i=0; i<boardsLength;i++) {
        $board[i].addEventListener('click,select)');
    }
}
