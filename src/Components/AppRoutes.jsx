import { Routes, Route } from "react-router-dom";
import { routes } from "../routes";
import { NotFoundPage } from "../Pages/NotFoundPage";
import { MainLayout } from "../Layouts/MainLayout";

export const AppRoutes = () => (
  <Routes>
    {routes.map((route) => {
      const { path, component, enabled = true, layout = MainLayout } = route;
      const AppLayout = layout;
      const PageComponent = component;

      return (
        enabled && (
          <Route
            key={path}
            path={path}
            element={
              <AppLayout>
                <PageComponent />
              </AppLayout>
            }
          />
        )
      );
    })}
    <Route path="*" element={<NotFoundPage />} />
  </Routes>
);
