import { useDispatch, useSelector } from "react-redux";
import {
  ConfigureModal,
  Inner,
} from "../styles/Elements.style";
import { FiX } from "react-icons/fi";

const ColorModal = () => {
  const { colorPalette } = useSelector((state) => state.palette);
  const dispatch = useDispatch;

  const MapColors = ({ item }) => {
    return <input type="color" defaultValue={item.color} />;
  };

  return (
    <ConfigureModal>
      <div className="configure-modal-header">
      	<h3>Configure Color Palette</h3>
      	<FiX />
      </div>
      <Inner>
        {colorPalette.map((item) => (
          <MapColors key={item.color} item={item} />
        ))}
        <button>Save</button>
      </Inner>
    </ConfigureModal>
  );
};

export default ColorModal;
