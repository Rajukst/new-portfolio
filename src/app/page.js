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
    </main>
  );
}
