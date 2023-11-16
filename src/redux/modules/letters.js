const ADD_LETTER = "letters/ADD_LETTER";
const DEL_LETTER = "letters/DEL_LETTER";

export const addLetter = ({ id, nickname, content, writedTo }) => {
  return {
    type: ADD_LETTER,
    id,
    nickname,
    content,
    writedTo
  }
}

export const delLetter = id => ({
  type: DEL_LETTER,
  id
});


const initialState = [];

const letters = (state = initialState, action) => {
  switch (action.type) {
    case ADD_LETTER:
      return [
        ...state,
        {
          id: action.id,
          nickname: action.nickname,
          content: action.content
        }
      ];

    case DEL_LETTER:
      const delState = state.filter(letter => letter.id !== action.id);
      return delState;

    default:
      return state;
  }
};

export default letters;