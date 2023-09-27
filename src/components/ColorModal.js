import { useDispatch, useSelector } from "react-redux";
import { ConfigureModal, Inner } from "../styles/Elements.style";
import { FiX } from "react-icons/fi";
import { changeColor, updatePalette } from "../redux/LineReducer";
import { colorModalHide } from "../redux/ModalReducer";

const ColorModal = () => {
  const { colorPalette } = useSelector((state) => state.palette);
  const { colorModal } = useSelector((state) => state.colorModal);
  const dispatch = useDispatch();

  const MapColors = ({ item, index }) => {
    return (
      <input
        type="color"
        value={item.color}
        onChange={(e) => configureColors(e, index)}
      />
    );
  };

  const configureColors = (e, index) => {
    
    dispatch(updatePalette({ index, color: e.target.value }));
    dispatch(changeColor(e.target.value));
  };

  const handleHideModal = () => {
    dispatch(colorModalHide());
  };

  return (
    <ConfigureModal>
      <div className="configure-modal-header">
        <h3>Configure Color Palette</h3>
        <FiX onClick={handleHideModal}/>
      </div>
      <Inner>
        {colorPalette.map((item, index) => (
          <MapColors key={index} item={item} index={index} />
        ))}
        <button onClick={handleHideModal}>OK</button>
      </Inner>
    </ConfigureModal>
  );
};

export default ColorModal;
