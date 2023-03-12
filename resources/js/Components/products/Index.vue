<template>
    <div class="overflow-hidden overflow-x-auto min-w-full align-middle sm:rounded-md">
        <div class="flex place-content-end">
            <router-link :to="{ name: 'products.create' }" class="text-sm font-medium">
                <div class="px-4 py-3 text-white bg-indigo-600 hover:bg-indigo-700 cursor-pointer">Create product</div>
            </router-link>
        </div>

        <table class="min-w-full border divide-y divide-gray-200">
            <thead>
                <tr>
                    <th class="px-6 py-3 bg-gray-50">
                        <span
                            class="text-xs font-medium tracking-wider leading-4 text-left text-gray-500 uppercase">Name</span>
                    </th>
                    <th class="px-6 py-3 bg-gray-50">
                        <span
                            class="text-xs font-medium tracking-wider leading-4 text-left text-gray-500 uppercase">Price</span>
                    </th>
                    <th class="px-6 py-3 bg-gray-50">
                        <span
                            class="text-xs font-medium tracking-wider leading-4 text-left text-gray-500 uppercase">Rate</span>
                    </th>
                    <th class="px-6 py-3 bg-gray-50">
                        <span class="text-xs font-medium tracking-wider leading-4 text-left text-gray-500 uppercase">Create
                            At</span>
                    </th>
                    <th class="px-6 py-3 bg-gray-50">
                        <span
                            class="text-xs font-medium tracking-wider leading-4 text-left text-gray-500 uppercase">Actions</span>
                    </th>
                </tr>
            </thead>

            <tbody class="bg-white divide-y divide-gray-200 divide-solid">
                <template v-for="item in products" :key="item.id">
                    <tr class="bg-white">
                        <td class="px-6 py-4 text-sm leading-5 text-gray-900 text-center  whitespace-no-wrap">
                            {{ item.name }}
                        </td>
                        <td class="px-6 py-4 text-sm leading-5 text-gray-900 text-center whitespace-no-wrap">
                            {{ item.price }}
                        </td>
                        <td class="px-6 py-4 text-sm leading-5 text-gray-900 text-center whitespace-no-wrap">
                            {{ item.rate }}
                        </td>
                        <td class="px-6 py-4 text-sm leading-5 text-gray-900 text-center whitespace-no-wrap">
                            {{ item.created_at }}
                        </td>
                        <td class="px-6 py-4 text-sm leading-5 text-gray-900 text-center whitespace-no-wrap">
                            <router-link :to="{ name: 'products.edit', params: { id: item.id } }"
                                     class="mr-2 inline-flex items-center px-4 py-2 bg-blue-500 border border-transparent rounded-md font-semibold text-xs text-white uppercase tracking-widest hover:bg-blue-600 active:bg-success focus:outline-none focus:border-gray-900 focus:ring ring-gray-300 disabled:opacity-25 transition ease-in-out duration-150">
                            Edit
                        </router-link>
                            <button @click="deleteProduct(item.id)"
                                class="inline-flex items-center px-4 py-2 bg-red-500 border border-transparent rounded-md font-semibold text-xs text-white uppercase tracking-widest hover:bg-red-600 active:bg-gray-900 focus:outline-none focus:border-gray-900 focus:ring ring-gray-300 disabled:opacity-25 transition ease-in-out duration-150">
                                Delete</button>
                        </td>
                    </tr>
                </template>
            </tbody>
        </table>
    </div>
</template>

<script>
import useProducts from '@/composables/products'
import { onMounted } from 'vue'

export default {
    name: 'ProductsIndex',
    setup() {
        const { products, fetchProducts, destroyProduct } = useProducts()

        onMounted(fetchProducts);

        const deleteProduct = async (id) => {
            if (!window.confirm('Are you sure?')) {
                return
            }
            await destroyProduct(id)
            await fetchProducts()
        }

        return {
            products,
            deleteProduct
        }
    }
}
</script>