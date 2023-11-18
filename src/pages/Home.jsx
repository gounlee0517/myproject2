import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import Header from "../components/Home/Header";
import Main from "../components/Home/Main";
import Footer from "../components/Home/Footer";
import Input from "../components/Home/main/Input";
import Letters from "../components/Home/main/Letters";
import Taps from "../components/Home/main/Taps";

function Home({ letters, setLetters }) {
  const navigate = useNavigate();
  const [name, setName] = useState("");
  const [content, setContent] = useState("");
  const [curMembers, setCurMembers] = useState("유진");

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

  return (
    <>
      <Header />

      <Main />
      <section className="btn-section">
        <button onClick={() => {setCurMembers("유진")}}>유진</button>
        <button onClick={() => {setCurMembers("가을")}}>가을</button>
        <button onClick={() => {setCurMembers("레이")}}>레이</button>
        <button onClick={() => {setCurMembers("원영")}}>원영</button>
        <button onClick={() => {setCurMembers("리즈")}}>리즈</button>
        <button onClick={() => {setCurMembers("이서")}}>이서</button>
      </section>

      <section className="input-section">
        <input
          placeholder="최대 20글자까지 작성할 수 있습니다."
          name="name"
          value={name}
          onChange={onChangeHandler}
        />
        <input
          placeholder="최대 100자까지만 작성할 수 있습니다."
          name="content"
          value={content}
          onChange={onChangeHandler}
        />
        <div>
          누구에게 보내실 건가요?
          <select onChange={onChangeHandler} value={curMembers} name="members">
            <option >유진</option>
            <option >가을</option>
            <option >레이</option>
            <option >원영</option>
            <option >리즈</option>
            <option >이서</option>
          </select>
        </div>
        <button onClick={onSubmitHandler}>팬레터 등록</button>
      </section>

      <section className="letter-section">
        {letters
        .filter((value) => {
          return value.writedTo === curMembers;
        })
        .map((item) => {
          return (
            <div
              key={item.id}
              onClick={() => {
                navigate(`Detail/${item.id}`);
              }}
            >
              <h4>{item.nickname}</h4>
              <p>{item.content}</p>
            </div>
          );
        })}

      </section>
    </>
  );
}

export default Home;
