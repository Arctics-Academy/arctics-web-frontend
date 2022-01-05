import Header from '../Components/Header';
import AboutUs from '../Components/AboutUs';
import Function from '../Components/Function';
// import Members from '../Components/Members';
import ContactUs from '../Components/ContactUs';
import LeaderIntro from '../Components/LeaderIntro';

function LandingPage() {
  return (
    <>
      <Header />
      <main>
        <AboutUs />
        <Function />
        <LeaderIntro />
        <ContactUs />
      </main>
    </>
  );
}

export default LandingPage;
