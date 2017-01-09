// on load
$(function(){
  
  // Defining the elements that I'm
  // concerned with
  var newTodoBox = $('#newtodobox');
  var newTodoButton = $('#addtodo');
  var todos = $('todos'); 
  var deleteTodosButton = $('#deletetodos');
  var error = $('error');
  var info = $('info');
  
  // Handler for new todos
  deleteTodosButton.on('click', function(){
    var checkedTodos = $('todos input:checked');
    var numCheckedTodos = checkedTodos.length;
    checkedTodos.each(function(i) {
      $(this).closest('todo').remove();
    });
    hideStatuses();
    info.text('Deleted ' + numCheckedTodos + ' todos').show();

  });

  newTodoBox.on('keypress', function(e) {
    if(e && e.charCode && e.charCode===13) {
      submitTodo();
    } 
  });

  // Handler for new todos
  newTodoButton.on('click', submitTodo);

  function submitTodo() {

    var newTodoBoxValue = newTodoBox.val();
      
    if(newTodoBoxValue.trim().length < 1) {
      error.text('You must enter a valid description').show();
      newTodoBox.val('').focus();
      return;
    } else {
      hideStatuses();
    }

    // Build my string
    var todoString = '';
    todoString += '<todo>';
    todoString += '<label>';
    todoString += '<input type="checkbox" name="groceries" /> ';
    todoString += newTodoBoxValue;
    todoString += '</label>';
    todoString += '</todo>'; // innerHTML << insecure

    // Add that todo to the list of todos
    todos.append($(todoString));

    // Clear the todobox once done
    newTodoBox.val('').focus();
  }

  function hideStatuses() {
    error.hide();
    info.hide();
  }

}); // on load done