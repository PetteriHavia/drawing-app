
import {
  Container,
  InnerContainer,
  ToolSettings,
  OpacitySlider,
  WidthSlider,
  Setting,
  Colors,
  Palette,
  ColorContainer,
} from "../styles/Elements.style";
import { useDispatch, useSelector } from "react-redux";
import ColorModal from "./ColorModal";
import {
  changeColor,
  changeOpacity,
  changeWidth,
  
} from "../redux/LineReducer";

const Menu = () => {
  const { lineColor } = useSelector((state) => state.color);
  const { lineOpacity } = useSelector((state) => state.opacity);
  const { lineWidth } = useSelector((state) => state.width);
  const { colorHistory } = useSelector((state) => state.colorHistory);
  const { colorPalette } = useSelector((state) => state.palette);
  const dispatch = useDispatch();

  const handleChangeWidth = (e) => {
    let value = e.target.value;
    if (value > 150) {
      value = 150;
      dispatch(changeWidth(150));
    }
    dispatch(changeWidth(value));
  };

  const handleChangeOpacity = (e) => {
    const value = e.target.value;
    let opacityValue = parseFloat(value) / 100;
    if (opacityValue > 1) {
      opacityValue = 1;
      dispatch(changeColor(1));
    }
    dispatch(changeOpacity(opacityValue));
  };

  const ColorHistory = ({item}) => {
    return(
      <Colors color={item.color} onClick={(() => dispatch(changeColor(item.color)))}>
        <span></span>
      </Colors>
    )
  }

  const ColorPalette = ({item}) => {
    return(
      <Colors color={item.color}>
        <span></span>
      </Colors>
    )
  };

  const roundetOpacity = (lineOpacity * 100).toFixed(0);

  return (
    <Container>
      <InnerContainer>
        <ToolSettings>
          <OpacitySlider>
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
          </OpacitySlider>
          <WidthSlider>
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
          </WidthSlider>
          {/*<ColorContainer>
          {colorHistory.map((item) => (
            <ColorHistory key={item.color} item={item}/>
          ))}
          </ColorContainer>*/}
          <ColorContainer>
            <Palette>
              {colorPalette.map((item) => (
                <ColorPalette key={item.color} item={item}/>
              ))}
            </Palette>
            <button>Configure</button>
          </ColorContainer>
          <ColorModal />
        </ToolSettings>
      </InnerContainer>
    </Container>
  );
};

export default Menu;
