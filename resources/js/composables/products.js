import { ref, onMounted } from "vue";
import axios from "axios";
import { useRouter } from "vue-router";

export default function useProducts() {
    const products = ref([]);
    const product = ref([]);
    const loading = ref(false);
    const router = useRouter();

    const errors = ref([]);

    const fetchProducts = async () => {
        loading.value = true;
        const response = await axios.get("/api/products");
        products.value = response.data.data;
        loading.value = false;
    };

    const getProduct = async (id) => {
        const response = await axios.get("/api/products/" + id);
        product.value = response.data.data;
    };

    const storeProduct = async (data) => {
        errors.value = [];
        try {
            await axios.post("/api/products", data);
            await router.push({ name: "products.index" });
        } catch (error) {
            if (error.response.status === 422)
                errors.value = error.response.data.errors;
        }
    };

    const updateProduct = async (id) => {
        errors.value = [];
        try {
            await axios.put(`/api/products/${id}` , product.value);
            await router.push({ name: "products.index" });
        } catch (error) {
            if (error.response.status === 422)
                errors.value = error.response.data.errors;
        }
    };

    const destroyProduct = async (id) => {
        await axios.delete(`/api/products/${id}`);
    };

    return {
        products,
        loading,
        errors,
        fetchProducts,
        storeProduct,
        destroyProduct,
        updateProduct,
        getProduct,
        product,
    };
}
