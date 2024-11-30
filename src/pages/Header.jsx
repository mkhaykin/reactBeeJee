export default function Header() {
    return (
      <header className="site-header">
        <nav className="navbar navbar-expand-md navbar-dark bg-dark fixed-top">
          <div className="container">
            <a className="navbar-brand mr-4" href="/">
              TODO list
            </a>
            <button
              className="navbar-toggler"
              type="button"
              data-toggle="collapse"
              data-target="#navbarToggle"
              aria-controls="navbarToggle"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarToggle">
              <div className="navbar-nav me-auto">
                <a className="nav-item nav-link" href={`${import.meta.env.VITE_API_URL}/api/docs`} target="_blank">
                  api
                </a>
              </div>
              <div className="navbar-nav">
                <span className="navbar-text navbar-dark">Hi ...!</span>
                <a className="nav-item nav-link" href="/logout">
                  Logout
                </a>
                <a className="nav-item nav-link" href="/login">
                  Login
                </a>
              </div>
            </div>
          </div>
        </nav>
      </header>
    );
  }