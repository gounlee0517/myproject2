import {createStore} from "redux";
import { combineReducers } from "redux";
import addletters from "../modules/addLetters"

const rootReducer = combineReducers({
  addletters,
});
const store = createStore(rootReducer);

export default store;