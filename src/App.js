import "./App.css";
import Home from "./Components/Home";
import { Route, Routes } from "react-router-dom";
import Navi from "./Components/Navi";
import Inter from "./Components/Inter";
import Artss from "./Components/Artss";
import Psyco from "./Components/Psyco";
import Education from "./Components/Education";
import Apropos from "./Components/Apropos";
import Aboutt from "./Components/Aboutt";
import Solutionn from "./Components/Solutionn";
import Communicationn from "./Components/Compcommunication/Communicationn";
import Exercice from "./Components/Compeducation/Exercice";
import Etude from "./Components/Compeducation/Etude";
import Examens from "./Components/Compeducation/Examens";
import Debats from "./Components/Compeducation/Debats";
import Languages from "./Components/Compeducation/Languages";

function App() {
  return (
    <div className="App">
      <Navi />

      <Routes>
        <Route exact path="/" element={<Inter />} />
        <Route exact path="/membre" element={<Home />} />
        <Route exact path="/arts" element={<Artss />} />
        <Route exact path="/psy" element={<Psyco />} />
        <Route exact path="/education" element={<Education />} />
        <Route exact path="/apropos" element={<Apropos />} />
        <Route exact path="/aboutus" element={<Aboutt />} />
        <Route exact path="/solution" element={<Solutionn />} />
        <Route exact path="/communicationn" element={<Communicationn />} />
        <Route exact path="/exercice" element={< Exercice/>} />
        <Route exact path="/etudeadistance" element={< Etude/>} />
        <Route exact path="/examens" element={< Examens/>} />
        <Route exact path="/debates" element={< Debats/>} />
        <Route exact path="/languages" element={< Languages/>} />

      </Routes>
      
    </div>
  );
}

export default App;
