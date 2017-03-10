function foo3() {
  var b = a; // refrence error RHS lookup

}

// LHS lookUp fails global variable is created if not in strict mode. In sr=trict mode it
// give refernce error. RHS lookUp not found gives refernce error
