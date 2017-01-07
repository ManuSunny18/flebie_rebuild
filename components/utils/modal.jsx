import React from 'react';

class Modal extends React.Component {
	constructor(props){
		super(props);
		this.state = {
		}
	}
	componenDidMount(){

	}
    render(){
        return(<div className={(this.props.open)?"modal-overlay fade-in":"modal-overlay fade-out"}>
        <div className="modal-content">
            <div className="modal-wrap">
            {this.props.content}
            </div>
        </div>

        </div>)
    }
};
export default Modal;