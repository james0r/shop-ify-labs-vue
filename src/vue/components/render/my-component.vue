<template>
  <div>
    <slot />
    <button
      @click.prevent="
        $store.dispatch('Cart/addToCart', [
          {
            id: 42737808343289,
            qty: 1,
          },
        ])
      "
    >
      Add item via Vue Component
    </button>
    <ul>
      <li
        v-for="(value, key) in shopifyData"
        :key="key"
      >
        {{ key }}: {{ value }}
      </li>
    </ul>
  </div>
</template>

<script>
import { useStore, createNamespacedHelpers } from 'vuex'
const { mapState, mapActions, mapGetters } = createNamespacedHelpers('cart')

import {
  GETTER_CART,
  ACTION_INIT_CART,
  ACTION_REMOVE_ITEM,
  ACTION_CHANGE_QUANTITY,
  ACTION_UPDATE_ORDER_NOTE,
} from '../../store/cart'

export default {
  props: {
    shopifyData: {
      type: Object,
      required: true,
    },
  },
  computed: {
    ...mapGetters([GETTER_CART]),
  },
  created() {
    const store = useStore()

    // store.dispatch('cart/' + ACTION_INIT_CART)
  },
  methods: {
    ...mapActions([
      ACTION_INIT_CART,
      ACTION_REMOVE_ITEM,
      ACTION_CHANGE_QUANTITY,
      ACTION_UPDATE_ORDER_NOTE,
    ]),
  },
}
</script>
