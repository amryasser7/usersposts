import AppRoutes from "./Routes";
import { QueryClientProvider, QueryClient } from "react-query";

import "./App.scss";

function App() {
  // we use refetchOnWindowFocus: false to stop react query from fetching on every action the the page
  const queryClinet = new QueryClient({defaultOptions: {
    queries: {
      refetchOnWindowFocus: false,
    },
  },});

  return (
    <QueryClientProvider client={queryClinet}>
      <div className="main-container">
        <nav className="navbar">Fixed Users</nav>
        <div className="content-section">
          <AppRoutes />
        </div>
      </div>
    </QueryClientProvider>
  );
}

export default App;
