import React from 'react';
import './MenuBar.scss';
import Select from 'react-select';
import {IoMoonOutline} from 'react-icons/io5';
import {selectFontOptions, selectStyles} from "../../utils/select";
import Logo from '../assets/logo.svg';

function MenuBar() {
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