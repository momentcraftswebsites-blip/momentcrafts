import { Link, Outlet } from "react-router-dom";
import { LogOut } from "lucide-react";
import { logout } from "../services/authService";

export const AdminLayout = () => {
  return (
    <div className="min-h-screen bg-slate-50">
      <header className="border-b bg-white">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-4 sm:px-6 lg:px-8">
          <Link to="/" className="text-lg font-bold text-slate-900">
            MomentCrafts Admin
          </Link>
          <button
            onClick={() => logout()}
            className="inline-flex items-center gap-2 rounded-full border px-4 py-2 text-sm"
          >
            <LogOut size={16} />
            Logout
          </button>
        </div>
      </header>
      <main className="mx-auto max-w-7xl px-4 py-8 sm:px-6 lg:px-8">
        <Outlet />
      </main>
    </div>
  );
};
