import { ref } from 'vue'

const word = ref('')
const loading = ref(false)
const errored = ref(false)
const res = ref({})

export default function oxford() {
    return {
        word,
        loading,
        errored,
        res
    }
}