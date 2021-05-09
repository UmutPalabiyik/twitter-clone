import "./Widgets.scss";
import WidgetsSearchBar from "./WidgetsSearchBar";
import WidgetsTrendings from "./WidgetsTrendings"

const Widgets = () => {


  return (
    <div className="widgets">
      <div className="widgets__wrapper">
      <WidgetsSearchBar />
      <WidgetsTrendings />


      </div>
    </div>
  );
};

export default Widgets;
