import React from 'react'
import { Slide, Heading, Appear, CodePane } from 'spectacle'

export default (
  <Slide transition={['fade']}>
    <Heading size={3} textColor="orange">
      Specificity Quiz: #2
    </Heading>
    <Heading size={4} lineHeight={1.5}>
      What is the weight of this selector?
    </Heading>
    <CodePane
      style={{ fontSize: '3rem' }}
      lang="css"
      source={`main#app .container { ... }`}
    />
    <Appear>
      <div style={{ fontSize: '5rem' }}>111</div>
    </Appear>
  </Slide>
)
