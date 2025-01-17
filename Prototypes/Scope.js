var x = 10;
function foo() {
  console.log(x);
}
foo();
(function () {
  var x = 20;
  console.log(`from inside fn: ${x}`);
  foo();
})();

//O/P: 10   from inside fn: 20    10
// reason: foo() was created globally, so it remembers the variable x = 10 from global context(GEC) where it was defined, and ignores x = 20 from contxt it was called.