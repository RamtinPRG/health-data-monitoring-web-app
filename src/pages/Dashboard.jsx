import { useContext } from "react";
import Card from "../components/Card";
import Sidebar from "../components/Sidebar";
import AuthContext from "../contexts/AuthContext";
import "./styles/Dashboard.css";

function Dashboard() {
  const { authTokens, logoutUser } = useContext(AuthContext);
  const doctorItems = [
    {
      title: "Dashboard",
      icon: "fas fa-chart-line",
      href: "/dashboard",
    },
    {
      title: "Patients",
      icon: "fas fa-procedures",
      href: "/patients",
    },
    {
      title: "Requests",
      icon: "fas fa-reply",
      href: "/requests",
    },
    {
      title: "Chats",
      icon: "fas fa-comments",
      href: "/chats",
    },
    {
      title: "Settings",
      icon: "fas fa-cog",
      href: "/settings",
    },
    {
      title: "Log out",
      icon: "fas fa-sign-out-alt",
      href: "",
      onClick: logoutUser,
    },
  ];
  return (
    <main className="dashboard">
      <Sidebar items={doctorItems} selected={0} />
      <div className="main-container">
        <h1 id="header">Dashboard</h1>
        <p id="patients-status">Everyone is great!</p>
        <div id="card-container">
          <Card
            id="patients"
            icon="fas fa-procedures"
            header="Patients"
            body="There is no patient!"
            button="Check"
          />
          <Card
            id="chats"
            icon="fas fa-comments"
            header="Chats"
            body="You haven't started any chats!"
            button="Check"
          />
          <Card
            id="notifications"
            icon="fas fa-bell"
            header="Notifications"
            body="Seems you don't have any notifications!"
            button="Check"
          />
        </div>
      </div>
    </main>
  );
}

export default Dashboard;
