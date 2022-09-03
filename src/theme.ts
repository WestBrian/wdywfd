import { ComponentStyleConfig, extendTheme } from '@chakra-ui/react'
import { mode, StyleFunctionProps } from '@chakra-ui/theme-tools'

const InputStyles: ComponentStyleConfig = {
  variants: {
    outline: (props: StyleFunctionProps) => ({
      field: {
        bg: mode('white', 'whiteAlpha.300')(props),
      },
    }),
  },
}

const SelectStyles: ComponentStyleConfig = {
  variants: {
    outline: (props: StyleFunctionProps) => ({
      field: {
        bg: mode('white', 'whiteAlpha.300')(props),
      },
    }),
  },
}

const ButtonStyles: ComponentStyleConfig = {
  variants: {
    solid: (props: StyleFunctionProps) => ({
      bg:
        props.colorScheme === 'gray'
          ? mode('white', 'whiteAlpha.200')(props)
          : undefined,
    }),
  },
}

const theme = extendTheme({
  styles: {
    global: (props: StyleFunctionProps) => ({
      body: {
        bg: mode('gray.100', 'gray.800')(props),
        WebkitTapHighlightColor: 'transparent',
      },
    }),
  },
  fonts: {
    body: "'Montserrat', sans-serif",
    heading: "'Montserrat', sans-serif",
  },
  components: {
    Input: InputStyles,
    NumberInput: InputStyles,
    Button: ButtonStyles,
    Select: SelectStyles,
  },
})

export default theme
