import HeroSection from '../components/HeroSection';
import PlaySchoolSection from '../components/PlaySchoolSection';
import EducationSection from '../components/EducationSection';
import GallerySection from '../components/GallerySection';
import Testimonials from '../components/TestimonialsSection';

function Home() {
    return (
        <div className="bg-white text-gray-800">
            <HeroSection />
            <PlaySchoolSection />
            <EducationSection />
            <GallerySection />
            <Testimonials />
        </div>

    );
}

export default Home;
