import { useEffect, useState } from "react";

export const ThemeButton = () => {

    const [theme, setTheme] = useState<boolean>();

    useEffect(() => {
        setTheme(true);
    }, []);
    

    const darkMode = () => {
        const body = document.getElementsByTagName('body')[0];
        if(theme){
            body.classList.add('theme--dark');
        }else{
            body.classList.remove('theme--dark');
        }
        setTheme(!theme);
    }

    return (
        <>
            <button className="theme__button" onClick={ darkMode }><i className={ (theme ?  'fa-regular fa-sun' : 'fa-solid fa-moon') }></i></button>
        </>
    )
}