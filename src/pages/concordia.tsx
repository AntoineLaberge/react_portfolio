import React from 'react';
import '../css/concordia.css';
import ConcordiaLogo from "../images/concordia-university-seeklogo.com.svg";
import FMBuilding from "../images/FM.jpg";
import MockHomePage from "../images/mockup-homePage.png";
import MockConnectionPage from "../images/mockup-connexion.png";
import MockAgendaPage from "../images/mockup-agendaComite.png";
import MockWholeProject from "../images/mockup-projetComplet.png";
import Carousel from "../components/carousel";
import { FcPrevious } from "react-icons/fc";
import { AiOutlineCopyrightCircle } from "react-icons/ai";

interface Props {
    history: any;
  }

const Concordia : React.FC<Props> = ({ 
    history
  }) => {
  
    const back = () => history.push('/');
  
    return (
      <div>
        <div className="container">
          <button type="button" className="btn btn-default primary-color" aria-label="Left Align" onClick={back}>
              <FcPrevious size={25} color="#2196f3"/>
          </button>

          <div className="text-center" style={{marginTop: "70px"}}>
            <h1>Concordia University</h1>
            <p className="mt-4" style={{fontWeight: 300, fontSize: "24px"}}>Fall 2020</p>
          </div>

          <div className="mt-5">
            <div className="row">

              <div className="col-md text-center align-items-center order-md-first order-last">
                <img src={ConcordiaLogo} alt="ConcordiaLogo" width= "55%"/>
              </div>

              <div className="col-md" style={{textAlign: "justify", textJustify: "inter-word"}}>
                <h4 className="primary-color">Facilities management</h4>
                <p>Concordia University's project management office was created in 2018. Its mission is to advise on governance, portfolio management and the development of project management tools. He participates in continuous improvement initiatives and plays a predominant role in the management of organizational change. The PMO recently changed direction. Formerly under the direct responsibility of the AVP, it is now located under the direction of Administrative Services. The PMO of property management manages its project portfolios in an Excel table named ProList (Project List). This tool brings together all of CU FM's projects and is shared in the cloud for consultation or modification. The data is entered manually by various project stakeholders (PMO, budget planner, managers, project managers, etc.) according to the life cycle of the projects. However, the Prolist seems to have reached its technical limits when using Excel. Any stakeholder can insert, modify or delete data. Numerous human modifications / manipulations are required, no operating rules are actually established and the information entered therein can no longer be controlled. This phenomenon creates situations of duplicates, transfer errors, information management, usage time, etc.</p>
              </div>

            </div>
          </div>

          <div style={{marginTop:"100px"}}>

              <div className="row">

                <div className="col-md m-auto" style={{textAlign: "justify", textJustify: "inter-word"}}>
                  <h4 className="primary-color">My tasks</h4>
                  <p>During this internship, my mandate within this team was to make a representation of the client's needs in the form of a mockup in order to allow him to submit an idea for a communication interface project linked to a real estate project management database of a value of $ 500M. From scratch, I had to understand and bring out my boss's ideas / requirements in order to create a website that came closest to his vision.</p>
                </div>

                  <div className="col-md text-center">
                      <img src={FMBuilding} alt="FMBuilding" className="w-75 h-auto shadow-lg" style={{borderRadius:"10px", marginTop:"10px"}} />
                  </div>

              </div>

            </div>

            <div style={{marginTop:"100px"}}>

              <div className="row">

                  <div className="col-md text-center order-md-first order-last">
                      <img src={MockHomePage} alt="FMBuilding" className="w-75 h-auto shadow-lg" style={{borderRadius:"10px", marginTop:"10px"}} />
                  </div>

                  <div className="col-md m-auto" style={{textAlign: "justify", textJustify: "inter-word"}}>
                      <h4 className="primary-color">What I learned</h4>
                      <p>My internship allowed me to intervene at the start of a special project that addresses long-standing problems. This tool under development has an impact on the future of the organization. I learned that in an environment like Concordia, you cannot directly set up a site, it takes permissions, tools, the needs of several stakeholders, hence the relevance of creating a mockup to stimulate discussions between decision-making authorities and concretize / popularize an idea, a solution to a concrete organizational problem. During my internship, I also had to popularize my knowledge and advise my supervisor on mockup, development and management software that the team could acquire for the rest of the project. In addition, I have established, within the team, a work method seen in class: AGILE development. Without doing a sprint per se, the SCRUM meeting allowed me to do a fairer job in terms of my supervisor's vision and needs.</p>

                      <p>One of the skills that I developed the most during my internship is to keep a written record of the entire creation process and the journey from start to finish of the project in a document called the backlog. This step allows other people who will be part of the project in the future to understand it without having to go through the code or the mockup. In addition, the backlog can contain information that is not found in the final product, but which is intended to bring greater precision to certain parts of the project such as requirements or needs.</p>
                  </div>

              </div>

            </div>

            <div className="mt-5">
              <Carousel images={[MockConnectionPage, MockAgendaPage, MockWholeProject]} />
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
  
  export default Concordia;