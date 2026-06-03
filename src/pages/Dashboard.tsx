import KPICards from "../components/dashboard/KPICards";
import PageTitle from "../components/dashboard/PageTitle";

const Dashboard = () => {
  return (
    <div className="p-4 sm:p-8">
      <PageTitle />
      <KPICards />
    </div>
  );
};

export default Dashboard;
