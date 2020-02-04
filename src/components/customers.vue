<template>
    <div class="customer pt-5 pb-5">
        <div class="container">
            <div class="head mb-4 mt-3">
                <h2 class="text-center text-capitalize">What Our Customers Say</h2>
            </div>
            <div class="row">
                <div class="item col-lg-4 col-sm-6 col-xs-12 text-center" :key="index" v-for="(item, index) in customers">
                    <p> "Sed ut perspiciatis unde omnis ist natus error sit volup tatem acu antium dolor tium sed e ullam dolor amet.  </p> 
                    <img :src="item.myImg" class="img-fluis w-100" />
                    <h3> {{ item.heading }} </h3>
                </div>

            </div>

        </div>
    </div>
</template>

<style lang="scss" scoped>
.customer{
    padding: 4em 0;
    .item {
        margin-top: 17px 0;
        p{
            font-size: 15px;
            letter-spacing: 1px;
            text-transform:capitalize;
            line-height: 1.8;
        }
        h3{
            font-size: 18px;
            text-transform: uppercase;
            margin: 13px 0;
            font-weight: 600;
            letter-spacing : 2px;
        }
        img {
            width:75px !important;
            height: 75px;
            border-radius: 50%;
            margin: 18px auto;
        }
    }
}
</style>

<script>
export default {
    name : 'customers',
    data() {
        return  {
            customers :[
                { myImg: require('../assets/images/te1.jpg'), heading:'ELISA KER' },
                { myImg: require('../assets/images/te2.jpg'), heading:'JOHNSON' },
                { myImg: require('../assets/images/te3.jpg'), heading:'ELIZABETH' }
            ]
        }
    }
}
</script>