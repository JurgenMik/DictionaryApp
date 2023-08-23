import React from 'react';
import './MenuBar.scss';
import Select from 'react-select';
import {IoMoonOutline} from 'react-icons/io5';
import {selectFontOptions, handleSelectStyles} from "../../utils/select";
import Logo from '../assets/logo.svg';

interface Props {
    font: string,
    setFontType: (font: string) => void,
    isThemeDark: boolean,
    setTheme: (isThemeLight: boolean) => void
}

function MenuBar({font, setFontType, isThemeDark, setTheme}: Props) {

    const handleFontTypeChange = (selected: string) => {
        setFontType(selected);
    }

    const handleToggleTheme = () => {
        setTheme(!isThemeDark);
    }

    return (
        <div className="d-flex align-items-center menu">
            <div className="w-25">
                <img
                    src={Logo}
                    alt="logo"
                />
            </div>
            <div className="w-75 d-flex justify-content-end">
                <Select
                    isSearchable={false}
                    name="font"
                    styles={handleSelectStyles(isThemeDark)}
                    options={selectFontOptions}
                    value={selectFontOptions.find((option) =>
                        option.value === font)}
                    onChange={(e: any) =>
                        handleFontTypeChange(e.value)
                    }
                />
                <div className="d-flex align-items-center theme">
                    <label className="theme-switch">
                        <input
                            type="checkbox"
                            name="theme_switch"
                            checked={isThemeDark}
                            onChange={handleToggleTheme}
                        />
                        <span className="slider round" />
                    </label>
                    <IoMoonOutline
                        className="moon"
                        id={isThemeDark ? 'moon-dark' : 'moon-light'}
                    />
                </div>
            </div>
        </div>
    )
}

export default MenuBar;