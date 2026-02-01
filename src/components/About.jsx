import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger, SplitText } from "gsap/all";

const About = () => {

    useGSAP(() => {

        const tlline = new SplitText('.ct', {type: 'lines'})

        gsap.timeline({
            scrollTrigger: {
                trigger: '#about',
                start: 'top bottom',
                end: 'bottom 60%',
                scrub: 1
            }
        })
        .from(tlline.lines, {
            y: 100,
            opacity: 0,
            stagger: 0.04,
            duration: 1,
            ease: 'power2.out'
        })
        .from('.top-grid img', {
            opacity: 0,
            stagger: 0.04,
            ease: 'power2.out'
        })
        .from('.bottom-grid img', {
            opacity: 0,
            stagger: 0.04,
            ease: 'power2.out'
        })
    })

  return (
    <>
      <section id="about">
        <div className="mb-16 md:px-0 px-5 flex justify-center">
          <div className="ct content flex gap-10 relative">
              <div className="md:col-span-8">
                <p className="badge">Best Cocktails</p>
                <h2>Where every detail matters—from muddle to garnish</h2>
              </div>
            </div>
            <div className="subcontent flex flex-col gap-4">
              <p>
                Every cocktail we serve is a reflection of our obsession with
                detail — from the first muddle to the final garnish. That care
                is what turns a simple drink into something truly
                memorable.{" "}
              </p>
              <div>
                <p className=" md:text-3xl text-xl font-bold">
                  <span className="text-yellow">4.5</span>/5
                </p>
                <p className="text-white-100 text-sm">
                  More than +12000 customers
                </p>
              </div>
            </div>
        </div>
        <div className="top-grid">
          <div className="md:col-span-3">
            <div className="noisy" />
            <img src="/images/abt1.png" alt="" className="noisy" />
          </div>
          <div className="md:col-span-3">
            <div className="noisy" />
            <img src="/images/abt2.png" alt="" className="noisy" />
          </div>
          <div className="md:col-span-6">
            <div className="noisy" />
            <img src="/images/abt3.png" alt="" className="noisy" />
          </div>
        </div>
        <div className="bottom-grid">
          <div className="md:col-span-8">
            <div className="noisy" />
            <img src="/images/abt4.png" alt="" className="noisy" />
          </div>
          <div className="md:col-span-4">
            <div className="noisy" />
            <img src="/images/abt5.png" alt="" className="noisy" />
          </div>
        </div>
      </section>
    </>
  );
}

export default About