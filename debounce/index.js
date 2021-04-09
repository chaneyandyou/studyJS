function debounce(fn, wait = 50, im) {
  let timer = null
  return function(...args) {
    if (timer) {
      clearTimeout(timer)
    }
    if (!timer && im) {
      fn.apply(this, args)
    }
    timer = setTimeout(() => {
      fn.apply(this, args)
    }, wait);
  }
}
