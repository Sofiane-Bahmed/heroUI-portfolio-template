import { Switch, Route } from "react-router-dom";
import Layout from "./components/layout";

import HomePage from "./pages/home";
import AboutPage from "./pages/about";
import ProjectsPage from "./pages/projects";
import ContactPage from "./pages/contact";

export default function App() {
  return (
    <Switch>
      <Route
        exact
        path="/"
        render={() => (
          <Layout>
            <HomePage />
          </Layout>
        )}
      />
      <Route
        path="/about"
        render={() => (
          <Layout>
            <AboutPage />
          </Layout>
        )}
      />
      <Route
        path="/projects"
        render={() => (
          <Layout>
            <ProjectsPage />
          </Layout>
        )}
      />
      <Route
        path="/contact"
        render={() => (
          <Layout>
            <ContactPage />
          </Layout>
        )}
      />
    </Switch>
  );
}
