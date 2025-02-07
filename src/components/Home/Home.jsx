import { Carousel } from "react-responsive-carousel"
import "react-responsive-carousel/lib/styles/carousel.min.css"
import img1 from "../../assets/home/d2.jpg"
import img2 from "../../assets/home/vg1.jpg"
import img3 from "../../assets/home/vg2.jpg"
export default function Home() {
    return (
        <Carousel>
                <div>
                    <img src={img1} className="w-96" />
                </div>
                <div>
                    <img src={img2} className="w-96" />
                </div>
                <div>
                    <img src={img3} className="w-96" />
                </div>
            </Carousel>
    )
}


