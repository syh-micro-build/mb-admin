const toUpperCase = (str) => str.charAt(0).toUpperCase() + str.slice(1)

export default {
  description: '创建视图',
  prompts: [
    {
      type: 'input',
      name: 'path',
      message: '请输入路径',
      default: 'views/NewView'
    },
    {
      type: 'input',
      name: 'name',
      message: '请输入模块名称',
      default: 'NewPage'
    }
  ],
  actions: (data) => {
    const { name, path } = data
    const upperFirstName = toUpperCase(name)
    const kebabName = name.replace(/([a-z])([A-Z])/g, '$1-$2').toLowerCase()

    const actions = []
    if (name) {
      actions.push({
        type: 'add',
        path: `./src/${path}/${upperFirstName}.vue`,
        templateFile: './plop/view/view.hbs',
        data: {
          name,
          upperFirstName,
          kebabName
        }
      })
    }

    return actions
  }
}
