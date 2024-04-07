const toUpperCase = (str) => str.charAt(0).toUpperCase() + str.slice(1)

export default {
  description: '创建组件',
  prompts: [
    {
      type: 'input',
      name: 'name',
      message: '请输入组件名称',
      default: 'NewComponent',
      validate: (value) => {
        if (/^[A-Za-z]+$/.test(value)) {
          return true
        }
        return '组件名称只能为英文字符'
      }
    }
  ],
  actions: (data) => {
    const { name } = data
    const upperFirstName = toUpperCase(name)
    const kebabName = name.replace(/([a-z])([A-Z])/g, '$1-$2').toLowerCase()

    const actions = []
    if (name) {
      actions.push(
        {
          type: 'add',
          path: `./src/components/${upperFirstName}/src/${upperFirstName}.vue`,
          templateFile: './plop/component/component.hbs',
          data: {
            name,
            upperFirstName,
            kebabName
          }
        },
        {
          type: 'add',
          path: `./src/components/${upperFirstName}/index.ts`,
          templateFile: './plop/component/index.hbs',
          data: {
            upperFirstName
          }
        }
      )
    }

    return actions
  }
}
