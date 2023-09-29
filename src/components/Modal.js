import { ModalStyle } from "../styles/Elements.style";
import { addToredoHistory, deleteAll } from "../redux/DrawingReducer";
import { modalHide } from "../redux/ModalReducer";
import { useDispatch, useSelector } from "react-redux";
import { clearCanvas } from "../utils/clearCanvas";

const Modal = ({ ctxRef }) => {
  const dispatch = useDispatch();
  const { lineHistory } = useSelector((state) => state.history);

  const handleDeleteAll = () => {
    const AddAll = lineHistory.map((item) => dispatch(addToredoHistory(item)));
    //dispatch(addToredoHistory(lineHistory));
    dispatch(deleteAll());
    //clearCanvas();
    clearCanvas(ctxRef, dispatch);
    dispatch(modalHide());
  };

  const handleHideModal = () => {
    dispatch(modalHide());
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
