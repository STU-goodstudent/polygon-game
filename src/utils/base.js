// 获取随机的颜色
export const getRandomColor = () => {
  const COLORS = [
    '#f44336',
    '#ff4081',
    '#aa00ff',
    '#651fff',
    '#304ffe',
    '#2196f3',
    '#0277bd',
    '#18ffff',
    '#00796b',
    '#4caf50',
    '#76ff03',
    '#eeff41',
    '#ffeb3b',
    '#ffa000',
    '#e65100',
    '#ff7043',
    '#8d6e63',
    '#9e9e9e',
    '#607d8b',
    '#ffe0b2'
  ]
  return COLORS[parseInt(Math.random() * COLORS.length)]
}

// canvas画圆
export const drawCircle = (context, x, y, radius, color) => {
  context.fillStyle = color
  context.beginPath()
  context.arc(x, y, radius, 0, Math.PI * 2, true)
  context.closePath()
  context.stroke()
  context.fill()
}

// 随机生成数据和操作符
export const generateRandomData = () => {}
