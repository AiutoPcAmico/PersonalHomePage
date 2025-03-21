import logo from "../logo.svg";
import { InfoComponent } from "./InfoComponent";
import { PersonalCard } from "./PersonalCard";
import "./components.css";

function HomePage() {
  return (
    <header className="HomePage">
      <InfoComponent />
      <PersonalCard />
    </header>
  );
}

export { HomePage };
