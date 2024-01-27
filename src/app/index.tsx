import "./App.scss";
import Routing from "../pages";
import { withProviders } from "./providers";

const App = () => {
  return (
    <div className='App'>
      <Routing />
    </div>
  );
};

export default withProviders(App);
