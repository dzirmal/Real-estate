import React from 'react'
import { Hero, InfoSection } from '../../components'
import { Container } from '../../Helpers/globalStyle'
import { InfoData } from '../../Helpers/InfoData'
import { SliderData } from '../../Helpers/SliderData'

function Home() {
  return (
    <>
      <Hero slides={SliderData} />
      {InfoData.map((info, index) => (
        <InfoSection info={info} key={index} />
      ))}
    </>
  )
}

export default Home
