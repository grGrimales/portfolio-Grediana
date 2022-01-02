import { Provider } from "react-redux";

import { AppRouter } from "./router/AppRouter";
import { store } from "./stores/store";


function App() {
  return (
    
    <Provider store={store}>

    <AppRouter>
  <div className="contenedor-app">

  </div>

    </AppRouter>

      
    </Provider>
       
  );
}

export default App;
