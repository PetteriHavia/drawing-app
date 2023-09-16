import { Container, InnerContainer, ToolBar, ToolSettings } from "../styles/Elements.style";
import {BiCircle, BiSquare} from 'react-icons/bi'

const Menu = () => {
  return (
    <Container>
      <InnerContainer>
        <ToolSettings>
          <input type="range" min="1" max="100" id="opacity-range"/>
          <input id="line-width" defaultValue="1" type="number" min="1" max="100"/>
        </ToolSettings>
        <ToolBar>
          <input type="color" defaultValue="#000000" />
          <BiSquare />
          <BiCircle />
        </ToolBar>
      </InnerContainer>
    </Container>
  );
};

export default Menu;
