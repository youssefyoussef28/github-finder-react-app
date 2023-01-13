import { createContext, useReducer } from "react";
import githubReducer from "./GithubReducer";

const GithubContext = createContext();

const GITHUB_URL = process.env.REACT_APP_GITHUB_URL;
const GITHUB_TOKEN = process.env.REACT_APP_GITHUB_TOKEN;

// Provider Function ( and children are what ever we surround with the provider)

export const GithubProvider = ({ children }) => {
  // Reducer Elements
  const initialState = {
    users: [],
    user: {},
    repos: [],
    loading: false,
  };

  const [state, dispatch] = useReducer(githubReducer, initialState);

  // Get search users

  // Get Single users

  //set Loading

  //Clear Search

  // Get user Repos

  return (
    <GithubContext.Provider
      value={{
        ...state,
        dispatch,
      }}
    >
      {children}
    </GithubContext.Provider>
  );
};

export default GithubContext;

// The Header which has the bearer token
// , {
//   headers: {
//     Authorization: `token ${GITHUB_TOKEN}`,
//   },
// }
