import { useContext } from "react";
import AuthContext from "../contexts/AuthContext";
import profile from "../images/profile-picture.png";
import "./styles/Sidebar.css";
import SidebarLink from "./SidebarLink";

function Sidebar({ items, selected }) {
  const { user, logoutUser } = useContext(AuthContext);
  return (
    <nav className="sidebar">
      <div id="profile">
        <img src={profile} alt="profile" />
        <p id="name">
          {user.first_name} {user.last_name}
        </p>
        <p id="email">{user.email}</p>
      </div>
      <div id="items">
        {/* <SidebarLink
          icon="fas fa-sign-out-alt"
          title="Log out"
          href=""
          onClick={logoutUser}
          className="sidebar-item"
        /> */}
        {items.map((item, index) => (
          <SidebarLink
            {...item}
            className={`sidebar-item${selected === index ? " selected" : ""}`}
            key={index}
          />
        ))}
      </div>
    </nav>
  );
}

export default Sidebar;
