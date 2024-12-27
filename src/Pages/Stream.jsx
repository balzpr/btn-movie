  import React, {useEffect, useState} from "react";
  import Navbar from "../Components/Navbar";
  import Hero from "../Components/Landing/Hero";
  import Footer from "../Components/Footer";
  import {useParams} from "react-router-dom";

  const Stream = () => {
    const {link} = useParams();
    const [iframeLink, setIframeLink] = useState("");

    useEffect(() => {
      // Decode the Base64 encoded iframe link
      const decodedLink = atob(link);
      setIframeLink(decodedLink);
    }, [link]);

    return (
      <div data-bs-theme="dark" style={{height: "100vh", overflow: "hidden"}}>
        <Navbar />
        <div style={{position: "relative", height: "calc(100vh - 60px)"}}>
          {iframeLink ? (
            <iframe
              src={iframeLink}
              title="Episode Stream"
              width="100%"
              height="100%"
              frameBorder="0"
              allowFullScreen
              style={{
                position: "absolute",
                top: "0",
                left: "0",
                right: "0",
                bottom: "0",
                border: "none",
              }}
            />
          ) : (
            <p>Loading stream...</p>
          )}
        </div>
        <Footer />
      </div>
    );
  };

  export default Stream;
