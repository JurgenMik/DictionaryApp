import React, {useEffect, useState} from 'react';
import './App.scss';
import {BiSearch} from 'react-icons/bi';
import {handleGetDictionaryResponse} from "./services/dictionaryService";
import {AxiosError} from 'axios';
import MenuBar from "./components/MenuBar/MenuBar";

function App() {

    const [font, setFontType] = useState<string>('Sans-Serif');
    const [isThemeDark, setTheme] = useState<boolean>(false);
    const [search, setSearch] = useState<string>('');
    const [searchResult, setResult] = useState<unknown>();

    const dictionaryUrl = `${process.env.REACT_APP_GET_DEFINITION}/${search}`;

    const handleSearchKeywordChange = (word: string) => {
        setSearch(word);
    }

    const handleSearchSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        try {
            e.preventDefault();

            const dictionaryResponse = await handleGetDictionaryResponse(dictionaryUrl);
            setResult(dictionaryResponse);
        } catch (error) {

            if (error instanceof AxiosError) {
                const requestError = error.response?.data;
                setResult(requestError);
            } else {
                console.log('Error trying to request search definition:', error);
            }
        }
    }

    const handleApplicationThemeChange = () => {
        document.body.style.backgroundColor = isThemeDark
            ? '#050505'
            : 'white';
    }

    useEffect(() => {
        handleApplicationThemeChange();
    }, [isThemeDark])

  return (
    <div className="main-dictionary-container" style={{fontFamily: font}}>
        <MenuBar
            font={font}
            isThemeDark={isThemeDark}
            setFontType={setFontType}
            setTheme={setTheme}
        />
        <form onSubmit={(e) =>handleSearchSubmit(e)}>
            <input
                name="search"
                type="text"
                placeholder="Search for any word..."
                className={isThemeDark ? 'field-dark' : ''}
                onChange={(e) =>
                    handleSearchKeywordChange(e.target.value)
                }
            />
            <BiSearch
                id="search-icon"
                type="submit"
            />
        </form>
    </div>
  );
}

export default App;
