import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader

const Banner =  () => {

    return(
        <div className="relative">

            <div className="absolute w-full h-32 bg-gradient-to-t from-gray-100 to-transparent bottom-0 z-20"> 
            </div>


            <Carousel
                className="z-0"
                autoPlay
                infiniteLoop
                showStatus={false}
                showIndicators={false}
                showThumbs={false}
                interval={5000}
            >
                <div>
                    <img loading="lazy" src="/car1.jpg" alt="" />
                </div>
                <div>
                    <img loading="lazy" src="/car2.jpg" alt="" />
                </div>
                <div>
                    <img loading="lazy" src="/car3.jpg" alt="" />
                </div>
           </Carousel>


        </div>
    )
}

export default Banner;