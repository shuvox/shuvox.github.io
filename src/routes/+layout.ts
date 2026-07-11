import type { LayoutLoad } from "./$types";
import persistent_store from "$lib/stores/persistentstore";

export const ssr = false;
export const prerender = true;

function load_persistent_store() {
    const item = localStorage.getItem("persistent_store");
    const value = item ? JSON.parse(item) : null;
    if (value == null) {
        persistent_store.set({
            activeUrl: "/",
            darkMode: true,
        });
    }
    else {
        persistent_store.set(value);
    }
}

export const load: LayoutLoad = async () => {
    load_persistent_store();
    return {
        status: 200,
        error: null,
        props: {},
    };
}