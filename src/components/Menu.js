import { useContext } from "react";
import { Container, InnerContainer, ToolBar, ToolSettings } from "../styles/Elements.style";
import {BiCircle, BiSquare} from 'react-icons/bi'
import { useDispatch, useSelector } from "react-redux";
import { changeColor} from "../redux/LineReducer"; 

const Menu = () => {

  const { color } = useSelector((state) => state.color);
  const dispatch = useDispatch();
  const lineColor = useSelector((state) => state.color.lineColor);

  const handleChangeColor = () => {

  }


  return (
    <Container>
      <InnerContainer>
        <ToolSettings>
          <input type="range" min="1" max="100" id="opacity-range"/>
          <input id="line-width" defaultValue="1" type="number" min="1" max="100"/>
        </ToolSettings>
        <ToolBar>
          <input type="color" defaultValue={lineColor} />
          <BiSquare />
          <BiCircle />
        </ToolBar>
      </InnerContainer>
    </Container>
  );
};

export default Menu;
