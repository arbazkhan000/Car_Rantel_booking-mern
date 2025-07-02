import { FeaturedVehicles } from '../pages/FeaturedVehicles'
import { HeroSection } from '../pages/HeroSection'
import { Testimonial } from './Testimonial'

export const Index =()=>{
    return(
        <div>
            <HeroSection />
            <FeaturedVehicles />
            <Testimonial />
        </div>
    )
}