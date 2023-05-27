import { useEffect, useState } from "react";
import { HeroesItem } from "../heroesItem/HeroesItem";
import { useDispatch, useSelector } from "react-redux";
import { getHeroes } from "../../../redux/heroes/operations";
import { selectHeroes, selectIsLoading } from "../../../redux/heroes/selectors";
import { Pagination } from "../../common/pagination/Pagination";
import { ModalWindow } from "../../modalWindow/ModalWindow";
import { HeroForm } from "../heroForm/HeroForm";
import {
  HeroesAddBtn,
  HeroesBox,
  HeroesInput,
  HeroesInputContainer,
  PlusIcon,
  SearchIcon,
  List,
} from "./heroesList.styled";
import { Loader } from "../../common/loader/Loader";

const ITEMS_PER_PAGE = 5;

export const HeroesList = () => {
  const heroes = useSelector(selectHeroes);
  const isLoading = useSelector(selectIsLoading);
  const [isOpenModal, setIsOpenModal] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const [searchValue, setSearchValue] = useState("");
  const dispatch = useDispatch();

  const handleOnChangeSearchInput = (e) => {
    setSearchValue(e.target.value.toLowerCase());
  };

  const filtered = heroes.filter((hero) =>
    hero.nickname.toLowerCase().includes(searchValue)
  );

  const totalPages = Math.ceil(heroes.length / ITEMS_PER_PAGE);

  const getCurrentItems = () => {
    const startIndex = (currentPage - 1) * ITEMS_PER_PAGE;
    const endIndex = startIndex + ITEMS_PER_PAGE;
    return filtered.slice(startIndex, endIndex);
  };

  const handlePageChange = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  useEffect(() => {
    dispatch(getHeroes());
  }, [dispatch]);

  return (
    <>
      <HeroesBox>
        <HeroesInputContainer>
          <HeroesInput
            type="text"
            onChange={handleOnChangeSearchInput}
            placeholder="Search"
            name="search"
          />
          <SearchIcon />
        </HeroesInputContainer>
        <HeroesAddBtn type="button" onClick={() => setIsOpenModal(true)}>
          Add new hero
          <PlusIcon />
        </HeroesAddBtn>
      </HeroesBox>
      {isLoading ? (
        <Loader />
      ) : (
        <>
          <List>
            {heroes.length > 0 &&
              getCurrentItems().map((hero) => (
                <HeroesItem hero={hero} key={hero._id} />
              ))}
          </List>
          {heroes.length > 5 && (
            <Pagination
              totalPages={totalPages}
              handlePageChange={handlePageChange}
            />
          )}
        </>
      )}

      <ModalWindow open={isOpenModal} onClose={() => setIsOpenModal(false)}>
        <HeroForm onClose={() => setIsOpenModal(false)} />
      </ModalWindow>
    </>
  );
};
