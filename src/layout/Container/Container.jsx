import { StyledGrid } from "./Container.styles";

// eslint-disable-next-line react/prop-types
const Container = ({ children }) => {
  return <StyledGrid>{children}</StyledGrid>;
};

export default Container;
