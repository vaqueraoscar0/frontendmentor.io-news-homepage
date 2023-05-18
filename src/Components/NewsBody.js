import '../App.css';
import imgNews1 from '../assets/images/image-retro-pcs.jpg'
import imgNews2 from '../assets/images/image-top-laptops.jpg'
import imgNews3 from '../assets/images/image-gaming-growth.jpg'
import imgEvent from '../assets/images/image-web-3-desktop.jpg'
import imgEvent2 from '../assets/images/image-web-3-mobile.jpg'
import {useEffect, useState} from "react";

function NewsBody() {
    const [isMobile, setIsMobile] = useState(false)

    const handleResize = () => {
        if (window.innerWidth < 550 || window.innerHeight < 667) {
            setIsMobile(true)
        } else {
            setIsMobile(false)
        }
    }

    useEffect(() => {
        window.addEventListener("resize", handleResize)
    },[])

    return (
        <div className="news">
            <div className={'news-preview'}>
                <img src={isMobile ? imgEvent2: imgEvent} alt={'game-event-news'}/>

                <div className={'news-preview-text'}>
                    <div className={'news-preview-h1-container'}>
                        <h1 className={'h1-news-preview'}>The Bright Future of Web 3.0?</h1>
                    </div>
                    <div className={'news-preview-text-button'}>
                        <p>We dive into the next evolution of the web that claims
                            to put the power of the platforms back into the hands of the people.
                            But is it really fulfilling its promise?</p>
                        <button>READ MORE</button>
                    </div>
                </div>

            </div>

            <div className={'news-released'}>
                <div className={'new-news-side-text'}>
                    <h1>New</h1>
                    <h2 className={'news-preview-text-h2'}>Hydrogen VS Electric Cars</h2>
                    <p className={'news-preview-text-p'}>Will hydrogen-fueled cars ever catch up to EVs?</p>
                </div>
                <hr/>
                <div className={'new-news-side-text'}>
                    <h2 className={'news-preview-text-h2'}>The Downsides of Al Artistry</h2>
                    <p className={'news-preview-text-p'}>What are the possible adverse effects of on-demand Al image generation?</p>
                </div>
                <hr/>
                <div className={'new-news-side-text'}>
                    <h2 className={'news-preview-text-h2'}>Is VC Funding Drying Up?</h2>
                    <p className={'news-preview-text-p'}>Private funding by VC firms is down 50% YOY. We take a look at what that means</p>
                </div>

            </div>

            <div className={'news-event-bottom'}>
                <div className={'new-news-1'}>
                    <img src={imgNews1} alt={'old-computer'}/>
                    <div className={'new-news-text'}>
                        <h1>01</h1>
                        <h2>Reviving Retro PCs</h2>
                        <p>What happens when old PCs are given modern upgrades?</p>
                    </div>
                </div>
                <div className={'new-news-1'}>
                    <img src={imgNews2} alt={'laptops'}/>
                    <div className={'new-news-text'}>
                        <h1>02</h1>
                        <h2>Top 10 Laptops of 2022</h2>
                        <p>Our best picks for various needs and budgets.</p>
                    </div>
                </div>
                <div className={'new-news-1'}>
                    <img src={imgNews3} alt={'game-controller'}/>
                    <div className={'new-news-text'}>
                        <h1>03</h1>
                        <h2>The Growth of Gaming</h2>
                        <p>How the pandemic has sparked fresh opportunities.</p>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default NewsBody;
