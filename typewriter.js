const sentence = "hello there from lighthouse labs";


let delay = 0;
for (const char of sentence) {
  setTimeout(() => {
    process.stdout.write(char);
  }, delay);
  delay += 50; 
}

setTimeout(() => {
  process.stdout.write("\n");
}, delay);

// USING ARRAY
// let sentArr = sentence.split("");

//  sentArr.forEach((char, index) => {
  //    setTimeout(() => {
    //      process.stdout.write(char)
    //    }, 50 * (index + 1));
    //  })




// setTimeout(() => {
  
//   for (const char of sentence) {
//     process.stdout.write(char);
//   }
  
// }, 1000)