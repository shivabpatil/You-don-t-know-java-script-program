function solution6(S) {
  S = "(())"
  S = S.split("");
  var indStack = [];
  // indStack.push(-1);
  var splitcount = 0;
  var opencount = 0;
  console.log(""+S)
  for (var i = 0; i < S.length; i++) {
    if (S[i]=='(') {
       opencount++;
      // splitcount++;
      indStack.push(i);
    }
    if (S[i]==')') {
      indStack.pop(i)
      if(i<S.length){
        splitcount = Math.max(splitcount,i-indStack[indStack.length-1]);
      }else{
        indStack.push(i);
      }

    }
  }
  if(opencount == 0){
    console.log(S.length);
    return (S.length);
  }
  console.log(splitcount);
  return splitcount;
}
function solution7(A) {
  var result =0;
  for (var i = 0; i < A.length; i++) {
    result = result+A[i]*Math.pow(-2,i);
  }
  var bin = [];
  while (result> 0) {
  bin.unshift(result % -2);
  result << 1; // basically /= 2 without remainder if any
  }

console.log(bin.join(''));

}
function solution8() {
  console.log('sol 8');
}
