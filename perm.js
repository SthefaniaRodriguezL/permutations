// create swap function
var swap = function(array, pos1, pos2) {
  // create a placeholder that holds the value that is swapping
      var temp = array[pos1];
  // swapping positon 1 to position 2 for the next combination
      array[pos1] = array[pos2];
 // swapping posittion 2 to position 1 for the next combination
      array[pos2] = temp;
};

//create permutation function
var permute1 = function (array, output, n) {
  // set n to the value of the arrays length
  n = n || array.length;
  //base case to tell it when to stop the recursion
  if(n === 1) {
    output(array);
  }else {
    //iterate through each element
    for(var i = 1; i <= n; i += 1) {
      // callback my previous function invoke the function
      permute1(array, output, n - 1);
      //base case
      //checking if it has any repeating integer set j to 1 else set j to one of my index
      if(n % 2) {
      // is what index I'll be switching positions
        var j = 1;
      }else {
      //marking the index
      // assign j to the first index
        var j = i;
      }
      //invoking the function and removing one of the index to place it in a different position
      swap(array, j - 1, n - 1);
    }
  }
};

var print = function(input) {
  console.log(input);
}

permute1([0,1,2], print);
