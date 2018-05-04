import React from 'react'
import { Slide, Heading, Text, Appear, Notes } from 'spectacle'

export default (
  <Slide transition={['fade']}>
    <Heading size={2} lineHeight={1.3} textColor="heading">
      What you get
    </Heading>
    <Appear>
      <Text>Your brand > Bootstrap</Text>
    </Appear>
    <Appear>
      <Text>Control</Text>
    </Appear>
    <Appear>
      <Text>Experience</Text>
    </Appear>
    <Notes>
      <div style={{ fontSize: '2.25rem' }}>
        <p>
          Just before we get started, I wanted to give you some reasons why
          doign through all this effort is worth it. Of course, all of you are
          here already; this is something you want to tackle. But sometimes you
          need to make a business case in order for an effort like this to gain
          traction and be allowed to grow.
        </p>
        <p>
          1. Building from the ground up gives you the opportunity to build
          something greater and better than Bootstrap. Maybe it doesn't have all
          the bells and whistles, but it can be entirely yours. Your brand, your
          image, your user's best experience.
        </p>
        <p>
          2. When you adopt a framework, you're often adopting a suite of
          decisions, tradeoffs, and opinions (like we've already mentioned).
          Sometimes, that framework solves 90% of your needs, sometimes less.
          Building your own could take just as much time but gives you 100%
          control of the end product.
        </p>
        <p>
          3. Experience. An informal survey of my network of developers shows
          that less than 10% have created what they would call a framework; more
          than 64% have contributed to one; and every single one has used one.
          No surprise on that last one, I'd guess. But being involved in the
          architecture, design, and implementation of a framework is a very
          valuable experience.
        </p>
      </div>
    </Notes>
  </Slide>
)
