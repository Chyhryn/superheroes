import { LOGO } from "../../../utils/appKeys";
import { LogoLink } from "./logo.styled";

export const Logo = () => {
  return (
    <LogoLink to="/">
      <img src={LOGO} alt="Logo" />
    </LogoLink>
  );
};
