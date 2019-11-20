import React from 'react'
import styled from 'styled-components'
import { motion } from 'framer-motion'

import icon from '../../images/icon.svg'

const Container = styled(motion.div)`
  width: 50px;
  height: 50px;
  img{
    width: 50px;
    height: auto;
  }
`

export default function Loading(){
  return (
    <Container
      animate={{
        scale:  [1,2,2,1,1],
        rotate: [0, 0, 270, 270, 0]
      }}
      transition={{
        duration:     2,
        ease:         'easeInOut',
        times:        [0, 0.2, 0.5, 0.8, 1],
        loop:         Infinity,
        repeatDelay:  1
      }}>
      <img alt="Icon csmm" src={icon}/>
    </Container>
  )
}
