import React from 'react';
import {Row, Col} from "antd";

import MainSection from "./components/Main/MainSection";
import Footer from "./components/Footer/Footer";
import Header from "./components/Header/Header";

import 'antd/dist/antd.css';
import "./App.css";
class App extends React.Component {
  render() {
      return (
          <div className="app">
              <Row>
                  <Col span={12} offset={6}> <Header/> </Col>
              </Row>
              <Row>
                  <Col span={12} offset={6}> <MainSection/> </Col>
              </Row>
              <Row>
                  <Col span={12} offset={6}> <Footer/> </Col>
              </Row>
          </div>
      );
  }
}

export default App;
