import {
  addDoc,
  collection,
  deleteDoc,
  doc,
  getDocs,
  orderBy,
  query,
  serverTimestamp,
  updateDoc,
} from "firebase/firestore";
import { db } from "../firebase/config";
import type {
  BlogPost,
  ContactSubmission,
  FeedbackSubmission,
  PricingPlan,
  ProjectItem,
} from "../types";

const collections = {
  contactSubmissions: "contactSubmissions",
  feedbackSubmissions: "feedbackSubmissions",
  portfolioItems: "portfolioItems",
  blogs: "blogs",
  pricingPlans: "pricingPlans",
};

const requireDb = () => {
  if (!db) {
    throw new Error(
      "Firestore is not configured. Set VITE_FIREBASE_* variables.",
    );
  }

  return db;
};

export const createContactSubmission = async (payload: ContactSubmission) => {
  const database = requireDb();
  return addDoc(collection(database, collections.contactSubmissions), {
    ...payload,
    createdAt: serverTimestamp(),
  });
};

export const createFeedbackSubmission = async (payload: FeedbackSubmission) => {
  const database = requireDb();
  return addDoc(collection(database, collections.feedbackSubmissions), {
    ...payload,
    createdAt: serverTimestamp(),
  });
};

export const fetchContactSubmissions = async (): Promise<
  ContactSubmission[]
> => {
  const database = requireDb();
  const q = query(
    collection(database, collections.contactSubmissions),
    orderBy("createdAt", "desc"),
  );
  const snap = await getDocs(q);
  return snap.docs.map((d) => ({ id: d.id, ...d.data() }) as ContactSubmission);
};

export const fetchFeedbackSubmissions = async (): Promise<
  FeedbackSubmission[]
> => {
  const database = requireDb();
  const q = query(
    collection(database, collections.feedbackSubmissions),
    orderBy("createdAt", "desc"),
  );
  const snap = await getDocs(q);
  return snap.docs.map(
    (d) => ({ id: d.id, ...d.data() }) as FeedbackSubmission,
  );
};

export const fetchManagedProjects = async (): Promise<ProjectItem[]> => {
  const database = requireDb();
  const snap = await getDocs(collection(database, collections.portfolioItems));
  return snap.docs.map((d) => ({ id: d.id, ...d.data() }) as ProjectItem);
};

export const fetchManagedBlogs = async (): Promise<BlogPost[]> => {
  const database = requireDb();
  const snap = await getDocs(collection(database, collections.blogs));
  return snap.docs.map((d) => ({ id: d.id, ...d.data() }) as BlogPost);
};

export const fetchManagedPricing = async (): Promise<PricingPlan[]> => {
  const database = requireDb();
  const snap = await getDocs(collection(database, collections.pricingPlans));
  return snap.docs.map((d) => ({ id: d.id, ...d.data() }) as PricingPlan);
};

export const addManagedProject = async (item: Omit<ProjectItem, "id">) => {
  const database = requireDb();
  return addDoc(collection(database, collections.portfolioItems), {
    ...item,
    createdAt: serverTimestamp(),
  });
};

export const addManagedBlog = async (item: Omit<BlogPost, "id">) => {
  const database = requireDb();
  return addDoc(collection(database, collections.blogs), {
    ...item,
    createdAt: serverTimestamp(),
  });
};

export const addManagedPricing = async (item: Omit<PricingPlan, "id">) => {
  const database = requireDb();
  return addDoc(collection(database, collections.pricingPlans), {
    ...item,
    createdAt: serverTimestamp(),
  });
};

export const deleteManagedItem = async (collectionName: string, id: string) => {
  const database = requireDb();
  return deleteDoc(doc(database, collectionName, id));
};

export const updateManagedItem = async (
  collectionName: string,
  id: string,
  payload: Record<string, unknown>,
) => {
  const database = requireDb();
  return updateDoc(doc(database, collectionName, id), payload);
};

export const collectionNames = collections;
