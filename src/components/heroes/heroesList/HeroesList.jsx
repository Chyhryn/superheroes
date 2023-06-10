import { useEffect, useRef, useState } from "react";
import { HeroesItem } from "../heroesItem/HeroesItem";
import { useDispatch, useSelector } from "react-redux";
import { getHeroesList } from "../../../redux/heroes/operations";
import {
  selectHeroesList,
  selectIsLoading,
} from "../../../redux/heroes/selectors";
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
  Notification,
  HeroesSearchBtn,
} from "./heroesList.styled";
import { Loader } from "../../common/loader/Loader";
import { changeCurrentPage } from "../../../redux/heroes/slice";

export const HeroesList = () => {
  const inputRef = useRef("");
  const { heroesList, totalPages, currentPage } = useSelector(selectHeroesList);
  const isLoading = useSelector(selectIsLoading);
  const [isOpenModal, setIsOpenModal] = useState(false);
  const [searchValue, setSearchValue] = useState("");
  const dispatch = useDispatch();

  const handlePageChange = (pageNumber) => {
    dispatch(changeCurrentPage(pageNumber));
  };

  const handleOnClickInputBtn = (e) => {
    dispatch(changeCurrentPage(1));
    if (e.currentTarget.name === "search") {
      setSearchValue(inputRef.current.value);
    } else {
      setSearchValue("");
    }
  };

  useEffect(() => {
    if (currentPage) {
      dispatch(getHeroesList({ page: currentPage, search: searchValue }));
    }
  }, [dispatch, currentPage, searchValue]);

  return (
    <>
      <HeroesBox>
        <HeroesInputContainer>
          <HeroesInput
            type="text"
            ref={inputRef}
            placeholder="Search"
            name="search"
          />
          <SearchIcon />
          <HeroesSearchBtn name="search" onClick={handleOnClickInputBtn}>
            Search
          </HeroesSearchBtn>
          <HeroesSearchBtn name="refresh" onClick={handleOnClickInputBtn}>
            Refresh
          </HeroesSearchBtn>
        </HeroesInputContainer>
        <HeroesAddBtn type="button" onClick={() => setIsOpenModal(true)}>
          Add new hero
          <PlusIcon />
        </HeroesAddBtn>
      </HeroesBox>
      {isLoading ? (
        <>
          <Notification>
            Please wait till the data loading. We host the backend part on a
            free Render account so the first loading can take 1 min.
          </Notification>
          <Loader />
        </>
      ) : (
        <>
          <List>
            {heroesList.length > 0 &&
              heroesList.map((hero) => (
                <HeroesItem hero={hero} key={hero._id} />
              ))}
          </List>
          <Pagination
            totalPages={totalPages}
            handlePageChange={handlePageChange}
            currentPage={currentPage}
          />
        </>
      )}

      <ModalWindow open={isOpenModal} onClose={() => setIsOpenModal(false)}>
        <HeroForm onClose={() => setIsOpenModal(false)} />
      </ModalWindow>
    </>
  );
};
