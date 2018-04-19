import React from 'react'
import { Slide, Heading, Appear, CodePane, Text } from 'spectacle'
import { selector } from '../styles'

const quizCss = `<style>
h3  {
  color: lightcoral;
}

h3 {
  color: lightblue;
}

h2 { 
  color: lightgreen;
}
</style>
`

export default (
  <Slide transition={['fade']}>
    <Heading size={3} textColor="orange">
      Specificity Quiz: #3
    </Heading>
    <Heading size={4} lineHeight={1.5}>
      {`Given this CSS, what color will the <h3>s become?`}
    </Heading>
    <div style={selector}>
      <div style={{ fontSize: '1.25rem', maxWidth: 275, margin: '0 auto' }}>
        <CodePane lang="html" source={quizCss} />
      </div>
      <Appear>
        <Text style={{ fontSize: '5rem', color: 'lightblue' }}>lightblue</Text>
      </Appear>
    </div>
  </Slide>
)
