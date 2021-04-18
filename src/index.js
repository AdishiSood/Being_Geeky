import React from 'react';
import ReactDOM from 'react-dom';
import Navbar from './components/Navbar/Navbar';
import Main from './components/Main/Main';
import Tutorials from './components/Tutorials/Tutorials';
import Video from './components/Video/Video';
import Banner from './components/Banner/Banner';
import Coupons from './components/Coupons/Coupons';
import Footer from './components/Footer/Footer';
import './index.css';

class App extends React.Component {
	render() {
		return (
            <div className="App">
                <Navbar />
                <Main />
                <Tutorials />
                <Video />
                <Banner />
                <Coupons />
                <Footer />
            </div>
		);
	}
}

ReactDOM.render(
	<App />,
	document.getElementById('root')
);
