import { useEffect, useState } from "react";
import { LoadingSkeleton } from "../components/common/LoadingSkeleton";
import {
  addManagedBlog,
  addManagedPricing,
  addManagedProject,
  collectionNames,
  deleteManagedItem,
  fetchContactSubmissions,
  fetchFeedbackSubmissions,
  fetchManagedBlogs,
  fetchManagedPricing,
  fetchManagedProjects,
  updateManagedItem,
} from "../services/firestoreService";
import type {
  BlogPost,
  ContactSubmission,
  FeedbackSubmission,
  PricingPlan,
  ProjectItem,
} from "../types";

const cardStyle = "rounded-3xl border bg-white p-6";

type AdminTab = "inquiries" | "feedback" | "portfolio" | "blogs" | "pricing";

const formatCreatedAt = (value: unknown) => {
  if (!value) return "--";

  if (value instanceof Date) {
    return value.toLocaleString();
  }

  if (typeof value === "string" || typeof value === "number") {
    const date = new Date(value);
    if (!Number.isNaN(date.getTime())) {
      return date.toLocaleString();
    }
  }

  if (typeof value === "object" && value !== null) {
    const candidate = value as {
      toDate?: () => Date;
      seconds?: number;
    };

    if (typeof candidate.toDate === "function") {
      return candidate.toDate().toLocaleString();
    }

    if (typeof candidate.seconds === "number") {
      return new Date(candidate.seconds * 1000).toLocaleString();
    }
  }

  return "--";
};

