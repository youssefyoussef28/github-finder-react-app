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
  const getUser = async (login) => {
    setLoading();

    const response = await fetch(`${GITHUB_URL}/users/${login}`);
    if (response.status === 404) {
      window.location = "/notfound";
    }
    const data = await response.json();

    dispatch({
      type: "GET_USER",
      payload: data,
    });
  };

  //set Loading
  const setLoading = () => {
    dispatch({ type: "SET_LOADING" });
  };

  //Clear Search
  const clearUsers = () => {
    dispatch({ type: "CLEAR_USERS" });
  };

  // Get user Repos

  const getUserRepos = async (login) => {
    setLoading();

    const params = new URLSearchParams({
      sort: "created",
      per_page: 10,
    });

    const response = await fetch(
      `${GITHUB_URL}/users/${login}/repos?${params}`
    );

    const data = await response.json();

    dispatch({
      type: "GET_REPOS",
      payload: data,
    });
  };

  return (
    <GithubContext.Provider
      value={{
        ...state,
        dispatch,
        clearUsers,
        getUser,
        getUserRepos,
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
