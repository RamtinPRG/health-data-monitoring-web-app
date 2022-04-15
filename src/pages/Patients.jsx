import { useContext, useEffect, useState } from "react";
// import Card from "../components/Card";
import PatientCard from "../components/PatientCard";
import Sidebar from "../components/Sidebar";
import AuthContext from "../contexts/AuthContext";
import PatientsContext from "../contexts/PatientsContext";
import profile from "../images/profile-picture.png";
import "./styles/Patients.css";

function Patients() {
  const { authTokens, logoutUser } = useContext(AuthContext);
  const { patients } = useContext(PatientsContext);

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
    <main className="patients">
      <Sidebar items={doctorItems} selected={1} />
      <div className="main-container">
        <h1 id="header">Patients</h1>
        <div id="patient-card-container">
          {patients.map((patient, index) => (
            <PatientCard patient={patient} profile={profile} key={index} />
          ))}
        </div>
      </div>
    </main>
  );
}

export default Patients;
