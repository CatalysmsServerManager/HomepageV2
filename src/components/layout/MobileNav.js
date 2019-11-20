import React from 'react'
import styled from 'styled-components'
import { motion, useCycle } from 'framer-motion'

const Container = styled(motion.div)`
  position: absolute;
  top:0;
  width: 100vw;
  height: 100vh;
  background-color: purple;
  z-index: 1;
`

export default function MobileNav(){

  return (
    <Container
      initial={false}
      animate={isOpen ? "open", "closed"}
      transition={{ ease: 'easeInOut', duration: 1 }}
    />
  )
}
