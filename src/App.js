import { Routes, Route } from "react-router-dom";
import NavigationBar from "./routes/navigation-bar/navigation-bar.component";
import Home from "./routes/home/home.component";
import SignIn from "./routes/sign-in/sign-in.comoponent";

function App() {
  return (
    <Routes>
      <Route path='/' element={<NavigationBar />}>
        <Route path='/' element={<Home />} />
        <Route path='/sign-in' element={<SignIn />} />
      </Route>
    </Routes>
  )
}

export default App;