const AdminDashboardPage = () => {
  const [inquiries, setInquiries] = useState<ContactSubmission[]>([]);
  const [feedbackItems, setFeedbackItems] = useState<FeedbackSubmission[]>([]);
  const [portfolio, setPortfolio] = useState<ProjectItem[]>([]);
  const [blogItems, setBlogItems] = useState<BlogPost[]>([]);
  const [pricingItems, setPricingItems] = useState<PricingPlan[]>([]);
  const [projectTitle, setProjectTitle] = useState("");
  const [blogTitle, setBlogTitle] = useState("");
  const [planName, setPlanName] = useState("");
  const [planPrice, setPlanPrice] = useState("");
  const [portfolioDrafts, setPortfolioDrafts] = useState<
    Record<string, { title: string; category: string }>
  >({});
  const [blogDrafts, setBlogDrafts] = useState<
    Record<string, { title: string; category: string }>
  >({});
  const [pricingDrafts, setPricingDrafts] = useState<
    Record<string, { name: string; price: string }>
  >({});
  const [activeTab, setActiveTab] = useState<AdminTab>("inquiries");
  const [searchText, setSearchText] = useState("");
  const [loading, setLoading] = useState(true);

  const normalizedSearch = searchText.trim().toLowerCase();

  const filteredInquiries = inquiries.filter((item) =>
    [item.name, item.email, item.phone, item.websiteType, item.message]
      .join(" ")
      .toLowerCase()
      .includes(normalizedSearch),
  );

  const filteredFeedback = feedbackItems.filter((item) =>
    [item.name, item.email, item.message, String(item.rating)]
      .join(" ")
      .toLowerCase()
      .includes(normalizedSearch),
  );

  const filteredPortfolio = portfolio.filter((item) =>
    [item.title, item.category, item.description]
      .join(" ")
      .toLowerCase()
      .includes(normalizedSearch),
  );

  const filteredBlogs = blogItems.filter((item) =>
    [item.title, item.category, item.excerpt]
      .join(" ")
      .toLowerCase()
      .includes(normalizedSearch),
  );

  const filteredPricing = pricingItems.filter((item) =>
    [item.name, item.price, item.description]
      .join(" ")
      .toLowerCase()
      .includes(normalizedSearch),
  );

  const reload = async () => {
    setLoading(true);
    try {
      const [i, f, p, b, pr] = await Promise.all([
        fetchContactSubmissions(),
        fetchFeedbackSubmissions(),
        fetchManagedProjects(),
        fetchManagedBlogs(),
        fetchManagedPricing(),
      ]);
      setInquiries(i);
      setFeedbackItems(f);
      setPortfolio(p);
      setBlogItems(b);
      setPricingItems(pr);
      setPortfolioDrafts(
        Object.fromEntries(
          p
            .filter((item) => Boolean(item.id))
            .map((item) => [
              item.id as string,
              { title: item.title, category: item.category },
            ]),
        ),
      );
      setBlogDrafts(
        Object.fromEntries(
          b
            .filter((item) => Boolean(item.id))
            .map((item) => [
              item.id as string,
              { title: item.title, category: item.category },
            ]),
        ),
      );
      setPricingDrafts(
        Object.fromEntries(
          pr
            .filter((item) => Boolean(item.id))
            .map((item) => [
              item.id as string,
              { name: item.name, price: item.price },
            ]),
        ),
      );
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    void reload();
  }, []);

  const addProject = async () => {
    if (!projectTitle.trim()) return;
    await addManagedProject({
      title: projectTitle,
      category: "Business Websites",
      description: "Created via admin dashboard",
      image:
        "https://images.unsplash.com/photo-1551836022-deb4988cc6c0?auto=format&fit=crop&w=1200&q=80",
      tags: ["Dashboard"],
      slug: projectTitle.toLowerCase().replace(/\s+/g, "-"),
    });
    setProjectTitle("");
    await reload();
  };

  const addBlog = async () => {
    if (!blogTitle.trim()) return;
    await addManagedBlog({
      title: blogTitle,
      excerpt: "Created via admin dashboard",
      category: "Design",
      author: "Admin",
      date: "May 2026",
      readTime: "2 min",
      image:
        "https://images.unsplash.com/photo-1455390582262-044cdead277a?auto=format&fit=crop&w=1200&q=80",
      slug: blogTitle.toLowerCase().replace(/\s+/g, "-"),
    });
    setBlogTitle("");
    await reload();
  };

  const addPricingPlan = async () => {
    if (!planName.trim() || !planPrice.trim()) return;
    await addManagedPricing({
      name: planName,
      price: planPrice,
      description: "Created via admin dashboard",
      features: ["Custom Design", "Responsive", "Support"],
    });
    setPlanName("");
    setPlanPrice("");
    await reload();
  };

  const onDelete = async (collectionName: string, id?: string) => {
    if (!id) return;
    await deleteManagedItem(collectionName, id);
    await reload();
  };

  const savePortfolioItem = async (id?: string) => {
    if (!id) return;
    const draft = portfolioDrafts[id];
    if (!draft) return;
    await updateManagedItem(collectionNames.portfolioItems, id, {
      title: draft.title,
      category: draft.category,
      slug: draft.title.toLowerCase().replace(/\s+/g, "-"),
    });
    await reload();
  };

  const saveBlogItem = async (id?: string) => {
    if (!id) return;
    const draft = blogDrafts[id];
    if (!draft) return;
    await updateManagedItem(collectionNames.blogs, id, {
      title: draft.title,
      category: draft.category,
      slug: draft.title.toLowerCase().replace(/\s+/g, "-"),
    });
    await reload();
  };

  const savePricingItem = async (id?: string) => {
    if (!id) return;
    const draft = pricingDrafts[id];
    if (!draft) return;
    await updateManagedItem(collectionNames.pricingPlans, id, {
      name: draft.name,
      price: draft.price,
    });
    await reload();
  };

  return (
    <div className="space-y-6">
      <div className={cardStyle}>
        <h1 className="text-2xl font-bold text-slate-900">Admin Dashboard</h1>
        <p className="mt-2 text-sm text-slate-600">
          Manage inquiries, feedback, portfolio items, blogs, and pricing plans
          from one place.
        </p>
        <div className="mt-4 grid gap-3 sm:grid-cols-2">
          <input
            value={searchText}
            onChange={(event) => setSearchText(event.target.value)}
            placeholder="Search by name, email, title, category, message..."
            className="rounded-xl border px-3 py-2 text-sm"
          />
          <div className="flex flex-wrap gap-2">
            {[
              { key: "inquiries", label: "Inquiries" },
              { key: "feedback", label: "Feedback" },
              { key: "portfolio", label: "Portfolio" },
              { key: "blogs", label: "Blogs" },
              { key: "pricing", label: "Pricing" },
            ].map((tab) => (
              <button
                key={tab.key}
                onClick={() => setActiveTab(tab.key as AdminTab)}
                className={`rounded-full px-3 py-1.5 text-xs font-semibold ${
                  activeTab === tab.key
                    ? "bg-gradient-to-r from-pink-500 to-indigo-500 text-white"
                    : "border border-slate-300 text-slate-700"
                }`}
              >
                {tab.label}
              </button>
            ))}
          </div>
        </div>
      </div>

      {loading ? <LoadingSkeleton /> : null}

      <div className="grid gap-6">
        {activeTab === "inquiries" ? (
          <section className={cardStyle}>
            <h2 className="text-lg font-semibold text-slate-900">
              Customer Inquiries ({filteredInquiries.length}/{inquiries.length})
            </h2>
            <div className="mt-4 space-y-3">
              {filteredInquiries.length === 0 ? (
                <p className="text-sm text-slate-500">No submissions yet.</p>
              ) : null}
              {filteredInquiries.map((item) => (
                <article
                  key={item.id}
                  className="rounded-2xl border p-4 text-sm"
                >
                  <div className="flex items-start justify-between gap-3">
                    <div>
                      <p className="font-semibold text-slate-900">
                        {item.name}
                      </p>
                      <p className="text-slate-600">{item.email}</p>
                      <p className="text-slate-600">{item.phone}</p>
                      <p className="mt-1 text-slate-500">{item.websiteType}</p>
                      <p className="mt-1 text-xs text-slate-400">
                        Created: {formatCreatedAt(item.createdAt)}
                      </p>
                    </div>
                    <button
                      onClick={() =>
                        onDelete(collectionNames.contactSubmissions, item.id)
                      }
                      className="text-rose-600"
                    >
                      Delete
                    </button>
                  </div>
                  <p className="mt-2 text-slate-600">{item.message}</p>
                </article>
              ))}
            </div>
          </section>
        ) : null}

        {activeTab === "portfolio" ? (
          <section className={cardStyle}>
            <h2 className="text-lg font-semibold text-slate-900">
              Manage Portfolio ({filteredPortfolio.length}/{portfolio.length})
            </h2>
            <div className="mt-3 flex gap-2">
              <input
                value={projectTitle}
                onChange={(event) => setProjectTitle(event.target.value)}
                placeholder="New portfolio title"
                className="w-full rounded-xl border px-3 py-2 text-sm"
              />
              <button
                onClick={addProject}
                className="rounded-xl bg-gradient-to-r from-pink-500 to-indigo-500 px-3 py-2 text-sm font-semibold text-white"
              >
                Add
              </button>
            </div>
            <div className="mt-4 space-y-3">
              {filteredPortfolio.map((item) => (
                <div key={item.id} className="rounded-2xl border p-3 text-sm">
                  <div className="grid gap-2 sm:grid-cols-2">
                    <input
                      value={
                        portfolioDrafts[item.id ?? ""]?.title ?? item.title
                      }
                      onChange={(event) =>
                        setPortfolioDrafts((prev) => ({
                          ...prev,
                          [item.id ?? ""]: {
                            title: event.target.value,
                            category:
                              prev[item.id ?? ""]?.category ?? item.category,
                          },
                        }))
                      }
                      className="rounded-lg border px-3 py-2"
                    />
                    <input
                      value={
                        portfolioDrafts[item.id ?? ""]?.category ??
                        item.category
                      }
                      onChange={(event) =>
                        setPortfolioDrafts((prev) => ({
                          ...prev,
                          [item.id ?? ""]: {
                            title: prev[item.id ?? ""]?.title ?? item.title,
                            category: event.target.value,
                          },
                        }))
                      }
                      className="rounded-lg border px-3 py-2"
                    />
                  </div>
                  <div className="mt-3 flex items-center justify-end gap-3">
                    <button
                      onClick={() => savePortfolioItem(item.id)}
                      className="rounded-lg border border-slate-300 px-3 py-2 text-xs font-semibold text-slate-700"
                    >
                      Save
                    </button>
                    <span className="text-xs text-slate-400">
                      {formatCreatedAt(item.createdAt)}
                    </span>
                    <button
                      onClick={() =>
                        onDelete(collectionNames.portfolioItems, item.id)
                      }
                      className="text-rose-600"
                    >
                      Delete
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </section>
        ) : null}

        {activeTab === "feedback" ? (
          <section className={cardStyle}>
            <h2 className="text-lg font-semibold text-slate-900">
              User Feedback ({filteredFeedback.length}/{feedbackItems.length})
            </h2>
            <div className="mt-4 space-y-3">
              {filteredFeedback.length === 0 ? (
                <p className="text-sm text-slate-500">No feedback yet.</p>
              ) : null}
              {filteredFeedback.map((item) => (
                <article
                  key={item.id}
                  className="rounded-2xl border p-4 text-sm"
                >
                  <div className="flex items-start justify-between gap-3">
                    <div>
                      <p className="font-semibold text-slate-900">
                        {item.name}
                      </p>
                      <p className="text-slate-600">{item.email}</p>
                      <p className="mt-1 text-amber-500">
                        {"★".repeat(Math.max(0, item.rating ?? 0))} (
                        {item.rating}
                        /5)
                      </p>
                      <p className="mt-1 text-xs text-slate-400">
                        Created: {formatCreatedAt(item.createdAt)}
                      </p>
                    </div>
                    <button
                      onClick={() =>
                        onDelete(collectionNames.feedbackSubmissions, item.id)
                      }
                      className="text-rose-600"
                    >
                      Delete
                    </button>
                  </div>
                  <p className="mt-2 text-slate-600">{item.message}</p>
                </article>
              ))}
            </div>
          </section>
        ) : null}

        {activeTab === "blogs" ? (
          <section className={cardStyle}>
            <h2 className="text-lg font-semibold text-slate-900">
              Manage Blogs ({filteredBlogs.length}/{blogItems.length})
            </h2>
            <div className="mt-3 flex gap-2">
              <input
                value={blogTitle}
                onChange={(event) => setBlogTitle(event.target.value)}
                placeholder="New blog title"
                className="w-full rounded-xl border px-3 py-2 text-sm"
              />
              <button
                onClick={addBlog}
                className="rounded-xl bg-gradient-to-r from-pink-500 to-indigo-500 px-3 py-2 text-sm font-semibold text-white"
              >
                Add
              </button>
            </div>
            <div className="mt-4 space-y-3">
              {filteredBlogs.map((item) => (
                <div key={item.id} className="rounded-2xl border p-3 text-sm">
                  <div className="grid gap-2 sm:grid-cols-2">
                    <input
                      value={blogDrafts[item.id ?? ""]?.title ?? item.title}
                      onChange={(event) =>
                        setBlogDrafts((prev) => ({
                          ...prev,
                          [item.id ?? ""]: {
                            title: event.target.value,
                            category:
                              prev[item.id ?? ""]?.category ?? item.category,
                          },
                        }))
                      }
                      className="rounded-lg border px-3 py-2"
                    />
                    <input
                      value={
                        blogDrafts[item.id ?? ""]?.category ?? item.category
                      }
                      onChange={(event) =>
                        setBlogDrafts((prev) => ({
                          ...prev,
                          [item.id ?? ""]: {
                            title: prev[item.id ?? ""]?.title ?? item.title,
                            category: event.target.value,
                          },
                        }))
                      }
                      className="rounded-lg border px-3 py-2"
                    />
                  </div>
                  <div className="mt-3 flex items-center justify-end gap-3">
                    <button
                      onClick={() => saveBlogItem(item.id)}
                      className="rounded-lg border border-slate-300 px-3 py-2 text-xs font-semibold text-slate-700"
                    >
                      Save
                    </button>
                    <span className="text-xs text-slate-400">
                      {formatCreatedAt(item.createdAt)}
                    </span>
                    <button
                      onClick={() => onDelete(collectionNames.blogs, item.id)}
                      className="text-rose-600"
                    >
                      Delete
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </section>
        ) : null}

        {activeTab === "pricing" ? (
          <section className={cardStyle}>
            <h2 className="text-lg font-semibold text-slate-900">
              Manage Pricing ({filteredPricing.length}/{pricingItems.length})
            </h2>
            <div className="mt-3 grid grid-cols-1 gap-2 sm:grid-cols-3">
              <input
                value={planName}
                onChange={(event) => setPlanName(event.target.value)}
                placeholder="Plan name"
                className="rounded-xl border px-3 py-2 text-sm"
              />
              <input
                value={planPrice}
                onChange={(event) => setPlanPrice(event.target.value)}
                placeholder="Price"
                className="rounded-xl border px-3 py-2 text-sm"
              />
              <button
                onClick={addPricingPlan}
                className="rounded-xl bg-gradient-to-r from-pink-500 to-indigo-500 px-3 py-2 text-sm font-semibold text-white"
              >
                Add Plan
              </button>
            </div>
            <div className="mt-4 space-y-3">
              {filteredPricing.map((item) => (
                <div key={item.id} className="rounded-2xl border p-3 text-sm">
                  <div className="grid gap-2 sm:grid-cols-2">
                    <input
                      value={pricingDrafts[item.id ?? ""]?.name ?? item.name}
                      onChange={(event) =>
                        setPricingDrafts((prev) => ({
                          ...prev,
                          [item.id ?? ""]: {
                            name: event.target.value,
                            price: prev[item.id ?? ""]?.price ?? item.price,
                          },
                        }))
                      }
                      className="rounded-lg border px-3 py-2"
                    />
                    <input
                      value={pricingDrafts[item.id ?? ""]?.price ?? item.price}
                      onChange={(event) =>
                        setPricingDrafts((prev) => ({
                          ...prev,
                          [item.id ?? ""]: {
                            name: prev[item.id ?? ""]?.name ?? item.name,
                            price: event.target.value,
                          },
                        }))
                      }
                      className="rounded-lg border px-3 py-2"
                    />
                  </div>
                  <div className="mt-3 flex items-center justify-end gap-3">
                    <button
                      onClick={() => savePricingItem(item.id)}
                      className="rounded-lg border border-slate-300 px-3 py-2 text-xs font-semibold text-slate-700"
                    >
                      Save
                    </button>
                    <span className="text-xs text-slate-400">
                      {formatCreatedAt(item.createdAt)}
                    </span>
                    <button
                      onClick={() =>
                        onDelete(collectionNames.pricingPlans, item.id)
                      }
                      className="text-rose-600"
                    >
                      Delete
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </section>
        ) : null}
      </div>
    </div>
  );
};

export default AdminDashboardPage;
