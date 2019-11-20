import React from 'react'
import styled from 'styled-components'
import { motion } from 'framer-motion'

const Container = styled(motion.div)`
  position: absolute;
  top:0;
  width: 100vw;
  background-color: purple;
  z-index: 1;
`

export default function MobileNav(){
  const variants = {
    hidden:   { height: 0 },
    visible:  { height: '100vh' }
  }
  return (
    <Container
      animate="visible"
      initial="hidden"
      transition={{ ease: 'easeInOut', duration: 1 }}
      variants={variants}/>
  )
}
