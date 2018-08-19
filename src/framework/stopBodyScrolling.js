let storedScroll = null;

export default flag => {
  if (flag) {
    storedScroll = window.scrollY;
    document.documentElement.classList.add('scroll_off');
    document.body.style.marginTop = `-${storedScroll}px`;
  } else {
    document.body.style.marginTop = null;
    document.documentElement.classList.remove('scroll_off');
    window.scrollTo(0, storedScroll);
  }
};
