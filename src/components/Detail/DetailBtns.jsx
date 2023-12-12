import React from "react";
import styled from "styled-components";

const DetailBtnsStyle = styled.div`
  margin-top: 80px;
  transform: translateX(31%);
  display: grid;
  grid-template-columns: 120px 120px;
`;

const DetailBtns = ({ editMode, onEditCompleteHandler, onEditHandler, onDeleteHandler }) => {
  return (
    <DetailBtnsStyle>
      {editMode ? (
        <button onClick={onEditCompleteHandler}>complete</button>
      ) : (
        <button onClick={onEditHandler}>edit</button>
      )}
      <button onClick={onDeleteHandler}>delete</button>
    </DetailBtnsStyle>
  );
};

export default DetailBtns;
