import NavBar from "@/component/global/NavBar";
import SideBar from "@/component/global/SideBar";

export default function Home() {
  return (
    <main
      className="flex"
    >
      <SideBar />
      <div 
        className="w-screen min-h-screen dark:bg-primary-500 bg-white"
      >
        <NavBar />
      </div>
    </main>
  );
}
