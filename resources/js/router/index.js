import { createRouter , createWebHistory } from 'vue-router';
import ProductsIndex from '../Components/products/Index.vue';
import ProductsCreate from '../Components/products/Create.vue';
import ProductsEdit from '../Components/products/Edit.vue';

const routes = [
    {
        path: '/dashboard',
        name: 'products.index',
        component: ProductsIndex,
    },
    {
        path: '/products/create',
        name: 'products.create',
        component: ProductsCreate,
    },
    {
        path: '/products/:id/edit',
        name: 'products.edit',
        component: ProductsEdit,
        props: true,
    }
];

export default createRouter({
    history: createWebHistory(),
    routes
})