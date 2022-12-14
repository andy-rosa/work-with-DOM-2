/* JavaScript код */

const buttonThemeLight = document.querySelector('.theme-button-light');
const buttonThemeDark = document.querySelector('.theme-button-dark');

const buttonFontSerif = document.querySelector('.font-button-serif');
const buttonFontSansSerif = document.querySelector('.font-button-sans-serif');

const buttonFontSizeSmall = document.querySelector('.font-size-button-s');
const buttonFontSizeMedium = document.querySelector('.font-size-button-m');
const buttonFontSizeLarge = document.querySelector('.font-size-button-l');


const init = () => {
    const buttonThemeLightHandler = () => {
        document.documentElement.dataset['themeName'] = 'light';
    };
    const buttonThemeDarkHandler = () => {
        document.documentElement.dataset['themeName'] = 'dark';
    };

    const buttonFontThemeSerif = () => {
        document.documentElement.dataset['themeFont'] = 'serif';
    };
    const buttonFontThemeSansSerif = () => {
        document.documentElement.dataset['themeFont'] = 'sans-serif';
    };

    const buttonFontSizeSmallHandler = () => {
        document.documentElement.dataset['themeFontSize'] = 'small';
    };
    const buttonFontSizeMediumHandler = () => {
        document.documentElement.dataset['themeFontSize'] = 'medium';
    };
    const buttonFontSizeLargeHandler = () => {
        document.documentElement.dataset['themeFontSize'] = 'large';
    }


    buttonFontSizeSmall.addEventListener('click', buttonFontSizeSmallHandler);
    buttonFontSizeMedium.addEventListener('click', buttonFontSizeMediumHandler);
    buttonFontSizeLarge.addEventListener('click', buttonFontSizeLargeHandler);

    buttonFontSerif.addEventListener('click', buttonFontThemeSerif);
    buttonFontSansSerif.addEventListener('click', buttonFontThemeSansSerif);

    buttonThemeLight.addEventListener('click', buttonThemeLightHandler);
    buttonThemeDark.addEventListener('click', buttonThemeDarkHandler);

};

init();