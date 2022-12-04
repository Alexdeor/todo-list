//todo list
let todoInput = document.querySelector(".user-input");
let todoList = document.querySelector(".list-container");
let todoButton = document.querySelector ("#submit-btn");
let checkBtn = document.querySelector("button")
let countNum = document.querySelector('.count-number');

//todo list functions
todoButton.addEventListener("click", addTodo);
checkBtn.addEventListener('click', addCheck);
todoList.addEventListener('click', markRemoveBtn);


function addTodo(e){
    e.preventDefault();
    // create elements
    let todoDiv = document.createElement('div');
    let todoP = document.createElement('p');
    let markBtn = document.createElement('button');
    let removeBtn = document.createElement('img');
  // add classes
    todoDiv.classList.add('user-list');
    markBtn.classList.add('check');
    todoP.classList.add('user-input');
    todoP.innerText = todoInput.value;
    removeBtn.classList.add('cross');
    removeBtn.src = './images/icon-cross.svg';    
    //connect all values
    todoList.appendChild(todoDiv);
    todoDiv.appendChild(markBtn);
    todoDiv.appendChild(todoP);
    todoDiv.appendChild(removeBtn);
  todoInput.value = '';
    
  }
  
  function markRemoveBtn(e){
    let item = e.target;
    if(item.classList[0] === 'cross'){
      let remove = item.parentElement;
      remove.remove();
    }
    
    if (item.classList[0] === 'check'){
       const mark = item.parentElement;
      mark.classList.toggle("mark");
      item.classList.toggle('check-mark')
    }
    
  }
  function addCheck(e){
    if (checkBtn){
     }
  }
 //count number function

  const integer = document.getElementsByTagName("div").length;
console.log(integer);



//day and night switch
let sun = document.querySelector('.sun');
let moon = document.querySelector('.moon');
let topBg = document.querySelector('.background-top')
//

// sun switch function
sun.addEventListener('click', () => {
document.body.classList.toggle('light');
topBg.classList.toggle('bg-light');

if(sun.src.match('./images/icon-sun.svg')){
    sun.src = './images/icon-moon.svg';
    sun.classList.remove('sun');
    sun.classList.add('moon')
 } else{
    sun.src= './images/icon-sun.svg'
 }
})
