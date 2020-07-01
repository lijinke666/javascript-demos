function a() {
  var b = 1;
  function bb() {
    var b = 2;
    console.log(b);
  }
  bb();
}

a();
