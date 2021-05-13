import "./Widgets.scss";
import WidgetsMessages from "./MessagesWidget/WidgetsMessages";
import WidgetsNav from "./NavbarWidget/WidgetsNav";
import WidgetsSearchBar from "./SearchbarWidget/WidgetsSearchBar";
import WidgetsSuggestions from "./SuggestionsWidget/WidgetsSuggestions";
import WidgetsTrendings from "./TrendingsWidget/WidgetsTrendings"


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
