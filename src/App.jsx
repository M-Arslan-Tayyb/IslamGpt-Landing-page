import { RouterProvider, createBrowserRouter } from "react-router-dom"
import AppLayout from "./layout/AppLayout"
import ErrorBoundary from "./components/common/ErrorBoundry"
import LandingPage from "./pages/LandingPage";

function App() {
  const router = createBrowserRouter([
    {
      element: <AppLayout />,
      children: [
        {
          path: "/",
          element: (
            <ErrorBoundary>
              <LandingPage />
            </ErrorBoundary>
          ),
        },
        // Add more routes here as needed
      ]
    }
  ]);

  return <RouterProvider router={router} future={{ v7_startTransition: true }} />
}

export default App