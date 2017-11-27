{
    var foo=1;
    function bar( ) {
    foo=10;
    return function foo() { };
    }
    bar()
    console.log(foo)
}

{
    var foo=1;
    function bar( ) {
    foo=10;
    return function foo() { };
    }
    bar( );
    console.log(foo);
}

{
    var a = 1;
    function fn() {
    console.log(a);
    var a = 2;
    }
    fn()
    console.log(a);
}

{
    var a = 1;
    function fn(a) {
    console.log(a);
    a = 2;
    }
    fn(a)
    console.log(a);
}