import { Link } from "react-router-dom";

function Footer() {
    return (
        <footer>
            <nav>
                <ul>
                    <li>
                        <Link to="https://github.com/bretaj">GitHub</Link>
                    </li>
                    <li>
                        <Link to="https://linkedin.com">LinkedIn</Link>
                    </li>
                    <li>
                        <Link to="https://bsky.social">BlueSky</Link>
                    </li>
                </ul>
            </nav>
        </footer>
    );
};

export default Footer;