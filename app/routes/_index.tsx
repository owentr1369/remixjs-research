import React from "react";
import { Link } from "@remix-run/react";

const Index = () => {
  return (
    <div>
      <div>Hello world!</div>
      <Link to="/demo">Go to demo page</Link>
    </div>
  );
};

export default Index;
