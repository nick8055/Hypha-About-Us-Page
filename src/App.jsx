import './App.css';
import pic1 from './pic1.jpg';
import pic2 from './pic2.png';
import pic3 from './pic3.png';
import pic4 from './pic4.png';
import pic5 from './pic5.png';
import linkedin from './linkedin.svg';

const TeamMember = ({Name, Designation, Image}) => {
  return(
    <div>
      <div className='TeamImageContainer'>
        <img className='TeamImage' src={Image}></img>
        <img className='linkedinLogo' src={linkedin}></img>
      </div>
      <div className='memberName'>{Name}</div>
      <div className='memberDesignation'>{Designation}</div>
    </div>
  )
}

const OurValues = ({valueHeading, valueDesc}) => {
  return(
    <div className='valueContainer'>
      <div className='valueHeading'>{valueHeading}</div>
      <div className='valueDesc'>{valueDesc}</div>
    </div>
  )
}

const App = () => { 
  return (
    <div className="App">

      <div className='mainTitle'>Our Story</div>
      <div className='paragraph para1'>Hypha is bringing together a community of healthcare providers and patients to build the future of medical practice.</div>
      <div className='pic1Container'><img className='pic1' src={pic1}></img></div>
      <div className='paragraph slogan'>Evolve Together</div>
      <div className='paragraph para2'>Perspectives have changed. And so have our needs. People around the world are looking forward to an improved quality of life. They focus not just on being illness-free but also on their overall well-being. Patients want access to personalised care and Doctors are eager to provide it to them.</div>
      <div className='paragraph para3'>While healthcare systems are getting modernised and fighting illnesses better than ever, incorporating patient-first experiences is still not a routine practice. Because, unlike top hospitals that leverage Artificial Intelligence to develop their care models, Clinicians lack access to the right tools. That is, until we decided to bridge modern technology with people’s needs - all for a stronger tomorrow.</div>
    
      <div className='secondContainer'>
        <div className='title2'>Why do we call it Hypha?</div>
        <div className='paragraph para4'>Derived from Hyphae - the Greek word for ‘web’ Hypha symbolises a growing network of healthcare providers and patients. Mirroring the strength of a mycelial network, the platform is designed to provide a collaborative experience by aiding growth and communication.
        <br></br><br></br>Just like the mycelium work flawlessly to form a strong ecosystem, Hypha strives for a smoother and stronger healthcare system - for doctors as well as patients.</div>
      </div>

      <div className='title3'>Why Choose Us?</div>

      <div className='blueContainerSection'>
        <div className='blueContainer'>
          <div className='blueContainerContent'>India’s only patient management system for personalised care.</div>
          </div>
        <div className='blueContainer'>
          <div className='blueContainerContent'>Keeps patients involved and informed in the care they receive.</div>
          </div>
        <div className='blueContainer'>
          <div className='blueContainerContent'>A members-only club that helps healthcare providers simplify processes.</div>
          </div>
      </div>

      <div className='section4'>
        <div className='title4'>Our Mission</div>
        <div className='paragraph para5'>Bring together a community of healthcare providers and patients to build the future of medical practice. Strengthen the care delivery systems, by providing highly customized technology solutions to our network of care providers.</div>
        <div className='title4'>Our Vision</div>
        <div className='paragraph para5'>To form a strong community of healthcare providers and patients that drives excellence and growth, collectively</div>
      </div>

      <div className='TeamSection'>
        <div className='TeamTitle'>Team</div>
        <div className='TeamMembers'>
          <TeamMember Image={pic2} Name={'Pranav P M'} Designation={'Co-Founder'}></TeamMember>
          <TeamMember Image={pic3} Name={'Bijun Sai Kannadath'} Designation={'Co-Founder'}></TeamMember>
          <TeamMember Image={pic4} Name={'Vipin Santhosh'} Designation={'Lead - Engineer'}></TeamMember>
          <TeamMember Image={pic5} Name={'Advait Sunil'} Designation={'Lead - Growth'}></TeamMember>
        </div>
      </div>

      <div className='lastSection'>
        {/* <div className='title4'>Our Values</div> */}
        <OurValues valueHeading={'Explore'} valueDesc={'The path towards achieving excellence is not easy. Be courageous and finish what you’ve undertaken with utmost determination.'}></OurValues>
        <OurValues valueHeading={'Explore'} valueDesc={'The path towards achieving excellence is not easy. Be courageous and finish what you’ve undertaken with utmost determination.'}></OurValues>
        <OurValues valueHeading={'Explore'} valueDesc={'The path towards achieving excellence is not easy. Be courageous and finish what you’ve undertaken with utmost determination.'}></OurValues>
        <OurValues valueHeading={'Explore'} valueDesc={'The path towards achieving excellence is not easy. Be courageous and finish what you’ve undertaken with utmost determination.'}></OurValues>
      </div>

    </div>
  );
}

export default App;
