import { lazy, Suspense } from "react";
import KPICards from "../components/dashboard/KPICards";
import PageTitle from "../components/dashboard/PageTitle";
const MasterWizardRegistry = lazy(
  () =>
    import("../components/dashboard/MasterWizardRegistry/MasterWizardRegistry"),
);

const RegistryActivityChart = lazy(
  () => import("../components/dashboard/charts/RegistryActivityChart"),
);
const WizardsBySpecialtyChart = lazy(
  () => import("../components/dashboard/charts/WizardsBySpecialtyChart"),
);
const Dashboard = () => {
  return (
    <div className="p-4 sm:p-8">
      <PageTitle />
      <div className="mb-6">
        <KPICards />
      </div>
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <div className="lg:col-span-2">
          <Suspense fallback={<div>Loading...</div>}>
            <RegistryActivityChart />
          </Suspense>
        </div>
        <div className="lg:col-span-1">
          <Suspense fallback={<div>Loading...</div>}>
            <WizardsBySpecialtyChart />
          </Suspense>
        </div>
      </div>

      <Suspense fallback={<div>Loading...</div>}>
        <MasterWizardRegistry />
      </Suspense>
    </div>
  );
};

export default Dashboard;
