import { NavLink, Route, Routes } from "react-router-dom";
import "./App.css";

const Profile = () => {
  return <h1>This is site with profile</h1>;
};
const Messages = () => {
  return <h1>This is site of messages</h1>;
};
const Settings = () => {
  return <h1>These are settins</h1>;
};

function App() {
  return (
    <div className="container">
      <div className="row">
        <div className="col-md-3">
          <div className="nav flex-column nav-pills">
            <NavLink to="profile" className="nav-link">
              Profile
            </NavLink>
            <NavLink to="messages" className="nav-link">
              Messages
            </NavLink>
            <NavLink to="settings" className="nav-link">
              Settins
            </NavLink>
          </div>
        </div>
        <div className="col-md-9">
          <Routes>
            <Route path="/profile" element={<Profile />}></Route>
            <Route path="/messages" element={<Messages />}></Route>
            <Route path="/settings" element={<Settings />}></Route>
          </Routes>
        </div>
      </div>
    </div>
  );
}

export default App;
