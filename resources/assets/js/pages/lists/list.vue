<template>
    <card :title="list.name">
        <items :list="list"></items>
    </card>
</template>

<script>
import { mapGetters } from 'vuex'
import Items from '~/components/list/items'

export default {
  scrollToTop: false,

  metaInfo () {
    return { title: this.$t('settings') }
  },
    
    components: {
        items: Items,
    },

    data: () => ({
        list: {},
    }),

    created () {
        this.retrieveList();
    },

    methods: {
        async retrieveList() {
            const { data } = await axios.get('/api/lists/' + this.$route.params.id)
            this.list = data;
        }
    }
}
</script>
<style lang="scss">
    .list {
        .fa-times {
            color: #8980fe !important;
        }
        .list-group-item {
            background-color: #696969 !important;
        }
    }
    
</style>

