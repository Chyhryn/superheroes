import { Title1 } from "../../components/global.styled";
import { HeroesList } from "../../components/heroes/heroesList/HeroesList";

export const HomePage = () => {
  return (
    <>
      <Title1>Superheroes</Title1>
      <HeroesList />
    </>
  );
};
