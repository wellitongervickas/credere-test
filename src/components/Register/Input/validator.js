const validator = (fn, el) => {
  const validation = fn(el.value)
  el.setCustomValidity(validation)

  if (!el.checkValidity()) {
    el.classList.add('border-danger')
  } else {
    el.classList.remove('border-danger')
  }

  return el
}

export default validator
