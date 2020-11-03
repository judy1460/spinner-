setTimeout(() => {
  process.stdout.write('\r| HEllo world ');
}, 1000);

setTimeout(() => {
  process.stdout.write('\r/ I love you ');
}, 3000);

setTimeout(() => {
  process.stdout.write('\r-  I can feel the life ');
}, 5000);

setTimeout(() => {
  // Need to escape the backslash since it's a special character.
  process.stdout.write('\r\\  end it  '); 
}, 7000);