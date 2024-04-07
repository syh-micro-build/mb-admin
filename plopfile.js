import viewGenerator from './plop/view/prompt.js'
import componentGenerator from './plop/component/prompt.js'

export default function (plop) {
  plop.setWelcomeMessage('请选择代码生成器类型')
  plop.setGenerator('view', viewGenerator)
  plop.setGenerator('component', componentGenerator)
}
