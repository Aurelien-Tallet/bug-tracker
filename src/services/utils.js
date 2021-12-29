export const getLocalStorage = (item = "auth", obj) => {
  if (!localStorage.getItem(item)) {
    return JSON.parse(localStorage.getItem("auth"));
  } else {
    localStorage.setItem(item, JSON.stringify(obj));
    return obj;
  }
};
const URL = process.env.REACT_APP_BASE_URL;

export const signUp = async (user, password) => {
  return fetch(`${URL}signup/${user}/${password}`).then((res) => res.json());
};
export const logOut = async (token) => {
  return fetch(`${URL}logout/${token}`).then((res) => res.json());
};
export const signIn = async (user, password) => {
  return fetch(`${URL}login/${user}/${password}`).then((res) => res.json());
};
export const addIssue = async (issue) => {
  return fetch(`${URL}add/${getToken().token}/${getToken().userID}`, {
    method: "POST",
    body: JSON.stringify(issue),
  }).then((res) => res.json());
};
export const setToken = (token) => {
  sessionStorage.setItem("token", JSON.stringify(token));
};

export const deleteToken = () => {
  sessionStorage.removeItem("token");
};

export const getToken = () => {
  return JSON.parse(sessionStorage.getItem("token"));
};
