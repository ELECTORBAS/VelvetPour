import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger, SplitText } from "gsap/all";
import { useRef } from "react";
gsap.registerPlugin(ScrollTrigger, SplitText)

const Hero = () => {

    const videoRef = useRef();

    useGSAP(()=> {
        
        const titleSplit = new SplitText('.title', {type: 'chars'})
        const paraSplit = new SplitText('.subtitle', {type: 'lines'})
        titleSplit.chars.forEach(el => el.classList.add('text-gradient'))
        
        gsap.from(titleSplit.chars, {opacity: 0, y: 100, stagger: 0.05, duration: 1.8, ease: 'expo.out'})
        gsap.from(paraSplit.lines, {opacity: 0, y: 50, duration: 0.5, delay: 1})
        
        const tl = gsap.timeline({
            scrollTrigger: {
                trigger: '#hero',
                start: 'top top',
                end: 'bottom top',
                scrub: true
            }
        })

        tl.to('.left-leaf', {
            y: -200
        }, 0)
        tl.to('.right-leaf', {
            y: 200
        }, 0)

        const start = 'center 60%'
        const end = 'bottom top'

        const vidtl = gsap.timeline({
            scrollTrigger: {
                trigger: 'video',
                start: start,
                end: end,
                scrub: true,
                pin: true
            }
        })

        videoRef.current.onloadedmetadata = () => {
            vidtl.to(videoRef.current, {
                currentTime: videoRef.current.duration
            })
        }
        
    }, [])

  return (
    <>
      <section id="hero" className="noisy">
        <h1 className="title">MOHITO</h1>
        <img src="/images/hero-left-leaf.png" className="left-leaf" alt="" />
        <img src="/images/hero-right-leaf.png" className="right-leaf" alt="" />

        <div className="body">
          <div className="content">
            <div className="me-28 md:block hidden">
              <p>Cool. Crisp. Classic.</p>
              <p className="subtitle text-left">
                Sip the Spirit <br /> of Summer
              </p>
            </div>
            <div className="view-cocktails">
              <p className="subtitle">
                Every cocktail on our menu is a blend of premium ingredients,
                creative flair, and timeless recipes — designed to delight your
                senses.{" "}
              </p>
              <a href="#cocktails">View Cocktails</a>
            </div>
          </div>
        </div>
      </section>
      <div className="video absolute inset-0">
        <video src="/videos/output.mp4" ref={videoRef}
        playsInline muted preload="auto" />
      </div>
    </>
  );
}

export default Hero