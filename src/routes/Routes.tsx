import { BrowserRouter } from 'react-router-dom';
import { AllRoutes } from './index';

const Routes = () => {
    return (
        <BrowserRouter basename="/intranet">
            <AllRoutes />
        </BrowserRouter>
    );
};

export default Routes;
