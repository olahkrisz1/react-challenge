import githubLogo from "../github-logo.svg";

const Header = () => {
  return (
    <div>
      <nav className="navbar navbar-light bg-primary">
        <div className="container-fluid">
          <a className="navbar-brand" href="https://github.com/">
            <img
              src={githubLogo}
              alt=""
              width="30"
              height="30"
              className="d-inline-block align-text-top"
            />
            Github
          </a>
        </div>
      </nav>
    </div>
  );
};

export default Header;
