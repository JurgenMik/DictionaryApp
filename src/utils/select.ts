export const selectFontOptions = [
    {
        value: 'Serif',
        label: 'Serif'
    },
    {
        value: 'Sans-Serif',
        label: 'Sans Serif'
    },
    {
        value: 'Monospace',
        label: 'Mono'
    }
];

export const selectStyles = {
    control: (provided: any) => ({
        ...provided,
        width: '9rem',
        marginRight: '1rem',
        overflowX: 'none',
        border: 'none',
        outline: 'none'
    }),
    option: (provided: any, state: {isFocused: boolean}) => ({
        ...provided,
        gap: '1rem',
        color: state.isFocused && 'hsl(274, 82%, 60%)',
        backgroundColor: 'none',
        cursor: 'pointer',
        fontWeight: 'bold'
    }),
    singleValue: (provided: any) => ({
        ...provided,
        fontWeight: 'bold'
    }),
    dropdownIndicator: (provided: any) => ({
        ...provided,
        color: 'hsl(274, 82%, 60%)'
    }),
    indicatorSeparator: () => ({
        display: 'none'
    })
};