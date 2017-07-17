(function (doc, win) {
  let docEl = doc.documentElement,
    resizeEvt = 'orientationchange' in window ? 'orientationchange' : 'resize',
    recalc = function () {
      let clientWidth = docEl.clientWidth;
      console.log("clientWidth"+clientWidth)
      if (!clientWidth) return;
      // let _size =(clientWidth*2 / 10);
      let _size = 20 * (clientWidth / 375);
      if (_size > 75) _size = 75
      docEl.style.fontSize = _size + 'px';
    };
  if (!doc.addEventListener) return;
  win.addEventListener(resizeEvt, recalc, false);
  doc.addEventListener('DOMContentLoaded', recalc, false);
})(document, window);
