import type { Metadata } from "next";
import styles from "./page.module.css";

export const metadata: Metadata = {
  title: "dp | dashboard",
  description: "Home description",
};

export default function HomePage() {
  return (
    <>
      <div className={styles.page}>
        <h1>Dashboard</h1>
        <p>Welcome to the dashboard</p>
      </div>
    </>
  );
}