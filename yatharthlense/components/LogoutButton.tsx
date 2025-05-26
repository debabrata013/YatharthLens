"use client";

import { SignOutButton } from "@clerk/nextjs";

export default function LogoutButton() {
  return (
    <SignOutButton redirectUrl="/">
      <button className="mt-4 px-4 py-2 bg-red-600 text-white rounded hover:bg-red-700">
        Logout
      </button>
    </SignOutButton>
  );
}
