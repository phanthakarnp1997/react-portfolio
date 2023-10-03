import React, { useState, useEffect } from "react";
import PreLoader from "../components/PreLoader";

const withLoader = (WrappedComponent) => {
  return (props) => {
    const [isLoading, setLoading] = useState(true);

    useEffect(() => {
      setTimeout(() => {
        setLoading(false);
      }, 1000);
    }, []);

    return isLoading ? <PreLoader /> : <WrappedComponent {...props} />;
  };
};

export default withLoader;
