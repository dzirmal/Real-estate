import styled from 'styled-components'

export const Section = styled.div`
  width: 100%;
  height: 100%;
  padding: 4rem, 0rem;
`

export const InfoContainer = styled.div`
  width: 100%;
  height: 100%;
  max-width: 1400px;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 3rem calc((100vw - 1300px) / 2);
  border: 1px solid blue;
  /* display: grid;
  grid-template-columns: 1fr 1fr;
  grid-template-rows: 800px; */

  @media screen and (max-width: 768px) {
    grid-template-columns: 1fr;
  }
`

export const ColumnLeft = styled.div`
  display: flex;
  flex: 0.3;
  height: 
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  line-height: 1.4rem;
  padding: 1rem 2rem;
  order: ${({ reverse }) => (reverse ? '2' : '1')};
  border: 1px solid green;
`

export const Heading = styled.h1`
  margin-bottom: 1rem;
  font-size: clamp(1.5rem, 6vw, 2rem);
`

export const ParagraphOne = styled.p`
  margin-bottom: 2rem;
`

export const ParagraphTwo = styled.p``

export const ColumnRight = styled.div`
  display: flex;
  flex: 0.7;
  padding: 1rem 2rem;
  order: ${({ reverse }) => (reverse ? '1' : '2')};
  display: flex;
  justify-content: center;
  align-items: center;
  border: 1px solid red;

  @media screen and (max-width: 768px) {
    order: ${({ reverse }) => (reverse ? '2' : '1')};
  }
`
export const ImageOne = styled.img`
  width: 55%;
  height: 55%;
  object-fit: cover;

  @media screen and (max-width: 768px) {
    width: 90%;
    height: 90%;
  }
`

export const ImageTow = styled.img`
  width: 45%;
  height: 45%;
  object-fit: cover;

  @media screen and (max-width: 768px) {
    width: 90%;
    height: 90%;
  }
`
