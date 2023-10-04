import styled from "styled-components";

export const Container = styled.div`
  background: #474747;
`;

export const InnerContainer = styled.div`
  display: flex;
  justify-content: space-between;
`;

export const ToolSettings = styled.div`
  display: flex;
  color: white;
  align-items: center;
  gap: 4rem;
  padding: 1rem 6rem;
  z-index: 400;
  background: #474747;

  input[type="number"] {
    text-align: center;
    margin-left: 1rem;
    width: 60px;
    border: 2px solid white;
    border-radius: 8px;
    border-bottom: 2px solid white;
    line-height: 1.65;
    background: none;
    color: white;
    font-size: 1.2rem;
  }

  input[type="number"] {
    -moz-appearance: textfield;
  }

  input[type="range"] {
    -webkit-appearance: none;
    width: 100%;
    border-radius: 8px;
    height: 5px;
    background: #e7e5e5;
    outline: none;
    -webkit-transition: 0.2s;
    transition: opacity 0.2s;
  }

  input[type="range"]::-webkit-slider-thumb {
    -webkit-appearance: none;
    appearance: none;
    width: 10px;
    height: 20px;
    background: #63c1d6;
    border-radius: 8px;
    cursor: pointer;
  }

  input[type="range"]::-moz-range-thumb {
    width: 25px;
    height: 25px;
    background: #04aa6d;
    cursor: pointer;
  }

  @media (max-width: 1250px) {
    padding: 0.9rem 1rem 0.9rem 2rem;
    gap: 1.5rem;
  }

  @media (max-width: 850px) {
    input[type="range"] {
      display: none;
    }
    input[type="number"] {
      margin: 0.2rem 0rem;
    }
  }

  @media (max-width: 768px) {
    padding-left: 1rem;
    gap: 0.5rem;
    justify-content: space-evenly;
  }

  @media (max-width: 600px) {
    flex-direction: column;
  }
`;

export const ToolBar = styled.div`
  display: flex;
  flex-direction: column;
  color: white;
  align-items: center;

  input {
    -webkit-appearance: none;
    -moz-appearance: none;
    appearance: none;
    background-color: transparent;
    width: 40px;
    height: 40px;
    border: none;
    cursor: pointer;
    margin: 0rem 0rem 1rem;
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
    color: white;
  }

  button {
    background: none;
    border: none;
    margin: 1.5rem 0rem;
  }
`;

export const Slider = styled.div`
  label {
    font-size: 1.1rem;
  }
`;

export const Setting = styled.div`
  display: flex;
  align-items: center;

  @media (max-width: 600px) {
    justify-content: center;
  }
`;

export const Colors = styled.div`
  margin: 0rem 0.2rem;
  cursor: pointer;
  span {
    background-color: ${(props) => props.color || "#fff"};
    width: 25px;
    height: 25px;
    display: block;
    border-radius: 50%;
  }
`;

export const InputContainer = styled.div`
  display: flex;
  gap: 1rem;
  @media (max-width: 600px) {
    display: flex;
    gap: 2rem;
  }
`;

export const ColorContainer = styled.div`
  display: flex;
  align-items: center;

  button {
    padding: 0.3rem 0.5rem;
    font-size: 1rem;
    background: none;
    border: 2px solid white;
    border-radius: 8px;
    cursor: pointer;
    color: white;

    :hover {
      background-color: #6a6a6a;
    }
  }

  .wrap-history {
    display: flex;
  }

  @media (max-width: 992px) {
    .wrap-history {
      gap: 0.3rem;
      width: 180px;
      flex-wrap: wrap;
      margin-right: 1rem;
    }

    @media (max-width: 768px) {
      .wrap-history {
        width: 150px;
        margin: 0rem;
      }
    }

    @media (max-width: 600px) {
      flex-direction: column;

      button {
        margin: 0.5rem 0rem;
      }

      .wrap-history {
        width: 100%;
        justify-content: center;
      }
    }
  }
`;

export const Palette = styled.div`
  display: flex;
  gap: 0.3rem;
  width: 180px;
  flex-wrap: wrap;
  margin-right: 1rem;

  @media (max-width: 768px) {
    width: 150px;
    margin: 0rem;
  }

  @media (max-width: 600px) {
    width: 100%;
    justify-content: center;
  }
`;

export const CanvasContainer = styled.div`
  background: #252525;
  text-align: center;
  overflow: auto;

  button {
    padding: 1rem 2rem;
    font-family: "Lato", sans-serif;
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

  canvas {
    border: 2px solid;
    border-color: black;
    background: white;
  }
`;

export const ModalStyle = styled.div`
  background: #f3f3f3;
  max-width: 600px;
  padding: 1.5rem 1rem;
  position: absolute;
  left: 0;
  right: 0;
  top: 3rem;
  margin: auto;

  h3 {
    margin: 1rem 0rem;
  }

  button {
    background-color: #aeaeae;
    color: black;
    cursor: pointer;
    width: 100%;
  }

  button:last-of-type {
    background-color: #f44336;
    color: white;
    width: 100%;
  }
`;

export const ConfigureModal = styled(ModalStyle)`
  padding: 0rem;
  max-width: 380px;
  background-color: #474747;
  z-index: 100;
  border-radius: 8px;
  button:last-of-type {
    background-color: #6a6a6a;
    padding: 0.5rem;
    font-size: 1.1rem;
    border: none;
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

  .configure-modal-header {
    display: flex;
    background: #393939;
    padding: 1rem 1.5rem 1rem 1.5rem;
    justify-content: space-between;
    align-items: center;

    h3 {
      margin: 0rem;
    }

    svg {
      font-size: 1.5rem;
    }
  }
`;

export const Inner = styled.div`
  padding: 1.5rem;
  display: flex;
  flex-wrap: wrap;
  gap: 2rem;
`;

export const FlexContainer = styled.div`
  display: flex;
  align-items: center;
  margin-right: 2rem;
`;

export const SideBar = styled.div`
  padding: 1rem 1rem;
  background-color: #474747;
  height: 100%;
  border-radius: 0px 8px 8px 0px;
  margin-right: 2rem;
`;
