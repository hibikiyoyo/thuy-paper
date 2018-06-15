import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import './main.css';
import Menu from './components/Menu'
import Content from './components/Content'
class App extends Component {
  render() {
    return (
      <div id="wrapper" className="container-fluid">
				<div id="layout-container" className="container-flex">
						<div className="App">
							<div id="header" className="header-flex">
								<Menu />
							</div>
							<div id="pageContent" className="content-flex">
                <Content/>
							</div>
						</div>
				</div>
			</div>
    );
  }
}

export default App;
