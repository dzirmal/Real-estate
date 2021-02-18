import React from 'react'
import { Button } from '../Button/Button'
import {
  Section,
  ColumnLeft,
  ColumnRight,
  Heading,
  ParagraphOne,
  ParagraphTwo,
  ImageOne,
  ImageTow,
  InfoContainer,
} from './InfoSection.elements'

function InfoSection({
  info: {
    heading,
    paragraphOne,
    paragraphTwo,
    buttonLabel,
    imageOne,
    imageTwo,
    reverse,
  },
}) {
  return (
    <>
      <Section>
        <InfoContainer>
          <ColumnLeft reverse={reverse}>
            <Heading>{heading}</Heading>
            <ParagraphOne>{paragraphOne}</ParagraphOne>
            <ParagraphTwo>{paragraphTwo}</ParagraphTwo>
            <Button to='/homes' primary='true'>
              {buttonLabel}
            </Button>
          </ColumnLeft>
          <ColumnRight reverse={reverse}>
            <ImageOne src={imageOne} alt='home' />
            <ImageTow src={imageTwo} alt='home' />
          </ColumnRight>
        </InfoContainer>
      </Section>
    </>
  )
}

export default InfoSection
