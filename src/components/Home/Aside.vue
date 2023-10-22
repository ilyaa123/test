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
    value ? listStore.setCheckedListItem(id) : listStore.removeCheckListItem(id)
}
</script>
<template>
    <List>
        <template v-for="listItem in list" :key="listItem.id">
            <ListItem
                :label="listItem.title"
                :checked="listItem.children.every((item) => item.checked)"
                @changeChecked="(value) => changeCheckedListItem(listItem.id, value)"
            >
                <template #subfields>
                    <ListItemSubfield
                        v-for="subfield in listItem.children"
                        :title="subfield.text"
                        @changeChecked="
                            (value) => listStore.changeCheckedItem(listItem.id, subfield.id, value)
                        "
                        :checked="subfield.checked"
                        :key="subfield.id"
                    >
                        <template #actions>
                            <ListActions
                                :color="subfield.color"
                                :count="subfield.count"
                                @changeColor="
                                    (value) =>
                                        listStore.changeColorItem(listItem.id, subfield.id, value)
                                "
                                @changeCount="
                                    (value) =>
                                        listStore.changeCountItem(listItem.id, subfield.id, value)
                                "
                            />
                        </template>
                    </ListItemSubfield>
                </template>
            </ListItem>
        </template>
    </List>
</template>
