function foo7() {
  function foo(obj) {
    with(obj){
      a = 5;
    }
  }
  var o1 = {
    a:2
  };
  var o2 = {
    b:3
  };
  foo(o1);
  console.log(o1.a);
  foo(o2)
  console.log(o2.a);
  console.log(a);
}


// with is used as short hand to access the properties of object. But is deprecated now
// with treats object as complete new lexical scope and properties as identifiers and creates
// hence if porperty is not there it is created in global scope. If used in strict mode it can not create
// global scope. 
