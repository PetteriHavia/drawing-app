import { changeColor } from "../redux/LineReducer";
import { useDispatch, useSelector } from "react-redux";
import {
  BiEraser,
  BiTrash,
  BiPencil,
  BiUndo,
  BiRedo,
} from "react-icons/bi";
import { ToolBar, SideBar } from "../styles/Elements.style";
import {
  addToHistory,
  addToredoHistory,
  changeTool,
  deleteFromHistory,
  deleteFromredoHistory,
} from "../redux/DrawingReducer";
import { modalActive } from "../redux/ModalReducer";

const SideMenu = () => {
  const { lineColor } = useSelector((state) => state.color);
  const { lineHistory } = useSelector((state) => state.history);
  const { redoHistory } = useSelector((state) => state.redo);
  const dispatch = useDispatch();

  const handleChangeColor = (e) => {
    dispatch(changeColor(e.target.value));
  };

  const handleToolChange = (selectedTool) => {
    dispatch(changeTool(selectedTool));
  };

  const handleShowModal = () => {
    if (lineHistory.length > 0) {
      dispatch(modalActive());
    }
  };

  const handleDelete = () => {
    if (lineHistory.length > 0) {
      const saveRedo = lineHistory.slice(-1)[0];
      dispatch(addToredoHistory(saveRedo));
      dispatch(deleteFromHistory());
    }
  };

  const handleRedo = () => {
    if (redoHistory.length > 0) {
      const addBack = redoHistory.slice(-1)[0];
      dispatch(addToHistory(addBack));
      dispatch(deleteFromredoHistory());
    }
  };

  return (
    <SideBar>
      <ToolBar>
        <input type="color" value={lineColor} onChange={handleChangeColor} />
        <button onClick={() => handleToolChange("pencil")}><BiPencil /></button>
        <button onClick={() => handleToolChange("eraser")}><BiEraser /></button>
        <button onClick={handleDelete}><BiUndo /></button>
        <button onClick={handleRedo}><BiRedo /></button>
        <button onClick={handleShowModal}><BiTrash /></button>
      </ToolBar>
    </SideBar>
  );
};

export default SideMenu;
