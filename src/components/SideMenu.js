import { changeColor } from "../redux/LineReducer";
import { useDispatch, useSelector } from "react-redux";
import { BiCircle, BiSquare, BiSolidTrash } from "react-icons/bi";
import {
  ToolBar,
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
            value={lineColor}
            onChange={handleChangeColor}
          />
          <BiSquare />
          <BiCircle />
          <div>
          <BiSolidTrash />
          </div>
        </ToolBar>
    </SideBar>
  );
};

export default SideMenu;
