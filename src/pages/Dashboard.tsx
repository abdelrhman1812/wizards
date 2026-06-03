import KPICards from "../components/dashboard/KPICards";
import PageTitle from "../components/dashboard/PageTitle";
import RegistryActivityChart from "../components/dashboard/RegistryActivityChart";
import WizardsBySpecialtyChart from "../components/dashboard/WizardsBySpecialtyChart";

const Dashboard = () => {
  return (
    <div className="p-4 sm:p-8">
      <PageTitle />
      <div className="mb-6">
        <KPICards />
      </div>
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <div className="lg:col-span-2">
          <RegistryActivityChart />
        </div>
        <div className="lg:col-span-1">
          <WizardsBySpecialtyChart />
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
