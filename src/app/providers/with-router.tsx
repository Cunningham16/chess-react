import { Provider } from "react-redux";
import { BrowserRouter } from "react-router-dom";
import { store } from "shared/store";

export const withRouter = (component: () => React.ReactNode) => () =>
  (
    <BrowserRouter>
      <Provider store={store}>{component()}</Provider>
    </BrowserRouter>
  );
  
