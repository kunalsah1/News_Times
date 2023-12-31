import "./App.css";
import Navbar from "./Components/Navbar";
import News from "./Components/News";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import React, { useState } from "react";
import LoadingBar from 'react-top-loading-bar'
import International from "./Components/International";

const App = () => {
  const [progress, setProgress] = useState(0)

  return (
    <div>
      <Router>
        <Navbar />

        <LoadingBar
          color='blue'
          progress={progress}

        />

        <Routes>
          <Route
            path="/"
            element={
              <React.Fragment>
                <News updateProgress={setProgress}
                  key="general"
                  pageSize={8}
                  country="in"
                  category="general"
                />
              </React.Fragment>
            }
          />
          <Route
            path="/business"
            element={
              <React.Fragment>
                <News updateProgress={setProgress}
                  key="business"
                  pageSize={8}
                  country="in"
                  category="business"
                />
              </React.Fragment>
            }
          />
          <Route
            path="/entertainment"
            element={
              <React.Fragment>
                <News updateProgress={setProgress}
                  key="entertainment"
                  pageSize={8}
                  country="in"
                  category="entertainment"
                />
              </React.Fragment>
            }
          />
          <Route
            path="/general"
            element={
              <React.Fragment>
                <News updateProgress={setProgress}
                  key="general"
                  pageSize={8}
                  country="in"
                  category="general"
                />
              </React.Fragment>
            }
          />
          <Route
            path="/health"
            element={
              <React.Fragment>
                <News updateProgress={setProgress}
                  key="health"
                  pageSize={8}
                  country="in"
                  category="health"
                />
              </React.Fragment>
            }
          />
          <Route
            path="/science"
            element={
              <React.Fragment>
                <News updateProgress={setProgress}
                  key="science"
                  pageSize={8}
                  country="in"
                  category="science"
                />
              </React.Fragment>
            }
          />
          <Route
            path="/sports"
            element={
              <React.Fragment>
                <News updateProgress={setProgress}
                  key="sports"
                  pageSize={8}
                  country="in"
                  category="sports"
                />
              </React.Fragment>
            }
          />
          <Route
            path="/technology"
            element={
              <React.Fragment>
                <News updateProgress={setProgress}
                  key="technology"
                  pageSize={8}
                  country="in"
                  category="technology"
                />
              </React.Fragment>
            }
          />
          {/* USA */}
          <Route
            path="/us-general"
            element={
              <React.Fragment>
                <International updateProgress={setProgress}
                  key="general"
                  pageSize={8}
                  country="us"
                  category="general"
                />
              </React.Fragment>
            }
          />
          <Route
            path="/us-business"
            element={
              <React.Fragment>
                <International updateProgress={setProgress}
                  key="business"
                  pageSize={8}
                  country="us"
                  category="business"
                />
              </React.Fragment>
            }
          />
          <Route
            path="/us-entertainment"
            element={
              <React.Fragment>
                <International updateProgress={setProgress}
                  key="entertainment"
                  pageSize={8}
                  country="us"
                  category="entertainment"
                />
              </React.Fragment>
            }
          />
          <Route
            path="/us-health"
            element={
              <React.Fragment>
                <International updateProgress={setProgress}
                  key="health"
                  pageSize={8}
                  country="us"
                  category="health"
                />
              </React.Fragment>
            }
          />
          <Route
            path="/us-science"
            element={
              <React.Fragment>
                <International updateProgress={setProgress}
                  key="science"
                  pageSize={8}
                  country="us"
                  category="science"
                />
              </React.Fragment>
            }
          />
          <Route
            path="/us-sports"
            element={
              <React.Fragment>
                <International updateProgress={setProgress}
                  key="sports"
                  pageSize={8}
                  country="us"
                  category="sports"
                />
              </React.Fragment>
            }
          />
          <Route
            path="/us-technology"
            element={
              <React.Fragment>
                <International updateProgress={setProgress}
                  key="technology"
                  pageSize={8}
                  country="us"
                  category="technology"
                />
              </React.Fragment>
            }
          />
        </Routes>
      </Router>
    </div>
  );

}

export default App