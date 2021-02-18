import React from 'react'
import { Container } from '../../Helpers/globalStyle'
import { Rectangle } from './About.elements'

function About() {
  return (
    <>
      <Container>
        <Rectangle drag>
          <h5>This is the About Page</h5>
        </Rectangle>
      </Container>
    </>
  )
}

export default About
