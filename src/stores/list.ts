import { ref } from 'vue'
import { defineStore } from 'pinia'

import lists from '@/mock/lists'

import type { List } from '@/types/list'

export const useListStore = defineStore('list', () => {
    const list = ref<List[]>(lists)

    const changeColorItem = (listId: number, childId: number, value: string) => {
        const newList = list.value.map((item) => {
            if (item.id == listId) {
                return {
                    ...item,
                    children: item.children.map((child) => {
                        if (child.id === childId) {
                            return {
                                ...child,
                                color: value
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

    const changeCountItem = (listId: number, childId: number, value: number) => {
        const newList = list.value.map((item) => {
            if (item.id == listId) {
                return {
                    ...item,
                    children: item.children.map((child) => {
                        if (child.id === childId) {
                            return {
                                ...child,
                                count: value
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

    const changeCheckedItem = (listId: number, childId: number, value: boolean) => {
        const newList = list.value.map((item) => {
            if (item.id == listId) {
                return {
                    ...item,
                    children: item.children.map((child) => {
                        if (child.id === childId) {
                            return {
                                ...child,
                                checked: value
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

    const setCheckedListItem = (listId: number) => {
        const newList = list.value.map((item) => {
            if (item.id === listId) {
                return {
                    ...item,
                    children: item.children.map((child) => ({ ...child, checked: true }))
                }
            }
            return item
        })
        list.value = newList
    }

    const removeCheckListItem = (listId: number) => {
        const newList = list.value.map((item) => {
            if (item.id === listId) {
                return {
                    ...item,
                    children: item.children.map((child) => ({ ...child, checked: false }))
                }
            }
            return item
        })
        list.value = newList
    }

    return {
        list,
        changeColorItem,
        changeCountItem,
        changeCheckedItem,
        setCheckedListItem,
        removeCheckListItem
    }
})
