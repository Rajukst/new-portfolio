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
import Image from "next/image";

export default function Home() {
  return (
    <main>
      <section className="homesection">
        <div className="myHome">
          <Container>
            <div className="homContainer">
              <div className="homeCOntent">
                <h2 className="name">I'M Raju Ahammed</h2>
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
      <section className="aboutSection">
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
              <article className="articleOne">
                For instance, whenever I go back to the guest house during the
                morning to copy out the contract, these gentlemen are always
                still sitting there eating their breakfasts. I ought to just try
                that with my boss; I'd get kicked out on the spot.
              </article>
              <article className="articleTwo">
                But who knows, maybe that would be the best thing for me. He'd
                fall right off his desk! And it's a funny sort of business to be
                sitting up there at your desk, talking down at your
                subordinates. I ought to just try that witht my boss; I'd get
                kicked out on the spot. But who knows, maybe that would be the
                best thing for me. He'd fall right off his desk! And it's a
                funny sort of business to be sitting up there at your desk,
                talking down at your subordinates.
              </article>
              <div className="socialIcons">
                <i className="fa-brands fa-facebook-f"></i>
                <i class="fa-brands fa-twitter"></i>
                <i class="fa-brands fa-linkedin-in"></i>
                <i class="fa-brands fa-github"></i>
              </div>
            </div>
          </div>
        </Container>
      </section>
      <section className="workActivites">
        <Container>
          <Row>
            <Col>
              <div className="workHeadingTwo">
                <Image
                  className="homeImages img-fluid"
                  src={designPhoto}
                  alt="Web Logo"
                />
                <div className="hrLine"></div>
                <div className="workContent">
                  <h5>DevOps Development</h5>
                  <article>
                    Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                    Perferendis tempore ex quam ullam sint ipsam doloremque
                    culpa aspernatur nostrum officiis?
                  </article>
                </div>
              </div>
            </Col>
            <Col>
              <div className="workHeadingTwo">
                <Image
                  className="homeImages img-fluid"
                  src={designPhoto}
                  alt="Web Logo"
                />
                <div className="hrLine"></div>
                <div className="workContent">
                  <h5>Web Development</h5>
                  <article>
                    Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                    Perferendis tempore ex quam ullam sint ipsam doloremque
                    culpa aspernatur nostrum officiis?
                  </article>
                </div>
              </div>
            </Col>
            <Col>
              <div className="workHeadingTwo">
                <Image
                  className="homeImages img-fluid"
                  src={designPhoto}
                  alt="Web Logo"
                />
                <div className="hrLine"></div>
                <div className="workContent">
                  <h5>Web Design</h5>
                  <article>
                    Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                    Perferendis tempore ex quam ullam sint ipsam doloremque
                    culpa aspernatur nostrum officiis?
                  </article>
                </div>
              </div>
            </Col>
          </Row>
        </Container>
      </section>
      <section className="skillDevelopment">
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
      <section className="projectSection">
      <h1>This is Project section</h1>
      </section>
      <section className="getInTouch">
      <Container>
      <h1 className="aboutme">Get In Touch</h1>
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
              <i className="fa-brands fa-facebook-f"></i>
                <i class="fa-brands fa-twitter"></i>
                <i class="fa-brands fa-linkedin-in"></i>
                <i class="fa-brands fa-github"></i>
              </div>
            </div>
            <div className="touchInput">
              <div className="nameAndEmail">
                <div className="name">
                <input type="text" name="" id="" placeholder="Name" />
                </div>
               <div className="email">
               <input type="email" name="" id="" placeholder="Email" />
               </div>
               
              </div>
            </div>
          </div>
      </Container>
      </section>
    </main>
  );
}
