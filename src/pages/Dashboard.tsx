import { lazy, Suspense } from "react";
import KPICards from "../components/dashboard/KPICards";
import PageTitle from "../components/dashboard/PageTitle";
import { RegistryActivityChartSkeleton } from "../components/Skeleton/RegistryActivityChartSkeleton";
import { WizardsBySpecialtyChartSkeleton } from "../components/Skeleton/WizardsBySpecialtyChartSkeleton";
import { WizardsTableSkeleton } from "../components/Skeleton/WizardsTableSkeleton";

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
    <main className=" sm:p-8">
      <PageTitle />
      <div className="mb-6">
        <KPICards />
      </div>
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <div className="lg:col-span-2">
          <Suspense fallback={<RegistryActivityChartSkeleton />}>
            <RegistryActivityChart />
          </Suspense>
        </div>
        <div className="lg:col-span-1">
          <Suspense fallback={<WizardsBySpecialtyChartSkeleton />}>
            <WizardsBySpecialtyChart />
          </Suspense>
        </div>
      </div>

      <Suspense fallback={<WizardsTableSkeleton />}>
        <MasterWizardRegistry />
      </Suspense>
    </main>
  );
};

export default Dashboard;
