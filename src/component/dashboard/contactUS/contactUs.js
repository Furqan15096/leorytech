import React from "react";
import { Container } from 'reactstrap';
import "./contactUs.css"


class Cont extends React.Component {
    render() {
        return <>
            <Container className="themed-container">
                <div className="container-div">
                    <div className="container_main_div">
                        <div className="inner_container_main_div">
                            <div className="text_div">
                                <h1 className="head_text">
                                    Contact us today
                            </h1>
                                <p className="para_text">
                                    Get the right service, determine what you
                                    need at any time using the contact form for
                                    inquiries and questions about our services.
                            </p>
                            </div>
                            <div className="card_main_div">
                                <div className="card1">

                                </div>
                                <div className="card1">

                                </div>
                                <div className="card1">

                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </Container>

        </>
    }
}

export default Cont