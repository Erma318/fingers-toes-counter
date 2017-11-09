$(document).ready(function(){
  count = 0;
  $("#set").click(function(){
    count_end = $("#number_set").val();
    myCount = setInterval(function(){myTimer()},1000);
  });
  function myTimer(){
	  count = count + 1;
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

    if (count >= count_end){
      clearInterval(myCount);
    }
  }

  $("#reset").click(function(){
    document.getElementById("number_set").value = "";
    count = null;
    document.getElementById("count_show").innerHTML=count;
    clearInterval(myCount);
    $(".fingers").removeClass("highlight");
    $(".toes").removeClass("highlight");
  });

  $("#restart").click(function(){
    count = null;
    document.getElementById("count_show").innerHTML=count;
    clearInterval(myCount);
    myCount = setInterval(function(){myTimer()},1000);
  });
});
