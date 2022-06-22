import Header from "./Components/Layout/Header";
import Paragraph from "./Components/Layout/Paragraph";
import svgFirstParagraph from "./Images/first.svg"
import Button from "./Components/Layout/Button";
import Modal from "./Components/Layout/Modal";
import { useState } from "react";

function App() {
  const [isLoginModal, setIsLoginModal] = useState(false);
 
  const firstDesc =
    "Hello, my name is Tomasz Mamala, and I am working on this project with Bartłomiej Strama. We are CEO's of BadClup, our small organization with big dreams. May I interview us: We are two students from Poland, and we attend to one of the best schools in our country. We are creating this project because we were recently thinking about, why nobody did something like us before? Well, the answear is still unknown but we are trying our best to make decent dns system. Please understand that, we were not doing anything like that in past, and It's our first bigger project.";
  const secondDesc = "It's very simple! Just follow the steps on the wideo on the side. As DNS server use: 127.0.0.1 as prefered, and 1.1.1.1 as alternate. Of course at the IPv4 section. And that's all, now you can enjoy your own DNS!"
  const thirdDesc = "Choose BadClup today, for safety and fast DNS system. Of cours, you may ask, Why our DNS is other? Well, at first, it's 100% free, every person can create their own domain. Moreover, the domain isn't .com .org etc. It is your custom name, of course, If not claimed at the moment."
  
  const openInNewTab = (url) => {
    window.open(url, "_blank", "noopener,noreferrer");
  };  

  const showLoginModalHandler = () => {
    setIsLoginModal(true);
  }

   return (
    <div className="App">
      <Header onClick={showLoginModalHandler}/>
      <Paragraph
        title="Why you should use our DNS?"
        desc={thirdDesc}
        style={{
          fontSize: "32px",
          flexDirection: "row-reverse",
        }}
      >
        <img src={svgFirstParagraph} alt="" />
      </Paragraph>
      <Paragraph title="How to use our DNS?" desc={secondDesc}>
        <iframe
          height="315"
          src="https://www.youtube.com/embed/VNzHMx4V-h4"
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
      <Paragraph title="Who we are?" desc={firstDesc} spanStyle={{width: "100%"}}/>
      {isLoginModal && <Modal onClick={() => {setIsLoginModal(false)}}/>}
    </div>
  );
}

export default App;
