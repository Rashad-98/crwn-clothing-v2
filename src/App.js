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

// TODO
// Add authentication with firebase via sign in with google.
// You might need to rewatch the tutorial for that, but before that try to do it on your own.
// Add a utils folder and do all that stuff.
