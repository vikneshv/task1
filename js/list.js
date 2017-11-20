
var POST_URL ="https://jsonprovider.herokuapp.com/todos/?limit=50&sort=id+desc";





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
    $.getJSON(POST_URL).then(function (data) {
        $.each(data, function (key, value) {
            $("#todolist").prepend('<li><input type="checkbox" id="mycheckbox" class="done"/>' + value.title );
            $("#mycheckbox").prop('checked', value.completed);
        });
    });
})(jQuery);


function createTodo(text) {
    var todo = $('#myInput').val();
    console.log(todo);
    $.ajax({
        type: 'POST',
        url: 'https://jsonprovider.herokuapp.com/todos/',
        data: {
            userID: 1,
            title: text,
            completed: true,
        },
        success: function(data) {
          console.log("posted successfully", data); 
        }
      });
   
    





// function createCheck(id, checked) {
    
      
      //  var PUT_URLL = POST_URL + id;
      // $.ajax(PUT_URLL, {
         //   method: 'PUT',
         //   data: {
         //      'completed': checked
         //   },
         //   success: function () {
          //     alert("Changed");
         //   },
        //     error: function (e) {
        //         console.log(e);
         //   },
        //     dataType: "JSON",
    
       //  });

  //   }
  

 {
    var markup = '<li> <input type="checkbox" id="mycheckbox" class="done"/>' + text ;
    $('#todolist').prepend(markup);
    $("#myInput").val('');
}}(jQuery)
