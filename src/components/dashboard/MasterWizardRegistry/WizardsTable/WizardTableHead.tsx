import { memo } from "react";

const ths = [
  { id: "1", title: "ID" },
  { id: "2", title: "First Name" },
  { id: "3", title: "Last Name" },
  { id: "4", title: "Associated Elixirs" },
  { id: "5", title: "Actions" },
];
const WizardTableHead = () => {
  return (
    <thead className="bg-card ">
      <tr className="border-b border-white/5 text-sm font-semibold ">
        {ths.map((th) => (
          <th key={th.id} className={"px-6 py-5  uppercase"}>
            {th.title}
          </th>
        ))}
      </tr>
    </thead>
  );
};

export default memo(WizardTableHead);
