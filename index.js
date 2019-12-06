var btn = document.getElementById('action');

btn.addEventListener('click', throttle(letsDoIt, 1000));

function throttle(fn, time) {
  var isThrottle = false;
  return function () {

    if (!isThrottle) {
      fn();
      isThrottle = true;
      setTimeout(function () {
        isThrottle = false;
      }, time);
    }

    return;
  };
}

function debounce(fn, time) {
  var timerId;
  return function () {
    clearTimeout(timerId);
    timerId = setTimeout(function () {
      fn()
    }, time);
  }
};


function letsDoIt() {
  console.log("It's working");
};


