import { env } from "@/env";
import { type Metadata } from "next";

export const metadata: Metadata = {
  metadataBase: new URL(env.HOST_NAME),
  title: "Dashboard",
  description: "",
};

export default async function DashboardPage() {
  return (
    <div>
      <div className="mb-6">
        <h1 className="text-3xl font-bold md:text-4xl">Dashboard</h1>
      </div>
    </div>
  );
}
