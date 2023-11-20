import React, { useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import styled from "styled-components";
import TextSection from '../components/Detail/DetailTxt';
import DetailBtns from '../components/Detail/DetailBtns';
import HomeBtn from '../components/Detail/HomeBtn';

const Detail = ({ letters, setLetters }) => {
  const DetailPage = styled.div`
    width: 600px;
    height: 400px;
    margin: 15vh auto 10vh auto;
    background: rgba(255, 255, 255, 0.1);
  `;

  const navigate = useNavigate();
  const params = useParams();
  const [editMode, setEditMode] = useState(false);
  const letter = letters.find((letter) => letter.id === params.id);
  const [editingContent, setEditingContent] = useState(letter.content);

  const onDeleteHandler = () => {
    alert("정말로 삭제하시겠습니까?");
    const delLetter = letters.filter((letter) => letter.id !== params.id);

    setLetters(delLetter);
    navigate("/");
  };

  const onEditHandler = () => {
    setEditMode(true);
  };

  const onEditCompleteHandler = () => {
    setEditMode(false);
    const updatedLetters = letters.map((item) =>
      item.id === params.id ? { ...item, content: editingContent } : item
    );

    setLetters(updatedLetters);
  };

  return (
    <>
      <DetailPage>
        <TextSection
          letter={letter}
          editMode={editMode}
          editingContent={editingContent}
          setEditingContent={setEditingContent}
        />
        <DetailBtns
          editMode={editMode}
          onEditCompleteHandler={onEditCompleteHandler}
          onEditHandler={onEditHandler}
          onDeleteHandler={onDeleteHandler}
        />
      </DetailPage>
      <HomeBtn />
    </>
  );
};

export default Detail;
