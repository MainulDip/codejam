// Add any extra import statements you may need here


// Add any helper functions you may need here


function rotationalCipher(input, rotationFactor) {
    // Write your code here
    // get all the alphanumeric charecture
    var alpha = 'abcdefghijklmnopqrstuvwxyz'
    var num = '0123456789'
    var alpha_arr = alpha.split('')
    var num_arr = num.split('')
    // conver into array, and loop through every charecture
    var input_arr = input.split('');
    // (7+(-17 % 10)) % 10
    var poss = input_arr.map((i)=>{
      let res;
      let val;
      if(i.match(/^[a-zA-Z]$/)){
        let uCase = i === i.toUpperCase()
        i = i.toLowerCase()
        if(alpha_arr.indexOf(i) + rotationFactor >= 0){
          res = (alpha_arr.indexOf(i) + ( rotationFactor % alpha_arr.length )) % alpha_arr.length
          val = alpha_arr[res]        
        } else if (alpha_arr.indexOf(i) + rotationFactor < 0){
          res = (alpha_arr.indexOf(i) + ( rotationFactor % alpha_arr.length )) % alpha_arr.length
          val = res < 0 ? alpha_arr[res + alpha_arr.length] : alpha_arr[res]
        }
        
        return uCase ? val.toUpperCase() : val
        
      } else if (i.match(/^[0-9]$/)) {
        if(num_arr.indexOf(i) + rotationFactor >= 0){
          res = (num_arr.indexOf(i) + ( rotationFactor % num_arr.length )) % num_arr.length
          return num_arr[res] 
        } else if (num_arr.indexOf(i) + rotationFactor < 0){
          res = (num_arr.indexOf(i) + ( rotationFactor % num_arr.length )) % num_arr.length
          return res < 0 ? num_arr[res + num_arr.length] : num_arr[res]
        }
      } else {
        return i
      }
    })
    // check if alphanumeric
    // if alphanumeric add rotation factor else return as is
    // append new values into a new array and return
    return poss.join('');
  }
  
  
  
  
  
  
  
  
  
  
  // These are the tests we use to determine if the solution is correct.
  // You can add your own at the bottom.
  function printString(str) {
    var out = '["' + str + '"]';
    return out;
  }
  
  var test_case_number = 1;
  
  function check(expected, output) {
    var result = (expected == output);
    var rightTick = "\u2713";
    var wrongTick = "\u2717";
    if (result) {
      var out = rightTick + ' Test #' + test_case_number;
      console.log(out);
    }
    else {
      var out = '';
      out += wrongTick + ' Test #' + test_case_number + ': Expected ';
      out += printString(expected);
      out += ' Your output: ';
      out += printString(output);
      console.log(out);
    }
    test_case_number++;
  }
  
  var input_1 = "All-convoYs-9-be:Alert1.";
  var rotationFactor_1 = 4;
  var expected_1 = "Epp-gsrzsCw-3-fi:Epivx5.";
  var output_1 = rotationalCipher(input_1, rotationFactor_1);
  check(expected_1, output_1);
  
  var input_2 = "abcdZXYzxy-999.@";
  var rotationFactor_2 = 200;
  var expected_2 = "stuvRPQrpq-999.@";
  var output_2 = rotationalCipher(input_2, rotationFactor_2);
  check(expected_2, output_2);
  
  // Add your own test cases here
  
  var input_3 = "abcdefghijklmnopqrstuvwxyz";
  var rotationFactor_3 = 1;
  var expected_3 = "bcdefghijklmnopqrstuvwxyza";
  var output_3 = rotationalCipher(input_3, rotationFactor_3);
  check(expected_3, output_3);
  
  var input_4 = "0123456789";
  var rotationFactor_4 = 1;
  var expected_4 = "1234567890";
  var output_4 = rotationalCipher(input_4, rotationFactor_4);
  check(expected_4, output_4);  