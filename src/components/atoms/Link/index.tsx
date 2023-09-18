import { Link as RouterLink } from "react-router-dom";
import { LinkProps } from "./types";
import { Content } from "./styles";

const Link = ({ link, external, children }: LinkProps) => {
  return (
    <Content>
      {external ? (
        <a
          className="external"
          target="_blank"
          rel="noopener noreferrer"
          href={link}
        >
          {children}
        </a>
      ) : (
        <RouterLink to={link}>
          {children}
        </RouterLink>
      )}
    </Content>
  );
};

export default Link;
