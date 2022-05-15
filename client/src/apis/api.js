import axios from "axios";
import {GOOGLE_BOOKS_API, DICTIONARY_API} from "../utils/constants"

// export const dictAPI = axios.create({
//   // baseURL: 'https://mashape-community-urban-dictionary.p.rapidapi.com',
//   baseURL: "https://www.dictionaryapi.com/api/v3/references/",
// });

const { REACT_APP_WORDTRACKER_API } = process.env

export const GbookAPI = axios.create({
  baseURL: GOOGLE_BOOKS_API,
});

export const dictionaryAPI = axios.create({
  baseURL: DICTIONARY_API,
});

export const wordTrackerAPI = axios.create({
  baseURL: REACT_APP_WORDTRACKER_API
});
