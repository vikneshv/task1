

$('#myInput').keypress(function (event) {
    event.stopPropagation();
 var keycode = (event.keyCode ? event.keyCode : event.which);
    if (keycode == '13') {
        console.log('You pressed "enter key" in textbox');
        if ($(this).val() != '') {
            var todo = $(this).val();
            console.log(todo);
            createTodo(todo);
        } else {

        }
    }
});



var API_KEY = "https://jsonplaceholder.typicode.com/todos";
let POST_URL =  "https://jsonplaceholder.typicode.com/todos";
let valTrue = "true";
let valFalse = "false";

(function ($) {
    $.getJSON(API_KEY).then(function (data) {
        $.each(data, function (key, value) {
            $("#todolist").prepend('<li><input type="checkbox" id="mycheckbox" class="done"/>' + value.title + ' <a href="#"><span class="glyphicon glyphicon-ok"></span></li>');
            $("#mycheckbox").prop('checked', value.completed);
        });
    });
})(jQuery);

let markup = '<li><input type="checkbox" id="mycheckbox" class="done" onchange="uplChk()" />' + text + '</li>';
$('#todoList').prepend(markup);
$("#myInput").val('');

function createTo(text) {
    let toDo = $('#myInput').val();
    $.ajax(POST_URL, {
        method: 'POST',
        data: {
            title: toDo,
            completed: false,
            userId: 1
        },
        error: function (e) {
            console.log(e);
        },
        dataType: "JSON",

    });

    
}

function updateCheck() {
    $('input[type="checkbox"]').change(function () {
        let checked = false;
        if ($(this).prop("checked") == true) {
            checked = true;
        }
        else if ($(this).prop("checked") == false) {
            checked = false;
        }
        createCheck($(this).prop("value"), checked);
    });
};

function createCheck(id, checked) {

    let PUT_LAST = "?completed=";
    let PUT_URLL = POST_URL + id;
    $.ajax(PUT_URLL, {
        method: 'PUT',
        data: {
            'completed': checked
        },
        success: function () {
            alert("Changed");
        },
        error: function (e) {
            console.log(e);
        },
        dataType: "json",

    });
}




function createTodo(text) {
    var markup = '<li><input type="checkbox" id="mycheckbox" class="done"/>' + text + '<span class="glyphicon glyphicon-ok"></span></li>';
    $('#todolist').prepend(markup);
    $("#myInput").val('');
}