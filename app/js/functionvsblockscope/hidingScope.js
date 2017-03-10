function foo8() {
  function doSomething(a) {
    function doSomethingElse(a) {
      return a-1;
    }
    var b;
    b = a + doSomethingElse(a*4);
    console.log(b*2);
  }
  doSomething(2);
}

// we can declare doSomethingElse out side the doSomething function but that will
// give access to that function also. We need to provide minimum access. The principle
// of least privilage. So to hide it we defined it inside function doSomething.
//
// Usin this we can also avoide collision between to different entity with same name

//Shadowing : create differnt scope with same identifier name 
