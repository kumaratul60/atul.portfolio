import { useEffect, useState, lazy, Suspense } from "react";
import "./App.css";

const Header = lazy(() => import("./Components/Header"));
const Footer = lazy(() => import("./Components/Footer"));
const About = lazy(() => import("./Components/About"));
const Resume = lazy(() => import("./Components/Resume"));
const Contact = lazy(() => import("./Components/Contact"));
const Portfolio = lazy(() => import("./Components/Portfolio"));

const LoadingFallback = () => <div>Loading...</div>;

const App = () => {
  const [resumeData, setResumeData] = useState({});

  useEffect(() => {
    const fetchResumeData = async () => {
      try {
        const resResumeData = await fetch("/resumeData.json");
        const data = await resResumeData.json();
        setResumeData(data);
      } catch (err) {
        console.error(err);
      }
    };
    fetchResumeData();
  }, []);

  return (
    <div className="App">
      <Suspense fallback={<LoadingFallback />}>
        <Header data={resumeData.main} />
        <About data={resumeData.main} />
        <Resume data={resumeData.resume} />
        <Portfolio data={resumeData.portfolio} />
        <Contact data={resumeData.main} />
        <Footer data={resumeData.main} />
      </Suspense>
    </div>
  );
};

export default App;
