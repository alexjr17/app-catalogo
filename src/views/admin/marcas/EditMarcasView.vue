<!-- <template>
       <FormComponent @onSubmit="submitUpdate">
            <template #form>
                <div>
                    <label-component value="Marca"/>
                    <input-component 
                        v-model="marca.name"
                    />
                </div>
            </template>
            <template #actions>
                <button-component 
                    value="name_button"
                    type="submit" />
            </template>
        </FormComponent>
</template>

<script>
import FormComponent from '@/components/FormComponent.vue'
import InputComponent from '@/components/forms/InputComponent.vue'
import LabelComponent from '@/components/forms/LabelComponent.vue'
import ButtonComponent from '@/components/ButtonComponent.vue'
export default {
    components: {
        FormComponent,
        InputComponent,
        LabelComponent,
        ButtonComponent
    },
    data() {
        return {
            marca: {}
        }
    },
    mounted() {
        this.get_marca();
    },
    methods: {
        async get_marca() {
            try {
                this.marca = await this.$store.dispatch('get_marca', this.$route.params['id']);
            } catch (error) {
                console.log(error);
            }
        },
        async submitUpdate() {
            try {
                await this.$store.dispatch('update_marca', this.marca);
            } catch (error) {
                console.log(error);
            }
        }
    },
}
</script> -->