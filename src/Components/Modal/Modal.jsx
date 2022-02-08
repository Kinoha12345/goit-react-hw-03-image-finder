import { useEffect } from "react";

const Modal = ({url,onTogleModal}) => {
    
 const oncloseModal = (e)=>{
    //  console.log(e.target);
    console.log(e.key === 'Escape');
     if(e.target.className === 'Overlay'|| e.key === 'Escape')
        onTogleModal() 
    }
   useEffect(()=>{window.addEventListener('keydown',oncloseModal); return()=> window.removeEventListener('keydown',oncloseModal)},[])
    
    return ( <div className="Overlay" onClick={oncloseModal}>
    <div className="Modal">
      <img src={url} alt="" />
    </div>
  </div> );
}
 
export default Modal;