import "./Header.css";
import { IconButton } from "@material-ui/core";
import AccountBoxIcon from "@material-ui/icons/AccountBox";
import ForumIcon from "@material-ui/icons/Forum";

const Header = () => {
  return (
    <div className="header">
      <IconButton>
        <AccountBoxIcon fontSize="large" className="headerIcon" />
      </IconButton>
      <IconButton>
        <img
          src="https://1000logos.net/wp-content/uploads/2018/07/Tinder-logo.png"
          className="headerLogo"
          alt=""
        />
      </IconButton>
      <IconButton>
        <ForumIcon fontSize="large" className="headerIcon" />
      </IconButton>
    </div>
  );
};

export default Header;
