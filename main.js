$(document).ready(function() {
  
  //buttons
  var films = ["https://en.wikipedia.org/wiki/Special:RandomInCategory/American_criminal_comedy_films", "https://en.wikipedia.org/wiki/Special:RandomInCategory/Zombie_comedy_films"];
  var books = ["https://en.wikipedia.org/wiki/Special:RandomInCategory/Black_comedy_books"];
  var series = ["https://en.wikipedia.org/wiki/Special:RandomInCategory/Black_comedy_television_programs"];
  
  var randomFilms = Math.floor((Math.random()*films.length));
  var randomBooks = Math.floor((Math.random()*books.length));
  var randomSeries = Math.floor((Math.random()*series.length));
  
  $('#films').on('click', function(){
    window.open(films[randomFilms], '_blank');
    }); 
  $('#books').on('click', function(){
    window.open(books[randomBooks], '_blank');
    }); 
  $('#series').on('click', function(){
    window.open(series[randomSeries], '_blank');
    }); 
  
  //search
  $('#search').on('click', function(){
    var searchTerm = $('#searchTerm').val();
    
    var url = "https://en.wikipedia.org/w/api.php?action=opensearch&search="+searchTerm+"&format=json&callback=?";

    $.ajax({
      type: 'GET', 
      url: url,
      async: false, 
      dataType: 'json', 
      success: function(data){
        //clear the output field
        $('#output').html('');
        //list results off the search
        for(var i=0; i<data[1].length; i++){
          $('#output').prepend("<li><a href= "+data[3][i]+" target='_blank'>"+data[1][i]+"</a><p>"+data[2][i]+"</p></li>");
        }
      },
      error: function(errorMessage){
        alert('Error');
      }
    });

  });  //search
  
});