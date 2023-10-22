import { ref } from 'vue'
import { defineStore } from 'pinia'

import lists from '@/mock/lists'

import type { List, ListItem } from '@/types/list'

export const useListStore = defineStore('list', () => {
    const list = ref<List[]>(lists)

    const changeItemValue = (
        listId: number,
        childId: number,
        name: keyof ListItem,
        value: ListItem[keyof ListItem]
    ) => {
        const newList = list.value.map((item) => {
            if (item.id == listId) {
                return {
                    ...item,
                    children: item.children.map((child) => {
                        if (child.id === childId) {
                            return {
                                ...child,
                                [name]: value
                            }
                        }
                        return child
                    })
                }
            }
            return item
        })
        list.value = newList
    }

    const setCheckedListItem = (listId: number, value: boolean) => {
        const newList = list.value.map((item) => {
            if (item.id === listId) {
                return {
                    ...item,
                    children: item.children.map((child) => ({ ...child, checked: value }))
                }
            }
            return item
        })
        list.value = newList
    }

    return {
        list,
        changeItemValue,
        setCheckedListItem
    }
})
