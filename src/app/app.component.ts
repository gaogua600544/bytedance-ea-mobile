import { Component, ViewChild, OnInit } from '@angular/core';
import { ToastComponent, ToastService } from 'ngx-weui';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html'
})
export class AppComponent implements OnInit {
  title = 'Bytedance-ea-mobile';

  option: any;
  @ViewChild('success') successToast: ToastComponent;
  constructor(public srv: ToastService) {
  }
  ngOnInit() {
    // 解决css伪类无效的问题
    document.body.addEventListener('touchstart', function () { });
    // this.option = {
    //   color: ['#3398DB'],
    //   tooltip: {
    //     trigger: 'axis',
    //     axisPointer: {            // 坐标轴指示器，坐标轴触发有效
    //       type: 'shadow'        // 默认为直线，可选为：'line' | 'shadow'
    //     }
    //   },
    //   grid: {
    //     left: '3%',
    //     right: '4%',
    //     bottom: '3%',
    //     containLabel: true
    //   },
    //   xAxis: [
    //     {
    //       type: 'category',
    //       data: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'],
    //       axisTick: {
    //         alignWithLabel: true
    //       }
    //     }
    //   ],
    //   yAxis: [
    //     {
    //       type: 'value'
    //     }
    //   ],
    //   series: [
    //     {
    //       name: '直接访问',
    //       type: 'bar',
    //       barWidth: '60%',
    //       data: [10, 52, 200, 334, 390, 330, 220]
    //     }
    //   ]
    // };
    // 初始化echarts实例
    // @ts-ignore
    // const myChart = echarts.init(document.getElementById('chartmain'));

    // 使用制定的配置项和数据显示图表
    // myChart.setOption(this.option);
  }

}
