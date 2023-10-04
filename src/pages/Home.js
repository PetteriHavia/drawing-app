import Menu from "../components/Menu";
import Canvas from "../components/Canvas";
import SideMenu from "../components/SideMenu";
import { FlexContainer } from "../styles/Elements.style";
import { useRef } from "react";

const Home = () => {
  const ctxRef = useRef(null);

  return (
    <>
      <Menu ctxRef={ctxRef} />
      <FlexContainer>
        <SideMenu ctxRef={ctxRef} />
        <Canvas ctxRef={ctxRef} />
      </FlexContainer>
    </>
  );
};

export default Home;
