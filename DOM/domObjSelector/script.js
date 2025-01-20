let h1Element = document.getElementsByTagName('h1')[0];
let box1Element = document.getElementById('box1');
let box2Element = document.getElementsByClassName('box2')[0];
let box3Element = document.querySelector('.box3')

let box1Content = document.querySelector('.box1-content');
let box2Content = document.querySelector('.box2-content');
let box3Content = document.querySelector('.box3-content');

let btn1Element = document.querySelector('.btn1')
let btn2Element = document.querySelector('.btn2')
let btn3Element = document.querySelector('.btn3')

let box = document.querySelector('.box')
let clicked = false;
box.addEventListener('click', function(){
    if(clicked==false){
        box.style.backgroundColor = "green"
        box.style.textAlign = "center"
        clicked=true;
    }else{
        box.style.backgroundColor = "aliceblue"
        box.style.textAlign = "left"
        clicked=false;
    }
})


//NOTE: getElementsByTagName, getElementsByClassName returns collection of element whereas querySelector and getElementById returns a single element

//console.log(h1Element.innerText);
//console.log(box1Element.innerText);
//console.log(box3Element.innerText);
//console.log(box2Element.innerText);

h1Element.innerText = "DOM OBJECT SELECTORS"

btn1Element.addEventListener('click', ()=> {
    box1Content.innerText = "Hello From Box-1";
})

btn2Element.addEventListener('click', ()=> {
    box2Content.innerText = "Hello From Box-2";
})

btn3Element.addEventListener('click', ()=> {
    box3Content.innerText = "Hello From Box-3";
})





