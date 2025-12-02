import Dropdown from "./Dropdown";
import { UserCircle, Building2, Wrench, Package, UserRound } from "lucide-react";

export default function CommitteeSelector({ config, selected, onChange }) {
  const { roles } = config;

  const iconMap = {
    manager: <UserCircle className="w-5 h-5 text-green-600" />,
    unitManager: <Building2 className="w-5 h-5 text-purple-600" />,
    engineer: <Wrench className="w-5 h-5 text-red-600" />,
    service: <Package className="w-5 h-5 text-yellow-600" />,
    purchasing: <UserRound className="w-5 h-5 text-pink-500" />,
  };

  return (
    <div className="max-w-6xl mx-auto bg-white p-6 rounded-2xl shadow mt-6">
      <h2 className="text-xl font-bold text-gray-800 mb-4">
        รายชื่อคณะกรรมการ 
      </h2>

      <div className="grid grid-cols-2 lg:grid-cols-3 gap-6">
        {roles.map((role) => {
          const value = selected[role.key] || "";

          // Manager — ใช้ input disabled
          if (role.key === "manager") {
            return (
              <div key={role.key}>
                <label className="flex items-center gap-2 mb-2 font-medium">
                  {iconMap[role.key]}
                  {role.label}
                </label>
                <input
                  disabled
                  className="w-full p-3 border bg-gray-100 rounded-lg"
                  value={role.options[0]}
                />
              </div>
            );
          }

          // Other roles — dropdown
          return (
            <Dropdown
              key={role.key}
              icon={iconMap[role.key]}
              label={role.label}
              value={value}
              disabled={role.locked}
              onChange={(v) => onChange(role.key, v)}
              options={role.options}
            />
          );
        })}
      </div>
    </div>
  );
}
