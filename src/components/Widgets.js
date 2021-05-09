import "./Widgets.scss";
import WidgetsSearchBar from "./WidgetsSearchBar";
import WidgetsSuggestions from "./WidgetsSuggestions";
import WidgetsTrendings from "./WidgetsTrendings"

const Widgets = () => {


  return (
    <div className="widgets">
      <div className="widgets__wrapper">
      <WidgetsSearchBar />
      <WidgetsTrendings />
      <WidgetsSuggestions />

      </div>
    </div>
  );
};

export default Widgets;
