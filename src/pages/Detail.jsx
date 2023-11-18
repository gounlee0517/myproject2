import React, { useState } from "react";
import { useNavigate, useParams } from "react-router-dom";

function Detail({ letters, setLetters }) {
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
    <div>
      <div>
        <h4>{letter.nickname}</h4> 
        {editMode ? 
        <input 
        type="text"
        value={editingContent}
        onChange={(e) => setEditingContent(e.target.value)}
        /> : letter.content}
      </div>

      <div>
        {editMode ?
        <button 
        onClick={() => {onEditCompleteHandler(letters)}}>완료</button>
        :
        <button onClick={() => {onEditHandler(letters)}}>수정</button>
        }
        <button onClick={() => {onDeleteHandler(letters)}}>삭제</button>
      </div>
    </div>

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
