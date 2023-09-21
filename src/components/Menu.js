import { useRef } from "react";
import { useContext, useEffect } from "react";
import {
  Container,
  InnerContainer,
  ToolBar,
  ToolSettings,
  OpacitySlider,
  WidthSlider,
  Setting,
} from "../styles/Elements.style";
import { BiCircle, BiSquare } from "react-icons/bi";
import { useDispatch, useSelector } from "react-redux";
import {
  changeColor,
  changeOpacity,
  changeWidth,
  opacityReducer,
} from "../redux/LineReducer";

const Menu = ({ ctxRef }) => {
  const { lineColor } = useSelector((state) => state.color);
  const { lineOpacity } = useSelector((state) => state.opacity);
  const { lineWidth } = useSelector((state) => state.width);
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
        </ToolSettings>
      </InnerContainer>
    </Container>
  );
};

export default Menu;
