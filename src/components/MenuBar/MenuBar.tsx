import React from 'react';
import './MenuBar.scss';
import Select from 'react-select';
import {IoMoonOutline} from 'react-icons/io5';
import {selectFontOptions, selectStyles} from "../../utils/select";
import Logo from '../assets/logo.svg';

interface Props {
    font: string,
    setFontType: (font: string) => void
}

function MenuBar({font, setFontType}: Props) {

    const handleFontTypeChange = (selected: string) => {
        setFontType(selected);
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
                    styles={selectStyles}
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
                        />
                        <span className="slider round" />
                    </label>
                    <IoMoonOutline id="moon" />
                </div>
            </div>
        </div>
    )
}

export default MenuBar;