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


const router = createBrowserRouter([
    {
        path: "/",
        element: <App />,
        children: [
            {
                index: true,
                element: (
                    <Suspense fallback={<div className="loader m-auto h-6 w-6"></div>}>
                        <Home />
                    </Suspense>
                ),
                errorElement: <ErrorBoundary />
            },
            {
                path: "/resume",
                element: (
                    <Suspense fallback={<div className="loader m-auto h-6 w-6"></div>}>
                        <Resume />
                    </Suspense>
                ),
                errorElement: <ErrorBoundary />
            },
            {
                path: "/projects",
                element: (
                    <Suspense fallback={<div className="loader m-auto h-6 w-6"></div>}>
                        <Projects />
                    </Suspense>
                ),
                errorElement: <ErrorBoundary />
            },
            {
                path: "/contact",
                element: (
                    <Suspense fallback={<div className="loader m-auto h-6 w-6"></div>}>
                        <Contact />
                    </Suspense>
                ),
                errorElement: <ErrorBoundary />
            }
        ]
    },
    {
        path: "/my-website/",
        element: <Navigate to={"/"} />
    }
]);

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
