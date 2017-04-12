import { h, Component } from 'preact';

import Header from './header';
import Home from './home';
import Footer from './footer';

export default class App extends Component {
  render() {
    return (
      <div id="app">
        <Header />
        <Home/>
        <Footer/>
      </div>
    );
  }
}
