import React from 'react';
import './MenuBar.scss';
import {IoMoonOutline} from 'react-icons/io5';
import {selectFontOptions} from "../../utils/select";
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
                <select>
                    {selectFontOptions.map((option) => (
                        <option value={option.value} key={option.value}>
                            {option.label}
                        </option>
                    ))}
                </select>
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