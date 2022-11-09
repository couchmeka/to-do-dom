let todoForm = document.querySelector('#todolist');
let todoinput = document.querySelector('#todoinput');
let ul = document.querySelector('ul');
let li = document.querySelector('li');
let removeButton = document.querySelector('#remove');
let removeComplete = document.querySelector('#removeAll');
let div2 = document.querySelector('div2')


todoForm.addEventListener('submit', function(event){

    
    event.preventDefault();
    
    let newLI = document.createElement('li');
    ul.appendChild(newLI); 
    newLI.innerText = todoinput.value;
    newLI.style.border = "dotted";
    newLI.style.borderColor = "purple";
    newLI.style.background = "white"
    newLI.style.padding ="10px"
  
    let div2List2 = document.querySelectorAll('#div2 li')
    for (let i = 0; i < div2List2.length; i++) {
     
     div2List2[i].addEventListener('click', function(){
 
         div2List2[i].style.textDecoration = "line-through";
         div2List2[i].style.opacity = ".5"
         
     })
     
    }
    
    });
    

    removeButton.addEventListener('click', function(){

    let div2List = document.querySelectorAll('#div2 li');
        for (let i = 0; i < div2List.length; i++){
         
            div2List[i].remove();
            
            
        }
    })

        removeComplete.addEventListener('click', function(){

            let div2List = document.querySelectorAll('#div2 li');
                for (let i = 0; i < div2List.length; i++){
                 
                    if(div2List[i].style.textDecoration === "line-through"){
                    div2List[i].remove();
                    }
                    
                }


            })

    
