<template>
    <v-layout column>
        <v-layout row wrap ma-6>
            <v-flex xs12 md5 class="pa-2">
                <v-layout column>
                    <v-carousel v-model="carouselModel">
                        <v-carousel-item
                            v-for="(src, i) in product.srcs"
                            :key="i"
                            :src="src"
                            reverse-transition="fade-transition"
                            transition="fade-transition"
                        ></v-carousel-item> </v-carousel
                    ><v-sheet class="mt-4" elevation="8" width="100%">
                        <v-slide-group
                            v-model="carouselModel"
                            class=""
                            mandatory
                            show-arrows
                        >
                            <v-slide-item
                                v-for="(src, i) in product.srcs"
                                :key="i"
                                v-slot="{ active, toggle }"
                            >
                                <v-card
                                    :color="active ? 'green' : 'grey lighten-1'"
                                    class="ma-4"
                                    height="100"
                                    width="100"
                                    @click="toggle"
                                >
                                    <v-row
                                        class="fill-height"
                                        align="center"
                                        justify="center"
                                    >
                                        <v-scale-transition>
                                            <!-- <v-icon
                                            v-if="active"
                                            color="white"
                                            size="48"
                                            v-text="'mdi-close-circle-outline'"
                                        ></v-icon> -->
                                            <v-img
                                                lazy-src="https://picsum.photos/id/11/10/6"
                                                class="ma-4"
                                                height="100"
                                                width="100"
                                                :src="src"
                                            ></v-img>
                                        </v-scale-transition>
                                    </v-row>
                                </v-card>
                            </v-slide-item>
                        </v-slide-group>
                    </v-sheet>
                </v-layout>
            </v-flex>

            <v-flex xs12 md7 class="pa-2">
                <v-layout column>
                    <div class="text-h2 font-weight-bold">
                        {{ product.name }}
                    </div>
                    <div class="text-h4 font-weight-bold py-4">
                        {{ product.price }} VNĐ
                    </div>
                    <div
                        :class="[
                            'text-h6',
                            'font-weight-bold',
                            `${product.isInStock ? 'green' : 'red'}--text`,
                        ]"
                    >
                        {{ product.isInStock ? "In stock" : "Out of stock" }}
                    </div>
                    <div
                        row
                        v-if="isReadMore"
                        @click="isReadMore = !isReadMore"
                        class="text-h6 font-weight-light"
                    >
                        {{ readMoreHandler(product.description, 20)
                        }}<a
                            v-if="
                                product.description !=
                                readMoreHandler(product.description, 20)
                            "
                            class="text-h6 green--text mx-2"
                            >Read more</a
                        >
                    </div>
                    <div
                        v-if="!isReadMore"
                        @click="isReadMore = !isReadMore"
                        class="text-h6 font-weight-light"
                    >
                        {{ product.description
                        }}<a class="text-h6 green--text mx-2">Close</a>
                    </div>
                    <v-layout row wrap my-4>
                        <v-flex xs3 md2 align-self-center>
                            <v-col class="d-flex">
                                <v-select
                                    :items="createSelectArray(product.quantity)"
                                    v-model="selected"
                                    label="Outlined style"
                                    outlined
                                    rounded
                                    solo
                                    :menu-props="{}"
                                    hide-details
                                    height="60"
                                ></v-select>
                            </v-col>
                        </v-flex>
                        <v-flex xs4 md4 align-self-center>
                            <v-col class="d-flex">
                                <v-btn
                                    class="white--text font-weight-bold text-uppercase green"
                                    width="100%"
                                    depressed
                                    large
                                    rounded
                                    height="60"
                                    >Add to bag</v-btn
                                >
                            </v-col>
                        </v-flex>
                        <v-flex xs7 md5 align-self-center>
                            <v-col class="d-flex">
                                <v-btn
                                    class="green--text font-weight-bold text-uppercase"
                                    width="100%"
                                    depressed
                                    large
                                    rounded
                                    height="60"
                                    @click="favoriteHandler"
                                    ><v-icon left>{{
                                        user
                                            ? user.isFavorite
                                                ? "mdi-cards-heart"
                                                : "mdi-cards-heart-outline"
                                            : "mdi-cards-heart-outline"
                                    }}</v-icon
                                    >Add to favorites</v-btn
                                >
                            </v-col>
                        </v-flex>
                    </v-layout>
                </v-layout>
            </v-flex>
        </v-layout>

        <v-layout row wrap ma-6 justify-space-between>
            <v-flex xs12 md5>
                <v-layout column>
                    <div class="text-h4 font-weight-bold py-4">Description</div>
                    <div class="text-h6 font-weight-light">
                        {{ product.description }}
                    </div>
                </v-layout>
            </v-flex>

            <v-flex xs12 md5>
                <v-layout column>
                    <div class="text-h4 font-weight-bold py-4">Details</div>
                    <div
                        class="text-h6 font-weight-light py-2"
                        v-for="(item, i) in createStructureForDetail(
                            product.detail
                        )"
                        :key="i"
                    >
                        <span class="font-weight-bold"
                            >{{ item.keyName }}: </span
                        >{{ item.value }}
                    </div>
                </v-layout>
            </v-flex>
        </v-layout>

        <v-layout column ma-6>
            <div class="text-h4 font-weight-bold py-4">Related</div>

            <v-slide-group show-arrows>
                <v-slide-item
                    class="ma-4"
                    v-for="(src, i) in product.related"
                    :key="i"
                    v-slot="{ toggle }"
                >
                    <v-card
                        class="pa-4 green lighten-5"
                        width="220"
                        height="250"
                        @click="toggle"
                    >
                        <v-img
                            class="white--text"
                            height="120px"
                            :src="src"
                            width="100%"
                        >
                        </v-img>
                        <v-card-subtitle class="text-body-2 text-center">
                            {{ readMoreHandler(src.name, 5) }}
                        </v-card-subtitle>
                        <v-card-text
                            class="text-body-1 font-weight-bold text-center"
                        >
                            {{ src.price }} VNĐ
                        </v-card-text>
                    </v-card>
                </v-slide-item>
            </v-slide-group>
        </v-layout>
    </v-layout>
