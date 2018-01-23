<template>
    <div class="row">
        <div class="col-md-3">
            <card :title="$t('lists')" class="lists-card">
                <list></list>
            </card>
        </div>

        <div class="col-md-9">
            <transition name="fade" mode="out-in">
                <router-view :key="$route.fullPath"></router-view>
            </transition>
        </div>
    </div>
</template>

<script>
import List from '~/components/list/list'
export default {
    loading: false,
    components: {
        list: List,
    },
    
}
</script>

<style lang="scss">
.nav-link {
    color: white;
    &:hover {
        color: #00b5a8;
    }
}
.nav-pills .nav-link.active{
    background-color: #00b5a8;
}
.lists-card .card-body {
  padding: 0;
}
</style>
