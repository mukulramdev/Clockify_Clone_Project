import {
  Input,
  Popover,
  PopoverTrigger,
  PopoverContent,
  PopoverArrow,
  PopoverCloseButton,
  PopoverBody,
  PopoverHeader,
  Portal,
  Tooltip,
  Button
} from "@chakra-ui/react";
import {TimeIcon ,HamburgerIcon} from '@chakra-ui/icons'
import { TermSpan } from "./Signup_style";

import { Div } from "./TimerpageStyle";
export const Timer = () => {
  return (
    <Div>
      <Input placeholder="What are you working on?" size="md" />
      <Popover>
  <PopoverTrigger>
    <TermSpan>+ Project</TermSpan>
  </PopoverTrigger>
  <Portal>
    <PopoverContent>
      <Input placeholder="Find project or client"/>
      
    </PopoverContent>
  </Portal>
</Popover>
<Tooltip label='Timer (n)'>
<TermSpan>$</TermSpan>
  </Tooltip>
<h2>00:00:00</h2>
<Button>START</Button>

<div>
<div>
  <Tooltip label='Timer (n)'>
       <TimeIcon/>
  </Tooltip>
    
    </div>
<div>
  <Tooltip label='Manual (m)'>
    <HamburgerIcon/>
  </Tooltip>
</div>
</div>
    </Div>
  );
};
