import React from "react";
import styled from "styled-components";

const Button = styled.button`
  margin-top: 3vh;
  color: white;
  cursor: pointer;
`;
const InputSection = styled.div`
  width: 600px;
  height: 430px;
  margin: 10vh auto 10vh auto;
  color: white;
  background: rgba(255, 255, 255, 0.1);
`;
const Input1 = styled.input`
  height: 35px;
  margin-top: 5vh;
  background: rgba(255, 255, 255, 0.5);
  border-style: none;
`;
const Input2 = styled.input`
  height: 150px;
  margin: 3vh;
  background: rgba(255, 255, 255, 0.5);
  border-style: none;
`;
const Select = styled.select`
  padding: 5px;
  background: rgba(255, 255, 255, 0.5);
  border-style: none;
  color: white;
`;

const Input = ({
  name,
  value,
  onChange,
  maxLength,
  content,
  member,
  curMembers,
  onChangeHandler,
  onSubmitHandler,
}) => {
  return (
    <InputSection>
      <Input1
        placeholder="최대 20글자까지 작성할 수 있습니다."
        name="name"
        value={name}
        onChange={onChangeHandler}
        maxLength="20"
      />
      <Input2
        placeholder="최대 100자까지만 작성할 수 있습니다."
        name="content"
        value={content}
        onChange={onChangeHandler}
      />
      <div>
        select a member &nbsp;&nbsp;
        <Select onChange={onChangeHandler} value={curMembers} name="members">
          {["YUJIN", "GAEUL", "REI", "WONYOUNG", "LIZ", "LEESEO"].map(
            (member) => (
              <option key={member} value={member}>
                {member}
              </option>
            )
          )}
        </Select>
      </div>
      <Button onClick={onSubmitHandler}>submit</Button>
    </InputSection>
  );
};

export default Input;
