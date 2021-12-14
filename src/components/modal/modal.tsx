import { useEffect } from "react";
import { createPortal } from "react-dom";

interface IModalProps {
  children: JSX.Element;
}

const Modal = (props: IModalProps) => {
  /* const [isHidden, setHidden] = useState(false);
  return isHidden ? null : ReactDOM.createPortal(props.childElement, props.parentElement);*/
  const modalRoot = document.getElementById("modal");
  const el = document.createElement("div");

  useEffect(() => {
    modalRoot?.appendChild(el);
  }, []);
  // useEffect(() => () => modalRoot.removeChild(el));
  return createPortal(props.children, el);
};

export default Modal;
