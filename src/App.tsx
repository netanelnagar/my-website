import { Outlet } from "react-router-dom";
import Navbar from "./pages/Navbar";
import Footer from "./pages/Footer";
import { db, exposeDb } from "@/lib/firebase";
import { useQuery } from "@tanstack/react-query";
import { collection, getDocs } from "firebase/firestore";
import { MyAppContext } from "./components/context/context";
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";

const App = () => {
  const { data, isError, isLoading } = useQuery({
    queryKey: ['firebase', 'home'],
    queryFn: exposeDb(db, async (db) => {
      const data = await collection(db, 'home');
      const snapshot = await getDocs(data);
      console.log(snapshot)
      return snapshot.docs.map(doc => doc.data());
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