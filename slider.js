let arr = ['images/slider/1.jpeg', 'images/slider/2.jpeg', 'images/slider/3.jpeg', 'images/slider/4.jpeg', 'images/slider/5.jpeg', 'images/slider/6.jpg']
let slider = document.getElementById('slider')
let n = 0
setInterval(() => {
    n = (++n) % 6
    slider.style.transitionDuration = '2s'
    slider.style.backgroundImage = "url(" + arr[n] + ")"
}, 2000)


// obfuscated code 




// function _0x3196() { const _0x2d95e4 = ['images/slider/2.jpeg', 'getElementById', '2039276xdaYTg', '539iMlVKh', 'images/slider/5.jpeg', 'images/slider/6.jpg', '3214436sZunid', 'images/slider/3.jpeg', '3501KWpOjJ', '1288otQlhE', 'style', '1982885jFElbx', 'slider', '234sVgogc', 'url(', '987636lqvrGs', 'images/slider/4.jpeg', '1183432oAtnda']; _0x3196 = function () { return _0x2d95e4; }; return _0x3196(); } const _0x1164f3 = _0x42bf; (function (_0x1f0abd, _0x5a75c0) { const _0x28f8f1 = _0x42bf, _0x39d925 = _0x1f0abd(); while (!![]) { try { const _0x2a0948 = -parseInt(_0x28f8f1(0x93)) / 0x1 + parseInt(_0x28f8f1(0x96)) / 0x2 + -parseInt(_0x28f8f1(0xa3)) / 0x3 + parseInt(_0x28f8f1(0x9a)) / 0x4 + parseInt(_0x28f8f1(0x9f)) / 0x5 + -parseInt(_0x28f8f1(0xa1)) / 0x6 * (parseInt(_0x28f8f1(0x97)) / 0x7) + -parseInt(_0x28f8f1(0x9d)) / 0x8 * (parseInt(_0x28f8f1(0x9c)) / 0x9); if (_0x2a0948 === _0x5a75c0) break; else _0x39d925['push'](_0x39d925['shift']()); } catch (_0x3bef66) { _0x39d925['push'](_0x39d925['shift']()); } } }(_0x3196, 0x9ca0c)); function _0x42bf(_0xf9b51, _0x3941d9) { const _0x3196eb = _0x3196(); return _0x42bf = function (_0x42bfc4, _0x2f9b72) { _0x42bfc4 = _0x42bfc4 - 0x92; let _0x575c0b = _0x3196eb[_0x42bfc4]; return _0x575c0b; }, _0x42bf(_0xf9b51, _0x3941d9); } let arr = ['images/slider/1.jpeg', _0x1164f3(0x94), _0x1164f3(0x9b), _0x1164f3(0x92), _0x1164f3(0x98), _0x1164f3(0x99)], slider = document[_0x1164f3(0x95)](_0x1164f3(0xa0)), n = 0x0; setInterval(() => { const _0x56f578 = _0x1164f3; n = ++n % 0x6, slider[_0x56f578(0x9e)]['transitionDuration'] = '2s', slider[_0x56f578(0x9e)]['backgroundImage'] = _0x56f578(0xa2) + arr[n] + ')'; }, 0x7d0);