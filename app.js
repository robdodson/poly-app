document.addEventListener('polymer-ready', function() {
  var time = document.getElementById('time');
  var interval = setInterval(function() {
    time.textContent = moment().format('MMMM Do YYYY, h:mm:ss a');
  }, 1000);

  var foo = document.querySelector('x-foo');
  foo.doSomething();
});
