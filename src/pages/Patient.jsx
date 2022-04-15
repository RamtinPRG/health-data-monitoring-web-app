import { useContext, useEffect, useState } from "react";
import { Chart, registerables } from "chart.js";
import { Line } from "react-chartjs-2";
import { Link, useParams } from "react-router-dom";
import Sidebar from "../components/Sidebar";
import DataCard from "../components/DataCard";
import AuthContext from "../contexts/AuthContext";
import PatientsContext from "../contexts/PatientsContext";
import "./styles/Patient.css";

Chart.register(...registerables);

function Patient() {
  const { authTokens, logoutUser } = useContext(AuthContext);
  const { patients } = useContext(PatientsContext);
  const { id } = useParams();
  const patient = patients.filter((patient, index) => {
    return patient.user.id === parseInt(id);
  });
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
  console.log(patient);
  return (
    <main className="patient">
      <Sidebar items={doctorItems} selected={1} />
      <div className="main-container">
        <h1 id="header">
          <Link to="/patients" id="back-link">
            <i className="fas fa-chevron-left" id="back-icon"></i>
          </Link>
          {patient[0]
            ? patient[0].user.first_name + " " + patient[0].user.last_name
            : ""}
        </h1>
        {patient[0] && <p id="patient-email">{patient[0].user.email}</p>}
        {patient[0] && (
          <div id="chart-container">
            <Line
              data={{
                labels: Array.from({ length: 200 }, (i, j) => j + 1),
                datasets: [
                  {
                    label: "ECG",
                    data: patient[0].ecg.data,
                    fill: false,
                    borderColor: "rgba(75,192,192,1)",
                  },
                ],
              }}
              options={{
                elements: {
                  point: {
                    borderWidth: 0,
                    radius: 10,
                    backgroundColor: "rgba(0,0,0,0)",
                  },
                },
                plugins: {
                  tooltip: {
                    enabled: false,
                  },
                },
                scales: {
                  x: {
                    display: false,
                  },
                },
              }}
            />
          </div>
        )}
        {patient[0] && (
          <div id="card-container">
            <DataCard
              id="heart-rate"
              icon="fas fa-heartbeat"
              header="Heart Rate"
              body={patient[0].heart_rate + " BPM"}
            />
            <DataCard
              id="body-temperature"
              icon="fas fa-temperature-high"
              header="Body Temprature"
              body={patient[0].body_temp + " °C"}
            />
            <DataCard
              id="spo2"
              icon="fas fa-tint"
              header="SpO2"
              body={patient[0].spo2 + "%"}
            />
          </div>
        )}
      </div>
    </main>
  );
}

export default Patient;
