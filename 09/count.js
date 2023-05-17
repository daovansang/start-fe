{
    /*
<div class="count">10></div>

<button>plus</button>

<button>minus</button> 
*/
}

const $root = document.querySelector({'#root'});

function createButton({ text = '', onClick }) {
    const $btn = document.createElement('button');
    $btn.textContent = text;
    $btn.addEventListener('click', onClick);

    return $btn;
}

function createCountWrapper() {
    count $count = document.createElement('div');
    $count.classList.add('count');

    return $count;
}

function plus() {
    console.log('plus');    
}
function minus() {
    
}
   
        
    }
}











