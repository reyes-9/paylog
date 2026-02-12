import DashboardCards from "../components/DashboardCards.jsx";
import WelcomeCard from "../components/WelcomeCard/WelcomeCard";

const DashboardPage = () => {
  return (
    <div>
      <WelcomeCard />
      <DashboardCards />
    </div>
  );
};

export default DashboardPage;