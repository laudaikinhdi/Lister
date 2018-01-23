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
        .fa-times{
                font-size: 14px;
                margin-top: 5px;
        }
        .list-group-item {
            background-color: #303540 !important;
            margin-bottom: 5px;
            border-color: #2f333e;
        }
    }
    
</style>

