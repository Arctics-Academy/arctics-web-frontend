import Header from '../Components/Header';
import AboutUs from '../Components/AboutUs';
import Function from '../Components/Function';
// import Members from '../Components/Members';
import ContactUs from '../Components/ContactUs';
import LeaderIntro from '../Components/LeaderIntro';
import Foot from '../../GlobalComponents/Foot';

import MetaTags from 'react-meta-tags';

function LandingPage() {
  return (
    <>
      <MetaTags>
        <title>升大學顧問媒合平台 | Arctics</title>
        <meta name='description' content='Arctics是線上顧問媒合平台，讓高中生透過與大學生一對一線上視訊諮詢的方式，以最有效率的方式找尋自己的目標並掌握升學方式。' />
      </MetaTags>
      <Header />
      <main>
        <AboutUs />
        <Function />
        <LeaderIntro />
        <ContactUs />
      </main>
      <Foot />
    </>
  );
}

export default LandingPage;
