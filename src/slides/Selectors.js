import React from 'react'
import { Slide, Heading, Code, CodePane, Notes } from 'spectacle'
import SimpleTerminal from '../SimpleTerminal'
import { miniCard } from '../styles'

export default (
  <Slide transition={['fade']}>
    <Heading size={3}>Selectors</Heading>
    <div
      style={{
        display: 'flex',
        flexDirection: 'column',
        backgroundColor: '#222',
        borderRadius: 5
      }}
    >
      <div style={miniCard}>
        <div style={{ fontSize: '1.5rem' }}>
          <div>Elements</div>
          <div>Pseudo-elements</div>
        </div>
        <CodePane
          lang="css"
          source={`div,
div:after {}`}
        />
      </div>
      <div style={miniCard}>
        <div style={{ fontSize: '1.5rem' }}>
          Classes, attributes and{' '}
          <span style={{ whiteSpace: 'nowrap' }}>pseudo-classes</span>
        </div>
        <CodePane
          lang="css"
          source={`.className,
[disabled],
:hover {}`}
        />
      </div>
      <div style={miniCard}>
        <div style={{ fontSize: '1.5rem' }}>IDs</div>
        <CodePane lang="css" source={`#myIdentifier {}`} />
      </div>
      <div style={miniCard}>
        <div style={{ fontSize: '1.5rem' }}>Inline styles</div>
        <CodePane lang="html" source={`<p style="color: red;"></p>`} />
      </div>
      <div style={miniCard}>
        <div style={{ fontSize: '1.5rem' }}>Important</div>
        <CodePane
          lang="css"
          source={`p {
  background: black !important;
  color: white !important;s          
}`}
        />
      </div>
    </div>
    <Notes>
      <div style={{ fontSize: '2.25rem' }}>
        <p>Did that trip anyone up?</p>
        <p>
          To expect you to know the result without seeing the CSS applied to it
          in a browser is a little silly, but hopefully these examples weren't
          too complicated. I want to talk about these selectors so that we can
          be on the same page since this is the building block of CSS that we
          will be using all throughout this workshop.
        </p>
        <p>
          Lets review these selectors.
          <ul>
            <li>
              The least specific styles are <pre>element selectors</pre>.
            </li>
            <li>
              The next up are{' '}
              <pre>classes, attributes, and pseudo-elements</pre>. Can someone
              give me a definition of what a pseudo element is?
            </li>
            <li>
              Above that are ID selectors. Giving something a name makes things
              super clear, since IDs should be unique to the page.
            </li>
            <li>
              Sometimes you need to account for inline styles, because they have
              a pretty high specificity.
            </li>
            <li>
              Lastly, the `!important` declaration is a very interesting thing.
              Does anyone know where and why it came about?
            </li>
          </ul>
        </p>
      </div>
    </Notes>
  </Slide>
)
