import React from 'react';
import RestoServiceContext from '../resto-service-context';

const WithRestoService = () => (Wrapped) => {
    return (props) => {
        return (
            <RestoServiceContext>
                {
                    (RestoService) => {
                        return <Wrapped {...props} RestoService={RestoService}/>
                    }
                }
            </RestoServiceContext>
        )
    };
};

export default WithRestoService;