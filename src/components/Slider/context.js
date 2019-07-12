import React, { createContext, useState, useEffect } from 'react'
import PropTypes from 'prop-types'

const SliderContext = createContext({
  activatedSlider: 0,
  maxSlider: 0,
  setMaxSlider: () => {},
  setActivatedSlider: () => {},
})

const SliderContextProvider = ({ children, count }) => {
  const [activatedSlider, setActivatedSlider] = useState(0)
  const [maxSlider, setMaxSlider] = useState(0)

  useEffect(() => {
    setMaxSlider(count)
  }, [setMaxSlider, count])

  return (
    <SliderContext.Provider value={{
      activatedSlider,
      maxSlider,
      setMaxSlider,
      setActivatedSlider,
    }}
    >
      {children}
    </SliderContext.Provider>
  )
}

SliderContextProvider.propTypes = {
  children: PropTypes.node.isRequired,
  count: PropTypes.number,
}

SliderContextProvider.defaultProps = {
  count: 1,
}

export {
  SliderContextProvider,
}

export default SliderContext
