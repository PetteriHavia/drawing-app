import styled from "styled-components";

export const Container = styled.div`
  background: #474747;
  padding: 1.5rem 5rem;
`;

export const InnerContainer = styled.div`
  display: flex;
  justify-content: space-between;
`;

export const ToolSettings = styled.div`
  display: flex;
  color: white;
  align-items: center;

  input[type=number] {
    text-align: center;
    margin-left:2rem;
    width: 60px;
    border: 3px solid white;
    border-radius: 8px;
    border-bottom: 2px solid white;
    line-height: 1.65;
    background: none;
    color: white;
    font-size: 1.2rem;
  }

  input[type=number] {
    -moz-appearance: textfield;
  }

  input[type=range] {
    -webkit-appearance: none;
    width: 100%;
    border-radius: 8px;
    height: 5px;
    background: #e7e5e5;
    outline: none;
    -webkit-transition: 0.2s;
    transition: opacity 0.2s;
  }

  input[type=range]::-webkit-slider-thumb {
    -webkit-appearance: none;
    appearance: none;
    width: 10px;
    height: 20px;
    background: #63c1d6;
    border-radius: 8px;
    cursor: pointer;
  }

  input[type=range]::-moz-range-thumb {
    width: 25px;
    height: 25px;
    background: #04aa6d;
    cursor: pointer;
  }
`;

export const ToolBar = styled.div`
  display: flex;
  flex-direction: column;
  color: white;
  align-items: center;

  * {
    margin: 1rem 0rem;
  }

  input {
    -webkit-appearance: none;
    -moz-appearance: none;
    appearance: none;
    background-color: transparent;
    width: 40px;
    height: 40px;
    border: none;
    cursor: pointer;
  }
  input::-webkit-color-swatch {
    border-radius: 50%;
    border: 3px solid #fff;
  }
  input::-moz-color-swatch {
    border-radius: 50%;
  }

  svg {
    height: 40px;
    width: 40px;
  }
`;

export const OpacitySlider = styled.div`
 label{
    font-size: 20px;
    margin-bottom: .5rem;
    display: block;
  }
`;

export const WidthSlider = styled.div`
 label{
    font-size: 20px;
    margin-bottom: .5rem;
    display: block;
  }
`;

export const Setting = styled.div`
  display: flex;
  align-items: center;
  margin-right: 4rem;
  
`;
  
export const CanvasContainer = styled(Container)`
  background: #252525;
  text-align: center;
  overflow: scroll;
  flex-basis: 100%;

  button{
    padding: 1rem 2rem;
    font-family: 'Lato', sans-serif;
    margin: 0rem 1rem;
    border: 2px solid white;
    font-size: 1.2rem;
    width: 100%;
    max-width: 220px;
    background: none;
    color: white;
    cursor: pointer;
  }
`;


export const CanvasArea = styled.div`
  padding: 2rem 0rem;
  position: relative;
  display: flex;
  justify-content: center;

  canvas{
    border: 2px solid;
    border-color: black;
    background: white;
  }

`;

export const Modal = styled.div`
  background: #f3f3f3;;
  max-width: 600px;
  padding: 1.5rem 1rem;
  position: absolute;
  left: 0;
  right: 0;
  top: 3rem;
  margin: auto;

  h3{
    margin: 1rem 0rem;
  }

  button{
    background-color: #aeaeae;
    color: black;
    cursor: pointer;
    width: 100%;
  }

  button:last-of-type{
    background-color: #f44336;
    color: white;
    width: 100%;
  }
`;

//---------------SIDEBAR------------//
export const Grid = styled.div`
  display: flex;
`;

//---------------SIDEBAR------------//

export const SideBar = styled.div`
  padding: 1rem 1rem;
  width: 100px;
  background-color: #474747;
`;