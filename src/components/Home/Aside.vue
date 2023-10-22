<script setup lang="ts">
import List from '../List/index.vue'
import ListActions from '../List/ListActions.vue'
import ListItem from '../List/ListItem.vue'
import ListItemSubfield from '../List/ListItemSubfield.vue'

import { useListStore } from '@/stores/list'

import { computed } from 'vue'

const listStore = useListStore()

const list = computed(() => listStore.list)

const changeCheckedListItem = (id: number, value: boolean) => {
    listStore.setCheckedListItem(id, value)
}
</script>
<template>
    <List>
        <template v-for="listItem in list" :key="listItem.id">
            <ListItem
                :label="listItem.title"
                :checked="listItem.children.every((item) => item.checked)"
                :is-checked-once="!!listItem.children.find((item) => item.checked)"
                @change-checked="(value) => changeCheckedListItem(listItem.id, value)"
            >
                <template #subfields>
                    <ListItemSubfield
                        v-for="subfield in listItem.children"
                        :title="subfield.text"
                        :checked="subfield.checked"
                        :key="subfield.id"
                        @change-checked="
                            (value) =>
                                listStore.changeItemValue(
                                    listItem.id,
                                    subfield.id,
                                    'checked',
                                    value
                                )
                        "
                    >
                        <template #actions>
                            <ListActions
                                :color="subfield.color"
                                :count="subfield.count"
                                @change-color="
                                    (value) =>
                                        listStore.changeItemValue(
                                            listItem.id,
                                            subfield.id,
                                            'color',
                                            value
                                        )
                                "
                                @change-count="
                                    (value) =>
                                        listStore.changeItemValue(
                                            listItem.id,
                                            subfield.id,
                                            'count',
                                            value
                                        )
                                "
                            />
                        </template>
                    </ListItemSubfield>
                </template>
            </ListItem>
        </template>
    </List>
</template>
