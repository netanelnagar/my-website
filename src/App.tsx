import { Outlet } from "react-router-dom";
import { collection, getDocs } from "firebase/firestore";
import Navbar from "./pages/Navbar";
import Footer from "./pages/Footer";
import { db, exposeDb } from "@/lib/firebase";
import { useQuery } from "@tanstack/react-query";
import { MyAppContext } from "@/components/context/context";
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";

const App = () => {
  const { data, isError, isLoading } = useQuery({
    queryKey: ['home'],  // unique identifier for this query
    queryFn: exposeDb(db, async (db) => {
      const data = await collection(db, 'home');
      const snapshot = await getDocs(data);
      const dataInOrder: Record<string, any> = {
        projects: [],
        experiences: [],
      }
      snapshot.docs.forEach(doc => {
        if (doc.id.startsWith('project') || doc.id.startsWith('experience')) {
          dataInOrder[doc.id.startsWith('project') ? "projects" : "experiences"].push(doc.data())
        } else { dataInOrder[doc.id] = doc.data() }
      });
      console.log(dataInOrder)
      return dataInOrder;
    }),
  });



  return (
    <div className="min-h-dvh bg-white overflow-y-auto flex flex-col">
      <Navbar />
      <Toaster />
      <Sonner />
      <MyAppContext.Provider value={{ data, isError, isLoading }}>
        <Outlet />
      </MyAppContext.Provider>
      <Footer />
    </div>

  )
};

export default App;