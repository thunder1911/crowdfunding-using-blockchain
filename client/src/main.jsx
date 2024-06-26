import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter as Router} from 'react-router-dom';
import { Sepolia } from "@thirdweb-dev/chains";
import { ChainId, ThirdwebProvider} from '@thirdweb-dev/react';
import { StateContextProvider } from './context';
import App from './App';
import './index.css';

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
    <ThirdwebProvider desiredChainId={ChainId.Sepolia}
    activeChain={Sepolia} 
    clientId="57daf1519568ba79629dac567d886768"> 
        <Router>
            <StateContextProvider>
            <App/>
            </StateContextProvider>
        </Router>
    </ThirdwebProvider>
)