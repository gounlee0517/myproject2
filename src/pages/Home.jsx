import React, { useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import Input from '../components/Home/main/Input';
import Letters from '../components/Home/main/Letters';
import Taps from '../components/Home/main/Taps';
import { LetterContext } from '../context/LetterContext';
import { NameContext } from '../context/NameContext';
import { ContentContext } from '../context/ContentContext';
import { CurMembersContext } from '../context/CurMembersContext';

const Home = () => {
  const {letters, setLetters} = useContext(LetterContext);
  const {name, setName} = useContext(NameContext);
  const {content, setContent} = useContext(ContentContext);
  const {curMembers, setCurMembers} = useContext(CurMembersContext);
  const navigate = useNavigate();

  const selectedMember = letters.find((member) => member.writedTo === curMembers);

  const onChangeHandler = (e) => {
    if (e.target.name === 'name') {
      setName(e.target.value);
    } else if (e.target.name === 'content') {
      setContent(e.target.value);
    } else if (e.target.name === 'members') {
      setCurMembers(e.target.value);
    }
  };

  const onSubmitHandler = (e) => {
    e.preventDefault();
    const newLetter = {
      id: String(letters.length + 1),
      avatar: selectedMember ? selectedMember.avatar : '',
      nickname: name,
      content: content,
      writedTo: curMembers,
    };

    if (name === '') {
      alert('닉네임을 입력해주세요');
    } else if (content === '') {
      alert('내용을 입력해주세요');
    } else {
      setLetters([...letters, newLetter]);
    }

    setName('');
    setContent('');
  };

  const truncate = (content, n) => {
    return content?.length > n ? content.substr(0, n - 1) + '...' : content;
  };

  return (
    <div>
      <Taps setCurMembers={setCurMembers} />

      <Input
        onChangeHandler={onChangeHandler}
        onSubmitHandler={onSubmitHandler}
      />

      <Letters
        letters={letters}
        curMembers={curMembers}
        navigate={navigate}
        truncate={truncate}
      />

    </div>
  );
};

export default Home;
