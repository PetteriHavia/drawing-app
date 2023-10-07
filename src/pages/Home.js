import Menu from "../components/Menu";
import Canvas from "../components/Canvas";
import SideMenu from "../components/SideMenu";
import { FlexContainer } from "../styles/Elements.style";
import { useRef } from "react";

const Home = () => {
  const Refcanvas = useRef(null);
  const ctxRef = useRef(null);

  return (
    <>
      <Menu ctxRef={ctxRef} />
      <FlexContainer>
        <SideMenu Refcanvas={Refcanvas}/>
        <Canvas ctxRef={ctxRef} Refcanvas={Refcanvas}/>
      </FlexContainer>
    </>
  );
};

export default Home;
