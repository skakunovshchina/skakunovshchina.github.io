import { default as React } from 'react';
import Header from "./Header";
import Main from "./Main";

const App = ({config}: any) => {
    return (
        <>
            <Header config={config.header} />
            <Main config={config.main} />
        </>
    );
};

export default App;