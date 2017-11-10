$(document).ready(function(){
  count = 0;
  myCount = null;
  count_end = null;
  flag = false;
  //after click the set button, the timing event for counter will be started
  $("#set").click(function(){
    if (/^\+?[1-9][0-9]*$/.test($("#number_set").val())) {
      count_end = $("#number_set").val();
      clearInterval(myCount);
      myCount = setInterval(function(){myTimer()},1000);
      flag = true;
    } else {
        window.alert("Please input a positive number.")
    }
  });
 //the timing event for the counter
  function myTimer(){
    $("#number_set").attr("readonly",true);
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
  //after click the set button, the timing event for counter will be stoped
  $("#reset").click(function(){
    if (!flag) {
      return;
    }
    $("#number_set").attr("readonly", false);
    document.getElementById("number_set").value = "";
    count = 0;
    count_end = null;
    document.getElementById("count_show").innerHTML=null;
    clearInterval(myCount);
    $(".fingers").removeClass("highlight");
    $(".toes").removeClass("highlight");
    flag = false;
  });
  //after click the set button, the timing event for counter will be stoped then restarted
  $("#restart").click(function(){
    if (!flag) {
      return;
    }
    count = 0;
    clearInterval(myCount);
    myCount = setInterval(function(){myTimer()},1000);
    flag = true;
  });
});
