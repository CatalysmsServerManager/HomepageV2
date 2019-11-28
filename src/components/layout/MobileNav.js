import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import { motion, useCycle } from 'framer-motion'

const Container = styled(motion.div)`
  position: absolute;
  top:0;
  left: 0;
  width:  100%;
  height: 100%;
  background-color: purple;
  z-index: 1;
`

export default function MobileNav({ isOpen, init }){

  return (
    <Container
      initial={init}
      isOpen={isOpen}
      transition={{ ease: 'easeInOut', duration: 1 }}
    />
  )
}

MobileNav.propTypes = {
  isOpen: PropTypes.bool.isRequired
}
