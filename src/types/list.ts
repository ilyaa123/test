export type ListItem = {
    id: number
    text: string
    color: string
    count: number
    checked: boolean
}
export type List = {
    id: number
    title: string
    children: ListItem[]
}
