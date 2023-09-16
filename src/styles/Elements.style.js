import styled from "styled-components";

export const Container = styled.div`
  background: #303030;
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

  * {
    margin: 0rem 1rem;
  }

  input[type=number] {
    text-align: center;
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
  color: white;
  align-items: center;

  * {
    margin: 0rem 1rem;
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
