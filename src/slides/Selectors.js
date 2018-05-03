import React from 'react'
import { Slide, Heading, Code, CodePane } from 'spectacle'
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
  </Slide>
)
