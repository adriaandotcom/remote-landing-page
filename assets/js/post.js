'use strict';

function post() {
  var input = document.getElementById('email');
  var url = 'https://adriaan-telegram.herokuapp.com/notify/message';
  var request = new XMLHttpRequest();
  request.open('POST', url, true);
  request.setRequestHeader('Content-Type', 'application/json');
  request.send(JSON.stringify({
    message: input.value
  }));
  input.value = '';
}
