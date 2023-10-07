import { useDispatch, useSelector } from "react-redux";
import { ConfigureModal, Inner } from "../../styles/Elements.style";
import { FiX } from "react-icons/fi";
import { changeColor, updatePalette } from "../../redux/LineReducer";
import { hideModal } from "../../utils/modalVisibility";

const ColorModal = () => {
  const { colorPalette } = useSelector((state) => state.palette);
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

  return (
    <ConfigureModal>
      <div className="configure-modal-header">
        <h3>Configure Color Palette</h3>
        <FiX onClick={() => hideModal(dispatch, "colorModal")}/>
      </div>
      <Inner>
        {colorPalette.map((item, index) => (
          <MapColors key={index} item={item} index={index} />
        ))}
        <button onClick={() => hideModal(dispatch, "colorModal")}>OK</button>
      </Inner>
    </ConfigureModal>
  );
};

export default ColorModal;
