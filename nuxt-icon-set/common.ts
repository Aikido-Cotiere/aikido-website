import type { IconSet } from 'vuetify'
import { Icon } from '#components'

export function nuxtIcon(): IconSet {
    const component = Icon
    return {
        component: (props) => {
            const { icon, tag, ...rest } = props
            return h(tag, rest, [
                h(component, {
                    name: icon?.toString() ?? '',
                    ...rest,
                }),
            ])
        },
    } satisfies IconSet
}