import Sidebar from "./components/layouts/sidbar/Sidebar";
import TopBar from "./components/layouts/TopBar";
import { useToggleSidebar } from "./hooks/useToggleSidebar";
import Dashboard from "./pages/Dashboard";

const App = () => {
  const { isCollapsed, handleToggleSidebar } = useToggleSidebar();

  return (
    <>
      <TopBar handleToggleSidebar={handleToggleSidebar} />
      <div className="flex">
        <Sidebar isCollapsed={isCollapsed} />

        <div className="flex-1 flex flex-col overflow-hidden">
          <main className="flex-1 overflow-auto p-4">
            <Dashboard />
          </main>
        </div>
      </div>
    </>
  );
};

export default App;
