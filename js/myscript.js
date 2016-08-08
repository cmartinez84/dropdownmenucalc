

var displayConversion = function(result) {
 document.getElementById("result").innerHTML = result;
};

var getData = function() {
  return parseFloat(document.getElementById('number').value)
}

var centi = function(){
  var num1 = getData();
  displayConversion(num1/10);
}

var liter = function(){
  var num1 = getData();
  displayConversion(num1/1000);
}

var kilo = function(){
  var num1 = getData();
  displayConversion(num1/10000);
}

var hella = function(){
  var num1 = getData();
  displayConversion("Hella Lot");
}
var clearField = function(){
  document.getElementById("number").innerHTML = "jk";
}
