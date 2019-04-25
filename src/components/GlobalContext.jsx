import React from 'react';

export const GlobalContext = React.createContext();

export const GlobalProvider = GlobalContext.Provider;
export const GlobalConsumer = GlobalContext.Consumer;

export const withGlobalContext = function( Component ) {
    return function( props ) {
        return (
            <GlobalConsumer>
                {
                     context => 
                        <Component context = { context } { ...props } />
                }
            </GlobalConsumer>
        );
    }
}