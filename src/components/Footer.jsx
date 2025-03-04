import { Link } from "react-router-dom";
function Footer () {
    return (
      <footer>
        <nav>
                  <ul>
                      <li className='footerH1'>
                          <Link to="/">GitHub</Link>
                      </li>
                      <li className='footerH1'>
                          <Link to="/">LinkedIn</Link>
                      </li>
                      <li className='footerH1'>
                          <Link to="/">BlueSky</Link>
                      </li>
                  </ul>
              </nav>
        </footer>
    );
  };
  
  export default Footer;