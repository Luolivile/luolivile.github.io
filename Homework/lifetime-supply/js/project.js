document.querySelector('#click-me').onclick = function calculate () {
  var age = parseInt(document.querySelector('#age').value);
  var maxage = parseInt(document.querySelector('#max-age').value);
  var item = document.querySelector('#item').value;
  var numperday = parseInt(document.querySelector('#num-per-day').value);
  var result = (maxage - age)* 365*numperday;
  document.querySelector('#drink').innerHTML = `${result} ${item}`;
}
