import Styles from '../styles.module.css'; 

export default function Footer() {

    function toGit() {
        window.location.href = "https://www.github.com/mirzasheesh";
    }

    return (
        <div className = {Styles.bottom}>
            <p>Found it cool? checkout my GitHub!</p>
            <button onClick={() => toGit()}>Click Here</button>
        </div>
    );
}