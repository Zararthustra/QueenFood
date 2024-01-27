import { TooltipItem } from 'chart.js';
import ChartJsImage from 'chartjs-to-image';

export const MBChartImage = (
  MBs: { value: number; name: string }[]
): string => {
  const chart = new ChartJsImage();
  chart.setChartJsVersion('4.4.1');
  chart.setConfig({
    type: 'bar',
    data: {
      labels: MBs.map((mb) => mb.name),
      datasets: [
        {
          label: 'Kcal/jour',
          data: MBs.map((mb) => mb.value),
          borderColor: '#17919A',
          backgroundColor: '#ace1e577'
        }
      ]
    },
    options: {
      scales: {
        y: {
          grid: {
            color: '#33415519'
          },
          ticks: {
            color: '#334155'
          }
        },
        x: {
          grid: {
            color: '#33415519'
          },
          ticks: {
            color: '#334155'
          }
        }
      },
      indexAxis: 'y',
      elements: {
        bar: {
          borderWidth: 1
        }
      },
      color: '#334155',
      responsive: true,
      plugins: {
        legend: {
          position: 'top'
        }
      }
    }
  });

  return chart.getUrl();
};

export const IMCGAChartImage = (
  IMC: number,
  IMG: number,
  IMA: number
): string => {
  const chart = new ChartJsImage();
  chart.setChartJsVersion('4.4.1');
  chart.setConfig({
    type: 'polarArea',
    data: {
      labels: ['IMA', 'IMG', 'IMC'],
      datasets: [
        {
          data: [IMA, IMG, IMC],
          backgroundColor: ['#21b1ff79', '#ffd80079', '#ff218c79'],
          hoverOffset: 10,
          borderWidth: 0.5
        }
      ]
    },
    options: {
      scales: {
        r: {
          ticks: {
            backdropColor: '#F8FAFC',
            color: 'black'
          },
          grid: {
            lineWidth: 0.5,
            color: '#C1C1C1'
          },
          pointLabels: {
            display: true,
            centerPointLabels: true,
            color: '#334155',
            font: {
              size: 15
            }
          }
        }
      },
      responsive: true,
      plugins: {
        legend: {
          display: false,
          position: 'top' as const
        }
      }
    }
  });

  return chart.getUrl();
};

export const MNChartImage = (selectedMB: number): string => {
  const MBPercentage = (percent: number) => (percent * selectedMB) / 100;
  const chart = new ChartJsImage();
  chart.setChartJsVersion('4.4.1');
  chart.setConfig({
    type: 'bar',
    data: {
      labels: [
        'Prise de poids',
        'Maintien',
        'Perte de poids',
        'Sèche'
        //   "Cétogène",
      ],
      datasets: [
        {
          label: 'Glucides',
          data: [
            MBPercentage(60),
            MBPercentage(55),
            MBPercentage(50),
            MBPercentage(40)
            //   MBPercentage(45),
          ],
          borderColor: '#F3BE00',
          backgroundColor: '#F3BE0077'
        },
        {
          label: 'Protéines',
          data: [
            MBPercentage(25),
            MBPercentage(30),
            MBPercentage(30),
            MBPercentage(40)
            //   MBPercentage(25),
          ],
          borderColor: '#FF5E07',
          backgroundColor: '#FF5E0777'
        },
        {
          label: 'Lipides',
          data: [
            MBPercentage(15),
            MBPercentage(15),
            MBPercentage(20),
            MBPercentage(20)
            //   MBPercentage(30),
          ],
          borderColor: '#FC003B',
          backgroundColor: '#FC003B77'
        }
      ]
    },
    options: {
      scales: {
        y: {
          stacked: true,
          grid: {
            color: '#33415519'
          },
          ticks: {
            color: '#334155'
          }
        },
        x: {
          stacked: true,
          grid: {
            color: '#33415519'
          },
          ticks: {
            color: '#334155'
          }
        }
      },
      indexAxis: 'y' as const,
      elements: {
        bar: {
          borderWidth: 1
        }
      },
      color: '#334155',
      responsive: true,
      plugins: {
        legend: {
          position: 'top' as const
        },
        tooltip: {
          mode: 'index' as const,
          callbacks: {
            label: (tooltipItem: TooltipItem<'bar'>) => {
              const value = tooltipItem.formattedValue;
              const percent = Math.round(
                ((tooltipItem.raw as number) * 100) / selectedMB
              );
              const label = tooltipItem.dataset.label;

              return percent + '% de ' + label + ': ' + value + ' Kcal';
            }
          }
        }
      }
    }
  });

  return chart.getUrl();
};
