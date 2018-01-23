<template>
    <div>
        <ul class="nav flex-column nav-pills">
            <li v-for="list, index in lists" class="nav-item">
                <router-link :to="{ name: 'lists.show', params: { id: list.id }  }" class="nav-link" active-class="active">
                  {{ list.name }}
                <fa icon="times" @click.prevent.stop="destroy(list.id, index)" class="float-right pointer" fixed-width/>
                </router-link>
            </li>
        </ul>
        <form @submit.prevent="store" @keydown="form.onKeydown($event)" class="form">
            <div class="row add">
                <div class="col-md-8">
                    <div class="form-group">
                      <div class="col-md-12">
                        <input v-model="form.name" type="text" name="name" class="form-control"
                          :class="{ 'is-invalid': form.errors.has('name') }">
                        <has-error :form="form" field="name"></has-error>
                      </div>
                    </div>
                </div>
                <div class="col-md-4">
                    <!-- Submit Button -->
                    <div class="form-group">
                        <v-button type="primary" :loading="form.busy">{{ $t('add') }}</v-button>
                    </div>
                </div>
            </div>
        </form>
    </div>
</template>
<script>
    import Form from 'vform'
    export default {
        data() {
            return {
                form: new Form({
                    name: '',
                }),
                lists: [
                    
                ]
            }
        },

        created() {
            this.retrieveLists();
        },

        methods: {
            async destroy(id, index) {
                const { data } = await axios.delete('/api/lists/' + id)
                this.lists.splice(index, 1);
            },
            async store() {
                const { data } = await this.form.post('/api/lists');
                this.form.reset();
                this.lists.push(data);
            },
            async retrieveLists() {
                const { data } = await axios.get('/api/lists/')
                this.lists = data;
            }
            
        }
    }
</script>
<style lang="scss">
    .add {
        margin-top: 10px;
    }
    .card-body{
       .nav-item{
            border-bottom: 1px solid #444c58;
            .fa-times{
                font-size: 14px;
                margin-top: 5px;
            }
       }
       form.form{
            margin-top: 30px;
       }
   }


</style>