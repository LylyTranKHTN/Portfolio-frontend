import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { menuItems } from '@utils';
import { useEffect, useState } from 'react';
import ThemeAPI from '@apis/themeAPI';

const themeAPI = new ThemeAPI();

const router = createBrowserRouter(menuItems);

function App() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    themeAPI
      .getThemes()
      .then((themes) => {
        // Set theme to root element
        const root = document.documentElement;
        themes.forEach((theme) => {
          root.style.setProperty(theme.name, theme.value);
        });
        setLoading(false);
      })
      .catch((err) => {
        // use default theme define in index.css file
        setLoading(false);
      });
  }, []);

  if (loading) {
    return null;
  }

  return <RouterProvider router={router} />;
}

export default App;
