let count = 1000;
const repeat = function(){
setTimeout(() => {
  process.stdout.write('\r| HEllo world ');
}, count +=2000);
}
repeat('\r/ I love you ');
repeat('\r-  I can feel the life ');
repeat('\r\\ Love '); 
