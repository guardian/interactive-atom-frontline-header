var el = document.createElement('script');
el.src = '<%= atomPath %>/sheetContent.js';
document.body.appendChild(el);


let frontlineNav = document.querySelector('.frontline-nav');
if (frontlineNav) {
  const articleEl = document.querySelector('#article');
  const headerEl = document.querySelector('.content__head');
  articleEl.insertBefore(frontlineNav, headerEl);
}


setTimeout(() => {
  if (window.resize) {
    const html = document.querySelector('html')
    const body = document.querySelector('body')

    html.style.overflow = 'hidden'
    html.style.margin = '0px'
    html.style.padding = '0px'

    body.style.overflow = 'hidden'
    body.style.margin = '0px'
    body.style.padding = '0px'

    window.resize()
  }
}, 100)
