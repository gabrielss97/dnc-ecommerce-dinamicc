import "./index.scss";
import logo from "../../assets/logo.svg";

export default function Header() {
  return (
    <div className="Header">
      <img src={logo} alt="logo" />
      <a href="">Home</a>
      <a href="">Novidades</a>
      <a href="">Feminino</a>
      <a href="">Masculino</a>
      <a href="">Atendimento</a>
    </div>
  );
}
