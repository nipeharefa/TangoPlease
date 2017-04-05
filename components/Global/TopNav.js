import { Component } from 'react'


export default class TopNav extends Component {

  constructor() {
      super()
      this.state = {
        "hamActve": false
      }
  }
  onClickHamburger() {

    this.setState({"hamActve": !this.state.hamActve})
  }
	render() {

    let isHamburgerActive = this.state.hamActve ? "is-active": ""
    console.info(isHamburgerActive)

    return (
     <div className="topNav">
      <div className="container">
        <div className="columns">
          <div className="column">
             <nav className="nav">
          <div className="nav-left">
            <a className="nav-item">
              <img src="http://bulma.io/images/bulma-logo.png" alt="Bulma logo" />
            </a>
          </div>
          <span className={'nav-toggle ' + isHamburgerActive} onClick={this.onClickHamburger.bind(this)}>
            <span></span>
            <span></span>
            <span></span>
          </span>
          <div className="nav-right navbar-right-style2 is-hidden-mobile">
            <ul className="nav-right-oke">
              <li>
                <a href="/">Write Story</a>
              </li>
              <li>
                <figure className="image is-32x32">
                  <img src="http://bulma.io/images/placeholders/128x128.png" />
                </figure>
              </li>
            </ul>
          </div>
        </nav>
          </div>
        </div>
      </div>
    </div> 
    )
  }
}