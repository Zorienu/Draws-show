import { useState } from "react";

const useContainerHeight = (url) => {
  const [containerHeight, setContainerHeight] = useState(0);

  let ratio;

  const imgObj = new Image();
  imgObj.src = url;
  imgObj.onload = () => {
    ratio = imgObj.height / imgObj.width;
    setContainerHeight(547.188 * ratio);
  };

  return containerHeight;
};

export default useContainerHeight;
