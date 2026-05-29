"use client";

import React, { useState } from "react";

const Mini = ({ slide, setSlide }) => {
  if(!slide) return null
  return (
    <div>
      <ul>
        <li>shops</li>
        <li>offers</li>
        <li>contact</li>
      </ul>
    </div>
  );
};

export default Mini;