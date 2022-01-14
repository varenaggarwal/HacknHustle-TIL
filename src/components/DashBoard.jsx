import React, { Component } from "react";
import './../css/dashboard.css';
import './../css/modal.css';
import CMSEditor from "./CMSEditor.jsx";
import Header from './Header.jsx';
import Modal from './Modal.jsx';

class Dashboard extends Component {
    constructor() {
        super();
        this.state = {
          show: false
        };
        this.showModal = this.showModal.bind(this);
        this.hideModal = this.hideModal.bind(this);
    }
    
    showModal = () => {
      this.setState({ show: true });
    };
    
    hideModal = () => {
      this.setState({ show: false });
    };  
    
    render() {
        return (
            <main>
                <Header/>
                <div class="content-wrapper-before purple45"></div>
                <button type="button" onClick={this.showModal}>
                  Open
                </button>
                <CMSEditor/>
                <Modal show={this.state.show} handleClose={this.hideModal}>
                  <p>Modal</p>
                </Modal>
            </main>
        );
    }
}

export default Dashboard;