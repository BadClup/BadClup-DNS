import { Fragment } from "react"
import Paragraph from "./Layout/Paragraph";
import svgFirstParagraph from "../Images/first.svg";
import Button from "./Layout/Button";

const Home = () => {

    const firstDesc =
      "You may ask: \"Who you even are? and why should I choose your dns?\" So well, my name is Tomasz Mamala, and I am working on this project with my dear friend, Bartłomiej Strama. We are CEO's of BadClup, our small organization with big dreams. We are students from Poland and we attend to one of the best high school in our country. We are creating this project because we were recently thinking about, why nobody did something like us before? Well, the answear is still unknown but we are trying our best to make decent dns system. Please, forgive us for our slight shortcomings, we were not doing anything like that in past, and It's also our first project, which is that big.";
    const secondDesc =
      "It's very simple! Just follow the steps on the wideo on the side. As DNS server use: 127.0.0.1 as prefered, and 1.1.1.1 as alternate. Of course at the IPv4 section. And that's all, now you can enjoy your own DNS!";
    const thirdDesc =
      "Choose BadClup today, for safety and fast DNS system. Uou may ask, \"What your DNS have, that the others ones have not ?\" Well, at first, it's 100% free, every person can create their own domain. Moreover, the domains aren't .com .org etc. It is your custom name. Of course, every other domain like youtube or facebook will still work. Keep in mind, that some names may be claimed already.";

    const openInNewTab = (url) => {
      window.open(url, "_blank", "noopener,noreferrer");
    }; 

    return (
      <Fragment>
        <Paragraph
          title="Why to choose our DNS?"
          desc={thirdDesc}
          style={{
            fontSize: "32px",
            flexDirection: "row-reverse",
          }}
        >
          <img src={svgFirstParagraph} alt="Badclup" />
        </Paragraph>
        <Paragraph title="How to use our custom DNS?" desc={secondDesc}>
          <iframe
            height="315"
            src="https://www.youtube-nocookie.com/embed/VNzHMx4V-h4"
            title="YouTube video player"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          />
          <div>
            <Button
              buttonText="I use mac OS"
              onClick={() =>
                openInNewTab(
                  "https://setapp.com/how-to/speed-up-internet-for-free-on-mac"
                )
              }
            />
            <Button
              buttonText="I use Linux"
              onClick={() =>
                openInNewTab(
                  "https://support.nordvpn.com/Connectivity/Linux/1134945702/Change-your-DNS-servers-on-Linux.htm"
                )
              }
            />
          </div>
        </Paragraph>
        <Paragraph
          title="Something about creators"
          desc={firstDesc}
          style={{ marginBottom: "20px" }}
        />
      </Fragment>
    );
}

export default Home;