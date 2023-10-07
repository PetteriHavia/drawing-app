import { SettingsModal, Inner } from "../../styles/Elements.style";
import { FiX } from "react-icons/fi";
import { hideModal} from "../../utils/modalVisibility";
import { useDispatch} from "react-redux";
import { useState } from "react";
import { changeBackground, changeCanvasSize, changeProjectName } from "../../redux/CanvasReducer";

const CanvasSettingsModal = () => {
  const dispatch = useDispatch();

  const [projectName, setProjectName] = useState("");
  const [width, setWidth] = useState(1500);
  const [height, setHeight] = useState(800);
  const [background, setBackground] = useState("#fff");
  const [colorWheel, setColorWheel] = useState(false);
  

  const handleSetWidth = (e) => {
    const value = e.target.value;
    const numericValue = parseInt(value, 10);
    if (isNaN(numericValue)) {
      setWidth(1);
      return;
    } else {
      setWidth(numericValue);
    }
  };

  const handleSetHeight = (e) => {
    const value = e.target.value;
    const numericValue = parseInt(value, 10);
    if (isNaN(numericValue)) {
      setHeight(1);
      return;
    } else {
      setHeight(numericValue);
    }
  };

  const handleSetProjectName = (e) => {
    const value = e.target.value;
    const allowedCharacters = /^[a-zA-Z0-9\s_-]+$/;

    if(value === "") {
      setProjectName(value);
    }else if (!allowedCharacters.test(value)) {
      return;
    }
    setProjectName(value);
  };

  const handleSetBackground = (e) => {
    const value = e.target.value;
    console.log(value);
    if(value !== "Custom") {
      setColorWheel(false);
    }
    switch(value) {
      case("Black") :
        setBackground("#000");
        return;
      case("White") :
        setBackground("#fff");
        return;
      case("Transparent") :
        setBackground("transparent");
        return;
      case("Custom") : 
        setBackground("");
        setColorWheel(true);
        return;
      default:
        return;
    }
  }

  const handleSetCustomColor = (e) => {
    const value = e.target.value;
    setBackground(value);
  }


  const handleSetCanvasChanges = () => {
    let isValid = true;

    if(isNaN(width) || width < 1) {
      isValid = false;
    }
    if(isNaN(height) || height < 1) {
      isValid = false;
    }
    if(background === "") {
      isValid = false;
    }
    if(projectName === "") {
      setProjectName("New Project");
    }

    if(isValid) {
      dispatch(changeCanvasSize({width: width, height: height}));
      dispatch(changeBackground(background));
      dispatch(changeProjectName(projectName));
      hideModal(dispatch, "canvasSettingsModal");
    }else{
      return;
    }

  };

  return (
    <SettingsModal>
      <div className="configure-modal-header">
        <h3>Canvas Settings</h3>
        <FiX onClick={() => hideModal(dispatch, "canvasSettingsModal")} />
      </div>
      <Inner>
        <span>
          <label>Name:</label>
          <input
            placeholder="New Project"
            type="text"
            id="project-name"
            
            onChange={handleSetProjectName}
          />
        </span>
        <span>
          <label>Width:</label>
          <input type="text" value={width} onChange={handleSetWidth} />
          <label>px</label>
        </span>
        <span>
          <label>Height:</label>
          <input type="text" value={height} onChange={handleSetHeight} />
          <label>px</label>
        </span>
        <span>
          <label>Background</label>
          <select id="bg-select"onChange={handleSetBackground}>
            <option>White</option>
            <option>Black</option>
            <option>Transparent</option>
            <option>Custom</option>
          </select>
        </span>
        {colorWheel ? <input type="color" value={background} onChange={handleSetCustomColor} /> : null}
        <button onClick={handleSetCanvasChanges}>OK</button>
      </Inner>
    </SettingsModal>
  );
};

export default CanvasSettingsModal;
