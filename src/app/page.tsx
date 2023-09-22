"use client"

import Image from 'next/image'
import {
  img1,
  img2,
  img3,
  img4,
  img5,
  img6,
  img7
} from '../Assets/Images/images'
import { images } from './Data'
import layers from '../Assets/Layers.svg'
import seabots from '../Assets/Seabots.svg'
import hemisphere from '../Assets/Hemisphere.svg'
import sbgSystems from '../Assets/SbgSystems.svg'
import layers2 from '../Assets/Layers2.svg'
import Header from '@/components/Header'
import Section from '@/components/Section'
import NavBar from '@/components/NavBar'
import Paragraph from '@/components/Paragraph'
import ActionButton from '@/components/ActionButton'
import Text from '@/components/Text'
import Slider from '@/components/Slider'
import Button from '@/components/Button'
import { useState, useEffect } from 'react'
import { features } from './Data'
import SlideShow from '@/components/SlideShow'
import SlideItem from '@/components/SlideItem'
import Footer from '@/components/Footer'
import ContentCtn from '@/components/ContentCtn'
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import { useTransition, animated, easings, useInView, useSpringRef, useSpring } from '@react-spring/web'
import Lights from '@/components/Lights'

export default function Home() {
  const [activeSlide, setActiveSlide] = useState(0)
  const [sliderX, setSliderX] = useState(0)
  const slideRef = useSpringRef()
  const lightsRef1 = useSpringRef()
  const lightsRef2 = useSpringRef()
  const [slideRight, slideRightSprings] = useInView(
    () => ({
      from: {x: -100, y: 0, opacity: 0, config: {duration: 750, tension: 170, friction: 26, easing: easings.easeInOutExpo} },
      to: {x: 0, y: 0, opacity: 1, config: {duration: 750, tension: 170, friction: 26, easing: easings.easeInOutExpo} }
    })
  )

  const [slideLeft, slideLeftSprings] = useInView(
    () => ({
      from: {x: 300, y: 0, opacity: 0, config: {duration: 1500, tension: 170, friction: 26, easing: easings.easeInOutExpo} },
      to: {x: 0, y: 0, opacity: 1, config: {duration: 1500, tension: 170, friction: 26, easing: easings.easeInOutExpo} }
    })
  )

  const movingLights1 = useSpring({
    loop: true,
    from: {filter: 'blur(100px)', opacity: '50%'},
    to: [
      {filter: 'blur(60px)', opacity: '70%'},
      {filter: 'blur(100px)', opacity: '50%'}
    ],
    config: { duration: 2000 }
  })

  const movingLights2 = useSpring({
    loop: true,
    from: {filter: 'blur(100px)', opacity: '50%', transform: 'translate(0px, 0px)'},
    to: [
      {filter: 'blur(60px)', opacity: '70%', transform: 'translate(50px, 100px)'},
      {filter: 'blur(100px)', opacity: '50%', transform: 'translate(0px, 0px)'},
    ],
    
    config: { duration: 2000 }
  })

  const movingLights3 = useSpring({
    loop: true,
    from: {filter: 'blur(100px)', opacity: '50%', transform: 'translate(0px, 0px)'},
    to: [
      {filter: 'blur(60px)', opacity: '70%', transform: 'translate(-100px, -200px)'},
      {filter: 'blur(100px)', opacity: '50%', transform: 'translate(0px, 0px)'},
    ],
    
    config: { duration: 5000 }
  })

  const movingLights4 = useSpring({
    loop: true,
    from: {filter: 'blur(100px)', opacity: '50%', transform: 'translate(0px, 0px)'},
    to: [
      {filter: 'blur(60px)', opacity: '70%', transform: 'translate(50px, -200px)'},
      {filter: 'blur(100px)', opacity: '50%', transform: 'translate(0px, 0px)'},
    ],
    
    config: { duration: 3000 }
  })
  
  const fadeInOut = useTransition(activeSlide, {
    ref: slideRef,
    keys: null,
    from: {opacity: 1, transform: 'scale(0.5)'},
    enter: {opcaity: 1, transform: 'scale(1)'},
    leave: {opacity: 0, transform: 'scale(0.5)'}
  })

  useEffect(() => {
    console.log("slide change")
    slideRef.start()
  }, [activeSlide])

  return (
    <main className="relative">
      <NavBar />
      <div className="absolute h-fit w-[100%] flex flex-col">
        <Section image={img1} zIndex={1} translateY={0}>
          <ContentCtn>
            <Paragraph top={125}>
              <div>
                <Header fontSize={20}>SEA IT ALL</Header>
                <Header fontSize={42}>
                  MULTIBEAM SONER <br /> PRODUCT & SOLUTIONS.
                </Header>
              </div>
            </Paragraph>
          </ContentCtn>
        </Section>
        <Section image={layers} zIndex={2} translateY={-200} layers>
          <div className='absolute block sm:flex items-center justify-between sm:w-[70%] sm:right-0 top-0 mx-8 sm:mt-16'>
              <div className='block sm:flex items-center justify-between sm:w-[70vw]'>
                <Text>WASSP multi-beam enables<br/>sustainable fishing, exploration, and<br/>surverys with versatility and detail.</Text>
                <ActionButton>Contact Us</ActionButton>
              </div>
          </div>
          <div className='absolute top-[280px] sm:top-0 sm:bottom-0 sm:right-[10%] sm:m-auto z-[10] sm:h-fit mx-4 sm:max-w-[800px]' id="about">
              <animated.div ref={slideRight} style={slideRightSprings}>
                <Header fontSize={34}>WELCOME TO THE WORLD OF WASSP MULTIBEAM</Header>
              </animated.div>
            <div className='block sm:flex items-start justify-between mt-8'>
              <animated.div ref={slideRight} style={slideRightSprings} className='mb-8'>
                <Header fontSize={14} small='true'>01<span className="ml-16">ABOUT</span></Header>
              </animated.div>

              <animated.div ref={slideLeft} style={slideLeftSprings} className='max-w-[400px]'>
                <Text>WASSP, a powerful multibeam sounder with 120-degree coverage and models for deep exploration, offers unparalleled accuracy, detail, and versatility. Target fish with steerable sounders, generate real-time 3D charts, map fish in water, and make better decisions with the user-friendly advanced mode.</Text>
                <ActionButton>Our Story</ActionButton>
              </animated.div>
            </div>
          </div>
          <div className='bottom-[60px] absolute z-[20] mx-4 sm:hidden'>
            <Header fontSize={42}>F - SERIES</Header>
            <Header fontSize={14} small='true'>
              <div className='flex items-center'>
                <span>01</span>
                <div className="w-[110px] h-[1px] border-t border-gray-300 mx-2"/>
                <span>03</span>
              </div>
            </Header>
          </div>
        </Section>
        <Section image={img2} zIndex={1} translateY={-600}>

        </Section>
        <Section image={layers2} zIndex={2} translateY={-800} layers secondLayer>
          <animated.div className='absolute w-[250px] h-[250px] bg-[#364A58] z-[10] top-[60%] left-[30%]' style={movingLights1}>
            {/* <Lights top={0} left={0} blur={50} zIndex={10}/> */}
          </animated.div>
          <div className='absolute top-[50px] block mx-4 sm:mx-0 sm:flex sm:top-0 w-auto sm:w-[100%] items-center justify-between'>
            <div className='hidden sm:block mx-4'>
              <Header fontSize={14} small='true'>01<span className='mx-16'/>03</Header>
              <Header fontSize={14} small='true'>(FISHING SERIES)</Header>
              <Header fontSize={50}>F - SERIES</Header>
            </div>
            <div className='max-w-[350px] sm:mx-4'>
              <Text>F - SERIES</Text>
              <Text>WASSP Multibeam finds fish and habitat over a wider area than single-beam systems</Text>
              <a><span className="underline text-white text-[12px]">Explore Now</span></a>
            </div>
          </div>
          <div className='absolute top-[275px] z-[20] w-[100%] buttonSlider:bottom-0 buttonSlider:mt-[10%] overflow-x-hidden h-[100%] buttonSlider:flex justify-between mt-8 items-start'>
            <div className='flex-[1] ml-4'>
              <Header fontSize={14} small='true'>03<span className="ml-16">OUR CAPABILITIES</span></Header>
            </div>
            <div className='flex-[2] w-[100%] ml-4'>
              <Slider>
                {features.map((feature, i) => (
                  <Button key={i} changeState={() => setActiveSlide(i)} activeSlide={activeSlide === i}>
                    <div className='flex items-center'>
                      <Header fontSize={16} small='true' activeSlide={activeSlide === i}>0{i + 1}</Header>
                      <p className='ml-4 text-[12px]'>{feature.title}</p>
                    </div>
                  </Button>
                ))}
              </Slider>
              {
                <div>
                  {fadeInOut((style, i) => {
                    const slide = features[i]
                    return (
                      <animated.div className='mr-8 sm:m-4 sm:mr-16 absolute' style={style}>
                        <p className='text-white mb-4'>0{activeSlide + 1}</p>
                        <p className='text-white text-[30px] sm:text-[48px]'>{slide.title}</p>
                        <p className='text-white text-[12px]'>
                          {slide.desc}
                        </p>
                      </animated.div>
                    )
                  })}
                </div>
              }
            </div>
          </div>
        </Section>
        <div className='bg-background h-fit -mt-[800px] overflow-x-hidden relative'>
          <animated.div className='absolute w-[250px] h-[250px] bg-[#364A58] z-[0] top-[10%] left-[0%]' style={movingLights2}>
          </animated.div>
          <animated.div className='absolute w-[250px] h-[250px] bg-[#364A58] z-[0] top-[25%] left-[90%]' style={movingLights3}>
          </animated.div>
          <animated.div className='absolute w-[250px] h-[250px] bg-[#364A58] z-[0] top-[45%] left-[0%]' style={movingLights4}>
          </animated.div>
            <SlideShow>
              <Header fontSize={32}><span className='whitespace-nowrap mx-2'>GPA SEABOTS</span></Header>
              <div className='rounded-full border border-gray-400 p-2 flex items-center justify-center w-[65px] mx-4 sm:w-[100px] sm:px-4 sm:py-3'>
                <Image src={seabots} alt="seabots"/>
              </div>
              <Header fontSize={32}><span className='whitespace-nowrap mx-2'>HEMISPHERE</span></Header>
              <div className='rounded-full border border-gray-400 p-2 flex items-center justify-center w-[65px] mx-4 sm:w-[100px] sm:px-4 sm:py-3'>
                <Image src={hemisphere} alt="hemisphere" />
              </div>
              <Header fontSize={32}><span className='whitespace-nowrap mx-2'>SBG SYSTEMS</span></Header>
              <div className='rounded-full border border-gray-400 p-2 flex items-center justify-center w-[65px] mx-4 sm:w-[100px] sm:px-4 sm:py-3'>
                <Image src={sbgSystems} alt="sbgSystems"/>
              </div>
            </SlideShow>
            <div className='mx-4 mt-[7rem] block sm:flex'>
              <div className='flex-[1]'>
                <Header fontSize={14} small='true'>04<span className="ml-16">TESTIMONIALS</span></Header>
              </div>
              <div className='flex-[2] mr-4 mt-8'>
                <Header fontSize={32}>"WASSP LETS ME GO TO WHERE I WOULD NEVER HAVE FISHED BEFORE, GIVING ME A HIGHER VALUE CATCH, WITH REDUCED FUEL CONSUMPTION."</Header>
                <Text>Dominique Faou<br/>Owner/Skipper, France</Text>
              </div>
            </div>
            <div className='mt-[7rem] mx-4 pb-8 block'>
              <div className='block sm:flex'>
                <div className='flex-[1]'>
                  <Header fontSize={14} small='true'>05<span className="ml-16">LASTEST NEWS</span></Header>
                </div>
                <div className='mt-8 w-[100%] overflow-x-auto no-scrollbar mb-[8rem] flex-[2] relative'>
                  <div className='flex w-max items-center overflow-x-auto no-scrollbar' style={{transform: `translateX(${sliderX}px)`, transition: 'all 0.5s ease'}}>
                    <SlideItem image={img3} alt="img3">
                      South Pacific repons for superyachets, a top charter spot.
                    </SlideItem>
                    <SlideItem image={img4} alt="img4">
                      WASSP'S Bluebeam brings major feature advancements
                    </SlideItem>
                    <SlideItem image={img5} alt="img5">
                    Proin rhoncus mi eget leo consequat ullamcorper.
                    </SlideItem>
                    <SlideItem image={img6} alt="img6">
                    Proin rhoncus mi eget leo consequat ullamcorper.
                    </SlideItem>
                    <SlideItem image={img7} alt="img7">
                    Proin rhoncus mi eget leo consequat ullamcorper.
                    </SlideItem>
                  </div>
                  <div className='absolute right-0 top-0 w-[100px] h-[100%] bg-gradient-to-l from-[#08142c] to-transparent items-center justify-center cursor-pointer hidden sm:flex' onClick={() => setSliderX(sliderX <= -900 ? -900 : sliderX - 250)}>
                    <ArrowForwardIcon style={{color: 'white'}}/>
                  </div>
                  <div className='absolute left-0 top-0 w-[100px] h-[100%] bg-gradient-to-r from-[#08142c] to-transparent items-center justify-center cursor-pointer hidden sm:flex' onClick={() => setSliderX(sliderX >= 0 ? 0 : sliderX + 250)}>
                    <ArrowBackIcon style={{color: 'white'}}/>
                  </div>
                </div>
              </div>

              <div className='mb-[6rem]'>
                <SlideShow images>
                  {images.map((image, i) => {
                      return (
                        <div className='w-[100px] h-[100px] my-0 mx-2' key={i.toString()} >
                          <div 
                            className='absolute top-0 left-0 h-[14px] w-[100%] z-[5]' 
                            style={{backgroundImage: `linear-gradient(180deg, rgba(8, 20, 44, 0.2), rgba(8, 20, 44, 0))`}}
                          />
                          <Image 
                            src={image} 
                            alt={i.toString()} 
                            style={{
                              width: '100px', 
                              height: '100px', 
                              objectFit: 'cover', 
                              margin: '0 0.5rem',
                              zIndex: 1
                            }}/>
                            <div 
                            className='absolute bottom-0 left-0 h-[14px] w-[100%] z-[5]' 
                            style={{backgroundImage: `linear-gradient(180deg, rgba(8, 20, 44, 0), rgba(8, 20, 44, 0.2))`}}
                          />
                        </div>
                      )
                    })}
                </SlideShow>
              </div>
            </div>
            <Footer />
        </div>
      </div>
    </main>
  )
}
