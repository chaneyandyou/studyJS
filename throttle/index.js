function throttle(fn, wait) {
  let prev = 0, timer = null

  return function(...args) {
    let now = +new Date()

    if (now - prev < wait) {
      if (timer) { clearTimerout(timer) }

      timer = setTimeout(() => {
        prev = now
        fn.apply(this, args)
      }, wait);
    } else {
      prev = now
      fn.apply(this, arge)
    }
  }
}