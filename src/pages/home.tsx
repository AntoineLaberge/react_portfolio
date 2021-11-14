import React, { useEffect } from 'react';
import '../css/home.css';
import HomeImage from "../images/undraw_feeling_proud_qne1.svg"
import ConcordiaLogo from "../images/concordia-university-seeklogo.com.svg"
import HaiexpertLogo from "../images/OriginalHaiexpert.png"
import CoveatLogo from "../images/coveat-logo.png"
import { GiPencilBrush } from "react-icons/gi";
import { BiCodeBlock } from "react-icons/bi";
import { BiCodeCurly} from "react-icons/bi";
import { BsApple } from "react-icons/bs";
import { BsWindows } from "react-icons/bs";
import { VscTerminalLinux } from "react-icons/vsc";
import { AiOutlineCopyrightCircle } from "react-icons/ai";
import BlueButton from '../components/customButton';

interface Props {
  history: any;
}

const Home: React.FC<Props> = ({ 
  history
}) => {

  const to_concordia = () => history.push('/concordiaInternship');
  const to_haiexpert = () => history.push('/haiexpert');
  const to_coveat = () => history.push('/coveat');

  useEffect(() => {
    document.title = "Antoine Laberge | Computer engineering student"
  }, []);

    return (
      <div>
        <div className="container">
          <div className="text-center" style={{marginTop:"100px"}}>
            <p className="h1">Computer Engineering Student</p>
            <p className="mt-2" style={{fontWeight:300, fontSize:"24px"}}>University of Sherbrooke</p>
            <p className="mt-4" style={{fontWeight:200,fontSize:"24px"}}>Based in Montreal</p>
          </div>
        </div>

        <div>

          <div className="text-center" style={{marginTop:"100px", position:"relative", zIndex:2}}>
            <img src={HomeImage} alt="Hacker" height="300px" width="400px"/>
          </div>
          
          <div className="text-center mw-100" style={{position:"relative", top:"-22px", height:"500px", zIndex: 1, backgroundColor:"#2196f3"}}>
            <div className="container" style={{paddingTop:"100px", color:"#ffffff"}}>
              <h2>Hi, I'm Antoine. Nice to meet you.</h2>
              <p style={{fontWeight: 200, marginTop:"30px"}}>I have been a student at the University of Sherbrooke for 2 years now. My young professional career has allowed me to work with several types of clients. During these projects, I knew how to develop an attentive listening to the different needs and requirements, my leadership, my sense of initiative and my ability to work in a team.</p>
            </div>
          </div>

          <div className="container skillCard" style={{zIndex: 2, top:"-150px"}}>
            <div className="row" style={{paddingTop:"50px", paddingBottom:"50px"}}>
              <div className="col-xs-6 col-sm-4 text-center">

                <GiPencilBrush size={50} color="#2196f3"/>

                <h4 style={{marginTop:"40px"}}>Front-end Developer</h4>

                <p className="font-italic" style={{fontWeight:200, marginTop:"40px"}}>A user interface is like a joke. If you have to explain it, it’s not that good</p>

                <p className="primary-color" style={{fontWeight:200, marginTop:"40px"}}>Language I speak:</p>
                <p style={{fontWeight:200}}>React / Native, HTML, CSS, Javascript, Swift</p>

                <p className="primary-color" style={{fontWeight:200, marginTop:"40px"}}>Design Tools:</p>
                <p style={{fontWeight:200}}>Figma</p>
                <p style={{fontWeight:200}}>XCode</p>

                <p className="primary-color" style={{fontWeight:200, marginTop:"40px"}}>Dev Tools:</p>
                <p style={{fontWeight:200}}>Visual Studio Code</p>
                <p style={{fontWeight:200}}>IntelliJ IDEA</p>
                <p style={{fontWeight:200}}>Bootstrap</p>
              </div>

              <div className="col-xs-6 col-sm-4 text-center border-start border-end">

                <BiCodeBlock size={50} color="#2196f3"/>

                <h4 style={{marginTop:"40px"}}>Back-end Developer</h4>

                <p className="font-italic" style={{fontWeight:200, marginTop:"40px"}}>If at first I don’t succeed, I call it version 1.0</p>

                <p className="primary-color" style={{fontWeight:200, marginTop:"40px"}}>Language I speak:</p>
                <p style={{fontWeight:200}}>C, C++, Java, Python, SQL, Powershell, Objective-C</p>

                <p className="primary-color" style={{fontWeight:200, marginTop:"40px"}}>Dev Tools:</p>
                <p style={{fontWeight:200}}>Visual Studio</p>
                <p style={{fontWeight:200}}>IntelliJ IDEA</p>
                <p style={{fontWeight:200}}>PyCharm</p>
                <p style={{fontWeight:200}}>DataGrip</p>
                <p style={{fontWeight:200}}>GitHub</p>
                <p style={{fontWeight:200}}>CPanel</p>
                <p style={{fontWeight:200}}>Terminal</p>
              </div>

              <div className="col-xs-6 col-sm-4 text-center">

                <BiCodeCurly size={50} color="#2196f3"/>

                <h4 style={{marginTop:"40px"}}>Other skills</h4>

                <p className="font-italic" style={{fontWeight:200, marginTop:"40px"}}>It’s not a bug. It’s an undocumented feature!</p>

                <p className="primary-color" style={{fontWeight:200, marginTop:"40px"}}>OS I'm familiar with:</p>
                <BsApple size={30} color="#2196f3" />
                <BsWindows size={30} color="#2196f3" style={{marginLeft: "20px", marginRight:"20px"}}/>
                <VscTerminalLinux size={30} color="#2196f3"/>

                

                <p className="primary-color" style={{fontWeight:200, marginTop:"40px"}}>Management Tools:</p>
                <p style={{fontWeight:200}}>Microsoft Teams</p>
                <p style={{fontWeight:200}}>Trello</p>
                <p style={{fontWeight:200}}>Jira</p>
                <p style={{fontWeight:200}}>Git</p>

              </div>

            </div>

          </div>

          <div className="container text-center" style={{marginTop:"10px"}}>

              <h2>My Recent Projects</h2>
              <p style={{fontWeight:200, marginTop:"20px"}}>Here are some of my works. Want to see more? <a href="mailto:antoinelaberge16@gmail.com" style={{textDecoration: "none"}}>Email me</a>.</p>

          </div>

          <div className="container">
            <div className="row">

              <div className="col-md m-3 text-center">
                <div className="projectCard">
                  <img src={ConcordiaLogo} alt="Concordia" height="100%" width="100%"/>
                  <div className="overlay">
                    <div className="div-center"><BlueButton text="See more" onClick={to_concordia}/></div>
                  </div>
                </div>
              </div>

              <div className="col-md m-3 text-center">
                <div className="projectCard" style={{backgroundColor: "#000000"}}>
                  <img src={HaiexpertLogo} alt="HaieXpert" className="img-responsive w-75" style={{marginTop: "100px"}}/>
                  <div className="overlay">
                    <div className="div-center"><BlueButton text="See more" onClick={to_haiexpert}/></div>
                  </div>
                </div>
              </div>

              <div className="col-md m-3 text-center">
                <div className="projectCard  d-flex justify-content-center" style={{backgroundColor: "#000000"}}>
                  <img src={CoveatLogo} alt="Coveat" className="img-responsive w-70 h-75" style={{marginTop: "30px"}}/>
                  <div className="overlay">
                    <div className="div-center"><BlueButton text="See more" onClick={to_coveat}/></div>
                  </div>
                </div>
              </div>

            </div>
            
          </div>
          
        </div> 

        <footer className="mt-5">
          <p style={{paddingTop: "10px", fontWeight: 300}}>Handcrafted by me <AiOutlineCopyrightCircle/> Antoine Laberge 2021</p>
          <p style={{paddingTop: "10px", fontWeight: 200}}>Made with</p>
          <p style={{position: "relative", top:"-15px", fontWeight: 200}}>React Typescript X Bootstrap 5.0</p>
        </footer>

      </div> 
    );
  }
  
  export default Home;