import PrevoiuStudent from '../PrevoiuStudent';
import Testimonial from '../Testimonial';
import Home from '../Home';
// import Benefits from '../../component/teachear/Benefits';
import TeacherCard from '../../component/teachear/TeacherCard';
import BenefitData from '../../component/teachear/BenefitData';
import  Contactpage from  '../../pages/Contactpage'


function LandingPage() {
  return (
    <>
      <Home />
      <Testimonial />
      <BenefitData/>
      {/* <TeacherCard/>/ */}
      <PrevoiuStudent />
        <Contactpage/>
      {/* Add more sections/components here */}
    </>
  )
}

export default LandingPage;