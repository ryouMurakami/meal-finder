import { useContext } from "react";
import { AppContext } from "../context";
import SearchIcon from "../assets/search-icon.svg";
import DarkIcon from "../assets/darkmode-icon.svg";
import DeleteIcon from "../assets/delete-icon.svg";

const SingleButton = ({handler, icon}) => {
  return (
    <button onClick={handler}>
      <img src={icon} alt="icon-image" />
    </button>
  );
};

const Button = (props) => {
  const contextValues = useContext(AppContext);
  switch (props.type) {
    case "search":
      return <SingleButton icon={SearchIcon} />;
    case "darkmode":
      return (
        <SingleButton
          handler={contextValues.handleThemeSwitch}
          icon={DarkIcon}
        />
      );
    case "delete":
      return (
        <SingleButton
          handler={contextValues.handleDeleteHistory}
          icon={DeleteIcon}
        />
      );
    default:
      return null;
  }
};
export default Button;
