<template>
    <v-expansion-panel>
        <v-expansion-panel-header disable-icon-rotate>
            <!-- <h3>{{ orderedItem.id }}</h3> -->
            <h3>Đang hủy</h3>
            <template v-slot:actions>
                <h4 class="text-capitalize">
                    {{ orderedItem.status }}
                    <v-icon right :color="orderedStatus.color">
                        {{ orderedStatus.iconCode }}
                    </v-icon>
                </h4>
            </template>
        </v-expansion-panel-header>
        <v-expansion-panel-content>
            <v-layout column>
                <v-layout column ma-0 ml-2 mb-2
                    ><span class="text-h6 text-uppercase">Danh sách đơn hàng</span>
                    <v-layout
                        row
                        wrap
                        my-4
                        ml-8
                        mr-0
                        justify-space-between
                        v-for="product in orderedItem.ordered_products"
                        :key="product.SKU"
                    >
                        <v-flex md3 sm4 xs4>
                            <v-img
                                height="100%"
                                :src="product.thumbnail"
                            ></v-img>
                        </v-flex>

                        <v-flex md6 sm12 xs12 column>
                            <v-layout justify-start my-1
                                ><span class="text-h6 text-capitalize">{{
                                    product.name
                                }}</span></v-layout
                            >
                            <v-layout my-1 justify-space-between align-center
                                ><span>SKU</span
                                ><span>{{ product.SKU }}</span></v-layout
                            >
                            <v-layout my-1 justify-space-between align-center
                                ><span>Giá</span
                                ><span>{{ product.price }}</span></v-layout
                            >
                            <v-layout my-1 justify-space-between align-center
                                ><span>Số lượng</span
                                ><span>{{ product.quantity }}</span></v-layout
                            >
                            <v-layout my-1 justify-space-between align-center
                                ><span class="font-weight-bold">Tổng tiền</span
                                ><span>{{
                                    product.total
                                }} $</span>
                            </v-layout>
                        </v-flex>
                    </v-layout>
                </v-layout>
                <v-divider />
                <v-layout column ma-0 ml-2 my-4
                    ><span class="text-h6 text-uppercase"
                        >Thông tin đơn hàng</span
                    >
                    <v-layout column my-4 ml-8 mr-0>
                        <v-layout my-1 justify-space-between align-center
                            ><span>Tên</span><span>{{orderedItem.delivery_info.name}}</span></v-layout
                        >
                        <v-layout my-1 justify-space-between align-center
                            ><span>Địa chỉ</span
                            ><span>{{orderedItem.delivery_info.address}}</span></v-layout
                        >
                        <v-layout my-1 justify-space-between align-center
                            ><span>Số điện thoại liên lạc</span
                            ><span>{{orderedItem.delivery_info.contact_number}}</span></v-layout
                        >
                        <v-layout my-1 justify-space-between align-start
                            ><span>Ghi chú</span
                            ><v-flex md8 sm10 xs10
                                ><p
                                    class="text-right"
                                    style="margin-bottom: 0px"
                                >
                                    {{orderedItem.delivery_info.note}}
                                </p></v-flex
                            ></v-layout
                        >
                    </v-layout>
                </v-layout>
                <v-divider />
                <v-layout></v-layout>
                <v-layout mt-4 ml-2>
                    <v-row
                        no-gutters
                        wrap
                        align="center"
                        justify="space-between"
                    >
                        <v-col md="4" sm="12"
                            ><v-layout justify-space-between align-center
                                ><span class="text-h5 font-weight-bold"
                                    >Tổng tiền</span
                                ><span class="text-h5 font-weight-bold"
                                    >{{orderedItem.total}} $</span
                                ></v-layout
                            ></v-col
                        >
                        <v-col v-if="orderedItem.status === 'canceling'" md="2" sm="5"
                            ><v-btn width="100%" class="warning"
                                >Giữ</v-btn
                            ></v-col
                        >
                        <v-col v-if="orderedItem.status === 'progressing'" md="2" sm="5"
                            ><v-btn width="100%" class="error"
                                >Hủy</v-btn
                            ></v-col
                        ></v-row
                    >
                </v-layout>
            </v-layout>
        </v-expansion-panel-content>
    </v-expansion-panel>
</template>

<script>
export default {
    data: () => ({
        orderedStatus: null,
    }),
    methods: {
        statusOfOrder: function (status) {
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
                        iconCode: "mdi-cancel",
                        color: "error",
                    };
            }
        },
    },
    props: ["orderedItem",],
    created() {
        this.orderedStatus = this.statusOfOrder(this.orderedItem.status);
        console.log(this.orderedItem)
    },
};
</script>

<style scoped></style>
