const wrap = document.querySelector('.wrapper');
const log = document.querySelector('.log-link');
const reg = document.querySelector('.reg-link');
const btnLog = document.querySelector('.btnLogin');
const closer = document.querySelector('.close');
reg.addEventListener('click', ()=> {
    wrap.classList.add('active');
});
log.addEventListener('click', ()=> {
    wrap.classList.remove('active');
});
btnLog.addEventListener('click', ()=> {
    wrap.classList.add('active-open');
});
closer.addEventListener('click', ()=> {
    wrap.classList.remove('active-open');
});