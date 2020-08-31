import React from 'react';
import MainSection from "./components/Main/MainSection";
import Footer from "./components/Footer/Footer";
import Header from "./components/Header/Header";
class App extends React.Component {
  render() {
    return (
        <div className="app">
          <Header />
          <MainSection />
          <Footer />
        </div>
          );
  }
}

export default App;
