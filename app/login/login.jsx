"use client"
import { Login, RightArrow } from '../svgfiles/svg';
import { login, signup } from './actions';
import "./login.css"

export default function LoginPage({setSign, sign }) {

  return (
    <div className="login" style={{
      opacity: `${sign === "signup" ? "0" : "1"}`,
      transition:"all .1s",
    }}>
      <form>
        <h1>Giriş Yap</h1>
        <label htmlFor="email">Email:
        <input id="email" name="email" type="email" required placeholder='E-Posta Giriniz...'/></label>
        <label htmlFor="password">Password:
        <input id="password" name="password" type="password" required placeholder='Şifre Giriniz...'/></label>
        <button formAction={login}>Giriş Yap <Login /></button>
      </form>
      <button onClick={() => setSign("signup")}>Kayıt Ol <RightArrow /></button>
    </div>
  )
}