import Mock from 'mockjs'
import { SUCCESS_CODE } from '../../src/constants'

const timeout = 1000

export default [
  // 列表接口
  {
    url: '/mock/menu/list',
    method: 'get',
    timeout,
    response: () => {
      return {
        code: SUCCESS_CODE,
        data: {
          list: [
            {
              path: '/example',
              component: '#',
              redirect: '/example/example-dialog',
              name: 'Example',
              status: Mock.Random.integer(0, 1),
              id: 12,
              type: 0,
              parentId: undefined,
              title: '综合示例',
              meta: {
                title: '综合示例',
                icon: 'ep:management',
                alwaysShow: true
              },
              children: [
                {
                  path: 'example-dialog',
                  component: 'views/Example/Dialog/ExampleDialog',
                  name: 'ExampleDialog',
                  status: Mock.Random.integer(0, 1),
                  id: 13,
                  type: 1,
                  parentId: 12,
                  title: '综合示例-弹窗',
                  permissionList: [
                    {
                      id: 1,
                      label: '新增',
                      value: 'add'
                    },
                    {
                      id: 2,
                      label: '编辑',
                      value: 'edit'
                    },
                    {
                      id: 3,
                      label: '删除',
                      value: 'delete'
                    },
                    {
                      id: 4,
                      label: '查看',
                      value: 'view'
                    }
                  ],
                  meta: {
                    title: '综合示例-弹窗'
                  }
                },
                {
                  path: 'example-page',
                  component: 'views/Example/Page/ExamplePage',
                  name: 'ExamplePage',
                  status: Mock.Random.integer(0, 1),
                  id: 14,
                  type: 1,
                  parentId: 12,
                  title: '综合示例-页面',
                  permissionList: [
                    {
                      id: 1,
                      label: '新增',
                      value: 'edit'
                    },
                    {
                      id: 2,
                      label: '编辑',
                      value: 'edit'
                    },
                    {
                      id: 3,
                      label: '删除',
                      value: 'delete'
                    },
                    {
                      id: 4,
                      label: '查看',
                      value: 'view'
                    }
                  ],
                  meta: {
                    title: '综合示例-页面'
                  }
                },
                {
                  path: 'example-add',
                  component: 'views/Example/Page/ExampleAdd',
                  name: 'ExampleAdd',
                  status: Mock.Random.integer(0, 1),
                  id: 15,
                  type: 1,
                  parentId: 12,
                  title: '综合示例-新增',
                  meta: {
                    title: '综合示例-新增',
                    noTagsView: true,
                    noCache: true,
                    hidden: true,
                    showMainRoute: true,
                    activeMenu: '/example/example-page'
                  }
                },
                {
                  path: 'example-edit',
                  component: 'views/Example/Page/ExampleEdit',
                  name: 'ExampleEdit',
                  status: Mock.Random.integer(0, 1),
                  id: 16,
                  type: 1,
                  parentId: 12,
                  title: '综合示例-编辑',
                  meta: {
                    title: '综合示例-编辑',
                    noTagsView: true,
                    noCache: true,
                    hidden: true,
                    showMainRoute: true,
                    activeMenu: '/example/example-page'
                  }
                },
                {
                  path: 'example-detail',
                  component: 'views/Example/Page/ExampleDetail',
                  name: 'ExampleDetail',
                  status: Mock.Random.integer(0, 1),
                  id: 17,
                  type: 1,
                  parentId: 12,
                  title: '综合示例-详情',
                  meta: {
                    title: '综合示例-详情',
                    noTagsView: true,
                    noCache: true,
                    hidden: true,
                    showMainRoute: true,
                    activeMenu: '/example/example-page'
                  }
                }
              ]
            }
          ]
        }
      }
    }
  }
]
