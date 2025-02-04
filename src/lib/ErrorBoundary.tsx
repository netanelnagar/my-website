import { ArrowLeft } from "lucide-react";
import { useNavigate, useRouteError } from "react-router-dom";

function ErrorBoundary() {
  let error = useRouteError();
  const navigate = useNavigate();
  console.error(error);
  return <div className="m-auto space-y-11">
    <button onClick={() => navigate(-1)} className="flex gap-3 text-primary"><ArrowLeft className="h-6 w-6 text-primary" /> Go back</button>
    <h1 className="text-3xl text-center">Something went wrong...</h1>
  </div>;
}

export default ErrorBoundary;