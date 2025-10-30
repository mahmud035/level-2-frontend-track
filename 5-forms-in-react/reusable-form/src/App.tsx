import { RouterProvider } from 'react-router-dom';
import Container from './components/ui/Container';
import router from './routes/routes';

function App() {
  return (
    <Container>
      <RouterProvider router={router} />
    </Container>
  );
}

export default App;
