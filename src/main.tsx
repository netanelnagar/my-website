import { createRoot } from 'react-dom/client'
import {
    createBrowserRouter,
    RouterProvider,
} from "react-router-dom";
import App from './App.tsx'
import './index.css'
import Home from './pages/Home.tsx';
import AboutMe from './components/AboutMe.tsx';
import Resume from './components/Resume.tsx';
import Projects from './components/Projects.tsx';
import Contact from './components/Contact.tsx';

const router = createBrowserRouter([
    {
        path: "/",
        element: <App />,
        //   loader: rootLoader,
        children: [
            {
                //   path: "home",
                index: true,
                element: <Home />,
                //   loader: teamLoader,
            },
            {
                path: "resume",
                // index: true,
                element: <Resume />,
                //   loader: teamLoader,
            },
            {
                path: "projects",
                // index: true,
                element: <Projects />,
                //   loader: teamLoader,
            },
            {
                path: "contact",
                // index: true,
                element: <Contact />,
                //   loader: teamLoader,
            },
        ],
    },
]);

createRoot(document.getElementById("root")!).render(<RouterProvider router={router} />);
