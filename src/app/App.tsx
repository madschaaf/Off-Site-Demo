import { BrowserRouter, Routes, Route } from 'react-router';
import { Navbar } from './components/Navbar';
import { LandingPage } from './pages/LandingPage';
import { Page1 } from './pages/Page1';
import { Page2 } from './pages/Page2';
import { UseCasePreview } from './components/UseCasePreview';
import { StepByStep } from './components/StepByStep';

export default function App() {
  return (
    <BrowserRouter>
      <div className="size-full">
        <Navbar />
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/usecase" element={<UseCasePreview />} />
          <Route path="/step-by-step" element={<StepByStep onBack={() => window.history.back()} />} />
          <Route path="/page2" element={<Page2 />} />
          <Route path="/page1" element={<Page1 />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}
