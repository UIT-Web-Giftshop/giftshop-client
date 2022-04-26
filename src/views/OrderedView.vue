<template>
    <v-layout justify-center>
        <v-flex md8 xs12>
            <v-tabs v-model="tab" align-with-title show-arrows>
                <v-tabs-slider color="green"></v-tabs-slider>

                <v-tab v-for="item in items" :key="item">
                    {{ item }}
                </v-tab>
                <v-tabs-items v-model="tab">
                    <v-tab-item v-for="item in items" :key="item">
                        <v-layout ma-4>
                            <v-expansion-panels width="100%">
                                <!-- <v-expansion-panel>
                                    <v-expansion-panel-header
                                        disable-icon-rotate
                                    >
                                        <h3>#asdklj3</h3>
                                        <template v-slot:actions>
                                            <h4>
                                                Đã giao
                                                <v-icon right color="teal">
                                                    mdi-check
                                                </v-icon>
                                            </h4>
                                        </template>
                                    </v-expansion-panel-header>
                                    <v-expansion-panel-content>
                                        <v-layout column>
                                            <v-flex md2 align-self-end>
                                                <v-btn class="error"
                                                    >Cancel</v-btn
                                                >
                                            </v-flex>
                                        </v-layout>
                                    </v-expansion-panel-content>
                                </v-expansion-panel> -->

                                <v-expansion-panel>
                                    <v-expansion-panel-header
                                        disable-icon-rotate
                                    >
                                        <h3>#asdklj3</h3>
                                        <template v-slot:actions>
                                            <h4>
                                                Đang giao
                                                <v-icon right color="teal">
                                                    mdi-truck-fast-outline
                                                </v-icon>
                                            </h4>
                                        </template>
                                    </v-expansion-panel-header>
                                    <v-expansion-panel-content>
                                        <v-layout column>
                                            <v-flex md2 align-self-end>
                                                <v-btn class="error"
                                                    >Cancel</v-btn
                                                >
                                            </v-flex>
                                        </v-layout>
                                    </v-expansion-panel-content>
                                </v-expansion-panel>

                                <v-expansion-panel>
                                    <v-expansion-panel-header
                                        disable-icon-rotate
                                    >
                                        <h3>#rgcmrosgeo</h3>
                                        <template v-slot:actions>
                                            <h4>
                                                Đang xử lý
                                                <v-icon right color="warning">
                                                    mdi-progress-check
                                                </v-icon>
                                            </h4>
                                        </template>
                                    </v-expansion-panel-header>
                                    <v-expansion-panel-content>
                                        <v-layout column>
                                            <v-layout column ma-0 ml-2 mb-2
                                                ><span
                                                    class="text-h6 text-uppercase"
                                                    >Ordered list</span
                                                >
                                                <v-layout
                                                    row
                                                    wrap
                                                    my-4
                                                    ml-8
                                                    mr-0
                                                    justify-space-between
                                                >
                                                    <v-flex md3 sm4 xs4>
                                                        <v-img
                                                            height="100%"
                                                            src="https://cdn.vuetifyjs.com/images/cards/cooking.png"
                                                        ></v-img>
                                                    </v-flex>

                                                    <v-flex
                                                        md6
                                                        sm12
                                                        xs12
                                                        column
                                                    >
                                                        <v-layout
                                                            justify-start
                                                            my-1
                                                            ><span
                                                                class="text-h6"
                                                                >Name</span
                                                            ></v-layout
                                                        >
                                                        <v-layout
                                                            my-1
                                                            justify-space-between
                                                            align-center
                                                            ><span>SKU</span
                                                            ><span
                                                                >sku</span
                                                            ></v-layout
                                                        >
                                                        <v-layout
                                                            my-1
                                                            justify-space-between
                                                            align-center
                                                            ><span>Price</span
                                                            ><span
                                                                >price</span
                                                            ></v-layout
                                                        >
                                                        <v-layout
                                                            my-1
                                                            justify-space-between
                                                            align-center
                                                            ><span
                                                                >Quantity</span
                                                            ><span
                                                                >quantity</span
                                                            ></v-layout
                                                        >
                                                        <v-layout
                                                            my-1
                                                            justify-end
                                                            align-center
                                                            ><span
                                                                class="font-weight-bold"
                                                                >Total</span
                                                            ></v-layout
                                                        >
                                                    </v-flex>
                                                </v-layout>
                                            </v-layout>
                                            <v-divider />
                                            <v-layout column ma-0 ml-2 my-4
                                                ><span
                                                    class="text-h6 text-uppercase"
                                                    >Delivery details</span
                                                >
                                                <v-layout column my-4 ml-8 mr-0>
                                                    <v-layout
                                                        my-1
                                                        justify-space-between
                                                        align-center
                                                        ><span>Name</span
                                                        ><span
                                                            >Minh Thắng</span
                                                        ></v-layout
                                                    >
                                                    <v-layout
                                                        my-1
                                                        justify-space-between
                                                        align-center
                                                        ><span>Address</span
                                                        ><span
                                                            >Bình Thuận</span
                                                        ></v-layout
                                                    >
                                                    <v-layout
                                                        my-1
                                                        justify-space-between
                                                        align-center
                                                        ><span
                                                            >Contact
                                                            number</span
                                                        ><span
                                                            >012344534</span
                                                        ></v-layout
                                                    >
                                                    <v-layout
                                                        my-1
                                                        justify-space-between
                                                        align-start
                                                        ><span>Note</span
                                                        ><v-flex md5
                                                            ><p
                                                                class="text-right"
                                                                style="
                                                                    margin-bottom: 0px;
                                                                "
                                                            >
                                                                Lorem Ipsum is
                                                                simply dummy
                                                                text of the
                                                                printing and
                                                                typesetting
                                                                industry. Lorem
                                                                Ipsum has been
                                                                the industry's
                                                                standard dummy
                                                                text ever since
                                                                the 1500s, when
                                                                an unknown
                                                                printer took a
                                                                galley of type
                                                                and scrambled it
                                                                to make a type
                                                                specimen book.
                                                                It has survived
                                                                not only five
                                                                centuries
                                                            </p></v-flex
                                                        ></v-layout
                                                    >
                                                </v-layout>
                                            </v-layout>
                                            <v-divider />
                                            <v-layout></v-layout>
                                            <v-layout
                                                mt-4
                                                justify-space-between
                                                align-center
                                                ml-2
                                            >
                                                <v-flex md4
                                                    ><v-layout
                                                        justify-space-between
                                                        align-center
                                                        ><span
                                                            class="text-h5 font-weight-bold"
                                                            >Total</span
                                                        ><span
                                                            class="text-h5 font-weight-bold"
                                                            >012344534</span
                                                        ></v-layout
                                                    ></v-flex
                                                >
                                                <v-flex md2
                                                    ><v-btn
                                                        width="100%"
                                                        class="warning"
                                                        >Keep</v-btn
                                                    ></v-flex
                                                >
                                                <v-flex md2
                                                    ><v-btn
                                                        width="100%"
                                                        class="error"
                                                        >Cancel</v-btn
                                                    ></v-flex
                                                >
                                            </v-layout>
                                        </v-layout>
                                    </v-expansion-panel-content>
                                </v-expansion-panel>

                                <!-- <v-expansion-panel>
                                    <v-expansion-panel-header
                                        disable-icon-rotate
                                    >
                                        <h3>#rgfgmsdgeo</h3>
                                        <template v-slot:actions>
                                            <h4>
                                                Đang hủy
                                                <v-icon right color="error">
                                                    mdi-close-circle-outline
                                                </v-icon>
                                            </h4>
                                        </template>
                                    </v-expansion-panel-header>
                                    <v-expansion-panel-content>
                                        Lorem ipsum dolor sit amet, consectetur
                                        adipiscing elit, sed do eiusmod tempor
                                        incididunt ut labore et dolore magna
                                        aliqua. Ut enim ad minim veniam, quis
                                        nostrud exercitation ullamco laboris
                                        nisi ut aliquip ex ea commodo consequat.
                                    </v-expansion-panel-content>
                                </v-expansion-panel> -->
                            </v-expansion-panels>
                        </v-layout>
                    </v-tab-item>
                </v-tabs-items>
            </v-tabs>
        </v-flex>
    </v-layout>
</template>

<script>
export default {
    name: "OrderedPage",
    components: {},
    data: () => ({
        tab: null,
        items: ["Ordered", "Canceled"],
        text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
    }),
    methods: {},
    created() {},
    props: {},
};
</script>
