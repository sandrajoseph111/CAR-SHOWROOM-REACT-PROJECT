import React from 'react'

const NavigationBar = () => {
  return (
    <div>
      <nav
        className="navbar navbar-expand-lg navbar-dark"
        style={{
          background: "linear-gradient(to right, #000000, #434343)",
          boxShadow: "0 4px 10px rgba(0,0,0,0.3)"
        }}
      >
        <div className="container-fluid">

          <a
            className="navbar-brand fw-bold fs-3 text-warning"
            href="#"
          >
            🚗 CAR SHOWROOM
          </a>

          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNavAltMarkup"
            aria-controls="navbarNavAltMarkup"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>

          <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
            <div className="navbar-nav ms-auto">

              <a className="nav-link text-white fw-semibold px-3" href="/">
                ADD CAR
              </a>

              <a className="nav-link text-white fw-semibold px-3" href="/de">
                DELETE CAR
              </a>

              <a className="nav-link text-white fw-semibold px-3" href="/se">
                SEARCH CAR
              </a>

              <a className="nav-link text-white fw-semibold px-3" href="/vi">
                VIEW CAR
              </a>

            </div>
          </div>
        </div>
      </nav>
    </div>
  )
}

export default NavigationBar