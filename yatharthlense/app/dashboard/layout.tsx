import { auth } from "@clerk/nextjs/server";
import { redirect } from "next/navigation";
import {Topbar} from "./components/Topbar";

export default async function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const { userId } = await auth();
  
  // If the user is not authenticated, redirect to the sign-in page
  if (!userId) {
    redirect("/sign-in");
  }

  return (
    <div className="dashboard-layout">

     
      
      <main className="container mx-auto py-6">
        {children}
      </main>
    </div>
  );
}
