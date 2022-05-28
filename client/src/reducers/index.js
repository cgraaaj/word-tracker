import { combineReducers } from "redux";

import dataReducer from "./dataReducer";
import gAuthReducer from "./gAuthReducer";
import termReducer from "./termReducer";
import bookReducer from "./bookReducer";
import wordReducer from "./wordReducer";
import notifyReducer from "./notifyReducer";
import flashcardReducer from "./flashcardReducer";

export default combineReducers({
  data: dataReducer,
  gAuth: gAuthReducer,
  term: termReducer,
  books: bookReducer,
  words: wordReducer,
  notify: notifyReducer,
  flashcard: flashcardReducer
});
