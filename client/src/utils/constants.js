export const ANONYMOUS_USER_ID = "60ac1602d9cbe00e117d6033";
export const ANONYMOUS_BOOK_ID = "60ac16e5d9cbe00e117d6034";


export const GOOGLE_BOOKS_API = "https://www.googleapis.com/books/v1"
export const DICTIONARY_API = "https://api.dictionaryapi.dev/api/v2/entries"
export const GRAPHQL_API = process.env.REACT_APP_ENV !== "dev" ? "/api" : ""

// mutation{
//     userCreateOne(record:{guserId:"1234567890" name:"Anonymous" 
//     email:"anonymous@xmail.com" image_url:"https://d25ecq9zgd9hts.cloudfront.net/img/2017/07/anonymous.jpg" 
//     }){
//       recordId
//     }
//   }
//   mutation{
//     bookCreateOne(record:{isbn_13:"1234567890123" title:"General Search" authors:"Everyone" 
//     description:"Tracks the word searched by anonymous users" }){
//       recordId
//     }
//   }