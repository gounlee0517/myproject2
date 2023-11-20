import React from "react";
import styled from "styled-components";

const LetterSection = styled.div`
  width: 600px;
  height: 200px;
  margin: 0 auto 15vh auto;
  text-align: left;
  color: white;
`;
const Letter = styled.div`
  display: flex;
  padding: 10px;
`;
const Footer = styled.div`
  color: #d2d1d3;
  padding: 20px;
  background-color: #fc3e54;
`;

const Letters = ({ letters, curMembers, navigate, truncate }) => {
  return (
    <LetterSection className="letter-section">
      {letters
        .filter((value) => {
          return value.writedTo === curMembers;
        })
        .map((item) => {
          return (
            <Letter
              key={item.id}
              onClick={() => {
                navigate(`Detail/${item.id}`);
              }}
            >
              <img src={item.avatar}></img>
              <div>
                <h4>{item.nickname}</h4>
                <p>{truncate(item.content, 100)}</p>
              </div>
            </Letter>
          );
        })}
    </LetterSection>
  );
};

export default Letters;
