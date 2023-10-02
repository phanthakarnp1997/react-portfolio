import React, { useState, useEffect } from "react";
import PreLoader from "../components/PreLoader";

const withLoader = (WrappedComponent) => {
  return (props) => {
    const [isLoading, setLoading] = useState(true);

    useEffect(() => {
      setTimeout(() => {
        setLoading(false);
      }, 3000);
    }, []);

    return isLoading ? <PreLoader /> : <WrappedComponent {...props} />;
  };
};

export default withLoader;
