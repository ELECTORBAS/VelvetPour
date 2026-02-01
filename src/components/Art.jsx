import { useMediaQuery } from 'react-responsive'
import {featureLists, goodLists } from '../../constant.js'
import { useGSAP } from '@gsap/react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/all'

const Art = () => {

  const isMobile = useMediaQuery({maxWidth: 767})

  useGSAP(()=> {
    const start = isMobile ? 'top 20%' : 'top top'

    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: '#art',
        start: start,
        end: 'bottom center',
        scrub: 1.5,
        pin: true
      }
    })
    .to('.will-fade', {
      opacity: 0,
      stagger: 0.2,
      ease: 'power1.inOut'    
    })
    .to('.masked-img', {
      scale: 1.3,
      maskPosition: 'center',
      maskSize: '400%',
      duration: 1,
      ease: 'power1.inOut'    
    })
    .to('#masked-content', {
      opacity: 1,
      duration: 1,
      ease: 'power1.inOut'
    })
  })

  return (
    <section id="art">
      <div className="container mx-auto h-full pt-20">
        <h2 className="will-fade">The ART</h2>
        <div className="content">
          <ul className='will-fade space-y-4'>
            {goodLists.map((item, i) => (
              <li key={i} className='flex items-center gap-2.5'>
                <img src="/images/check.png" alt="" />
                <p>{item}</p>
              </li>
            ))}
          </ul>

          <div className='cocktail-img'>
            <img
            src="/images/under-img.jpg" alt="" 
            className='masked-img absolute abs-center size-full object-contain'
            />
          </div>

          <ul className='will-fade space-y-4'>
            {featureLists.map((item, i) => (
              <li key={i} className='flex items-center justify-start gap-2.5'>
                <img src="/images/check.png" alt="" />
                <p className='md:w-fit w-60'>{item}</p>
              </li>
            ))}
          </ul>
        </div>
        <div className='masked-container'>
          <h2 className='will-fade'>Sip-Worthy Perfection</h2>
          <div id="masked-content">
            <h3>Made with Craft, Poured with Passion</h3>
            <p>This isn't just a drink. It's carefully crafted moment made just for you.</p>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Art