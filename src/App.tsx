import React, {useState} from 'react';
import './App.scss';
import MenuBar from "./components/MenuBar/MenuBar";

function App() {

    const [font, setFontType] = useState<string>('Sans-Serif');

  return (
    <div className="main-dictionary-container" style={{fontFamily: font}}>
        <MenuBar
            font={font}
            setFontType={setFontType}
        />
    </div>
  );
}

export default App;
