const $loading = document.getElementById('loading');

$loading.style.display= 'block';
fetch('https://jsonplacehelder.typicode.com/posts/1')
.then(Response = response.json())
.then(json= {
    console.log(json);

    //console.log(title);
    const { title} = json;
    //console.log(title);
    document.getElementById('title').innerHTML = TITLE;
    $loading.style.display='none';
    
});
