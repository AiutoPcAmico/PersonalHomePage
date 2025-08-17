import andreaImage from "../img/andrea.jpg";
import "./newcomponents.css";

function NewPersonalCard() {
  return (
    <div className="profileContainer">
      <img
        src={andreaImage}
        alt="Andrea Felappi - ProfileImage"
        className="profileFloatingImg"
      />

      {/* Sezione competenze */}
      <div className="skillsContainer">
        <span className="skill-pill">SysAdmin</span>
        <span className="skill-pill">Network Admin</span>
        <span className="skill-pill">Windows & Linux Technician</span>
        <span className="skill-pill">Proxmox </span>
        <span className="skill-pill">VMware</span>
        <span className="skill-pill">Docker & Containers</span>
        <span className="skill-pill">Azure DevOps</span>
        <span className="skill-pill">M365 Admin</span>
        <span className="skill-pill">Web Developer</span>
        <span className="skill-pill">FullStack Developer</span>
      </div>
    </div>
  );
}

export { NewPersonalCard };
