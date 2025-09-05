import { createRoot } from 'react-dom/client'
import { StrictMode, Suspense, lazy } from 'react';
import {
    createBrowserRouter,
    Navigate,
    RouterProvider,
} from "react-router-dom";
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';

import ErrorBoundary from './components/ErrorBoundary.tsx';
import App from './App.tsx'
import './index.css'


const Resume = lazy(() => import('./components/Resume.tsx'));
const Projects = lazy(() => import('./components/Projects.tsx'));
const Home = lazy(() => import('./pages/Home.tsx'));
const Contact = lazy(() => import('./components/Contact.tsx'));


const fallbackLoader = <div className="loader m-auto h-6 w-6"></div>;
const errorElement = <ErrorBoundary />;

const withSuspense = (Component: React.LazyExoticComponent<React.ComponentType<any>>) => (
    <Suspense fallback={fallbackLoader}>
        <Component />
    </Suspense>
);

const routes = [
    {
        path: "/",
        element: <App />,
        children: [
            {
                index: true,
                element: withSuspense(Home),
                errorElement
            },
            {
                path: "/resume",
                element: withSuspense(Resume),
                errorElement
            },
            {
                path: "/projects",
                element: withSuspense(Projects),
                errorElement
            },
            {
                path: "/contact",
                element: withSuspense(Contact),
                errorElement
            }
        ]
    }
]

const router = createBrowserRouter(routes, {
  basename: import.meta.env.BASE_URL,
});

const queryClient = new QueryClient({
    defaultOptions: {
        queries: {
            staleTime: 1000 * 60,
        }
    }
});


createRoot(document.getElementById("root")!).render(
    <StrictMode>
        <QueryClientProvider client={queryClient}>
            <RouterProvider router={router} />
        </QueryClientProvider>
    </StrictMode>
);
