import React from 'react'
import { Slide, Heading, Appear, CodePane, Code, Text } from 'spectacle'
import { selector } from '../styles'

const quizCode = `<style>
#pageTitle {
  background-color: lightcoral;
}
h1 {
  background-color: lightblue;
}
.title {
  background-color: lightgreen;
}
</style>
<h1 id="pageTitle" class="title">Hello, world!</h1>`

export default (
  <Slide transition={['fade']}>
    <Heading size={3} textColor="orange">
      Specificity Quiz: #2
    </Heading>
    <Heading size={4} lineHeight={1.5}>
      What background color will the <Code>h1</Code> have?
    </Heading>
    <div style={selector}>
      <div style={{ fontSize: '1.25rem', margin: '0 auto' }}>
        <CodePane lang="html" source={quizCode} />
      </div>
      <Appear>
        <Text style={{ fontSize: '5rem', color: 'lightblue' }}>lightblue</Text>
      </Appear>
    </div>
    <Notes>
      <div style={{ fontSize: '2.25rem' }}>
        A little bit of a continuation of the previous question, but closer to a
        real world example.
      </div>
    </Notes>
  </Slide>
)
