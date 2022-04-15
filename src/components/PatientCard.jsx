import { Link } from "react-router-dom";
import "./styles/PatientCard.css";

function PatientCard({ patient, profile, id, ...props }) {
  return (
    <Link className="patient-card-link" to={`/patient/${patient.user.id}`}>
      <div className="patient-card" id={id} {...props}>
        <img src={profile} alt="profile" />
        <div>
          <p className="patient-card-header">
            {patient.user.first_name} {patient.user.last_name}
          </p>
          <div className="patient-data">
            <p>Body temperature: {patient.body_temp}</p>
            <p>Heart rate: {patient.heart_rate}</p>
            <p>SpO2: {patient.spo2}</p>
          </div>
        </div>
      </div>
    </Link>
  );
}

export default PatientCard;
