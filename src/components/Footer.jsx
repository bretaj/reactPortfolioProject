import { Link } from "react-router-dom";
function Footer () {
    return (
      <footer>
        <nav>
                  <ul>
                      <li>
                          <Link to="/">GitHub</Link>
                      </li>
                      <li>
                          <Link to="/">LinkedIn</Link>
                      </li>
                      <li>
                          <Link to="/">BlueSky</Link>
                      </li>
                  </ul>
              </nav>
        </footer>
    );
  };
  
  export default Footer;