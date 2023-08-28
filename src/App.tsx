import React, {useEffect, useState} from 'react';
import './App.scss';
import {BiSearch} from 'react-icons/bi';
import {handleGetDictionaryResponse} from "./services/dictionaryService";
import {AxiosError} from 'axios';
import Emoji from 'react-emoji-render';
import MenuBar from "./components/MenuBar/MenuBar";
import DictionaryResponse from './components/DictionaryResponse/DictionaryResponse';

type SearchErrorType = {
    title: string,
    message: string,
    resolution: string
}

function App() {

    const [font, setFontType] = useState<string>('Sans-Serif');
    const [isThemeDark, setTheme] = useState<boolean>(false);
    const [search, setSearch] = useState<string>('');
    const [isFormError, setFormError] = useState<boolean>(false);
    const [searchResult, setResult] = useState<unknown>();

    const dictionaryUrl = `${process.env.REACT_APP_GET_DEFINITION}/${search}`;

    const handleSearchKeywordChange = (word: string) => {
        setSearch(word);
    }

    const handleSearchSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        try {
            e.preventDefault();

            if (!search) {
                return setFormError(true);
            }

            const dictionaryResponse = await handleGetDictionaryResponse(dictionaryUrl);
            setResult(dictionaryResponse);

            setFormError(false);
        } catch (error) {

            if (error instanceof AxiosError) {
                const requestError = error.response?.data;
                setResult(requestError);

                setFormError(false);
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

    const renderResultSuccess = () => {
        return (
            <div className="d-flex flex-column result-success">
                <DictionaryResponse
                    result={searchResult}
                    isThemeDark={isThemeDark}
                />
            </div>
        )
    }

    const renderResultError = () => {
        const searchResultError = searchResult as SearchErrorType;
        return (
            <div className="d-flex flex-column align-items-center result-error">
                <Emoji
                    text=":slightly_frowning_face:"
                    className="emoji"
                />
                <h1 style={{color: isThemeDark ? 'white' : ''}}>
                    {searchResultError.title}
                </h1>
                <p>
                    {searchResultError.message}
                    {searchResultError.resolution}
                </p>
            </div>
        )
    }

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
                style={{border: isFormError ? '1px solid red' : 'none'}}
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
            {isFormError &&
                <span>
                    Whoops, can't be empty...
                </span>
            }
        </form>
        <>
            {searchResult && Array.isArray(searchResult) ?
                renderResultSuccess()
                :
                searchResult && typeof searchResult === 'object' &&
                renderResultError()
            }
        </>
    </div>
  );
}

export default App;
