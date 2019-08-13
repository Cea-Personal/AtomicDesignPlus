import React, { useEffect } from "react";
import { TimelineMax } from "gsap";
import styled from "styled-components";
import Dumbell from "../../assets/Logo.png";
const Div = styled.div`
  display: flex;
  width: 30%;
  height: 20%;
  justify-content: center;
  align-items: center;
`;
const Img = styled.img`
  width: 100%;
  height: 100%;
  margin: 0;
`;
let loaderDiv;

const tween = () =>
  new TimelineMax({ paused: true }).fromTo(
    loaderDiv,
    0.5,
    {
      opacity: 1
    },
    { opacity: 0.3,delay:0.5, onComplete: () => tween().reverse() }
  );

const Loader = (props) => {
  useEffect(() => {
    props.loading && tween().repeat(-1).play();
  }, []);

  return (
    <Div>
      <Img src={Dumbell} ref={div => (loaderDiv = div)} />
    </Div>
  );
};
export default Loader;
