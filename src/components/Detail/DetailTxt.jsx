import React from "react";
import styled from "styled-components";

const TextSectionStyle = styled.div`
  transform: translateY(20px);
`;
const InputStyle = styled.input`
  height: 10vh;
  color: #fd8acb;
  background: rgba(255, 255, 255, 0.5);
  border-style: none;
`

const TextSection = ({ letter, editMode, editingContent, setEditingContent }) => {
  return (
    <TextSectionStyle>
      <img src={letter.avatar} alt="memberImg" />
      <h3>{letter.nickname}</h3>
      {editMode ? (
        <InputStyle
          type="textarea"
          value={editingContent}
          onChange={(e) => setEditingContent(e.target.value)}
        />
      ) : (
        letter.content
      )}
    </TextSectionStyle>
  );
};

export default TextSection;
