// import React from "react";
// import { Container, Row, Col } from "react-bootstrap";
// import ProjectCard from "./ProjectCards";
// import Particle from "../Particle";
// import leaf from "../../Assets/Projects/leaf.png";
// import emotion from "../../Assets/Projects/emotion.png";
// import editor from "../../Assets/Projects/editor.png";
// import RelianceWorld from "../../Assets/Projects/RelianceWorld.png";
// import petpal from "../../Assets/Projects/petpal.png";
 

// function Projects() {
//   return (
//     <Container fluid className="project-section">
//       <Particle />
//       <Container>
//         <h1 className="project-heading">
//           My Recent <strong className="purple">Works </strong>
//         </h1>
//         <p style={{ color: "white" }}>
//           Here are a few projects I've worked on recently.
//         </p>
//         <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
//           <Col md={4} className="project-card">
//             <ProjectCard
//               imgPath={RelianceWorld}
//               isBlog={false}
//               title="Reliance World"
//               description="The Reliance World website serves as an online platform where customers can browse through their product catalog, check specifications, compare prices, and make online purchases. It provides a convenient way for customers to explore and buy electronic goods from the comfort of their homes."
//               ghLink="https://github.com/itiaditi/javascript-jadoo-8901"
//               demoLink="https://65ade3de9fb39fdcb10c705e--stirring-starlight-16f55e.netlify.app/"
//             />
//           </Col>

//           <Col md={4} className="project-card">
//             <ProjectCard
//               imgPath={editor}
//               isBlog={false}
//               title="Frank And Oak"
//               description="It was a collaborative effort taken by 5 team members and it a clone of Frank And Oak femouse shopping website. Card creation from the backend data
//           sorting functions on price ASC and DSCE , responsiveness
//  ,   Admin Panel
// Authentication
//  "
//               ghLink="https://github.com/AdityaSingh-byte/Frank-and-Oak"
//               demoLink="https://frankandoak.netlify.app/"
//             />
//           </Col>

//           {/* <Col md={4} className="project-card">
//             <ProjectCard
//               imgPath={emotion}
//               isBlog={false}
//               title="StayBnB - A Hotel Booking Website"
//               description="Welcome to our GitHub repository for StayBnB, an innovative web application designed to revolutionize the way people book accommodations. Inspired by the success of platforms like Airbnb, StayBnB offers a comprehensive solution for travelers and hosts alike. Whether you're looking for a cozy apartment for a weekend getaway or managing your property listings, StayBnB has you covered."
//               ghLink="https://github.com/tashwini-p/StayBnB"
//               demoLink="https://65db734b4e6242fb39b34caa--astonishing-florentine-67ecf3.netlify.app/"              
//             />
//           </Col> */}

//           {/* <Col md={4} className="project-card">
//             <ProjectCard
//               imgPath={leaf}
//               isBlog={false}
//               title="ArtifyHub"
//               description="It was a collaborative effort taken by 4 team members and the website is about handwash products , you can find the any type of sprey , handwash , soap ect...."
//               ghLink="https://github.com/RSarvjyoti/Behance"
//               demoLink="https://github.com/RSarvjyoti/Behance"
//             />
//           </Col> */}

         

//           <Col md={4} className="project-card">
//             <ProjectCard
//               imgPath={petpal}
//               isBlog={false}
//               title="PetPals "
              
//               description="This website is designed to facilitate the adoption of pets, such as dogs and cats, from shelters or rescue organizations. The platform serves as a digital marketplace where potential adopters can browse and select pets, shelters can list available pets, and donors can contribute to support animal welfare."
//               ghLink="https://github.com/Sartik0709/Panasonic-Pioneers_062"
//               demoLink="https://pet-petpals.netlify.app/"
              
              
//             />
//           </Col>
//         </Row>
//       </Container>
//     </Container>
//   );
// }

// export default Projects;

import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import RelianceWorld from "../../Assets/Projects/RelianceWorld.png";
import editor from "../../Assets/Projects/editor.png";
import petpal from "../../Assets/Projects/petpal.png";
import jsLogo from "../../Assets/jsLogo.jpeg"; // Add the logo paths
import reactLogo from "../../Assets/reactLogo.jpeg";
import nodeLogo from "../../Assets/nodeLogo.jpeg";
import cssLogo from "../../Assets/cssLogo.jpeg";
import HtmlLogo from "../../Assets/HtmlLogo.jpeg";
//import bootstrp from "../../Assets/bootstrp.jpeg"

function Projects() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          My Recent <strong className="purple">Works </strong>
        </h1>
        <p style={{ color: "white" }}>
          Here are a few projects I've worked on recently.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={RelianceWorld}
              isBlog={false}
              title="Reliance World"
              description="The Reliance World website serves as an online platform where customers can browse through their product catalog, check specifications, compare prices, and make online purchases. It provides a convenient way for customers to explore and buy electronic goods from the comfort of their homes."
              ghLink="https://github.com/itiaditi/javascript-jadoo-8901"
              demoLink="https://65ade3de9fb39fdcb10c705e--stirring-starlight-16f55e.netlify.app/"
              techLogos={[ cssLogo ,  HtmlLogo ]}
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={editor}
              isBlog={false}
              title="Frank And Oak"
              description="It was a collaborative effort taken by 5 team members and it a clone of Frank And Oak famous shopping website. Card creation from the backend data, sorting functions on price ASC and DSC, responsiveness, Admin Panel, Authentication."
              ghLink="https://github.com/AdityaSingh-byte/Frank-and-Oak"
              demoLink="https://frankandoak.netlify.app/"
              techLogos={[ jsLogo , HtmlLogo , cssLogo ]}
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={petpal}
              isBlog={false}
              title="PetPals"
              description="This website is designed to facilitate the adoption of pets, such as dogs and cats, from shelters or rescue organizations. The platform serves as a digital marketplace where potential adopters can browse and select pets, shelters can list available pets, and donors can contribute to support animal welfare."
              ghLink="https://github.com/Sartik0709/Panasonic-Pioneers_062"
              demoLink="https://pet-petpals.netlify.app/"
              techLogos={[jsLogo ,  nodeLogo , HtmlLogo , cssLogo  , reactLogo]}
            />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
