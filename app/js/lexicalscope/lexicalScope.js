function foo4() {

  function foo(a) {
    var b = a * 5;
    function bar(c) {
      console.log(a,b,c);
    }
    bar(b * 2);
  }
  foo(2);
}
