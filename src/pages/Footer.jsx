import { API_URL } from "../components/api"

export default function Footer() {
    return (
      <footer className="footer fixed-bottom">
        <div className="container">
          <div className="content-section">
            <span>© 2024 copyleft. </span>
            <span>
            <a className="text-muted" href="https://khaykin.app/">
              khaykin.app
            </a>
            </span>
            <span> (<b>api</b>: {API_URL} )</span>
          </div>
        </div>
      </footer>
    );
  }