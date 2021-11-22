import React, { useEffect, useState } from "react";
import { ThemeSubscription } from "../helpers/theme";
import { Icon } from "./icons";

export const Layout = ({ children }:{ children:JSX.Element }) => {

    const [isDark, setIsDark] = useState(true);

    useEffect(()=>{
        ThemeSubscription.subscribe(setIsDark);
    },[]);

    return (
        <>
            <div className='header' style={{display: 'flex', flexDirection:'row', padding: 8, alignItems:'flex-start'}}>
                <div style={{fontSize: 36, marginRight: 16}}>
                    <a href="/">
                        Solboxers Rarity
                    {/* <img style={{width: 256}}
                        src={isDark ? '/media/logo_white.png' : '/media/logo_black.png'} alt='site-logo'/> */}
                    </a>
                </div>
                <div style={{flex:1}}></div>
            </div>
            <div>
                {children}
            </div>
        </>
    );
};
