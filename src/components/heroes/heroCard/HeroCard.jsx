import { useNavigate, useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { ModalWindow } from "../../modalWindow/ModalWindow";
import { HeroForm } from "../heroForm/HeroForm";
import {
  deleteHero,
  deleteHeroImg,
  getHeroById,
} from "../../../redux/heroes/operations";
import {
  selectHero,
  selectIsLoading,
  selectShouldRedirect,
} from "../../../redux/heroes/selectors";
import {
  AddHeroImgBtn,
  AddHeroImgIcon,
  DelImgBtn,
  DelIcon,
  DelHeroBtn,
  IconBtn,
  HeroActiveImg,
  HeroActiveImgWrapper,
  HeroCloseEditIcon,
  HeroContainer,
  HeroEditBtn,
  HeroEditIcon,
  HeroImg,
  HeroImgBox,
  HeroImgContainer,
  HeroImgItem,
  HeroImgList,
  HeroInfoWrapper,
  HeroParagraph,
  HeroSpan,
  HeroTitle,
  SuperpowersItem,
  SuperpowersList,
  HeroBtnRihtSpan,
} from "./heroCard.styled";
import { Loader } from "../../common/loader/Loader";

export const HeroCard = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [isOpenModal, setIsOpenModal] = useState(false);
  const [activeImg, setActiveImg] = useState(null);
  const [editState, setEditState] = useState(false);
  const [fieldName, setFieldName] = useState(null);
  const isLoading = useSelector(selectIsLoading);
  const shouldRedirect = useSelector(selectShouldRedirect);

  const dispatch = useDispatch();

  const hero = useSelector(selectHero);

  const handleOnClick = (e) => {
    const { name } = e.currentTarget;
    setFieldName(name);
    setIsOpenModal(true);
  };

  const handleOnClickDelete = (e) => {
    const image = e.currentTarget.name;
    dispatch(deleteHeroImg({ id, image }));
  };

  const handleOnClickImgItem = (e) => {
    const { src } = e.target;
    setActiveImg(src);
  };

  useEffect(() => {
    if (shouldRedirect) navigate("/", { replace: true });
    dispatch(getHeroById(id));
  }, [dispatch, id, shouldRedirect, navigate]);

  return (
    <>
      {isLoading && <Loader />}
      {hero._id && !isLoading && (
        <>
          <HeroContainer>
            <HeroImgContainer>
              <HeroImgBox>
                <HeroActiveImgWrapper>
                  <HeroActiveImg
                    src={activeImg ? activeImg : hero.Images[0]}
                    alt={`${hero.nickname} active`}
                  />
                </HeroActiveImgWrapper>
                <HeroImgList>
                  {hero.Images.map((image, index) => (
                    <HeroImgItem key={image} onClick={handleOnClickImgItem}>
                      <HeroImg src={image} alt={`${hero.nickname} ${index}`} />
                      {editState && (
                        <DelImgBtn name={image} onClick={handleOnClickDelete}>
                          <DelIcon />
                        </DelImgBtn>
                      )}
                    </HeroImgItem>
                  ))}
                </HeroImgList>
              </HeroImgBox>
              {editState && (
                <AddHeroImgBtn name="Images" onClick={handleOnClick}>
                  Add images <AddHeroImgIcon />
                </AddHeroImgBtn>
              )}
            </HeroImgContainer>

            <HeroInfoWrapper>
              <HeroTitle>
                {hero.nickname}
                {editState && (
                  <IconBtn name="nickname" onClick={handleOnClick}>
                    <HeroEditIcon />
                  </IconBtn>
                )}
              </HeroTitle>
              <HeroParagraph>
                <HeroSpan>
                  Real name
                  {editState && (
                    <IconBtn name="real_name" onClick={handleOnClick}>
                      <HeroEditIcon />
                    </IconBtn>
                  )}
                </HeroSpan>
                {hero.real_name}
              </HeroParagraph>
              <HeroParagraph>
                <HeroSpan>
                  Origin description
                  {editState && (
                    <IconBtn name="origin_description" onClick={handleOnClick}>
                      <HeroEditIcon />
                    </IconBtn>
                  )}
                </HeroSpan>
                {hero.origin_description}
              </HeroParagraph>
              <HeroSpan>
                Superpowers
                {editState && (
                  <IconBtn name="superpowers" onClick={handleOnClick}>
                    <HeroEditIcon />
                  </IconBtn>
                )}
              </HeroSpan>
              <SuperpowersList>
                {hero.superpowers.split(", ").map((s, index) => (
                  <SuperpowersItem key={index}>{s}</SuperpowersItem>
                ))}
              </SuperpowersList>
              <HeroParagraph>
                <HeroSpan>
                  Catch phrase
                  {editState && (
                    <IconBtn name="catch_phrase" onClick={handleOnClick}>
                      <HeroEditIcon />
                    </IconBtn>
                  )}
                </HeroSpan>
                {hero.catch_phrase}
              </HeroParagraph>
              {editState && (
                <DelHeroBtn onClick={() => dispatch(deleteHero(hero._id))}>
                  <DelIcon />
                  <HeroBtnRihtSpan>Delete hero</HeroBtnRihtSpan>
                </DelHeroBtn>
              )}
              <HeroEditBtn onClick={() => setEditState((prev) => !prev)}>
                {!editState ? <HeroEditIcon /> : <HeroCloseEditIcon />}{" "}
                <HeroBtnRihtSpan>Edit Hero</HeroBtnRihtSpan>
              </HeroEditBtn>
            </HeroInfoWrapper>
          </HeroContainer>
          <ModalWindow open={isOpenModal} onClose={() => setIsOpenModal(false)}>
            <HeroForm
              onClose={() => setIsOpenModal(false)}
              fieldName={fieldName}
              value={fieldName !== "Images" ? hero[fieldName] : []}
            />
          </ModalWindow>
        </>
      )}
    </>
  );
};
