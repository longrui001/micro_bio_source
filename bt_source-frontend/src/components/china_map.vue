<template>
  <div id="main" >这是一个中国地图</div>
</template>

<script>
  import echarts from 'echarts'
  import 'jquery/dist/jquery.min.js'
  import axios from 'axios'
  export default {
    name: "china-map",
    data() {
      return {
        content: ''
      }
    },
    mounted() {
      this.myEcharts();
    },
    methods: {
      myEcharts() {
          axios.get('/js/china.json').then(response =>{
          console.log(response.data);
          let myChart = echarts.init(document.getElementById('main'));
          console.log("get in ");
          echarts.registerMap('china', response.data);
          myChart.setOption({
            title: {
              text: '已分离出的Bt分布',
              // subtext: '人口密度数据来自Wikipedia',
              //sublink: 'http://zh.wikipedia.org/wiki/%E9%A6%99%E6%B8%AF%E8%A1%8C%E6%94%BF%E5%8D%80%E5%8A%83#cite_note-12'
            },
            tooltip: {
              trigger: 'item',
              formatter: '{b}<br/>{c} '
            },
            toolbox: {
              show: true,
              orient: 'vertical',
              left: 'right',
              top: 'center',
              feature: {
                dataView: {readOnly: false},
                restore: {},
                saveAsImage: {}
              }
            },
            visualMap: {
              min: 0,
              max: 500,
              text: ['High', 'Low'],
              realtime: false,
              calculable: true,
              inRange: {
                color: ['lightskyblue', 'yellow', 'orangered']
              }
            },
            series: [
              {
                name: '全国bt密度',
                type: 'map',
                mapType: 'china', // 自定义扩展图表类型
                label: {
                  show: true
                },
                data: [
                  {name: '北京市', value: Math.round(Math.random() * 500)},
                  {name: '天津市', value: Math.round(Math.random() * 500)},
                  {name: '上海市', value: Math.round(Math.random() * 500)},
                  {name: '重庆市', value: Math.round(Math.random() * 500)},
                  {name: '河北省', value: Math.round(Math.random() * 500)},
                  {name: '河南省', value: Math.round(Math.random() * 500)},
                  {name: '云南省', value: Math.round(Math.random() * 500)},
                  {name: '辽宁省', value: Math.round(Math.random() * 500)},
                  {name: '黑龙江省', value: Math.round(Math.random() * 500)},
                  {name: '湖南省', value: Math.round(Math.random() * 500)},
                  {name: '安徽省', value: Math.round(Math.random() * 500)},
                  {name: '山东省', value: Math.round(Math.random() * 500)},
                  {name: '新疆维吾尔自治区', value: Math.round(Math.random() * 500)},
                  {name: '江苏省', value: Math.round(Math.random() * 500)},
                  {name: '浙江省', value: Math.round(Math.random() * 500)},
                  {name: '江西省', value: Math.round(Math.random() * 500)},
                  {name: '湖北省', value: Math.round(Math.random() * 500)},
                  {name: '广西壮族自治区', value: Math.round(Math.random() * 500)},
                  {name: '甘肃省', value: Math.round(Math.random() * 500)},
                  {name: '山西省', value: Math.round(Math.random() * 500)},
                  {name: '内蒙古自治区', value: Math.round(Math.random() * 500)},
                  {name: '陕西省', value: Math.round(Math.random() * 500)},
                  {name: '吉林省', value: Math.round(Math.random() * 500)},
                  {name: '福建省', value: Math.round(Math.random() * 500)},
                  {name: '贵州省', value: Math.round(Math.random() * 500)},
                  {name: '广东省', value: Math.round(Math.random() * 500)},
                  {name: '青海省', value: Math.round(Math.random() * 500)},
                  {name: '西藏自治区', value: Math.round(Math.random() * 500)},
                  {name: '四川省', value: Math.round(Math.random() * 500)},
                  {name: '宁夏回族自治区', value: Math.round(Math.random() * 500)},
                  {name: '海南省', value: Math.round(Math.random() * 500)},
                  {name: '台湾省', value: Math.round(Math.random() * 500)},
                  {name: '香港特别行政区', value: Math.round(Math.random() * 500)},
                  {name: '澳门特别行政区', value: Math.round(Math.random() * 500)},
                  {name: '南海诸岛', value: Math.round(Math.random() * 500)}
                ],
                // 自定义名称映射
              }
            ]
          });
        },response =>{
          console.log("error")
        });
      },
    }
  }
</script>

<style scoped>
  #main {
    width: 1000px;
    height: 800px;
    position: absolute;
    left: calc(50% - 500px);
    top: 100px;
  }
</style>
