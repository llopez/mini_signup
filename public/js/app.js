$(function(){
  $('form').submit(function(e){
    $.post('/api/users', $(this).serialize())
     .done(function(){
        document.getElementById('signupForm').reset();
        alert('Signed Up successfully!!!');
      }).fail(function(){
        alert('error');
      });
    e.preventDefault(); 
  });

  $.getJSON('/api/users', function(data){
    data.map(function(d){
      var row = $("<tr>").html($("<td>")
        .html(d.data.first_name))
        .append($("<td>").html(d.data.last_name))
        .append($("<td>").html(d.data.age));

      $('table tbody').append(row);
    });
  });
});

