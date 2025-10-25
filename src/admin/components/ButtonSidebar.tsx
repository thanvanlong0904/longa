import type { ReactNode } from "react";

type MenuGroup = "posts" | "pages" | "product" | null;

type SidebarGroupProps = {
  groupKey?: Exclude<MenuGroup, null>;
  label?: string;
  icon?: ReactNode;
  isOpen?: boolean;
  onToggle?: () => void;
  panelId?: string; // aria-controls id
  maxHeight?: number; // mặc định 300 cho giống code cũ
  children: ReactNode;
};
export default function ButtonSidebar({
  label,
  icon,
  isOpen,
  onToggle,
  panelId,
  maxHeight = 300,
  children,
}: SidebarGroupProps) {
  return (
    <div>
      <li>
        <button
          type="button"
          className="w-full flex items-center justify-between gap-3 px-3 py-2 rounded-md hover:bg-slate-700 focus:outline-none cursor-pointer"
          aria-expanded={isOpen}
          aria-controls={panelId}
          onClick={onToggle}
        >
          <span className="flex items-center gap-2">
            {icon}
            <span className="text-[15px] font-medium">{label}</span>
          </span>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className={`h-4 w-4 transition-transform ${
              isOpen ? "rotate-0" : "rotate-180"
            }`}
            viewBox="0 0 20 20"
            fill="currentColor"
          >
            <path
              fillRule="evenodd"
              d="M5.23 7.21a.75.75 0 011.06.02L10 10.94l3.71-3.71a.75.75 0 111.06 1.06l-4.24 4.24a.75.75 0 01-1.06 0L5.21 8.29a.75.75 0 01.02-1.08z"
              clipRule="evenodd"
            />
          </svg>
        </button>

        <ul
          id={panelId}
          className="mt-1 space-y-1 ml-6 overflow-hidden transition-all duration-500"
          style={{ maxHeight: isOpen ? maxHeight : 0 }}
        >
          {children}
        </ul>
      </li>
    </div>
  );
}
