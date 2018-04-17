import React from 'react'
import { Slide, Heading, Appear, CodePane } from 'spectacle'

const quizCss = `<style>
h3  {
    color: red;
}

h3 {
  color: blue;
}

h2 { 
  color: green;
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
    <div style={{fontSize: '1.25rem', maxWidth: 225, margin: '0 auto'}}>
      <CodePane lang="html" source={quizCss} />
    </div>
    <Appear>
      <div
        style={{ fontSize: '5rem', color: 'blue', textShadow: '0 0 5px #fff' }}
      >
        Blue!
      </div>
    </Appear>
  </Slide>
)
