import {
  ToolSettings,
  Setting,
  Colors,
  Palette,
  ColorContainer,
  Slider,
  InputContainer,
} from "../styles/Elements.style";
import { useDispatch, useSelector } from "react-redux";
import ColorModal from "./ColorModal";
import { changeColor, changeOpacity, changeWidth } from "../redux/LineReducer";
import { colorModalActive } from "../redux/ModalReducer";

const Menu = () => {
  const { lineOpacity } = useSelector((state) => state.opacity);
  const { lineWidth } = useSelector((state) => state.width);
  const { colorHistory } = useSelector((state) => state.colorHistory);
  const { colorPalette } = useSelector((state) => state.palette);
  const { colorPopUp } = useSelector((state) => state.colorModal);
  const dispatch = useDispatch();

  const handleChangeWidth = (e) => {
    let value = e.target.value;

    if (isNaN(value) || value < 0) {
      value = 1;
    } else if (value > 150) {
      value = 150;
    }
    dispatch(changeWidth(value));
  };

  const handleChangeOpacity = (e) => {
    let opacityValue = parseFloat(e.target.value) / 100;

    if (isNaN(opacityValue) || opacityValue < 0) {
      opacityValue = 0.01;
    } else if (opacityValue > 1) {
      opacityValue = 1;
    }
    dispatch(changeOpacity(opacityValue));
  };

  const ColorHistory = ({ className }) => {
    return (
      <div className={className}>
        {colorHistory.map((item) => (
          <Colors
            key={item.color}
            color={item.color}
            onClick={() => dispatch(changeColor(item.color))}
          >
            <span></span>
          </Colors>
        ))}
      </div>
    );
  };

  const ColorPalette = ({ item }) => {
    return (
      <Colors
        color={item.color}
        onClick={() => dispatch(changeColor(item.color))}
      >
        <span></span>
      </Colors>
    );
  };

  const handleShowModal = () => {
    dispatch(colorModalActive());
  };

  const roundetOpacity = (lineOpacity * 100).toFixed(0);

  return (
    <ToolSettings>
      <InputContainer>
        <Slider>
          <label>Opacity</label>
          <Setting>
            <input
              type="range"
              min="1"
              max="100"
              value={lineOpacity * 100}
              id="opacity-range"
              onChange={handleChangeOpacity}
            />
            <input
              id="line-opacity"
              value={roundetOpacity}
              type="number"
              min="1"
              max="100"
              onChange={handleChangeOpacity}
            />
          </Setting>
        </Slider>
        <Slider>
          <label>Line Width</label>
          <Setting>
            <input
              type="range"
              value={lineWidth}
              min="1"
              max="150"
              onChange={handleChangeWidth}
            />
            <input
              id="line-width"
              value={lineWidth}
              type="number"
              min="1"
              max="150"
              onChange={handleChangeWidth}
            />
          </Setting>
        </Slider>
      </InputContainer>
      <ColorContainer>
        <Palette>
          {colorPalette.map((item) => (
            <ColorPalette key={item.color} item={item} />
          ))}
        </Palette>
        <button onClick={handleShowModal}>Configure</button>
      </ColorContainer>
      <ColorContainer>
        <ColorHistory className="wrap-history" />
      </ColorContainer>
      {colorPopUp ? <ColorModal /> : null}
    </ToolSettings>
  );
};

export default Menu;
