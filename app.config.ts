export default defineAppConfig({
  ui: {
    colors: {
      primary: 'blue',
      neutral: 'neutral'
    },
    button: {
      defaultVariants: {
        color: 'primary',
        variant: 'solid'
      }
    },
    card: {
      slots: {
        root: 'rounded-lg ring ring-default'
      }
    },
    input: {
      slots: {
        root: 'w-full'
      }
    },
    textarea: {
      slots: {
        root: 'w-full'
      }
    }
  }
})
