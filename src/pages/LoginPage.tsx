import { useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { loginWithGoogle } from "../services/authService";

const LoginPage = () => {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const navigate = useNavigate();
  const location = useLocation();

  const redirectPath =
    (location.state as { from?: string } | null)?.from ?? "/admin";

  const handleGoogleLogin = async () => {
    setError("");
    setLoading(true);

    try {
      await loginWithGoogle();
      navigate(redirectPath, { replace: true });
    } catch (err) {
      console.error(err);
      setError("Login failed. Ensure Firebase auth is configured.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="mx-auto grid min-h-[70vh] max-w-lg place-items-center px-4 py-12">
      <div className="w-full rounded-3xl border border-white/70 bg-white/80 p-8 text-center shadow-lg">
        <h1 className="text-3xl font-bold text-slate-900">Admin Login</h1>
        <p className="mt-2 text-sm text-slate-600">
          Sign in with your Google account to access the dashboard.
        </p>
        <button
          onClick={handleGoogleLogin}
          disabled={loading}
          className="mt-6 w-full rounded-full bg-gradient-to-r from-pink-500 via-fuchsia-500 to-indigo-500 px-5 py-3 text-sm font-semibold text-white"
        >
          {loading ? "Signing in..." : "Continue with Google"}
        </button>
        {error ? <p className="mt-4 text-sm text-rose-600">{error}</p> : null}
      </div>
    </div>
  );
};

export default LoginPage;
