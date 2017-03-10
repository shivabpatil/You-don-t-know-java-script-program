function foo1() {
    function foo(a) { //
      var b = a ; // LHS lookup for b nd RHS lookup for a
      return a+b;  // RHS lookup for a and b
    }
    var c = foo(2);   // LHS lookup for c  and LHS lookup for a. RHS lookup for foo
    console.log(c); // RHS lookup for c
}


// 2 types of lookup. Left hand side LHS and right hand side RHS lookup.
// LHS is for container or target of assignment and RHS is for value or source of assignment
// RHS is also needed to lookup the function when it is called.
