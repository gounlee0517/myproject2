import React, { useRef, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";

function Detail({ letters, setLetters }) {
  const navigate = useNavigate();
  const params = useParams();
  const [editMode, setEditMode] = useState(false);


  const onDeleteHandler = (id) => {
    alert("정말로 삭제하시겠습니까?");
    const delLetter = letters.filter((letter) => letter.id !== params.id);
    
    setLetters(delLetter);
    navigate("/");
  }

  const letter = letters.find((letter) => letter.id === params.id);
  const [editingContent, setEditingContent] = useState(letter.content);

  const onEditHandler = () => {
    setEditMode(true);
  }
  // const onChangeReadMode = () => {
  //   setEditingContent(letter.content);
  //   setEditMode(false);
  // }

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
        editMode : {JSON.stringify(editMode)}
        &nbsp;
        {editMode ?
        <button onClick={() => {onEditHandler(letters)}}>완료</button>
        :
        <button onClick={() => {onEditHandler(letters)}}>수정</button>
        }
        {/* <button onClick={() => {onEditHandler(letters)}}>수정</button> */}
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
