import { Container } from "react-bootstrap";
import homePhoto from "../app/Asset/bg.webp";
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
              <article>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Sequi
                mollitia nemo, suscipit eaque molestias aperiam dignissimos
                commodi nostrum architecto qui nesciunt quas esse veniam velit
                doloremque consequatur cumque eos modi nisi. Harum beatae
                voluptatum, consequuntur odio velit officia, perspiciatis
                maiores qui dicta deserunt maxime perferendis necessitatibus
                pariatur ipsa molestias aut.
              </article>
            </div>
          </div>
        </Container>
      </section>
    </main>
  );
}
