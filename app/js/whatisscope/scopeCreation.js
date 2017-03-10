function foo() {
  var a = 2;
  console.log(a);
}



// global scope is not created here. only local scope is created when a = 2 inside foo function
// the java scripts are running in strict mode here. var is not required to declare variable.
// but it always a good practice to use it.
//
// var a = 2; for compiler it is 2 statements first var a ; and second is a = 2
// Compiler asks scope if a is there if there then the value is assigned to it else the
// scope for a is created.
//   
