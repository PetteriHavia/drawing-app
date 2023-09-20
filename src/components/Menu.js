import { useContext, useEffect } from "react";
import { Container, InnerContainer, ToolBar, ToolSettings } from "../styles/Elements.style";
import {BiCircle, BiSquare} from 'react-icons/bi'
import { useDispatch, useSelector } from "react-redux";
import { changeColor, changeOpacity, changeWidth } from "../redux/LineReducer"; 

const Menu = ({ctxRef}) => {

  const { lineColor } = useSelector((state) => state.color);
  const { lineOpacity } = useSelector((state) => state.opacity);
  const { lineWidth } = useSelector((state) => state.width);
  const dispatch = useDispatch();

  const handleChangeColor = (e) => {
   dispatch(changeColor(e.target.value));
  }

  const handleChangeOpacity = (e) => {
    dispatch(changeOpacity(e.target.value / 100));
  }

  const handleChangeWidth = (e) => {
    dispatch(changeWidth(e.target.value));
  }

  return (
    <Container>
      <InnerContainer>
        <ToolSettings>
          <input type="range" min="1" max="100" id="opacity-range" onChange={handleChangeOpacity }/>
          <input id="line-width" defaultValue={lineOpacity} type="number" min="1" max="100" onChange={handleChangeWidth}/>
        </ToolSettings>
        <ToolBar>
          <input type="color" defaultValue={lineColor} onChange={handleChangeColor}/>
          <BiSquare />
          <BiCircle />
        </ToolBar>
      </InnerContainer>
    </Container>
  );
};

export default Menu;
