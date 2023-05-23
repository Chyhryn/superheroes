import { HeroImgWrapper, HeroTitle, Item } from "./heroesItem.styled";

export const HeroesItem = ({ hero }) => {
  return (
    <Item>
      <HeroImgWrapper>
        <img src="#" alt="HERO" />
      </HeroImgWrapper>
      <HeroTitle>{hero.nickname}</HeroTitle>
    </Item>
  );
};
