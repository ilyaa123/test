import type { List } from '@/types/list'

export default <List[]>[
    {
        id: 1,
        title: 'List 1',
        children: [
            { id: 1, text: 'item 1', color: '#ff0000', count: 10, checked: false },
            { id: 2, text: 'item 2', color: '#ffff00', count: 16, checked: false },
            { id: 3, text: 'item 3', color: '#008000', count: 40, checked: false },
            { id: 4, text: 'item 4', color: '#0000ff', count: 0, checked: false }
        ]
    },
    {
        id: 2,
        title: 'List 2',
        children: [
            { id: 1, text: 'item 1', color: '#ff0000', count: 12, checked: false },
            { id: 2, text: 'item 2', color: '#ffff00', count: 6, checked: false },
            { id: 3, text: 'item 3', color: '#008000', count: 4, checked: false },
            { id: 4, text: 'item 4', color: '#0000ff', count: 10, checked: false }
        ]
    },
    {
        id: 3,
        title: 'List 3',
        children: [
            { id: 1, text: 'item 1', color: '#ff0000', count: 1, checked: false },
            { id: 2, text: 'item 2', color: '#ffff00', count: 18, checked: false },
            { id: 3, text: 'item 3', color: '#008000', count: 2, checked: false },
            { id: 4, text: 'item 4', color: '#0000ff', count: 22, checked: false }
        ]
    }
]
