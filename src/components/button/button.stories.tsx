import Diamond from 'lucide-solid/icons/diamond';
// import {icons, type LucideProps} from "lucide-solid";
// import { splitProps } from 'solid-js';
// import {Dynamic} from "solid-js/web";
import type { Meta } from 'storybook-solidjs'
import { Stack } from 'styled-system/jsx'
import { Button } from '~/components/button/button'
// import { CustomIcon } from '~/components/ui/custom-icon'


const meta: Meta = {
  title: 'Components/Button',
}

export default meta

export const Base = () => <Button>Butter UI</Button>

export const Variants = () => (
  <Stack alignItems="start">
    <Button variant="primary">
     Primary
     <Diamond />
    </Button>
    <Button variant="positive">
    Positive
    </Button>
    <Button variant="negative">
    Negative
    </Button>
  </Stack>
)
