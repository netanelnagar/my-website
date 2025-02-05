import { createRoot } from 'react-dom/client'
import { Suspense, lazy } from 'react';
import {
    createBrowserRouter,
    RouterProvider,
} from "react-router-dom";
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';

import ErrorBoundary from './components/ErrorBoundary.tsx';
import App from './App.tsx'
import './index.css'

//to add url for PageNotFound component
document.documentElement.style.setProperty('--url-bg', `url(${import.meta.env.VITE_BG_IMAGE_URL})`);

const Resume = lazy(() => import('./components/Resume.tsx'));
const Projects = lazy(() => import('./components/Projects.tsx'));
const Home = lazy(() => import('./pages/Home.tsx'));
const Contact = lazy(() => import('./components/Contact.tsx'));
const PageNotFound = lazy(() => import('./components/PageNotFound.tsx'));

const isLocal = import.meta.env?.VITE_MODE !== 'local' ? true : false;

const router = createBrowserRouter([
    {
        path: `${isLocal ? "/" : "/my-website/"}`,
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
                path: "resume",
                element: (
                    <Suspense fallback={<div className="loader m-auto h-6 w-6"></div>}>
                        <Resume />
                    </Suspense>
                ),
                errorElement: <ErrorBoundary />
            },
            {
                path: "projects",
                element: (
                    <Suspense fallback={<div className="loader m-auto h-6 w-6"></div>}>
                        <Projects />
                    </Suspense>
                ),
                errorElement: <ErrorBoundary />
            },
            {
                path: "contact",
                element: (
                    <Suspense fallback={<div className="loader m-auto h-6 w-6"></div>}>
                        <Contact />
                    </Suspense>
                ),
                errorElement: <ErrorBoundary />
            },
            {
                path: "*",
                element: <PageNotFound />,
            }
        ]

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
    <QueryClientProvider client={queryClient}>
        <RouterProvider router={router} />
    </QueryClientProvider>
);
