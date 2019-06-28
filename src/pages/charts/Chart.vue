<template>
    <el-row style="height:300px">
        <el-col :span="12">
            <div id='barchart' ref="barchart"></div>
        </el-col>
        <el-col :span="12">
            <div></div>
        </el-col>
    </el-row>
</template>

<script>
    // 导入echarts
    import echarts from 'echarts';

    export default {
        data() {
            return {
                bar_data: []
            }
        },
        created() {

        },
        mounted() {
            this.draw_bar();
            this.init();

        },
        computed: {

        },
        watch: {

        },
        methods: {
            init() {
                window.onresize = () => {
                    if (this.$refs.barchart) {
                        echarts.init(this.$refs.barchart).resize();
                    }
                }
            },
            draw_bar() {
                let mybar = echarts.init(this.$refs.barchart);
                let option = {
                    xAxis: {
                        type: 'category',
                        data: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun']
                    },
                    yAxis: {
                        type: 'value'
                    },
                    series: [{
                        data: [120, 200, 150, 80, 70, 110, 130],
                        type: 'bar'
                    }]
                };
                mybar.setOption(option);
            }
        },


    }
</script>


<style>
    #barchart {
        height: 300px;
        background: white;
        margin-top: 20px;
        padding-top: 20px;
        -webkit-box-shadow: 4px 4px 40px rgba(0, 0, 0, 0.05);
        box-shadow: 4px 4px 40px rgba(0, 0, 0, 0.05);
        border-color: rgba(0, 0, 0, 0.05);
    }
</style>