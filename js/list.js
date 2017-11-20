
var API_KEY = "https://jsonplaceholder.typicode.com/todos/";
var POST_URL =  "https://jsonprovider.herokuapp.com/todos/";
let valTrue = "true";
let valFalse = "false";




$('#myInput').keypress(function (event) {
    event.stopPropagation();
 var keycode = (event.keyCode ? event.keyCode : event.which);
    if (keycode == '13') {
        //console.log("enter key");
        if ($(this).val() !== '') {
            var todo = $(this).val();
            //console.log(todo);
            createTodo(todo);
        } 
    }
});



(function ($) {
    $.getJSON( API_KEY).then(function (data) {
        $.each(data, function (key, value) {
            $("#todolist").prepend('<li><input type="checkbox" id="mycheckbox" class="done"/>' + value.title );
            $("#mycheckbox").prop('checked', value.completed);
        });
    });
})(jQuery);


function createTo(text) {
    var toDo = $('#myInput').val();
    console.log(toDo);
    $.ajax({
        url:API_KEY,
        method: 'POST',
        data: JSON.stringify({
            title: toDo,
            completed: false,
            userID: 1,
        }),
        contentType: 'application/json; charset=utf-8',
        dataType: "JSON",
        success: function(result){
            console.log("posted successfully");
        }

    });

    
}

// function createCheck(id, checked) {
    
      
//         var PUT_URLL = POST_URL + id;
//         $.ajax(PUT_URLL, {
//             method: 'PUT',
//             data: {
//                 'completed': checked
//             },
//             success: function () {
//                 alert("Changed");
//             },
//             error: function (e) {
//                 console.log(e);
//             },
//             dataType: "JSON",
    
//         });

//     }

function createTodo(text) {
    var markup = '<li> <input type="checkbox" id="mycheckbox" class="done"/>' + text ;
    $('#todolist').prepend(markup);
    $("#myInput").val('');
}