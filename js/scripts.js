$(document).ready(function() {
  $("#formOne").submit(function(event) {
    const firstSide = parseInt($("#side1").val());
    const secondSide = parseInt($("#side2").val());
    const thirdSide = parseInt($("#side3").val());
    const resutls = (".results");
    
    if (firstSide === secondSide && secondSide === thirdSide && thirdSide === firstSide){
      $("#Equilateral").show();
      $("#Isosceles").hide();
      $("#Scalene").hide();
    } else if  (firstSide === secondSide || secondSide === thirdSide || thirdSide === firstSide){ 
      $("#Isosceles").show();
      $("#Equilateral").hide();
      $("#Scalene").hide();
    } else if (firstSide !== secondSide && secondSide !== thirdSide && thirdSide !== firstSide ){
      $("#Scalene").show();
      $("#Equilateral").hide();
      $("#Isosceles").hide();
    }   
     event.preventDefault();
  });
});