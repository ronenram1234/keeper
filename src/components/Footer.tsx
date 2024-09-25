import { FunctionComponent } from "react";

interface FooterProps {
    
}
 
const Footer: FunctionComponent<FooterProps> = () => {
    const year = new Date().getFullYear();
    return ( <>
       <footer>
      <p>Copyright ⓒ {year}</p>
    </footer>
    </> );
}
 
export default Footer;