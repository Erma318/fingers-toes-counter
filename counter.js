$(document).ready(function(){
  count = 0;
  myCount = null;

  $("#set").click(function(){
    if ( $("#number_set").val() != "") {
      count_end = $("#number_set").val();
      clearInterval(myCount);
      myCount = setInterval(function(){myTimer()},1000);
    }
  });

  function myTimer(){
    if (count_end == "") {
      clearInterval(myCount);
      return;
    }
    if (count >= count_end){
      clearInterval(myCount);
      document.getElementById("count_show").innerHTML=count;
      $(".fingers").removeClass("highlight");
      $(".toes").removeClass("highlight");
      return;
    }
    document.getElementById("count_show").innerHTML=count;
    if (count % 3 == 0) {
      $(".fingers").addClass("highlight");
    }
    if (count % 5 == 0) {
      $(".toes").addClass("highlight");
    }
    if (count % 3 != 0) {
      $(".fingers").removeClass("highlight");
    }
    if (count % 5 != 0) {
      $(".toes").removeClass("highlight");
    }
    count = count + 1;
  }

  $("#reset").click(function(){
    document.getElementById("number_set").value = "";
    count = 0;
    count_end = null;
    document.getElementById("count_show").innerHTML=null;
    clearInterval(myCount);
    $(".fingers").removeClass("highlight");
    $(".toes").removeClass("highlight");
  });

  $("#restart").click(function(){
    count = 0;
    //count_end = $("#number_set").val();
    if ($("#number_set").val() == "") {
      return;
    }
    //document.getElementById("count_show").innerHTML=count;
    clearInterval(myCount);
    myCount = setInterval(function(){myTimer()},1000);
  });

});
