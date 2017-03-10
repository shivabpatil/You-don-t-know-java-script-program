function foo2() {
  var a = 3;
  foo();
  function foo() {
    var b = 4;
    bar();
    function bar() {
      var c = 5;
      console.log(a);
      console.log(b);
      console.log(c);
    }
  }
}


//nested scope: a is available to inner scopes. Also can look it as closure. 
