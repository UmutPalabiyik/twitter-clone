import "./Widgets.scss";
import WidgetsMessages from "./WidgetsMessages";
import WidgetsNav from "./WidgetsNav";
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
      <WidgetsNav />
      <WidgetsMessages />

      </div>
    </div>
  );
};

export default Widgets;
