function typeInJs() {
  var a ;
  console.log(typeof a);
  a = 24;
  console.log(typeof a);
  a = "Hello";
  console.log(typeof a);
  a = null;
  console.log(typeof a);
  a = undefined;
  console.log(typeof a);
  a = {b:45};
  console.log(typeof a);
}

function objectAccess() {
  var obj = {
    a:"Akuna Mata Ta",
    b: 3,
    c: 126.43
  };

  console.log(obj.a);
  console.log(obj.b);
  console.log(obj.c);

  //Access property using index
  console.log(obj["a"]);
  console.log(obj["b"]);
  console.log(obj["c"]);

  // used only when property name has special charaters like "yoyo!!"

  // index need to be string literal or variable example as follows

  var b = "a";
  console.log(obj[b]);  // translates as obj["a"] as b = "a"

}

function arrayObjects() {
  var a = [1,"hello",2.45];
  console.log(a[0]);
  console.log(a[1]);
  console.log(a[2]);
  console.log(typeof a); // array is special object. So it has few
                        //default properties and functions.
}

function implicitCoercion() {
  var c = "15";
  console.log(typeof c);
  console.log(c);
  c = c*1;            // can also be done using division and substraction
                      // but not for addition
  console.log(typeof c);
  console.log(c);
}
