import { Link } from "react-router-dom";

const NotFoundPage = () => {
  return (
    <div className="mx-auto grid min-h-[70vh] max-w-xl place-items-center px-4 text-center">
      <div>
        <h1 className="text-5xl font-black text-slate-900">404</h1>
        <p className="mt-3 text-slate-600">
          The page you are looking for does not exist.
        </p>
        <Link
          to="/"
          className="mt-6 inline-flex rounded-full bg-gradient-to-r from-pink-500 via-fuchsia-500 to-indigo-500 px-6 py-3 text-sm font-semibold text-white"
        >
          Go Home
        </Link>
      </div>
    </div>
  );
};

export default NotFoundPage;
