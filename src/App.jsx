import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { menuItems } from '@utils';

const router = createBrowserRouter(menuItems);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
