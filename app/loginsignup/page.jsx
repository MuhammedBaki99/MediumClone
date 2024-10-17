"use client"

import "./loginsignup.css"
import { useState } from "react"  
import { MediumLogo } from "../svgfiles/svg";  
import LoginPage from "../login/login";
import SignUp from "../signup/signup";
export default function LoginSignUp() {
  const [sign, setSign] = useState("login");
  return (
    <div className="loginsignup">
      <div className="bgSquare" style={{
        transform: `${sign === "login" ? "translateX(0px)" : "translateX(450px)"}`
      }}>
      </div>
      <LoginPage setSign={setSign} sign={sign} />
      {sign === "login" ? <div className="logindesc">
        <MediumLogo />
        <p>"Fikirlerini ve hikayelerini paylaşarak dünyanın dört bir yanındaki insanlara ilham ver. Medium ile yaz, öğren ve büyü!"</p>
      </div> : <div className="signupdesc">
        <MediumLogo />
        <p>"Medium'a katılarak, fikirlerini geniş bir kitleye ulaştır ve kendi hikayeni yazmaya başla. Ücretsiz üye ol ve topluluğun bir parçası ol!"</p>
      </div>}
      <SignUp setSign={setSign} sign={sign} />
    </div>
  )
}