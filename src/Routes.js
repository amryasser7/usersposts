import { BrowserRouter, Routes, Route } from 'react-router-dom';

import Users from './components/users/Users';
import Posts from './components/posts/Posts';
import Error from './components/errorComponent/ErrorComponent';

export default function AppRoutes() {
 

  return (
    <BrowserRouter>
      <Routes>
        <Route
          exact
          path="/"
          element={<Users />}
        />
        <Route
          exact
          path="/Users"
          element={<Users />}
        />
        <Route
          exact
          path="/Posts/:id"
          element={<Posts />}
        />
        <Route
          exact
          path="*"
          element={<Error description={"Page Not Found"} />}
        />
      </Routes>
    </BrowserRouter>
  );
}