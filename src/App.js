import { Route, Routes } from "react-router-dom";
import UserList from "./components/pages/UserList";
import User from "./components/pages/User";
import About from "./components/pages/About";
import Profile from "./components/pages/Profile";


function App() {
  return (
<Routes>
  <Route path="/" element={<UserList />}/>
  {/* <Route index element={<UserList />}/> */}
  <Route path="/user/:id" element={<User />}/>
  <Route path="/about" element={<About />}/>
  <Route path="/profile" element={<Profile />}/>
</Routes>
  );
}

export default App;
