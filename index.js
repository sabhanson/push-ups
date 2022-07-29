function dropAndGiveMe(pushups) {
  // this function accepts a variable called pushups as a "parameter"

  if (typeof pushups !== "number") {
    //checks that the argument passed in is actually a number, it must be a number for the rest of our code to work
    console.log("not a number, try again");
    return;
  }

  // the drill sargeant is yelling at the soldier and telling him to do the amount of pushups that was "passed in to the function"
  console.log(
    `DRILL SARGEANT: "You are a terrible soldier... Drop and give me ${pushups}!"`
  );

  // the soldier calls out every 2 seconds that they have done a pushup
  for (let index = 1; index <= pushups; index++) {
    setTimeout(function timer() {
      console.log(`SOLDIER: ${index}!`);
    }, index * 2000);
  }

  //after this change the picture to somebody tired
}

dropAndGiveMe(20);