</template>

<script>
import axios from "axios";
//function
const sliceFunction = function (data, numberOfWord) {
    var arraySplited = data.split(" ");
    var result;
    if (arraySplited.length > numberOfWord) {
        var arraySliced = arraySplited.slice(0, numberOfWord);
        result = arraySliced.join(" ");
        result += "...";
    } else {
        result = data;
    }
    return result;
};
const createSelectArray = function (quantity) {
    var result = [];
    for (var i = 0; i < quantity; i++) {
        result.push(i);
    }
    return result;
};
const createStructureForDetail = function (detail) {
    var result = [];
    var objectKey = Object.keys(detail);

    for (var key of objectKey) {
        result.push({
            keyName: uppercaseFirstLetter(key.split("_").join(" ")),
            value: uppercaseFirstLetter(detail[key]),
        });
    }
    return result;
};
const uppercaseFirstLetter = function (word) {
    return word.charAt(0).toUpperCase() + word.slice(1);
};
//
export default {
    name: "ProductPage",
    components: {},
    data: () => ({
        carouselModel: 0,
        isReadMore: true,
        user: {},
        product: {},
        selected: 1,
    }),
    methods: {
        readMoreHandler(data, numberOfWord) {
            return sliceFunction(data, numberOfWord);
        },
        favoriteHandler() {
            if (this.user == null) {
                console.log("ádf");
            } else {
                this.user.isFavorite = !this.user.isFavorite;
            }
        },
        createSelectArray,
        createStructureForDetail,
        async getProduct() {
            try {
                const response = await axios.get(
                    `http://localhost:5000/products/?SKU=${this.$route.params.sku}`
                );
                this.product = response.data[0];
            } catch (e) {
                console.log(e)
            }
        },
    },
    created() {
        this.user = {
            isFavorite: false,
        };
        this.getProduct();
    },
    props: {},
};
</script>

<style scoped></style>
