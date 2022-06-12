<template>
    <v-layout justify-center>
        <v-flex md8 xs12>
            <v-tabs v-model="tabModel" align-with-title show-arrows>
                <v-tabs-slider color="green"></v-tabs-slider>

                <v-tab v-for="tabItem in tabItems" :key="tabItem">
                    {{ tabItem }}
                </v-tab>
                <v-tabs-items v-model="tabModel">
                    <v-tab-item v-for="tabItem in tabItems" :key="tabItem">
                        <v-layout ma-4>
                            <v-expansion-panels v-if="tabItem === 'Ordered'" width="100%">
                                <OrderedItem
                                    v-for="ordered in orderedList"
                                    :key="ordered.id"
                                    :orderedItem="ordered"
                                />
                            </v-expansion-panels>
                            <v-expansion-panels v-else width="100%">
                                <OrderedItem
                                    v-for="ordered in canceledOrdered"
                                    :key="ordered.id"
                                    :orderedItem="ordered"
                                />
                            </v-expansion-panels>
                        </v-layout>
                    </v-tab-item>
                </v-tabs-items>
            </v-tabs>
        </v-flex>
    </v-layout>
</template>

<script>
import axios from "axios";
import OrderedItem from "../components/ordered/OrderedItem.vue";

export default {
    name: "OrderedPage",
    components: {
        OrderedItem,
    },
    data: () => ({
        tabModel: null,
        orderedList: null,
        canceledOrdered: null,
        tabItems: ["Ordered", "Canceled"],
        text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
    }),
    methods: {
        statusIcon: function (status) {
            switch (status) {
                case "deliveried":
                    return {
                        iconCode: "mdi-check-circle-outline",
                        color: "green",
                    };
                case "delivering":
                    return {
                        iconCode: "mdi-truck-fast-outline",
                        color: "teal",
                    };
                case "progressing":
                    return {
                        iconCode: "mdi-progress-check",
                        color: "warning",
                    };
                case "canceling":
                    return {
                        iconCode: "mdi-close-circle-outline",
                        color: "red",
                    };
                default:
                    return {
                        iconCode: "mdi-close-circle-outline",
                        color: "error",
                    };
            }
        },
        getOrdered: async function (user) {
            console.log(user);
            try {
                const response = await axios.get(
                    `http://localhost:5000/users/?id=1235`
                );
                this.orderedList = response.data[0].orders;
                this.canceledOrdered = response.data[0].canceled_orders;
            } catch (e) {
                console.log(e);
            }
        },
    },
    created() {
        this.getOrdered();
    },
    props: {},
};
</script>
