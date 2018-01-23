<template>
    <div>
        <ul class="list-group list">
            <li v-for="item, index in list.items" class="list-group-item">
                {{ item.name }}
                <fa icon="times" @click="destroy(item.id, index)" class="float-right pointer" fixed-width/>
            </li>
        </ul>
        <form @submit.prevent="store" @keydown="form.onKeydown($event)">
            <div class="row mt-5">
                <div class="col-md-10">
                    <div class="form-group">
                      <div class="col-md-12">
                        <input v-model="form.name" type="text" name="name" class="form-control"
                          :class="{ 'is-invalid': form.errors.has('name') }">
                        <has-error :form="form" field="name"></has-error>
                      </div>
                    </div>
                </div>
                <div class="col-md-2">
                    <!-- Submit Button -->
                    <div class="form-group">
                        <v-button type="primary" class="float-right" :loading="form.busy">{{ $t('add') }}</v-button>
                    </div>
                </div>
            </div>
        </form>
    </div>
</template>
<script>
    import Form from 'vform'

    export default {
        props: {
            list: {
                type: Object,
                required: true,
            }
        },
        data: () => ({
            form: new Form({
                name: ''
            })
        }),
        watch: {
            'list': function() {
                console.log(this.list);
            }
        },
        methods: {
            async destroy(id, index) {
                const { data } = await axios.delete('/api/lists/' + this.list.id + '/items/' + id)
                this.list.items.splice(index, 1);
            },
            async store() {
                const { data } = await this.form.post('/api/lists/' + this.list.id + '/items');
                this.list.items.push(data);
                this.form.reset();
            },
        }
    }
</script>
<style lang="scss">
    
</style>