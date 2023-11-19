import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";

function Home({ letters, setLetters }) {
  const Taps = styled.div`
    width: 800px;
    margin: 0 auto 10vh auto;
    display: grid;
    grid-template-columns: 1fr 1fr 1fr 1fr 1fr 1fr;
    grid-column-gap: 20px;
  `;
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
  const LetterSection = styled.div`
    width: 600px;
    height: 200px;
    margin: 0 auto 20vh auto;
    text-align: left;
    color: white;
  `;
  const Letter = styled.div`
    display: flex;
    padding: 10px;
  `
  const Footer = styled.div`
    color: #d2d1d3;
    padding: 20px;
    background-color: #fc3e54;
  `;

  const navigate = useNavigate();
  const [name, setName] = useState("");
  const [content, setContent] = useState("");
  const [curMembers, setCurMembers] = useState("유진");
  const selectedMember = letters.find(
    (member) => member.writedTo === curMembers
  );

  const onChangeHandler = (e) => {
    if (e.target.name === "name") {
      setName(e.target.value);
    } else if (e.target.name === "content") {
      setContent(e.target.value);
    } else if (e.target.name === "members") {
      setCurMembers(e.target.value);
    }
  };

  const onSubmitHandler = (e) => {
    e.preventDefault();
    const newLetter = {
      id: String(letters.length + 1),
      avatar: selectedMember ? selectedMember.avatar : "",
      nickname: name,
      content: content,
      writedTo: curMembers,
    };

    if (name === "") {
      alert("닉네임을 입력해주세요");
    } else if (content === "") {
      alert("내용을 입력해주세요");
    } else {
      setLetters([...letters, newLetter]);
    }

    setName("");
    setContent("");
  };

  const truncate = (content, n) => {
    return content?.length > n ? content.substr(0, n - 1) + "..." : content;
  };

  return (
    <div>
      <audio autoPlay>
        <source src="IVE-Baddie.mp3" type="audio/mpeg"></source>
      </audio>
      <Taps>
        <Button
          onClick={() => {
            setCurMembers("유진");
          }}
        >
          YUJIN
        </Button>
        <Button
          onClick={() => {
            setCurMembers("가을");
          }}
        >
          GAEUL
        </Button>
        <Button
          onClick={() => {
            setCurMembers("레이");
          }}
        >
          REI
        </Button>
        <Button
          onClick={() => {
            setCurMembers("원영");
          }}
        >
          WONYOUNG
        </Button>
        <Button
          onClick={() => {
            setCurMembers("리즈");
          }}
        >
          LIZ
        </Button>
        <Button
          onClick={() => {
            setCurMembers("이서");
          }}
        >
          LEESEO
        </Button>
      </Taps>

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
            <option>YUJIN</option>
            <option>GAEUL</option>
            <option>REI</option>
            <option>WONYOUNG</option>
            <option>LIZ</option>
            <option>LEESEO</option>
          </Select>
        </div>
        <Button onClick={onSubmitHandler}>submit</Button>
      </InputSection>

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

      <Footer>
        <h4>Letters to IVE</h4>
        <p>copyright</p>
      </Footer>
    </div>
  );
}

export default Home;
