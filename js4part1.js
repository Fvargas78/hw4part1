var sum_1a = 0;
var product_1a = 1;

for ( var number = 5; number <= 21; number += 4 )
{ 
  sum_1a += number;
  product_1a *= number;      
}

$('#result1').text(product_1a);
$('#result2').text(sum_1a);

var sum_1b = 0;
var product_1b = 1;
var number = 3;

while(number <= 21) {
  sum_1b += number;
  product_1b *= number; 
    
  number += 3;    
}


$('#result3').text(product_1b);
$('#result4').text(sum_1b);