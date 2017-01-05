
$(document).ready(function(){
$(function(){

$.getJSON("http://quotes.stormconsultancy.co.uk/random.json", function(data0){


    var author1 = data0.author;
    var quote1 = data0.quote; 

    $("#quote").html(quote1); 
    $("#author").html("-" + author1);
    $('#t').attr('href', 'https://twitter.com/intent/tweet?text='+ quote1 + '-' + author1).attr('target', '_blank'); 
     })
   })
 })
$(document).ready(function(){

$("#q").click(function(){

$.getJSON("http://quotes.stormconsultancy.co.uk/random.json", function(data){

    var author = data.author;
    var quote = data.quote; 

    $("#quote").html(quote); 
    $("#author").html("-" + author);

$('#t').attr('href', 'https://twitter.com/intent/tweet?text='+ quote + '-' + author).attr('target', '_blank'); 
    })
  })
})