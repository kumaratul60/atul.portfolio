import { useEffect, useState, lazy, Suspense } from "react";
import { Bars } from "react-loader-spinner";

import "./App.css";

const Header = lazy(() => import("./Components/Header"));
const Footer = lazy(() => import("./Components/Footer"));
const About = lazy(() => import("./Components/About"));
const Resume = lazy(() => import("./Components/Resume"));
const Contact = lazy(() => import("./Components/Contact"));
const Portfolio = lazy(() => import("./Components/Portfolio"));

const LoadingFallback = () => (
  <div
    style={{
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      height: "100vh",
    }}
  >
    <Bars height="80" width="80" color="#4fa94d" ariaLabel="bars-loading" />
  </div>
);

const App = () => {
  const [resumeData, setResumeData] = useState({});
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchResumeData = async () => {
      try {
        const resResumeData = await fetch("/resumeData.json");
        const data = await resResumeData.json();
        setResumeData(data);
        setTimeout(() => {
          setIsLoading(false);
        }, 1000);
      } catch (err) {
        console.error(err);
        setIsLoading(false);
      }
    };
    fetchResumeData();
  }, []);

  return (
    <div className="App">
      {isLoading ? (
        <LoadingFallback />
      ) : (
        <Suspense fallback={<LoadingFallback />}>
          <Header data={resumeData.main} />
          <About data={resumeData.main} />
          <Resume data={resumeData.resume} />
          <Portfolio data={resumeData.portfolio} />
          <Contact data={resumeData.main} />
          <Footer data={resumeData.main} />
        </Suspense>
      )}
    </div>
  );
};

export default App;
