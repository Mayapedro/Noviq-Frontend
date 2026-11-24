import SideNav from "@/navigation/SideNav";

export default function WorkspaceLayout({ children }) {
  return (
    <div className="flex h-screen overflow-hidden">
      <SideNav />
      <main className="flex-1 min-w-0 overflow-y-auto p-4 custom-scrollbar">
        {children}
      </main>
    </div>
  );
}