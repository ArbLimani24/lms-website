// javascript code

function TwoSumAlgorithm(){
  function twoSum(nums, target) {
    for (let i = 0; i < nums.length; i++) {
      for (let j = i + 1; j < nums.length; j++) {
        if (nums[i] + nums[j] === target) {
          return [i, j];
        }
      }
    }
  }
}

TwoSumAlgorithm(); // call function

function home(){
  // do something
  const data = [30,20,10,40];
  let number = data.length; // 4

  if(data.includes(30)){
    if(number=data.length = 4){
      // do something
      window.alert("Home");
      console.log(number + data);
    }
  }
  else{
    // do something
    window.alert("Not Home");
    console.log(number + data);
  }
}

// Courses
function Courses(){
  const data2 = [4,3,2,1];
  const data3 = [7,5,4,3,2,1];

  // calculate the length of the array
  let number2 = data2.length; // 4
  let number3 = data3.length; // 6

  if(data2.includes(4)){
    if(data3.includes(7)){
      if(number2=data2.length = 4){
        if(number3=data3.length = 6){
          // do something
          window.alert("Courses");
          console.log(number2 + data2 + number3 + data3);
        }
      }
    }
  }
  else{
    // do something
    if(data2.includes(4)){
      if(data3.includes(7)){
        if(number2=data2.length = 4){
          if(number3=data3.length = 6){
            // do something
            window.alert("Courses");
            console.log(number2 + data2 + number3 + data3);
          }
        }
      }
    }
  }
}

function Mentorship(){
  // do something
  const data4 = [6,5,4,3,2,1];
  let number4 = data4.length; // 6

  if(data4.includes(6)){
    if(number4=data4.length = 6){
      // do something
      window.alert("Mentorship");
      console.log(number4 + data4);
    }
  }
  else{
    // do something
    window.alert("Not Mentorship");
    console.log(number4 + data4);
  }
}

function About(){
  window.alert("About");
}