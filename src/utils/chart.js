// echarts 的基本配置
export const chartDefaultOptions = {
  title: {
    text: '',
    left: 'center',
    padding: 10,
    textStyle: {
      color: '#fff'
    }
  },
  legend: {
    top: 40,
    textStyle: {
      color: '#fff'
    }
  },
  tooltip: {
    trigger: 'axis',
    axisPointer: {
      type: 'cross',
      label: {
        backgroundColor: 'rgba(0, 0, 0, .6)'
      }
    }
  },
  grid: {
    containLabel: true
  },
  xAxis: {
    type: 'category',
    boundaryGap: false,
    axisLine: {
      lineStyle: {
        color: '#fff'
      }
    },
    axisTick: {
      lineStyle: {
        color: '#fff'
      }
    }
  },
  yAxis: {
    type: 'value',
    nameLocation: 'end',
    scale: true,
    minInterval: 1,
    splitLine: {
      show: false
    },
    nameTextStyle: {
      color: '#fff'
    },
    axisLine: {
      lineStyle: {
        color: '#fff'
      }
    },
    axisTick: {
      lineStyle: {
        color: '#fff'
      }
    }
  },
  series: []
};

export const dataSliderZoom = {
  dataZoom: [
    {
      type: 'slider',
      xAxisIndex: [0],
      start: 0,
      end: 40,
      handleIcon: 'M10.7,11.9v-1.3H9.3v1.3c-4.9,0.3-8.8,4.4-8.8,9.4c0,5,3.9,9.1,8.8,9.4v1.3h1.3v-1.3c4.9-0.3,8.8-4.4,8.8-9.4C19.5,16.3,15.6,12.2,10.7,11.9z M13.3,24.4H6.7V23h6.6V24.4z M13.3,19.6H6.7v-1.4h6.6V19.6z',
      handleSize: '80%',
      handleStyle: {
        color: '#fff',
        shadowBlur: 3,
        shadowColor: 'rgba(0, 0, 0, 0.6)',
        shadowOffsetX: 2,
        shadowOffsetY: 2
      },
      textStyle: {
        color: '#fff'
      }
    }
  ]
};
