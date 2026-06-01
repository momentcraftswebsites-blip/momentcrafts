import { lazy, Suspense } from "react";
import { Navigate, Route, Routes } from "react-router-dom";
import { AdminLayout } from "../layouts/AdminLayout";
import { MainLayout } from "../layouts/MainLayout";
import { ProtectedRoute } from "./ProtectedRoute";

const HomePage = lazy(() => import("../pages/HomePage"));
const ServicesPage = lazy(() => import("../pages/ServicesPage"));
const WorkPage = lazy(() => import("../pages/WorkPage"));
const AboutPage = lazy(() => import("../pages/AboutPage"));
const BlogPage = lazy(() => import("../pages/BlogPage"));
const ContactPage = lazy(() => import("../pages/ContactPage"));
const LoginPage = lazy(() => import("../pages/LoginPage"));
const TemplateDetailsPage = lazy(() => import("../pages/TemplateDetailsPage"));
const NotFoundPage = lazy(() => import("../pages/NotFoundPage"));
const AdminDashboardPage = lazy(() => import("../pages/AdminDashboardPage"));

export const AppRoutes = () => {
  return (
    <Suspense
      fallback={
        <div className="py-20 text-center text-slate-600">Loading...</div>
      }
    >
      <Routes>
        <Route element={<MainLayout />}>
          <Route path="/" element={<HomePage />} />
          <Route path="/services" element={<ServicesPage />} />
          <Route path="/work" element={<WorkPage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/blog" element={<BlogPage />} />
          <Route path="/contact" element={<ContactPage />} />
          <Route path="/templates/:slug" element={<TemplateDetailsPage />} />
          <Route path="/login" element={<LoginPage />} />
        </Route>

        <Route
          path="/admin"
          element={
            <ProtectedRoute>
              <AdminLayout />
            </ProtectedRoute>
          }
        >
          <Route index element={<AdminDashboardPage />} />
        </Route>

        <Route path="/404" element={<NotFoundPage />} />
        <Route path="*" element={<Navigate to="/404" replace />} />
      </Routes>
    </Suspense>
  );
};
