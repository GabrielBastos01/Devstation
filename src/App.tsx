import './styles/reset.scss';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header/Header';
import Section from './components/Section/Section';
import Projects from './components/Projects/Projects';
import Devs from './components/Devs/Devs';

const App = () => {
  return (
    <Router>
      <Header />
      <Routes>
        <Route
          path="/"
          element={
            <>
              <Section />
              <Projects />
            </>
          }
        />
        <Route path="/Devs" element={<Devs />} />
      </Routes>
    </Router>
  );
};

export default App;
