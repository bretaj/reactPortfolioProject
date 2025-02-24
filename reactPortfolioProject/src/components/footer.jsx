
function Footer () {
  return (
    <footer className="footer">
      <div className="footer-content">
        <p>&copy; {new Date().getFullYear()} Your Name. All rights reserved.</p>
        <ul className="social-links">
          <li>
            <a href="#" target="_blank" rel="">
              GitHub
            </a>
          </li>
          <li>
            <a href="#" target="_blank" rel="">
              LinkedIn
            </a>
          </li>
          <li>
            <a href="#" target="_blank" rel="">
              Twitter
            </a>
          </li>
        </ul>
      </div>
    </footer>
  );
};

export default Footer;