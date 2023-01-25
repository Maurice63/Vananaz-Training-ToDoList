import { useMediaQuery as umq } from "react-responsive";

const useMediaQuery = (breakpoints: string) => {
  const mediaQuery = umq({
    query: breakpoints,
  });

  return mediaQuery;
};

export default useMediaQuery;