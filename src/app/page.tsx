import Navbar from "@/components/navbar/Navbar";
import Evento from "./evento/Evento";

export default function Home() {
  return (
    <div>
      <Navbar />
      <main>
        <Evento/>
      </main>
    </div>
  );
}
