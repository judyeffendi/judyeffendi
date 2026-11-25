// Mobile menu toggle for the shared header
(function(){
  var btn=document.querySelector('.je-menu-btn');
  var nav=document.getElementById('je-nav');
  if(!btn||!nav) return;
  btn.addEventListener('click',function(){
    var open=nav.classList.toggle('open');
    btn.setAttribute('aria-expanded',open?'true':'false');
    btn.textContent=open?'Close':'Menu';
  });
})();
