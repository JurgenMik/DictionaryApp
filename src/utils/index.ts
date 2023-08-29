export const themeBasedTextStyle = (isThemeDark: boolean) => {
    return (
        {
            color: isThemeDark ? 'white' : ''
        }
    );
}