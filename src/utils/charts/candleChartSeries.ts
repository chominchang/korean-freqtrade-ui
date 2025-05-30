import type { IndicatorConfig } from '@/types';
import { ChartType } from '@/types';
import type { BarSeriesOption, LineSeriesOption, ScatterSeriesOption } from 'echarts';

export type SupportedSeriesTypes = LineSeriesOption | BarSeriesOption | ScatterSeriesOption;

export function generateCandleSeries(
  colDate: number,
  col: number,
  key: string,
  value: IndicatorConfig,
  axis = 0,
): SupportedSeriesTypes {
  const sp: SupportedSeriesTypes = {
    name: key,
    type: value.type || 'line',
    xAxisIndex: axis,
    yAxisIndex: axis,
    itemStyle: {
      color: value.color || randomColor(),
    },
    encode: {
      x: colDate,
      y: col,
    },
    showSymbol: false,
  };
  if (value.type === ChartType.scatter) {
    sp['symbolSize'] = value.scatterSymbolSize ?? 3;
    sp['emphasis'] = {
      disabled: true,
    };
  }
  return sp;
}

export function generateAreaCandleSeries(
  colDate: number,
  fillCol: number,
  key: string,
  value: IndicatorConfig,
  axis = 0,
): SupportedSeriesTypes {
  const fillValue: IndicatorConfig = {
    // color: value.color;
    type: ChartType.line,
  };
  const areaSeries = generateCandleSeries(
    colDate,
    fillCol,
    key,
    fillValue,
    axis,
  ) as LineSeriesOption;

  const areaOptions: LineSeriesOption = {
    stack: key,
    stackStrategy: 'all',
    lineStyle: {
      opacity: 0,
    },
    showSymbol: false,
    areaStyle: {
      color: value.color,
      opacity: 0.1,
    },
    tooltip: {
      show: false, // hide value on tooltip
    },
  };

  Object.assign(areaSeries, areaOptions);

  return areaSeries;
}
