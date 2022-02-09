// import { useEffect } from "react";
import { Component } from "react";
import PropTypes from 'prop-types';
class Modal extends Component {
    
  oncloseModal = (e)=>{
    //  console.log(e.target);
    // console.log(e.key === 'Escape');
     if(e.target.className === 'Overlay' || e.key === "Escape") {
        this.props.onTogleModal() 
      }
    }

    componentDidMount() {
      window.addEventListener('keydown', this.oncloseModal);
    }

    componentWillUnmount() {
      window.removeEventListener('keydown', this.oncloseModal)
    }
   
   
    render(){
console.log(window);
console.log(document);
    return ( 
    
    <div className="Overlay" onClick={this.oncloseModal}>
    <div className="Modal">
      <img src={this.props.url} alt="" />
    </div>
  </div> 
  
  );
    }
}
 
Modal.prototypes = {
  url: PropTypes.string.isRequired,
  onTogleModal: PropTypes.func.isRequired
}

export default Modal;