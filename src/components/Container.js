import React, { useState, useEffect, useRef } from "react";
import Counter from "./Counter";
import Upgrades from "./Upgrades";

function Container() {
  return (
    <>
      <Counter />
      <Upgrades />
    </>
  );
}

export default Container;
