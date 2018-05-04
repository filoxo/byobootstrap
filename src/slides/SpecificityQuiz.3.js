import React from 'react'
import { Slide, Heading, Appear, CodePane, Code, Text, Notes } from 'spectacle'
import { selector } from '../styles'

const quizCss = `<style>
.content > p  {
  color: lightcoral;
}
</style>
<main>
  <p>1</p>
  <section class="content">
    <p>2</p>
  </section>
  <section>
    <p>3</p>
  </section>
  <footer class="content">
    <p>4</p>
    <div id="legal">
      <p>5</p>
    </div>
  </footer>
</main>
`

export default (
  <Slide transition={['fade']}>
    <Heading size={3} textColor="orange">
      Specificity Quiz: #3
    </Heading>
    <Heading size={4} lineHeight={1.5}>
      Which <Code>p</Code> elements will be lightcoral?
    </Heading>
    <div style={selector}>
      <div style={{ fontSize: '1rem', maxWidth: 400, margin: '0 auto' }}>
        <CodePane lang="html" source={quizCss} />
      </div>
      <Appear>
        <Text
          style={{
            fontSize: '3rem',
            fontWeight: 'bold',
            color: 'lightcoral',
            marginBottom: 0
          }}
        >
          2 and 4
        </Text>
      </Appear>
    </div>
    <Notes>
      <div style={{ fontSize: '2.25rem' }}>
        In this question, we have this bit of html. Which of these paragraph
        tags will be styled with the above css?
      </div>
    </Notes>
  </Slide>
)
