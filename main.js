let todoForm = document.querySelector('#todolist');
let todoinput = document.querySelector('#todoinput');
let ul = document.querySelector('ul');;
let li = document.querySelector('li');
let removeButton = document.querySelector('#remove');
let div2 = document.querySelector('div2')

todoForm.addEventListener('submit', function(event){

    
    event.preventDefault();
    
    let newLI = document.createElement('li');
    ul.appendChild(newLI); 
    newLI.innerText = todoinput.value;
    newLI.style.border = "dotted";
    newLI.style.borderColor = "white"
  
    
    });
    

    removeButton.addEventListener('click', function(){

    let div2List = document.querySelectorAll('#div2 li');
        for (let i = 0; i < div2List.length; i++){
         
            div2List[i].remove();
            console.log('clicked')
            
        }


    })


    
    
