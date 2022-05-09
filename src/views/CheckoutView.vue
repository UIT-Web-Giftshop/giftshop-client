<template>
    <v-layout justify-center>
        <v-flex md8 xs10>
            <v-layout column>
                <v-layout column ma-0 ml-2 mb-2
                    ><span class="text-h6 text-uppercase">Ordered list</span>
                    <v-layout
                        row
                        wrap
                        my-4
                        ml-8
                        mr-0
                        justify-space-between
                        align-center
                    >
                        <v-flex md3 sm4 xs3>
                            <v-layout column no-gutters>
                                <v-checkbox
                                    v-model="chooseItem"
                                    :value="{ abc: 123, dsf: 234 }"
                                    hide-details
                                >
                                    <template v-slot:label>
                                        <v-img
                                            height="160"
                                            max-width="160"
                                            min-width="160"
                                            src="https://cdn.vuetifyjs.com/images/carousel/planet.jpg"
                                        ></v-img>
                                    </template>
                                </v-checkbox>
                            </v-layout>
                        </v-flex>

                        <v-flex md2 xs4 sm3 align-self-center>
                            <v-layout
                                justify-space-between
                                align-center
                                max-width="150"
                            >
                                <v-btn fab small>-</v-btn>
                                <div class="font-weight-bold d-inline" px-4>
                                    1
                                </div>
                                <v-btn fab small>+</v-btn>
                            </v-layout>
                        </v-flex>

                        <v-flex md6 xs12 sm12 column>
                            <v-layout justify-start my-1
                                ><span class="text-h6 text-capitalize">
                                    product.name
                                </span></v-layout
                            >
                            <v-layout my-1 justify-space-between align-center
                                ><span>SKU</span
                                ><span>product.SKU</span></v-layout
                            >
                            <v-layout my-1 justify-space-between align-center
                                ><span>Price</span
                                ><span>product.price</span></v-layout
                            >
                            <v-layout my-1 justify-space-between align-center
                                ><span class="font-weight-bold">Total</span
                                ><span> product.total $</span>
                            </v-layout>
                        </v-flex>
                    </v-layout>
                </v-layout>
                <v-divider />
                <v-layout column ma-0 ml-2 my-4
                    ><span class="text-h6 text-uppercase"
                        >Delivery details</span
                    >
                    <v-layout column my-4 ml-8 mr-0>
                        <v-layout my-1 justify-space-between align-center>
                            <v-text-field
                                label="Name"
                                :rules="rules"
                                hint="Minh Thắng"
                            >
                            </v-text-field>
                        </v-layout>
                        <v-layout wrap my-1 justify-space-between align-center>
                            <v-flex md5 sm5 xs5>
                                <v-select
                                    :items="provincesAPI"
                                    label="Province"
                                    v-model="currentProvince"
                                    :item-text="'name'"
                                    return-object
                                    hide-details
                                ></v-select>
                            </v-flex>
                            <v-flex md5 sm5 xs5>
                                <v-select
                                    label="District"
                                    :items="districtsAPI"
                                    v-model="currentDistrict"
                                    :item-text="'name'"
                                    return-object
                                    hide-details
                                ></v-select>
                            </v-flex>
                            <v-flex md5 sm5 xs5>
                                <v-select
                                    label="Ward"
                                    :items="wardsAPI"
                                    v-model="currentWard"
                                    :item-text="'name'"
                                    return-object
                                    hide-details
                                ></v-select>
                            </v-flex>
                            <v-flex md5 sm5 xs5>
                                <v-text-field
                                    label="Street"
                                    :rules="rules"
                                    hint="Minh Thắng"
                                >
                                </v-text-field>
                            </v-flex>
                        </v-layout>
                        <v-layout my-1 justify-space-between align-center>
                            <v-text-field
                                label="Contact number"
                                hint="0123456789"
                                :rules="rules"
                            >
                            </v-text-field>
                        </v-layout>
                        <v-layout my-1 justify-space-between align-start>
                            <v-textarea label="Note" auto-grow></v-textarea>
                        </v-layout>
                    </v-layout>
                </v-layout>
                <v-divider />
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
                                    >Total</span
                                ><span class="text-h5 font-weight-bold"
                                    >orderedItem.total $</span
                                ></v-layout
                            ></v-col
                        >
                        <v-col md="2" sm="5"
                            ><v-btn width="100%" class="warning"
                                >Keep</v-btn
                            ></v-col
                        >
                        <v-col md="2" sm="5"
                            ><v-btn width="100%" class="error"
                                >Cancel</v-btn
                            ></v-col
                        ></v-row
                    >
                </v-layout>
            </v-layout>
        </v-flex>
    </v-layout>
</template>

<script>
import axios from "axios";

export default {
    data: () => ({
        text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
        chooseItem: [],
        rules: [
            (value) => !!value || "Required.",
            (value) => (value && value.length >= 3) || "Min 3 characters",
        ],
        items: ["Foo", "Bar", "Fizz", "Buzz"],
        provincesAPI: null,
        districtsAPI: null,
        wardsAPI: null,
        currentProvince: null,
        currentDistrict: null,
        currentWard: null,
        currentStreet: null,
    }),
    methods: {
        getProvince: async function () {
            try {
                const response = await axios.get(
                    `https://provinces.open-api.vn/api/?depth=3`
                );
                this.provincesAPI = response.data;
            } catch (e) {
                console.log(e);
            }
        },
    },
    watch: {
        currentProvince(newCurrentProvince) {
            this.districtsAPI = newCurrentProvince.districts
        },
        currentDistrict(newCurrentDistrict) {
            this.wardsAPI = newCurrentDistrict.wards
        }
    },
    created() {
        this.getProvince();
    },
};
</script>

<style scoped></style>
