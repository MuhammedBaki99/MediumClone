import { LeftArrow, Login } from "../svgfiles/svg"; 
import { signUp } from "./actions";
import "./signup.css";

export default function SignUp({setSign, sign }) {
  return (
    <div className="signup"  style={{
      opacity: `${sign === "login" ? "0" : "1"}`,
      transition:"all .1s",
    }}> 
        <h1>Kayıt Ol</h1>
        <form action={signUp}>
          <label htmlFor="firstName">
            <input type="text" name="firstName" placeholder="Adınız" required />
          </label>
          <label htmlFor="lastName">
            <input type="text" name="lastName" placeholder="Soyadınız" required />
          </label>
          <label htmlFor="email">
            <input type="email" name="email" placeholder="E-posta Adresiniz" required />
          </label>
          <label htmlFor="password">
            <input type="password" name="password" placeholder="********" required />
          </label>
          <button><Login /> Kayıt Ol </button>
        </form>
        <button onClick={() => setSign("login")}> <LeftArrow /> Giriş Yap</button>
      </div>
  );
}
