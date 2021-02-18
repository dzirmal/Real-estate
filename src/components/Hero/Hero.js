import React, { useEffect, useRef, useState } from 'react'
import { Button } from '../Button/Button'
import {
  HeroContent,
  HeroImage,
  HeroSection,
  HeroSlide,
  HeroSlideButtonArrow,
  HeroSlider,
  HeroSlideTitle,
  HeroWrapper,
  NextArrow,
  PreArrow,
  SliderButtons,
  HeroSlidePrice,
} from './Hero.elements'
import {
  animationNext,
  animationPrev,
  transitionTwo,
} from '../Animations/index'

function Hero({ slides }) {
  const [current, setCurrent] = useState(0)
  const length = slides.length
  const timeout = useRef()
  const [next, setNext] = useState(false)

  // Slide Autoplay
  // useEffect(() => {
  //   const nextSlide = () => {
  //     setCurrent((current) => (current === length - 1 ? 0 : current + 1))
  //   }
  //   timeout.current = setTimeout(nextSlide, 5000)

  //   return function () {
  //     if (timeout.current) {
  //       clearTimeout(timeout.current)
  //     }
  //   }
  // }, [current, length])

  const nextSlide = () => {
    if (timeout.current) {
      clearTimeout(timeout.current)
    }
    setCurrent(current === length - 1 ? 0 : current + 1)
    setNext(true)
  }

  const prevSlide = () => {
    if (timeout.current) {
      clearTimeout(timeout.current)
    }
    setCurrent(current === 0 ? length - 1 : current - 1)
    setNext(false)
  }

  if (!Array.isArray(slides) || slides.length <= 0) return null

  return (
    <>
      <HeroSection>
        <HeroWrapper>
          {slides.map((slide, index) => {
            return (
              <HeroSlide key={index}>
                {index === current && (
                  <HeroSlider>
                    <HeroImage
                      src={slide.image}
                      initial='out'
                      animate='in'
                      exit='out'
                      variants={next ? animationNext : animationPrev}
                      transition={transitionTwo}
                    />
                    <HeroContent>
                      <HeroSlideTitle>{slide.title}</HeroSlideTitle>
                      <HeroSlidePrice>{slide.price}</HeroSlidePrice>
                      <Button
                        to={slide.path}
                        primary='true'
                        css={`
                          max-width: 160px;
                        `}>
                        {slide.label}
                        <HeroSlideButtonArrow />
                      </Button>
                    </HeroContent>
                  </HeroSlider>
                )}
              </HeroSlide>
            )
          })}
          <SliderButtons>
            <PreArrow onClick={prevSlide} />
            <NextArrow onClick={nextSlide} />
          </SliderButtons>
        </HeroWrapper>
      </HeroSection>
    </>
  )
}

export default Hero
