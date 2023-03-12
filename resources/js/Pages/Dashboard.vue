<script setup>
import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout.vue';
import { Head } from '@inertiajs/vue3';
import ProductsGrid from '@/Components/ProductsGrid.vue';
import ProductsIndex from '@/Components/products/Index.vue';
import ProductsCreate from '../Components/products/Create.vue';

</script>

<template>
    <Head title="Dashboard" />

    <AuthenticatedLayout>
        <template #header>
            <h2 class="font-semibold text-xl text-gray-800 leading-tight">Dashboard</h2>
        </template>
        <div class="relative items-center w-full px-5 py-12 mx-auto md:px-12 lg:px-24 max-w-7xl">
            <!-- <div class="grid w-full grid-cols-1 gap-6 mx-auto lg:grid-cols-3 bg-white rounded-lg">
                 <products-grid></products-grid>
            </div> -->
            <div class="card bg-white">
                <router-view />
            </div>
        </div>
    </AuthenticatedLayout>
</template>
