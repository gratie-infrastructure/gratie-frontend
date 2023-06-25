import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import { q1, q2, q3, q4, q5, q6, roadmap } from "./assets";
import { useState } from "react";
import CloseIcon from "@mui/icons-material/Close";
export default function Working() {
  const [isModal1Open, setIsModal1Open] = useState(false);
  const [isModal2Open, setIsModal2Open] = useState(false);
  const [isModal3Open, setIsModal3Open] = useState(false);
  const [isModal4Open, setIsModal4Open] = useState(false);
  const [isModal5Open, setIsModal5Open] = useState(false);
  const [isModal6Open, setIsModal6Open] = useState(false);

  const handleElement1Click = () => {
    setIsModal1Open(true);
  };
  const handleElement2Click = () => {
    setIsModal2Open(true);
  };
  const handleElement3Click = () => {
    setIsModal3Open(true);
  };
  const handleElement4Click = () => {
    setIsModal4Open(true);
  };
  const handleElement5Click = () => {
    setIsModal5Open(true);
  };
  const handleElement6Click = () => {
    setIsModal6Open(true);
  };
  return (
    <>
      <Grid container spacing={10} sx={{ mt: 8 }} item xs={12}>
        <Typography
          variant="h1"
          gutterBottom
          style={{
            textAlign: "center",
            width: "100%",
            fontFamily: "ClashDisplay-Variable",
            fontWeight: "600",
            fontSize: "42px",
            marginBottom: "40px",
            marginTop: "40px",
          }}
        >
          Our Roadmap
        </Typography>
      </Grid>
      <div
        className="image-container"
        style={{ marginLeft: "-402px", position: "relative" }}
      >
        {roadmap}
        <div
          onMouseEnter={handleElement1Click}
          onMouseLeave={() => setIsModal1Open(false)}
          style={{ position: "absolute", top: "390px", left: "340px" }}
        >
          {q1}
        </div>
        {isModal1Open && (
          <div
            className="modalContainer-1"
            style={{
              position: "absolute",
              top: "180px",
              left: "320px",
              width: "241.81px",
              height: "200px",
            }}
          >
            <p
              style={{
                fontFamily: "sans-serif",
                paddingLeft: "10px",
                lineHeight: "20px",
                paddingTop: "10px",
              }}
            >
              •Ideation and planning of Gratie 
              <br />
              •Initial Consumer research 
              <br />
              •MVP soft launch 
              <br />
              •Initial Airdrop of Gratie tokens for early adopters and
              community 
              <br />
              •Participating in hackathon and grants 
            </p>{" "}
          
          </div>
        )}
        {isModal1Open && <div className="overlay"></div>}
        <div
          onClick={handleElement2Click}
          style={{ position: "absolute", top: "565px", left: "530px" }}
        >
          {q2}
        </div>
        {isModal2Open && (
          <div
            className="modalContainer-2"
            style={{
              position: "absolute",
              top: "700px",
              left: "520px",
              width: "241.81px",
              height: "220px",
            }}
          >
            <p
              style={{
                fontFamily: "sans-serif",
                paddingLeft: "10px",
                lineHeight: "20px",
                paddingTop: "10px",
              }}
            >
              •Consumer feedback based on beta launch and changes 
              <br />
              •Integrating web3auth for service providers for ease of
              onboarding 
              <br />
              •Active marketing and businesses onboarding into the platform 
              <br />
              •Airdrop and community expansion 
            </p>{" "}
            <div className="closeButton" onClick={() => setIsModal2Open(false)}>
              <CloseIcon></CloseIcon>
            </div>
          </div>
        )}
        {isModal2Open && <div className="overlay"></div>}
        <div
          onClick={handleElement3Click}
          style={{ position: "absolute", top: "210px", left: "730px" }}
        >
          {q3}
        </div>
        {isModal3Open && (
          <div
            className="modalContainer-3"
            style={{
              position: "absolute",
              top: "160px",
              left: "740px",
              width: "301.81px",
              height: "240px",
            }}
          >
            <p
              style={{
                fontFamily: "sans-serif",
                paddingLeft: "10px",
                lineHeight: "20px",
                paddingTop: "10px",
              }}
            >
              •Collaborating with utility companies for enterprise token to
              create an ecosystem 
              <br />
              • Introducing stripe payments for purchasing NFT and platform fee 
              <br />
              •MVP soft launch 
              <br />
              •Introducing dynamic staking and yield farming to incentivize
              early adopters 
              <br />
              •Implementation of separate service provider dashboard  
            </p>{" "}
            <div className="closeButton" onClick={() => setIsModal3Open(false)}>
              <CloseIcon></CloseIcon>
            </div>
          </div>
        )}
        {isModal3Open && <div className="overlay"></div>}
        <div
          onClick={handleElement4Click}
          style={{ position: "absolute", top: "220px", left: "970px" }}
        >
          {q4}
        </div>
        {isModal4Open && (
          <div
            className="modalContainer-4"
            style={{
              position: "absolute",
              top: "5px",
              left: "950px",
              width: "301.81px",
              height: "220px",
            }}
          >
            <p
              style={{
                fontFamily: "sans-serif",
                paddingLeft: "10px",
                lineHeight: "20px",
                paddingTop: "10px",
              }}
            >
              •Introducing enterprise token staking for additional benefits 
              <br />
              •A dashboard which enables enterprise to track individual consumer
              analytics and issue rewards accordingly 
              <br />
              •One click token public sale with token lock up 
              <br />
              •Token Listing in DEX and tier 2 exchanges 
              <br />
            </p>{" "}
            <div className="closeButton" onClick={() => setIsModal4Open(false)}>
              <CloseIcon></CloseIcon>
            </div>
          </div>
        )}
        {isModal4Open && <div className="overlay"></div>}
        <div
          onClick={handleElement5Click}
          style={{ position: "absolute", top: "480px", left: "1040px" }}
        >
          {q5}
        </div>
        {isModal5Open && (
          <div
            className="modalContainer-5"
            style={{
              position: "absolute",
              top: "620px",
              left: "1050px",
              width: "361.81px",
              height: "220px",
            }}
          >
            <p
              style={{
                fontFamily: "sans-serif",
                paddingLeft: "10px",
                lineHeight: "20px",
                paddingTop: "10px",
              }}
            >
              •Implementing worm hole and bridges for enabling same services for
              RUST based chains 
              <br />
              •Sophisticated dashboard for enterprise 
              <br />
              •API and SDK implementation for integrating white labeled
              rewarding portal into enterprise application 
              <br />
              •Initial onboarding of DAO members and creating a robust automated
              system for enterprise valuation validation 
              <br /> 
            </p>{" "}
            <div className="closeButton" onClick={() => setIsModal5Open(false)}>
              <CloseIcon></CloseIcon>
            </div>
          </div>
        )}
        {isModal5Open && <div className="overlay"></div>}
        <div
          onClick={handleElement6Click}
          style={{ position: "absolute", top: "150px", left: "1320px" }}
        >
          {q6}
        </div>
        {isModal6Open && (
          <div
            className="modalContainer-5"
            style={{
              position: "absolute",
              top: "140px",
              left: "1350px",
              width: "301.81px",
              height: "190px",
            }}
          >
            <p
              style={{
                fontFamily: "sans-serif",
                paddingLeft: "10px",
                lineHeight: "20px",
                paddingTop: "10px",
              }}
            >
              •Ideation and planning of Gratie 
              <br />
              •Research on private blockchain for storing , passing and
              validating specific company needs 
              <br />
              •Automated tools to improve the consumer and employee reward
              feedback and usage 
              <br />
              •Token listing in tier 1 exchanges 
            </p>{" "}
            <div className="closeButton" onClick={() => setIsModal6Open(false)}>
              <CloseIcon></CloseIcon>
            </div>
          </div>
        )}
        {isModal6Open && <div className="overlay"></div>}
      </div>
    </>
  );
}
