import logo from './logo.svg';
import './App.css';
import Header from './Components/Header/Header'
import Pitch from './Components/Pitch/Pitch'
import Dialog from './Components/Dialog/Dialog'
import FormationSelection from './Components/FormationSelection/FormationSelection'
import Formation from './Components/Formation/Formation'
import { Global } from './Data/Global'
import { useState } from 'react';

function App() {
  const [showDialog, setShowDialog] = useState(true);
  const [showFormationSelection, setShowFormationSelection] = useState(true);
  const [createFormation, setCreateFormation] = useState(false);
  const [choosenFormation, setChoosenFormation] = useState('');

  const ToggleDialog = () => {
    setShowDialog(!showDialog);
  }

  const PrepareFormation = (choosenFormation) => {
    setShowFormationSelection(false);
    setCreateFormation(true);
  }

  return (
    <div className="App">
      <Header></Header>
      <Pitch>
        {showDialog && <Dialog title='Team Kopish' afterFormSubmit={ToggleDialog}></Dialog>}
        {showDialog ||
          (showFormationSelection && <FormationSelection OnFormationChoose={PrepareFormation}></FormationSelection> )}
        
        {createFormation && <Formation formation={choosenFormation}></Formation>}
      </Pitch>
    </div>
  );
}

export default App;
