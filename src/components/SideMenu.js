import { changeColor } from "../redux/LineReducer";
import { useDispatch, useSelector } from "react-redux";
import { BiCircle, BiSquare } from "react-icons/bi";
import {
  Container,
  InnerContainer,
  ToolBar,
  ToolSettings,
  SideBar,
} from "../styles/Elements.style";

const SideMenu = () => {
  const { lineColor } = useSelector((state) => state.color);
  const dispatch = useDispatch();
  
  const handleChangeColor = (e) => {
    dispatch(changeColor(e.target.value));
  };

  return (
    <SideBar>
        <ToolBar>
          <input
            type="color"
            defaultValue={lineColor}
            onChange={handleChangeColor}
          />
          <BiSquare />
          <BiCircle />
        </ToolBar>
    </SideBar>
  );
};

export default SideMenu;
