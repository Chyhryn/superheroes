import { HeroesList } from "../heroesList/HeroesList";
import {
  AddBtn,
  HeroesBox,
  HeroesInput,
  HeroesInputContainer,
  SearchIcon,
} from "./heroes.styled";

export const Heroes = () => {
  const handleOnClick = () => {
    alert("Click");
  };
  return (
    <>
      <HeroesBox>
        <HeroesInputContainer>
          <HeroesInput type="text" placeholder="Search" />
          <SearchIcon />
        </HeroesInputContainer>
        <AddBtn type="button" onClick={handleOnClick}>
          Add new hero
        </AddBtn>
      </HeroesBox>

      <HeroesList />
    </>
  );
};
