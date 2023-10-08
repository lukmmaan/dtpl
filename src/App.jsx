import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom'; // Import BrowserRouter
import { useDispatch } from "react-redux";
import { createStore, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import Cookies from 'universal-cookie';
import { setUser } from './redux/reducers/userActions';
import rootReducer from "../src/redux/reducers/rootReducer";
import AppRouter from './Components/AppRouter/AppRouter';

const store = createStore(rootReducer, applyMiddleware(thunk));

function App() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const cookies = new Cookies();

  useEffect(() => {
    let cookieResult = cookies.get("authData", { path: "/" });

    if (cookieResult) {
      const { user: { fullName, email, role, token } } = cookieResult;

      dispatch(setUser({ fullName, email, role, token }));
    }

  }, [navigate]);

  return (
    <div className="App">
      <AppRouter />
    </div>
  );
}

export default App;
