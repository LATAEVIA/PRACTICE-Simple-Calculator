var add = function(number1, number2) {
  return number1 + number2;
};

var sub = function(number1, number2) {
  return number1 - number2;
};


var mult = function(number1, number2) {
  return number1 * number2;
};


var divide = function(number1, number2) {
  return number1 / number2;
};

// $(function(){
//
//   $("#calculator").submit(
//     function(e){
//       e.preventDefault();
//       var one = parseInt($("#joe").val());
//       var two = parseInt($("#bob").val());
//
//       $("#output").text(add(one,two));
//     }
//   )

$(function(){

  $("#calculator").submit(
    function(e){
      var one = parseInt($("#joe").val());
      var two = parseInt($("#bob").val());

      if ($("select").val() == "add"){
        var result = add(one,two);
      }
      else if ($("select").val() == "subtract"){
        var result = sub(one,two)
      }
      else if ($("select").val() == "multiply"){
        var result = mult(one,two)
      }
      else if ($("select").val() == "divide"){
        var result = divide(one,two)
      }

      $("#output").text(result);

      e.preventDefault();
    }
  )
})
