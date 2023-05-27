import { useNavigate } from "react-router-dom";
import { HeroImg, HeroImgWrapper, HeroTitle, Item } from "./heroesItem.styled";
import { BACKEND_BASE_URL, DEFAULT_HERO_IMG } from "../../../utils/appKeys";

export const HeroesItem = ({ hero }) => {
  const navigate = useNavigate();
  const image = `${BACKEND_BASE_URL}/${hero.Images[0]}`;
  return (
    <>
      <Item onClick={() => navigate(`/hero/${hero._id}`)}>
        <HeroImgWrapper>
          <HeroImg
            src={hero.Images[0] ? image : DEFAULT_HERO_IMG}
            alt={hero.nickname}
          />
        </HeroImgWrapper>
        <HeroTitle>{hero.nickname}</HeroTitle>
      </Item>
    </>
  );
};
