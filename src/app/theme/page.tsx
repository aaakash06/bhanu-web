import { Card } from "@/components/main/Card";
import { Card2 } from "@/components/main/Card2";
import { Card4 } from "@/components/main/card3";
import React, { Fragment } from "react";
import { div } from "three/examples/jsm/nodes/Nodes.js";
import { DEFAULT_MAX_VERSION } from "tls";

const page = () => {
  return (
    <div className="w-full h-screen flex items-center justify-center ">
      <Card4></Card4>
    </div>
  );
};

export default page;
