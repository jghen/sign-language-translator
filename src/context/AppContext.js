import UserProvider from "./UserContext";

//mergin all the context - the children is the app.
const AppContext = ({ children }) => {
  return (
  <UserProvider>
  {children } 
  </UserProvider>);
};
export default AppContext;
