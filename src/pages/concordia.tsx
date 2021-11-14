import React from 'react';
import '../css/concordia.css';
import ConcordiaLogo from "../images/concordia-university-seeklogo.com.svg"
import { FcPrevious } from "react-icons/fc";

interface Props {
    history: any;
  }

const Concordia : React.FC<Props> = ({ 
    history
  }) => {
  
    const back = () => history.push('/');
  
    return (
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

            <div className="col-md text-center">
              <img src={ConcordiaLogo} alt="ConcordiaLogo" width= "55%"/>
            </div>

            <div className="col-md" style={{textAlign: "justify", textJustify: "inter-word"}}>
              <h4 className="primary-color">Facilities management</h4>
              <p>Concordia University's project management office was created in 2018. Its mission is to advise on governance, portfolio management and the development of project management tools. He participates in continuous improvement initiatives and plays a predominant role in the management of organizational change. The PMO recently changed direction. Formerly under the direct responsibility of the AVP, it is now located under the direction of Administrative Services. The PMO of property management manages its project portfolios in an Excel table named ProList (Project List). This tool brings together all of CU FM's projects and is shared in the cloud for consultation or modification. The data is entered manually by various project stakeholders (PMO, budget planner, managers, project managers, etc.) according to the life cycle of the projects. However, the Prolist seems to have reached its technical limits when using Excel. Any stakeholder can insert, modify or delete data. Numerous human modifications / manipulations are required, no operating rules are actually established and the information entered therein can no longer be controlled. This phenomenon creates situations of duplicates, transfer errors, information management, usage time, etc.</p>
            </div>

          </div>
        </div>
      </div>
    );
  }
  
  export default Concordia;