import { BrowserRouter as Router} from 'react-router-dom';
import MainLayout from './layouts/MainLayout';
function App() {
  return (
    <>
    <MainLayout />
    </>
  );
}

const Root = () => (
  <Router>
    <App />
  </Router>
);

export default Root;