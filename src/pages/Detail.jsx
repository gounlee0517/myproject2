import React, { useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import styled from "styled-components";

function Detail({ letters, setLetters }) {
  const DetailPage = styled.div`
    width: 600px;
    height: 400px;
    margin: 15vh auto 10vh auto;
    background: rgba(255, 255, 255, 0.1);
  `
  const TextSection = styled.div`
    transform: translateY(20px);
  `
  const DetailBtns = styled.div`
    margin-top: 80px;
    transform: translateX(31%);
    display: grid;
    grid-template-columns: 120px 120px;
  `


  const navigate = useNavigate();
  const params = useParams();
  const [editMode, setEditMode] = useState(false);
  const letter = letters.find((letter) => letter.id === params.id);
  const [editingContent, setEditingContent] = useState(letter.content);

  const onDeleteHandler = (id) => {
    alert("정말로 삭제하시겠습니까?");
    const delLetter = id.filter((letter) => letter.id !== params.id);
    
    setLetters(delLetter);
    navigate("/");
  }

  const onEditHandler = () => {
    setEditMode(true);
  }

  const onEditCompleteHandler = () => {
    setEditMode(false);
    const updatedLetters = letters.map((item) => 
      item.id === params.id ? {...item, content: editingContent} : item);

    setLetters(updatedLetters);
  }
 
  return (
    <>
    <DetailPage>
      <TextSection>
        <img src={letter.avatar} alt="memberImg"></img>
        <h4>{letter.nickname}</h4> 
        {editMode ? 
        <input 
        type="text"
        value={editingContent}
        onChange={(e) => setEditingContent(e.target.value)}
        /> : letter.content}
      </TextSection>

      <DetailBtns>
        {editMode ?
        <button 
        onClick={() => {onEditCompleteHandler(letters)}}>complete</button>
        :
        <button onClick={() => {onEditHandler(letters)}}>edit</button>
        }
        <button onClick={() => {onDeleteHandler(letters)}}>delete</button>
      </DetailBtns>
    </DetailPage>

      <button
        onClick={() => {
          navigate("/");
        }}
      >
        Home
      </button>
    </>
  );
}

export default Detail;
