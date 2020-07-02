<template>
    <el-row style="height:300px">
        <el-col :span="12">
            <div id='barchart' ref="barchart"></div>
        </el-col>
        <el-col :span="12">
            <div id='graphchart' ref="graphchart"></div>
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
            this.init();
            this.draw_bar();
            this.draw_graph();

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
                    };
                    if (this.$refs.graphchart) {
                        echarts.init(this.$refs.graphchart).resize();
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
            },
            draw_graph() {
                let mygraph = echarts.init(this.$refs.graphchart);
                let option = {
                    title: {
                        text: 'Graph 简单示例'
                    },
                    tooltip: {},
                    animationDurationUpdate: 1500,
                    animationEasingUpdate: 'quinticInOut',
                    series: [{
                        type: 'graph',
                        layout: 'none',
                        symbolSize: 50,
                        roam: true,
                        label: {
                            normal: {
                                show: true
                            }
                        },
                        edgeSymbol: ['circle', 'arrow'],
                        edgeSymbolSize: [4, 10],
                        edgeLabel: {
                            normal: {
                                textStyle: {
                                    fontSize: 20
                                }
                            }
                        },
                        data: [{
                            name: '节点1',
                            x: 300,
                            y: 300
                        }, {
                            name: '节点2',
                            x: 800,
                            y: 300
                        }, {
                            name: '节点3',
                            x: 550,
                            y: 100
                        }, {
                            name: '节点4',
                            x: 550,
                            y: 500
                        }],
                        // links: [],
                        links: [{
                            source: 0,
                            target: 1,
                            symbolSize: [5, 20],
                            label: {
                                normal: {
                                    show: true
                                }
                            },
                            lineStyle: {
                                normal: {
                                    width: 5,
                                    curveness: 0.2
                                }
                            }
                        }, {
                            source: '节点2',
                            target: '节点1',
                            label: {
                                normal: {
                                    show: true
                                }
                            },
                            lineStyle: {
                                normal: {
                                    curveness: 0.2
                                }
                            }
                        }, {
                            source: '节点1',
                            target: '节点3'
                        }, {
                            source: '节点2',
                            target: '节点3'
                        }, {
                            source: '节点2',
                            target: '节点4'
                        }, {
                            source: '节点1',
                            target: '节点4'
                        }],
                        lineStyle: {
                            normal: {
                                opacity: 0.9,
                                width: 2,
                                curveness: 0
                            }
                        }
                    }]
                };
                mygraph.setOption(option);
            }
        },


    }
</script>


<style>
    #barchart,#graphchart {
        height: 300px;
        background: white;
        margin-top: 20px;
        padding-top: 20px;
        -webkit-box-shadow: 4px 4px 40px rgba(0, 0, 0, 0.05);
        box-shadow: 4px 4px 40px rgba(0, 0, 0, 0.05);
        border-color: rgba(0, 0, 0, 0.05);
    }
</style>