import { ConfigureModal, ModalStyle } from "../../styles/Elements.style";
import { addToredoHistory, deleteAll, emptyRedoHistory } from "../../redux/DrawingReducer";
import { modalHide } from "../../redux/ModalReducer";
import { useDispatch, useSelector } from "react-redux";
import { clearCanvas } from "../../utils/clearCanvas";

const Modal = ({ ctxRef }) => {
  const {modals} = useSelector((state) => state.modal);
  const dispatch = useDispatch();

  const handleDeleteAll = () => {
    dispatch(deleteAll());
    clearCanvas(ctxRef, dispatch);
    dispatch(emptyRedoHistory());
    dispatch(modalHide("deleteModal"));
  };

  const handleHideModal = () => {
    dispatch(modalHide("deleteModal"));
  };

  return (
    <ModalStyle>
      <h2>Clear Canvas</h2>
      <h3>Are you sure you want to clear canvas?</h3>
      <button onClick={handleHideModal}>Cancel</button>
      <button onClick={handleDeleteAll}>Clear Canvas</button>
    </ModalStyle>
  );
};

export default Modal;
