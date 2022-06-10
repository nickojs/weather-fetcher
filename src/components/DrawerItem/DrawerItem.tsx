import { IconProp } from "@fortawesome/fontawesome-svg-core";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Item } from "./styles";

interface DrawerItemProps { 
    info: number,
    icon: IconProp
  }
  
export default ({ info, icon }: DrawerItemProps): JSX.Element => (
  <Item>
    {icon && <FontAwesomeIcon icon={icon} />}
    <p>{info}</p>
  </Item>
);
  
  
