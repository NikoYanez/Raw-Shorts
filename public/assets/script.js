$(document).ready(function(){
  $( "#sortable" ).sortable();
  $( "#sortable" ).disableSelection();

  $( '.colBpicture' ).on('mouseup', function() {
    $( this ).addClass('movedpic')
  });

// Let the gallery items be draggable
  $( '.colBpicture' ).draggable({
    cancel: "a.ui-icon", // clicking an icon won't initiate dragging
    revert: "invalid", // when not dropped, the item will revert back to its initial position
    containment: "document",
    cursor: "move"
  });

  // Let the trash be droppable, accepting the gallery items
  $('#stagedlist').droppable({
    accept: ".colBpicture"
  });
});
