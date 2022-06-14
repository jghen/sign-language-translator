import { createContext, useContext, useState } from "react";
import { STORAGE_KEY_USER } from "../const/storageKeys";
import { storageRead } from "../utils/storage";

//usercontext


//context->exposing state ------------------

const UserContext = createContext();

//custom hook - export it
export const useUser = () => {
  return useContext(UserContext); //return {user, setUser} - the state destructured
}

//Provider-> managing state ----------------
const UserProvider = ({children}) => {

  const [user, setUser] = useState(storageRead(STORAGE_KEY_USER));

  const state = {
    user,
    setUser
  }

  return (
    <UserContext.Provider value = {state}>
      {children}
    </UserContext.Provider>
  )
}

export default UserProvider;