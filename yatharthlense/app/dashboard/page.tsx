// ✅ CORRECT way in server component
import { auth, currentUser } from "@clerk/nextjs/server";
import LogoutButton from "@/components/LogoutButton";

export default async function DashboardPage() {
  const { userId } = await auth(); // 🔥 await lagana zaroori hai
  const user = await currentUser();

  if (!userId) {
    return (
      <div className="p-10">
        <h1 className="text-2xl text-red-500">Not signed in</h1>
        <p className="mt-4">Please sign in to access the dashboard.</p>
        <a href="/sign-in" className="mt-4 px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700 inline-block">
          Sign In
        </a>
      </div>
    );
  }

  return (
    <div className="p-10">
      <h1 className="text-2xl">Welcome to your Dashboard</h1>
      <p className="mt-2">Your User ID: {userId}</p>
      {user && (
        <div className="mt-2">
          <p>Email: {user.emailAddresses[0]?.emailAddress}</p>
          <p>Name: {user.firstName} {user.lastName}</p>
        </div>
      )}
      <LogoutButton />
    </div>
  );
}
