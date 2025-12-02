// CommitteeSelector.jsx
import { UserCircle, Building2, Wrench, Package, UserRound } from "lucide-react";
import CommitteeRoleItem from "./CommitteeRoleItem";

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
    <div className="max-w-6xl mx-auto bg-white p-6 rounded-2xl shadow mt-4">
      <h2 className="text-xl font-bold text-gray-800 mb-4">
        รายชื่อคณะกรรมการ
      </h2>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {roles.map((role) => (
          <CommitteeRoleItem
            key={role.key}
            role={role}
            icon={iconMap[role.key]}
            value={selected[role.key]}
            onChange={(val) => onChange(role.key, val)}
          />
        ))}
      </div>
    </div>
  );
}
