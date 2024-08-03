import { RouterProvider } from 'react-router-dom';
import './index.css';
import Provider from './components/provider/Provider';
import { router } from './routes/router';

function App() {
  return (
    <Provider>
      <RouterProvider router={router} />
    </Provider>
  );
}

export default App;
