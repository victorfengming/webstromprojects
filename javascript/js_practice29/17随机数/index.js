console.log(Math);
document.write(Math+'<br>');
console.log(Math.constructor);

console.log('PI : '+Math.PI);
console.log('E : '+Math.E);

console.log('abs : '+Math.abs(10.45));
console.log('abs : '+Math.abs(-10.45));
console.log('sqrt : '+Math.sqrt(4));
console.log('sqrt : '+Math.sqrt(16));
console.log('sqrt : '+Math.sqrt(26));
console.log('max : '+Math.max(100, 345,67,23,12));
console.log('min : '+Math.min(100, 345,67,23,12));
console.log('floor : '+Math.floor(12.9));
console.log('ceil : '+Math.ceil(11.0001));
console.log('round : '+Math.round(11.0001));

document.write('随机数 : '+Math.random()+'<br>');
document.write('0-9随机数 : '+Math.floor(Math.random()*10)+'<br>');
document.write('0-10随机数 : '+Math.round(Math.random()*10)+'<br>');
//document.write('1-10随机数 : '+Math.ceil(Math.random()*10)+'<br>');

document.write('0-9随机数 : '+Math.floor(Math.random()*1000000000%10)+'<br>');
document.write('0-10随机数 : '+Math.round(Math.random()*1000000000%10)+'<br>');


//取 6-15的随机数
document.write('0-9随机数 : '+(Math.floor(Math.random()*1000000000%10)+6)+'<br>');