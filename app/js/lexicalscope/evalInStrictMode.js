function foo6() {
  function foo(str) {
    "use strict";
    eval(str);
    console.log(a);
  }
  foo("var a = 2;");
}

// when eval is strict mode it the scope is limmited to eval only it can not modify the
// scope of enclosing block. We will get an refernce error.
