import "./ContactPage.css";
function ConnectPage() {
  return (
    <div>
      <div>
        <img
          className="ContactPagelogo"
          src="/logo-no-background.png"
          height="50"
        />
      </div>

      <div className="addressContent">
        This feature is not yet available.
        <br />
        Please check back later.
        <br />
        Some additional features that may be of interest to you include:
        <br />
        create pins, follow other users, and create boards.
        <br />
        Feel free to reach out to me at:
      </div>
      <div className="linksContainer">
        <div className="linkAddress">
          <a
            rel="noreferrer"
            target="_blank"
            href="https://www.linkedin.com/in/james-wu-5a609520a/"
          >
            <img src="/linkedin.png" alt="linkedin" />
          </a>
          <a
            rel="noreferrer"
            target="_blank"
            href="https://github.com/wuyuwenj"
          >
            <img src="/github.png" alt="github" />
          </a>
        </div>
      </div>
    </div>
  );
}
export default ConnectPage;
