    var todoArray=[];
    var todoId=0;



    var todolist =document.querySelector(".todo-list");
    var input = document.getElementById("input");
    var addBtn = document.getElementById("addTodo");
    

    var displayCompletedTodo =document.getElementById("fig1");
    var displayUncompletedTodo=document.getElementById("fig2");
    var trueNum=0;
    var falseNum=0;


    function createListTag(todo) {
        var li = document.createElement("li");
        var txt1 = document.createTextNode(todo);
        var p = document.createElement('p');

        var deleteBtn = document.createElement("span");
        var txt2 = document.createTextNode("x");

        p.appendChild(txt1);
        li.setAttribute("id",todo);
        deleteBtn.appendChild(txt2)
        deleteBtn.setAttribute("id",todo);
        deleteBtn.setAttribute("class","delete-btn");
        
        li.appendChild(p);
        li.appendChild(deleteBtn);
        todolist.append(li);
        falseNum++;
        displayUncompletedTodo.innerText=falseNum;
        

        // add click event listener to deletebtn
        deleteBtn.addEventListener("click",function(){
            // this.stopPropagation();
            window.event.cancelBubble=true;
            
            for (let b = 0; b < todoArray.length; b++) {
                // check for array index
                if(todoArray[b].todo== this.id){
                    if(todoArray[b].complete ===true){
                        // track todo number of complete & uncompleted todos
                        trueNum= trueNum -1;
                        displayCompletedTodo.innerText=trueNum;

                    }
                else{
                    // track todo number of complete & uncompleted todos
                    falseNum = falseNum-1;
                    displayUncompletedTodo.innerText=falseNum;
                    
                }
                // delete todo from array using index
                todoArray.splice(b,1);

                // remove from Dom
                this.parentNode.remove();
                }
                
            }
        });
        
        // add click event listener to li tag
        li.addEventListener("click",function(){
            // toggle the completed style
            this.classList.toggle("completed");
            // loop through todoArray
            for (let c = 0; c < todoArray.length; c++) {
                if(todoArray[c].todo == this.id){
                    // if todo is completed change to false
                    if(todoArray[c].complete ===true){
                        todoArray[c].complete=false;
                        // track todo number of complete & uncompleted todos
                        trueNum= trueNum -1;
                        falseNum = falseNum+1;
                        displayCompletedTodo.innerText=trueNum;
                        displayUncompletedTodo.innerText=falseNum;
                    }
                    // else if todo not complete change to true
                    else{
                        todoArray[c].complete=true;
                        // track todo number of complete & uncompleted todos
                        falseNum = falseNum-1;
                        trueNum= trueNum+1;
                        displayUncompletedTodo.innerText=falseNum;
                        displayCompletedTodo.innerText=trueNum;
                    }
                    
                }
                
            }
            // preventDefault();
            
        });
    }



    for (let a = 0; a < todoArray.length; a++) {


        // display todo in array on start
        createListTag(todoArray[a]);
        
    }


    // create display  inputed todo and add to array
    function createTodo() {
        // check if input is not empty
        if(input.value !== ""){
            createListTag(input.value);
            var todoObj ={};
            todoObj.id=todoId;
            todoObj.todo=input.value;
            todoObj.complete=false;
            todoArray.push(todoObj);
            todoId++;
            input.value="";
            
        }

    }

    // function trackTodoStatus() {

    // }

    // if add button is clicked
    addBtn.addEventListener("click", createTodo);

    // if enter key is pressed
    input.addEventListener('keyup',function (e) {
        // console.log(e);
        if(e.keyCode == 13){
            // console.log(input.value);
            createTodo(input.value);
            
        }
    });
