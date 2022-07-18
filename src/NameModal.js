import React, { Component } from "react";
import './NameModal.scss';

const body = document.querySelector('#body');
class NameModal extends Component {
    render() {
        const { nameModal } = this.props;

        componentDidMount =()=> {
            body.setAttribute("style", "overflow: hidden;");
            this.setState({status: true});
        }

        componentWillUnmount =()=> {
            body.setAttribute("style");
            this.setState({status: false});
        }

        return(
            <div class="NameModal">
                <div> 모달 테스트</div>
            </div>
        );
    }
}

export default NameModal;
