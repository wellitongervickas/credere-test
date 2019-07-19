export const validator = (func, el) => {
  const validation = func(el.value)
  el.setCustomValidity(validation)

  if (!el.checkValidity()) {
    el.classList.add('border-danger')
  } else {
    el.classList.remove('border-danger')
  }

  return el
}

export const maxToday = () => new Date().toISOString().split('T')[0]
