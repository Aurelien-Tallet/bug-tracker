import { Route, Routes } from "react-router-dom";
import "./App.scss";
import Layout from "./components/Layout/Layout";
import RequireAuth from "./components/RequireAuth/RequireAuth";
import SingleBug from "./components/SingleBug/SingleBug";
import Bugs from "./pages/Dashboard/Bugs/Bugs";
import Dashboard from "./pages/Dashboard/Dashboard";
import MyBugs from "./pages/Dashboard/MyBugs/MyBugs";
import SignIn from "./pages/SignIn/SignIn";
import SignUp from "./pages/SignUp/SignUp";
import { AuthProvider } from "./provider/AuthProvider";

function App() {
  return (
    <div className="App">
      <AuthProvider>
        <Routes>
          <Route element={<Layout />}>
            <Route path="/" element={<SignIn />} />
            <Route path="/login" element={<SignIn />} />
            <Route path="/signup" element={<SignUp />} />
            <Route
              path="/dashboard"
              element={
                <RequireAuth>
                  <Dashboard />
                </RequireAuth>
              }
            >
              <Route path="/dashboard/bugs" element={<Bugs />}></Route>
              <Route path="/dashboard/bugs/*" element={<SingleBug />} />
              <Route path="/dashboard/bugs/:id" element={<SingleBug />} />
              <Route path="/dashboard/mybugs" element={<MyBugs />} />
            </Route>
          </Route>
        </Routes>
      </AuthProvider>
    </div>
  );
}

export default App;
