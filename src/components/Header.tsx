import React, { FunctionComponent } from "react";
import HighlightIcon from '@mui/icons-material/Highlight';

interface HeaderProps {}

const Header: FunctionComponent<HeaderProps> = () => {
  return (
    <header>
      <h1><HighlightIcon />Keeper</h1>
    </header>
  );
};

export default Header;
