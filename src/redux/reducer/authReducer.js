const initialState = {
    username: "",
    password: "",
    namaPetugas: "",
    level: "",
    isAuth: false,
  };
  
  export const authProcess = (state = initialState, action) => {
    if (action.type === "login") {
      return {
        ...state,
        username: action.username,
        password: action.password,
        namaPetugas: action.namaPetugas,
        level : action.level,
        isAuth: true,
      };
    }
    return {
      ...state,
    };
  };
  