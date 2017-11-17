
$('#myInput').keypress(function (event) {
    event.stopPropagation();
 var keycode = (event.keyCode ? event.keyCode : event.which);
    if (keycode == '13') {
        console.log('enter');
        if ($(this).val() != '') {
            var todo = $(this).val();
            console.log(todo);
            createTodo(todo);
        } else {

        }
    }
});


var API_KEY = "https://jsonplaceholder.typicode.com/todos";

(function  {
    $.getJSON(API_KEY).then(function (data) {
        $.each(data, function (key, value) {
            $("#todolist").prepend('<li><input type="checkbox" id="mycheckbox" class="done"/>' + value.title + ' <span class="glyphicon glyphicon-ok"></span>=</li>');
            $("#mycheckbox").prop('checked', value.completed);
        });
    });
})(jQuery);

function createTodo(text) {
    var markup = '<li><input type="checkbox" id="mycheckbox" class="done"/>' + text + '<span class="glyphicon glyphicon-pencil"></span></li>';
    $('#todolist').prepend(markup);
    $("#myInput").val('');
}