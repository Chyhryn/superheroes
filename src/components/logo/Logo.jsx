import { LogoLink } from "./logo.styled";

const logo = process.env.PUBLIC_URL + "/logo.svg";

export const Logo = () => {
  return (
    <LogoLink to="/" style={{ display: "block", width: 50, margin: "0 auto" }}>
      <img src={logo} alt="Logo" />
    </LogoLink>
  );
};
