<script>
import { computed } from 'vue'
import { useStore } from 'vuex'

export default {
  setup(props, { slots }) {
    const store = useStore()

    return () => slots.default({
      visible: computed(() => store.state.visible).value,
      toggle: () => store.dispatch('toggle')
    })
  }
} 
</script>