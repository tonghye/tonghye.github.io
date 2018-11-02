function _toConsumableArray(arr) {if (Array.isArray(arr)) {for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) {arr2[i] = arr[i];}return arr2;} else {return Array.from(arr);}}var FourOhEight = new TimelineMax({ repeatDelay: 3 });
var typing = document.querySelector('.message--typing');
var left = document.querySelector('.message--left');
var avatar = document.querySelector('.header__member--server');
var messages = document.querySelectorAll(
'.message:not(.message--typing):not(.message--left)');

var msgDuration = 0.25;
var random = function random(max, min) {return Math.floor(Math.random() * (max - min + 1)) + min;};
var generateChatTL = function generateChatTL(messages) {
  var chatTL = new TimelineMax();
  var stagger = 0;var _loop = function _loop(
  m) {if (window.CP.shouldStopExecution(0)) return 'break';
    var message = messages[m];
    var differentRecipient =
    message.classList.contains('message--server') &&
    messages[m - 1] &&
    !messages[m - 1].classList.contains('message--server');
    if (
    m !== 0 &&
    m !== messages.length - 2 && (
    m === 5 || m === 6 || m === 7 || Math.random() > 0.5))
    {
      var deliberation =
      m === 5 || m === 6 || m === 7 ? Math.random() * 3 : Math.random();
      chatTL.set(typing, { display: 'flex' });
      chatTL.add(
      TweenMax.to(typing, deliberation, { display: 'none' }),
      stagger);

      stagger += deliberation;
    }
    chatTL.set(message, { scale: 0 });
    chatTL.add(
    TweenMax.to(message, msgDuration, {
      scale: 1,
      onStart: function onStart() {return message.style.display = 'flex';} }),

    stagger);

    var step = differentRecipient ? random(3, 1) : Math.random();
    if (m === messages.length - 4 || m === messages.length - 2)
    step = random(4, 2);
    stagger += m === 0 ? 2 : step;};for (var m = 0; m < messages.length; m++) {var _ret = _loop(m);if (_ret === 'break') break;
  }window.CP.exitedLoop(0);
  return chatTL;
};

FourOhEight.set([].concat(_toConsumableArray(messages), [left]), { display: 'none', scale: 0 }).
add(generateChatTL(messages)).
set(left, { scale: 0 }).
add(
TweenMax.to(left, msgDuration, {
  delay: 2,
  scale: 1,
  onStart: function onStart() {return left.style.display = 'flex';} })).


add(
TweenMax.to(avatar, msgDuration, {
  scale: 0 })).


repeat(-1);