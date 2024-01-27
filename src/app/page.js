import { Col, Container, Row } from "react-bootstrap";
import homePhoto from "../app/Asset/bg.webp";
import designPhoto from "../app/Asset/webdesing.webp";
import html from "../app/Asset/html.webp";
import css from "../app/Asset/css.webp";
import js from "../app/Asset/js.webp";
import bootstrap from "../app/Asset/bootstrap.webp";
import mui from "../app/Asset/mui.webp";
import node from "../app/Asset/node.webp";
import express from "../app/Asset/express.webp";
import mongodb from "../app/Asset/mongodb.webp";
import next from "../app/Asset/next.webp";
import aws from "../app/Asset/aws.webp";
import react from "../app/Asset/react.webp";
import devops from "../app/Asset/devops.webp";
import project1 from "../app/Asset/project1.webp";
import project2 from "../app/Asset/project2.webp";
import logo from "../app/Asset/darklogo.webp"
import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <main>
      <section className="homesection" id="#home">
        <div className="myHome">
          <Container>
            <div className="homeContainer">
            <div className="names">
           <h1 className="name">I'M Raju Ahammed</h1>
                <h4>Web Developer</h4>
           </div>
           <div className="homePhoto">
           <Image
                  className="homeImage img-fluid"
                  src={homePhoto}
                  alt="Web Logo"
                />
           </div>
            </div>
          </Container>
        </div>
      </section>
      <section className="aboutSection" id="#about">
        <Container>
          <div className="mainAbout">
            <div className="aboutPhoto">
              <Image
                className="aboutImage img-fluid"
                src={homePhoto}
                alt="Web Logo"
              />
            </div>
            <div className="aboutContent">
              <h1 className="aboutme">About Me</h1>
              <div className="borderline"></div>
              <div className="borderlineTwo"></div>
              <h5 className="mt-3">Who Am I?</h5>
              <article className="articleOne">
              I am not just lines of code; I am a dedicated MERN stack developer with a keen eye for detail and a heart that beats in JavaScript. My journey in the tech realm began with a simple fascination for turning ideas into interactive, user-friendly experiences.
              </article>
              <h5>What Drives Me?</h5>
              <article className="articleTwo">
              The thrill of problem-solving and the endless possibilities of technology drive me to explore new horizons continually. Whether it's a complex bug that needs fixing or a feature that requires innovation, I find solace in the dance between logic and creativity. Coding isn't just a job for me; it's a lifelong adventure.
              </article>
              <div className="socialIcons">
                <Link href="https://www.facebook.com/rajuahamedkst" target="_blank"><i className="fa-brands fa-facebook-f"></i></Link>
              <Link href="https://twitter.com/Rajukst15" target="_blank"><i className="fa-brands fa-twitter"></i> </Link>  
              <Link href="https://www.linkedin.com/in/rajuahamedkst" target="_blank"><i className="fa-brands fa-linkedin-in"></i></Link>  
               <Link href="https://github.com/Rajukst" target="_blank"><i className="fa-brands fa-github"></i></Link> 
              </div>
            </div>
          </div>
        </Container>
      </section>
      <section className="workActivites"id="#work">
        <Container>
          <Row>
          <Col xs={12} md={4} lg={4}>
              <div className="workHeadingTwo">
                <Image
                  className="homeImages img-fluid"
                  src={designPhoto}
                  alt="Web Logo"
                />
                <div className="workContent">
                  <h5>Web Development</h5>
                  <article>
                  Proficient in MERN stack development, I can make dynamic and scalable web applications With expertise in MongoDB, Express.js, React.js, and Node.js, ensuring efficient and feature-rich platforms for a diverse range of user requirements.
                  </article>
                </div>
              </div>
            </Col>
            <Col xs={12} md={4} lg={4}>
              <div className="workHeadingTwo">
                <Image
                  className="homeImages img-fluid"
                  src={designPhoto}
                  alt="Web Logo"
                />
                <div className="workContent">
                  <h5>App Development</h5>
                  <article>
                  Skilled React Native developer with expertise in JavaScript and React, specializing in cross-platform mobile app development. Proficient in UI/UX design and API integration, I deliver high-quality, responsive applications for diverse platforms.</article>
                </div>
              </div>
            </Col>
            <Col xs={12} md={4} lg={4}>
              <div className="workHeadingTwo">
                <Image
                  className="homeImages img-fluid"
                  src={designPhoto}
                  alt="Web Logo"
                />
                 <div className="workContent">
                  <h5>Web Design</h5>
                  <article>
                  As a web designer, I merge creativity with technical expertise, using design tool create visually stunning and user-friendly responsive design. I collaborate closely with clients to transform their ideas into engaging and functional online experiences.</article>
                </div>
              </div>
            </Col>
          </Row>
        </Container>
      </section>
       <section className="skillDevelopment" id="#skills">
        <Container>
          <h1 className="aboutme">Skills</h1>
          <div className="borderline"></div>
          <div className="borderlineTwo"></div>
          <Row className="g-4 skillCorner">
            <Col xs={6} md={2} lg={2}>
              <div className="skillImage">
                <Image
                  className="SkillImages img-fluid"
                  src={html}
                  alt="Web Logo"
                />
              </div>
            </Col>
            <Col xs={6} md={2} lg={2}>
              <div className="skillImage">
                <Image
                  className="SkillImages img-fluid"
                  src={css}
                  alt="Web Logo"
                />
              </div>
            </Col>
            <Col xs={6} md={2} lg={2}>
              <div className="skillImage">
                <Image
                  className="SkillImages img-fluid"
                  src={js}
                  alt="Web Logo"
                />
              </div>
            </Col>
            <Col xs={6} md={2} lg={2}>
              <div className="skillImage">
                <Image
                  className="SkillImages img-fluid"
                  src={react}
                  alt="Web Logo"
                />
              </div>
            </Col>
            <Col xs={6} md={2} lg={2}>
              <div className="skillImage">
                <Image
                  className="SkillImages img-fluid"
                  src={next}
                  alt="Web Logo"
                />
              </div>
            </Col>
            <Col xs={6} md={2} lg={2}>
              <div className="skillImage">
                <Image
                  className="SkillImages img-fluid"
                  src={node}
                  alt="Web Logo"
                />
              </div>
            </Col>
            <Col xs={6} md={2} lg={2}>
              <div className="skillImage">
                <Image
                  className="SkillImages img-fluid"
                  src={express}
                  alt="Web Logo"
                />
              </div>
            </Col>
            <Col xs={6} md={2} lg={2}>
              <div className="skillImage">
                <Image
                  className="SkillImages img-fluid"
                  src={mongodb}
                  alt="Web Logo"
                />
              </div>
            </Col>
            <Col xs={6} md={2} lg={2}>
              <div className="skillImage">
                <Image
                  className="SkillImages img-fluid"
                  src={bootstrap}
                  alt="Web Logo"
                />
              </div>
            </Col>
            <Col xs={6} md={2} lg={2}>
              <div className="skillImage">
                <Image
                  className="SkillImages img-fluid"
                  src={mui}
                  alt="Web Logo"
                />
              </div>
            </Col>
            <Col xs={6} md={2} lg={2}>
              <div className="skillImage">
                <Image
                  className="SkillImages img-fluid"
                  src={aws}
                  alt="Web Logo"
                />
              </div>
            </Col>
            <Col xs={6} md={2} lg={2}>
              <div className="skillImage">
                <Image
                  className="SkillImages img-fluid"
                  src={devops}
                  alt="Web Logo"
                />
              </div>
            </Col>
          </Row>
        </Container>
      </section>
      <section className="projectSection"id="#projects">
      <Container>
      <h1 className="mt-5">Projects</h1>
      <div className="borderline"></div>
          <div className="borderlineTwo"></div>
          <Row className="g-4 mt-5">
          <Col xs={12} md={4} lg={4}>
          <div className="projectOne">
          <Image
                  className="projectImage img-fluid"
                  src={project1}
                  alt="Web Logo"
                />
                <div className="features">
                  <h5>Key Features:</h5>
                  <article>Cloth Bangladesh is a client-ready, single vendor e-commerce platform, meticulously designed to cater to the discerning needs of customers. Functioning as a dedicated online marketplace, this website exclusively offers high-quality clothing items. With a focus on simplicity and user-friendliness, Cloth Bangladesh ensures a seamless shopping experience for its customers. </article>
                  <article><span className="technology">Technology:</span> Next.js, Node.js, Redux, MySql, AWS.</article>
                </div>
          </div>
          </Col>
          <Col xs={12} md={4} lg={4}>
          <div className="projectOne">
          <Image
                  className="projectImage img-fluid"
                  src={project2}
                  alt="Web Logo"
                />
                <div className="features">
                  <h5>Key Features:</h5>
                  <article>Cloth Bangladesh is a client-ready, single vendor e-commerce platform, meticulously designed to cater to the discerning needs of customers. Functioning as a dedicated online marketplace, this website exclusively offers high-quality clothing items. With a focus on simplicity and user-friendliness, Cloth Bangladesh ensures a seamless shopping experience for its customers. </article>
                  <article><span className="technology">Technology:</span> Next.js, Node.js, Redux, MySql, AWS.</article>
                </div>
          </div>
          </Col>
          <Col xs={12} md={4} lg={4}>
          <div className="projectOne">
          <Image
                  className="projectImage img-fluid"
                  src={project1}
                  alt="Web Logo"
                />
                <div className="features">
                  <h5>Key Features:</h5>
                  <article>Cloth Bangladesh is a client-ready, single vendor e-commerce platform, meticulously designed to cater to the discerning needs of customers. Functioning as a dedicated online marketplace, this website exclusively offers high-quality clothing items. With a focus on simplicity and user-friendliness, Cloth Bangladesh ensures a seamless shopping experience for its customers. </article>
                  <article><span className="technology">Technology:</span> Next.js, Node.js, Redux, MySql, AWS.</article>
                </div>
          </div>
          </Col>
          </Row>
          
      </Container>
      </section>
   <section className="getInTouch"id="#contact">
      <Container>
      <h1 className="aboutme mt-5">Get In Touch</h1>
          <div className="borderline"></div>
          <div className="borderlineTwo"></div>
          <div className="mainGet">
            <div className="getContent">
              <article>
                House#258, Road#3, Baridhara DOHS, <br /> Dhaka-1206.
              </article>
              <article><i className="fa-solid fa-phone"></i>+8801765629262, <i className="fa-brands fa-whatsapp"></i> +8801765629262 </article>
              <article><i className="fa-solid fa-at"></i> rajuahamedkst15@gmail.com</article>
              <div className="followMe">
              <Link href="https://www.facebook.com/rajuahamedkst" target="_blank"><i className="fa-brands fa-facebook-f"></i></Link>
              <Link href="https://twitter.com/Rajukst15" target="_blank"><i className="fa-brands fa-twitter"></i> </Link>  
              <Link href="https://www.linkedin.com/in/rajuahamedkst" target="_blank"><i className="fa-brands fa-linkedin-in"></i></Link>  
               <Link href="https://github.com/Rajukst" target="_blank"><i className="fa-brands fa-github"></i></Link> 
              </div>
            </div>
            <div className="touchInput ps-5">
              <div className="nameAndEmail">
                <div className="name">
                <input type="text" name="" id="" placeholder="Name" />
                </div>
               <div className="email">
               <input type="email" name="" id="" placeholder="Email" />
               </div> 
              </div>
              <textarea className="getTxtArea mt-3" name="" id="" cols="" rows="" placeholder="Message Here"></textarea>
              <div className="sendButtons">
                <button className="SendButton mt-3 mb-3">Send Message <i className="fa-solid fa-arrow-right"></i></button>
              </div>
            </div>
          </div>
      </Container>
      </section>
      <section className="footer">
        <Container>
          <div className="mainFooter">
          <div className="footerLeft">
          <Image className='footerImg' src={logo} alt='Web Logo'/>
          </div>
          <div className="footerRight">
          <article className="footerarticle">© all Rights Reserved. Developed By Raju Ahammed</article>
          </div>
          </div>
        </Container>
        </section>    
    </main>
  );
}
