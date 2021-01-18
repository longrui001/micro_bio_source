<template>
  <div id="main" ></div>
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
          let myChart = echarts.init(document.getElementById('main'),{renderer: 'svg'});
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
            /* toolbox: {
               show: true,
               orient: 'vertical',
               left: 'right',
               top: 'center',
               feature: {
                 dataView: {readOnly: false},
                 restore: {},
                 saveAsImage: {}
               }
             },*/
            visualMap: {
              min: 0,
              max: 700,
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
                  normal: {
                    show: true,
                    textStyle: {
                      fontSize: 12,
                    }
                  }
                },
                data: [
                  {name: '北京', value: Math.round(Math.random() * 500)},
                  {name: '天津', value: Math.round(Math.random() * 500)},
                  {name: '上海', value: Math.round(Math.random() * 500)},
                  {name: '重庆', value: Math.round(Math.random() * 500)},
                  {name: '河北', value: Math.round(Math.random() * 500)},
                  {name: '河南', value: Math.round(Math.random() * 500)},
                  {name: '云南', value: Math.round(Math.random() * 500)},
                  {name: '辽宁', value: Math.round(Math.random() * 500)},
                  {name: '黑龙江', value: Math.round(Math.random() * 500)},
                  {name: '湖南', value: Math.round(Math.random() * 500)},
                  {name: '安徽', value: Math.round(Math.random() * 500)},
                  {name: '山东', value: Math.round(Math.random() * 500)},
                  {name: '新疆', value: Math.round(Math.random() * 500)},
                  {name: '江苏', value: Math.round(Math.random() * 500)},
                  {name: '浙江', value: Math.round(Math.random() * 500)},
                  {name: '江西', value: Math.round(Math.random() * 500)},
                  {name: '湖北', value: Math.round(Math.random() * 500)},
                  {name: '广西', value: Math.round(Math.random() * 500)},
                  {name: '甘肃', value: Math.round(Math.random() * 500)},
                  {name: '山西', value: Math.round(Math.random() * 500)},
                  {name: '内蒙古', value: Math.round(Math.random() * 500)},
                  {name: '陕西', value: Math.round(Math.random() * 500)},
                  {name: '吉林', value: Math.round(Math.random() * 500)},
                  {name: '福建', value: Math.round(Math.random() * 500)},
                  {name: '贵州', value: Math.round(Math.random() * 500)},
                  {name: '广东', value: Math.round(Math.random() * 500)},
                  {name: '青海', value: Math.round(Math.random() * 500)},
                  {name: '西藏', value: Math.round(Math.random() * 500)},
                  {name: '四川', value: Math.round(Math.random() * 500)},
                  {name: '宁夏', value: Math.round(Math.random() * 500)},
                  {name: '海南', value: Math.round(Math.random() * 500)},
                  {name: '台湾', value: Math.round(Math.random() * 500)},
                  {name: '香港', value: Math.round(Math.random() * 500)},
                  {name: '澳门', value: Math.round(Math.random() * 500)},
                  {name: '南海诸岛', value: Math.round(Math.random() * 500)},
                  {name: '钓鱼岛', value: Math.round(Math.random() * 500)}
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
    width: 800px;
    height: 600px;
    position: absolute;
    left: calc(50% - 500px);
    top: 30px;
  }
</style>
