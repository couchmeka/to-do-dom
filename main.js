let todoForm = document.querySelector('#todolist');
let todoinput = document.querySelector('#todoinput');
let ul = document.querySelector('ul');
let removeButton = document.querySelector('#remove');
let removeComplete = document.querySelector('#removeAll');



todoForm.addEventListener('submit', function(event){

    
    event.preventDefault();
    
    let newLI = document.createElement('li');
    ul.appendChild(newLI); 
    newLI.innerText = todoinput.value;
    newLI.style.border = "dotted";
    newLI.style.borderColor = "purple";
    newLI.style.background = "white";
    newLI.style.padding ="10px";
  
    
   
     
     newLI.addEventListener('click', function(){
        
        if(newLI.style.textDecoration === "line-through"){
            newLI.style.textDecoration = "";
            newLI.style.opacity = "";

        } else {
         newLI.style.textDecoration = "line-through";
         newLI.style.opacity = ".5";
         var audio = new Audio('click.mp3');
         audio.play();
        
        }
     })

     newLI.addEventListener('mouseover', function(){
 
        newLI.style.background = "lightyellow";
        
    })
    newLI.addEventListener('mouseout', function(){
 
        newLI.style.background = "white";
        
    })
     
    
    
    });
    
//remove button
    removeButton.addEventListener('click', function(){

    let div2List = document.querySelectorAll('#div2 li');
        for (let i = 0; i < div2List.length; i++){
         
            div2List[i].remove();      
            
        }
    })

    //remove all
    removeComplete.addEventListener('click', function(){

    let div2List = document.querySelectorAll('#div2 li');
        for (let i = 0; i < div2List.length; i++){
                 
        if(div2List[i].style.textDecoration === "line-through")
        {
        
            div2List[i].remove();
                    
        }
                    
        }
    alert('Tasks have been completed')

     })



     //for the clock
     

    
//not mine this is for animation 
