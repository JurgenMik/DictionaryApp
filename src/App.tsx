import React, {useEffect, useState} from 'react';
import './App.scss';
import MenuBar from "./components/MenuBar/MenuBar";

function App() {

    const [font, setFontType] = useState<string>('Sans-Serif');
    const [isThemeDark, setTheme] = useState<boolean>(false);

    useEffect(() => {
        document.body.style.backgroundColor = isThemeDark ? '#050505' : 'white';
    }, [isThemeDark])

  return (
    <div className="main-dictionary-container" style={{fontFamily: font}}>
        <MenuBar
            font={font}
            isThemeDark={isThemeDark}
            setFontType={setFontType}
            setTheme={setTheme}
        />
    </div>
  );
}

export default App;
