import { cocktailLists, mockTailLists } from "../../constant"
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/all";


const Cocktails = () => {

    useGSAP(()=> {
        gsap.timeline({
            scrollTrigger: {
                trigger: '#cocktails',
                start: 'top bottom',
                end: 'bottom 60%',
                scrub: 1
            }
        })
        .to('#c-left-leaf', {
            y: -200,
            x: -100
        }, 0)
        .to('#c-right-leaf', {
            y: -200,
            x: 100
        }, 0)
    })

  return (
    <section id='cocktails' className='noisy'>
        <img src="/images/cocktail-left-leaf.png" alt="" id="c-left-leaf" />
        <img src="/images/cocktail-right-leaf.png" alt="" id="c-right-leaf" />

        <div className="content">
            <div className="list flex justify-around">
                <div className="popular">
                    <h2>Most Popular Cocktails: </h2>
                    <ul>
                        {cocktailLists.map((element, i) => {
                            return (
                            <div>
                                <li key={i}>
                                    <div>
                                        <h3>{element.name}</h3>
                                        <p>
                                            {element.country} | {element.detail}{" "}
                                        </p>
                                    </div>
                                <span>-{element.price} </span>
                                </li>
                            </div>
                            );}
                        )}
                    </ul>
                </div>
                <div className="loved ">
                    <h2>Most Loved Mocktails: </h2>
                    <ul>
                        {mockTailLists.map((element, i) => {
                            return (
                            <div>
                                <li key={i}>
                                    <div>
                                        <h3>{element.name}</h3>
                                        <p>
                                            {element.country} | {element.detail}{" "}
                                        </p>
                                    </div>
                                <span>-{element.price} </span>
                                </li>
                            </div>
                            );}
                        )}
                    </ul>
                </div>
            </div>
        </div>

    </section>
  )
}

export default Cocktails