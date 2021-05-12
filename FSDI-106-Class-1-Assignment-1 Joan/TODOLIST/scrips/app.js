var color = "red";



function saveTodo(){ 
    let imput= $("#txtTodo");
    let text=$("#txtTodo").val(); //get the text from input field 
    console.log("Saving todo" + text);

    let syntax = "<div class='todo-item'><h6>" + text + "</h6></div>";
    $("#pendingList").append(syntax);

    input.val("") // Clear Field 
}



function init(){
    console.log("Todo App!!")
    // load data 

    // Hook events 
    $("#btnSave").click( saveTodo );
    $("#txtTodo").keypress(function(args) {
        console.log(args);
        if(args.keycode ===13){
            saveTodo();
        }

    });
}

window.onload = init;




/*var input = $('#todo-text');
input.val("Hello World");

console.log("Todo App!");*/