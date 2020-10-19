<template>
    <div class="main-bikes-rental__bikes">
        <div class="main-bikes-rental__bikes__single-bike">
            <transition-group name="fade">
                <div v-for="i in [currentIndex]" :key="i">
                    <div class="main-bikes-rental__bikes__single-bike__image">
                        <button class="prev" @click="prev">&#10094; </button>
                        <img :src="currentBike.img" />
                        <button class="next" @click="next">&#10095; </button>
                    </div>
                    <h3 class="main-bikes-rental__bikes__single-bike__name">{{currentBike.name}}</h3>
                    <p class="main-bikes-rental__bikes__single-bike__desc">{{currentBike.desc}}</p>
                </div>
            </transition-group>
        </div>
        <div class="main-bikes-rental__bikes__cat-description">
            {{data.desc}}
        </div>
    </div>
</template>

<script>

export default {
    name: 'Bikes',
    data() {
        return {
        currentIndex: 0,
        }
    },
    props: {
        data: {
            type: Object
        },
    },
    methods: {
        next: function() {
            this.currentIndex += 1;
        },
        prev: function() {
            this.currentIndex -= 1;
        },
    },
    computed: {
        currentBike: function() {
          return this.data.bikes[Math.abs(this.currentIndex) % this.data.bikes.length];
        },
    },
}
</script>
