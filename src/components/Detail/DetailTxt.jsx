import React from "react";
import styled from "styled-components";

const TextSectionStyle = styled.div`
  transform: translateY(20px);
`;

const TextSection = ({ letter, editMode, editingContent, setEditingContent }) => {
  return (
    <TextSectionStyle>
      <img src={letter.avatar} alt="memberImg" />
      <h4>{letter.nickname}</h4>
      {editMode ? (
        <input
          type="text"
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
