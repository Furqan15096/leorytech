import React from 'react';
import { Route } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import Return from "./return and policy/return"
// import Container from "./contactUS/contactUs"



class Dashboard extends React.Component {
    render() {
        return (
            <div>
                <Route exact path="/" render={() => {
                    return <React.Fragment>
                        {/* <Container /> */}
                        <Return />

                    </React.Fragment>
                }
                }
                />
               


                
            </div>
        )
    }
}

export default Dashboard;