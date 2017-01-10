/*

// on load
$(function(){
  
  // Defining the elements that I'm concerned with.
  
  // A box to type in a new todo
  var newTodoBox = $('#newtodobox');
  
  // A button to click to actually add the todo
  var newTodoButton = $('#addtodo');
  
  // A list in which to hold the todos
  var todos = $('todos');
  
  // A button to click when you want to delete todos
  var deleteTodosButton = $('#deletetodos');
  
  // An error status message
  var error = $('error');
  
  // An info status message
  var info = $('info');
  
  // Handler for new todos
  deleteTodosButton.on('click', function(){
    
    // Get only the todos that are checked
    var checkedTodos = $('todos input:checked');
    
    // ... and see how many of them there are
    var numCheckedTodos = checkedTodos.length;
    
    // If they forgot to select any todos
    if(numCheckedTodos <= 0) {
      error.text('You must select some todos.').show();
      return;
    }
    
    // Loop through each of them
    checkedTodos.each(function(i) {
      
      // Each time, removing the todo element
      $(this).closest('todo').remove();
      
    });
    
    // Clear any status messages
    hideStatuses();
    
    // Flash some info to the user telling them how many we deleted
    info.text('Deleted ' + numCheckedTodos + ' todos').show();

  });

  // We also need to make sure to submit new todos when a user hits the
  // return key. Capture every single key press.
  newTodoBox.on('keypress', function(e) {
    
    // We only care if the key pressed was the return key
    // For more on charCodes:
    if(e && e.key && e.key==="Enter") {
      submitTodo();
    }
  });

  // Then of course if they click on the submit button, we'll also submit
  newTodoButton.on('click', submitTodo);

  // A function to handle a submission, either a "click" or "enter key press"
  function submitTodo() {
    
    // Grab the current value from the new todo input element
    var newTodoBoxValue = newTodoBox.val();

    // Remove spaces from the beginning and end, then check the length
    if(newTodoBoxValue.trim().length < 1) {
      
      // Show an error
      error.text('You must enter a valid description').show();
      
      // Clear the new todo box
      newTodoBox.val('').focus();
      
      // Don't go any further
      return;
      
    } else {
      // Clear any outstanding info or error messages
      hideStatuses();
    }

    // Build my string
    var todoString = '';
    todoString += '<todo>';
    todoString += '<label>';
    todoString += '<input type="checkbox" name="groceries" /> ';
    todoString += newTodoBoxValue; // innerHTML << insecure :(
    todoString += '</label>';
    todoString += '</todo>';

    // Add that todo to the list of todos
    todos.append($(todoString));

    // Clear the todobox once done
    newTodoBox.val('').focus();
  }

  // This function hides any status messages
  function hideStatuses() {
    error.hide();
    info.hide();
  }

}); // on load done

*/
