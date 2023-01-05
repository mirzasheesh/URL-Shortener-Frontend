import Styles from './styles.module.css'; 

import ReactDOM from 'react-dom/client';

import Header from './components/Header';
import MainBox from './components/MainBox';
import Section from './components/Section';
import Footer from './components/Footer';

export default function Main() {

    document.title = "Hello Shortify";

    return (
        <div style = {Styles}>
            <Header />
            <MainBox />
            <Section />
            <Footer />
        </div>
    );
}

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(<Main />);