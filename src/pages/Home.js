import Menu from "../components/Menu";
import Canvas from "../components/Canvas";
import { useRef } from "react";

const Home = () => {

    const ctxRef = useRef(null);

    return(
        <>
        <Menu ctxRef={ctxRef}/>
        <Canvas ctxRef={ctxRef}/>
        </>
    )
}

export default Home;