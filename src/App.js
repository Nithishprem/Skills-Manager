import {SkillsProvider} from "./context/SkillsContext";
import ManageskillsPage from "./pages/ManageskillsPage";


function App() {
  return (
    <div className="App">
      <SkillsProvider>
        <ManageskillsPage/>
      </SkillsProvider>
    </div>
  );
}

export default App;
