
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ReactQueryDevtools } from '@tanstack/react-query-devtools'
import { Outlet } from "react-router-dom";
import Navbar from "./pages/Navbar";
import Footer from "./pages/Footer";

const queryClient = new QueryClient({

});

const App = () => {
  return(
  <QueryClientProvider client={queryClient}>
    <div className="min-h-dvh bg-white overflow-y-auto flex flex-col">
    <Navbar />
      <Outlet />
      <Footer />
    </div>
    <ReactQueryDevtools />
  </QueryClientProvider>
)};

export default App;