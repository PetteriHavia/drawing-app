import Menu from "../components/Menu";
import Canvas from "../components/Canvas";
import SideMenu from "../components/SideMenu";
import {Grid } from "../styles/Elements.style"
import { useRef } from "react";

const Home = () => {

    const ctxRef = useRef(null);

    return(
        <>
        <Menu ctxRef={ctxRef}/>
        <Grid>
            <SideMenu />
            <Canvas ctxRef={ctxRef}/>
        </Grid>
        </>
    )
}

export default Home;