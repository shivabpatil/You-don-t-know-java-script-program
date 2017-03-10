// you can write to stdout for debugging purposes, e.g.
// console.log('this is a debug message');

function solution(A) {
    // write your code in JavaScript (Node.js 6.4.0)
    var indices=[];
    for(var i =0 ; i < A.length;i++){
        var sum1 = 0;
        var sum2 = 0
        for(var j = 0; j<i; j++){
            sum1 = sum1 + A[j];

        }
        for(var k = i+1; k<A.length; k++){
            sum2 = sum2 + A[k];

        }
        console.log(sum2);
        console.log(sum1);
        if(sum1 == sum2){
            indices.push(""+i);
        }
    }
    if (typeof indices !== 'undefined' && indices.length > 0){
        return indices;
        }
    else{
        return -1;
    }
}

function solution1() {
  var b = 5;
  console.log(b.toString(2));
  var str = b.toString(2)
  str = str.split("");
  var count =0;
  var temp = 1;
  for (var i = 0; i < str.length; i++) {
    if(str[i]=='0'){
        if(str[i-1] == str[i]){
          temp++;
        }else if(str[i-1] != str[i]){
          temp = 1;
        }
        if(temp>count && i < str.length-1 && str[i+1] == '1' ){
          // lastCount = count;
          count = temp;

        }
    }
  }
  console.log(count);
}

function solution2(A) {
var result;

  if(A.length == 1 || A.length == 0){

    return A;
  }else{
    for (var i = 0; i < A.length; i++) {
      result = result^A[i];
    }
    console.log(result);
  }
}
function solution3(A,k) {

  for(var i = A.length -1,j=k;j>0;i--,j--){
    let temp =   A.pop(A[i]);
    A.unshift(temp);
  }
  console.log(A);
}

function solution4(X,Y,D) {
  var dist = Y-X;
  if(dist == 0){
    console.log(dist);
    return dist;
  }else{
    if((dist%D == 0)){
      console.log(dist/D);
      return dist/D;
    }else{
      console.log(((dist-(dist%D))/D)+1);
      return (((dist-(dist%D))/D)+1);
    }
  }

}
function solution5(A) {
  var n = A.length +1 ;
  var sum1 = (n*(n+1))/2;
  var sum2 = 0;
  for (var i = 0; i < A.length; i++) {
    sum2 = sum2+ A[i];
  }
 return sum1-sum2;
}
