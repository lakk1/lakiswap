import { useColorMode, Button} from '@chakra-ui/react'
import { MoonIcon, SunIcon } from '@chakra-ui/icons'
const ThemeSwitch = () => {
  const { colorMode, toggleColorMode } = useColorMode()
  return (
    <Button mx={3} onClick={()=>{toggleColorMode()}} bg="transparent">
      {colorMode === 'dark' ? <SunIcon /> : <MoonIcon />}
    </Button>
  )
}

export default ThemeSwitch
