// project imports
import Dashboard from "./dashboard/default";

// export meta
export const meta = () => ({
  title: "Dashboard | Plantilla ESPOCH BI-DATA",
  description:
    "Plantilla para modificiacion de cualquier proyecto. ",
});

// ==============================|| DAFAULT PAGE ||============================== //

export default function Index() {
  return (
    <>
      <Dashboard />
    </>
  );
}
