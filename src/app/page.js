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

    </main>
  );
}
