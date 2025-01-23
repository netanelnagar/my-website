
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ReactQueryDevtools } from '@tanstack/react-query-devtools'
import Layout from "./pages/Layout";

const queryClient = new QueryClient({

});

const App = () => (
  <QueryClientProvider client={queryClient}>
   <ReactQueryDevtools />
    <Layout />
  </QueryClientProvider>
);

export default App;