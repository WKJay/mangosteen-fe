import { defineComponent, ref } from "vue";
import { RouterView } from "vue-router";

export const App = defineComponent({
    setup() {
        const refCount = ref(0)
        return () => ( <>
        <header>
            <ul>
                <li><router-link to="/">Foo</router-link></li>
                <li><router-link to="/bar">Bar</router-link></li>
            </ul>
        </header>
        <div>
            <RouterView></RouterView>
        </div>
        <footer>FOOTER</footer>
        </>)
    }
})