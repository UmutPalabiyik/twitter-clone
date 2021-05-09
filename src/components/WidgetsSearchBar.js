import "./WidgetsSearchBar.scss"
import { RiSearchLine } from "react-icons/ri";

const WidgetsSearchBar = () => {

    return(
        <div className="widgets-searchbar">
          <RiSearchLine
            className="widgets-searchbar__icon"
            color={"#8899A6"}
            size={19}
          />
          <input
            className="widgets-searchbar__input"
            type="text"
            placeholder="Twitter'da Ara"
          />
        </div>
    )
}


export default WidgetsSearchBar;