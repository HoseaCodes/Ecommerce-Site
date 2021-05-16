import React from 'react';

import styled from 'styled-components';
import { Button, Modal } from 'react-bootstrap';

import One from '../../Images/1.png';


class NewModal extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            show: true,
        };
    }

    handleClose() {
        this.setState({ show: false });
    };

    handleShow() {
        this.setState({ show: true });
    };


    render() {
        const Wrapper = styled.div`
            display: flex;
            flex-direction: column;
        `;
        const Wrapper2 = styled.div`
            display: flex;
        `;

        return (
            <div>
                <Modal
                    aria-labelledby="contained-modal-title-vcenter"
                    centered
                    show={this.state.show}
                    onHide={this.handleClose} backdrop="static">
                    <Modal.Header closeButton>
                    </Modal.Header>
                    <Modal.Body>
                        <Wrapper2>
                            <img src={One} width="250rem" />
                            <Wrapper>
                                <h1>GIVE YOUR INBOX AND YOUR LIFE</h1>
                                <h2>the Poosh it needs.</h2>
                                <input type="email" name="email" placeholder="Email Address" id="" />
                                <input type="submit" value="Sign Up" />
                            </Wrapper>
                        </Wrapper2>
                    </Modal.Body>
                </Modal>
            </div>
        );
    }
}

class Subscription extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            modalLoading: false
        };
    }

    componentDidMount() {
        // this simulates an async action, after which the component will render the content
        modalAsyncCall().then(() => this.setState({ modalLoading: true }));
    }

    render() {

        return (
            <div>
                {this.state.modalLoading ? <NewModal /> : null}
            </div>
        );
    }
}

function modalAsyncCall() {
    return new Promise((resolve) => setTimeout(() => resolve(), 5500));
}

export default Subscription;