<script setup lang="tsx">
import { Form } from '@/components/Form'
import { reactive, ref, onMounted, computed } from 'vue'
import { ContentWrap } from '@/components/ContentWrap'
import { useAppStore } from '@/stores/app'
import type { SelectOption, RadioOption, CheckboxOption, FormSchema } from '@/components/Form'
import {
  ElOption,
  ElOptionGroup,
  ElRadio,
  ElRadioButton,
  ElCheckbox,
  ElCheckboxButton,
  ElInput,
  ElMessage,
  ElMessageBox,
  ElIcon
} from 'element-plus'
import { getDictOneApi } from '@/api/common'
import { Icon } from '@/components/Icon'
import { BaseButton } from '@/components/Button'

const appStore = useAppStore()

const isMobile = computed(() => appStore.getMobile)

const restaurants = ref<Recordable[]>([])
const querySearch = (queryString: string, cb: Fn) => {
  const results = queryString
    ? restaurants.value.filter(createFilter(queryString))
    : restaurants.value
  // call callback function to return suggestions
  cb(results)
}
let timeout: string | number | NodeJS.Timeout | undefined
const querySearchAsync = (queryString: string, cb: (arg: any) => void) => {
  const results = queryString
    ? restaurants.value.filter(createFilter(queryString))
    : restaurants.value

  clearTimeout(timeout)
  timeout = setTimeout(() => {
    cb(results)
  }, 3000 * Math.random())
}
const createFilter = (queryString: string) => {
  return (restaurant: Recordable) => {
    return restaurant.value.toLowerCase().indexOf(queryString.toLowerCase()) === 0
  }
}
const loadAll = () => {
  return [
    { value: 'vue', link: 'https://github.com/vuejs/vue' },
    { value: 'element', link: 'https://github.com/ElemeFE/element' },
    { value: 'cooking', link: 'https://github.com/ElemeFE/cooking' },
    { value: 'mint-ui', link: 'https://github.com/ElemeFE/mint-ui' },
    { value: 'vuex', link: 'https://github.com/vuejs/vuex' },
    { value: 'vue-router', link: 'https://github.com/vuejs/vue-router' },
    { value: 'babel', link: 'https://github.com/babel/babel' }
  ]
}
const handleSelect = (item: Recordable) => {
  console.log(item)
}
onMounted(() => {
  restaurants.value = loadAll()
})

const initials = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j']
const options = ref(
  Array.from({ length: 1000 }).map((_, idx) => ({
    value: `Option ${idx + 1}`,
    label: `${initials[idx % 10]}${idx}`
  }))
)
const options2 = ref(
  Array.from({ length: 10 }).map((_, idx) => {
    const label = idx + 1
    return {
      value: `Group ${label}`,
      label: `Group ${label}`,
      options: Array.from({ length: 10 }).map((_, idx) => ({
        value: `Option ${idx + 1 + 10 * label}`,
        label: `${initials[idx % 10]}${idx + 1 + 10 * label}`
      }))
    }
  })
)

const options3 = [
  {
    value: 'guide',
    label: 'Guide',
    children: [
      {
        value: 'disciplines',
        label: 'Disciplines',
        children: [
          {
            value: 'consistency',
            label: 'Consistency'
          },
          {
            value: 'feedback',
            label: 'Feedback'
          },
          {
            value: 'efficiency',
            label: 'Efficiency'
          },
          {
            value: 'controllability',
            label: 'Controllability'
          }
        ]
      },
      {
        value: 'navigation',
        label: 'Navigation',
        children: [
          {
            value: 'side nav',
            label: 'Side Navigation'
          },
          {
            value: 'top nav',
            label: 'Top Navigation'
          }
        ]
      }
    ]
  },
  {
    value: 'component',
    label: 'Component',
    children: [
      {
        value: 'basic',
        label: 'Basic',
        children: [
          {
            value: 'layout',
            label: 'Layout'
          },
          {
            value: 'color',
            label: 'Color'
          },
          {
            value: 'typography',
            label: 'Typography'
          },
          {
            value: 'icon',
            label: 'Icon'
          },
          {
            value: 'button',
            label: 'Button'
          }
        ]
      },
      {
        value: 'form',
        label: 'Form',
        children: [
          {
            value: 'radio',
            label: 'Radio'
          },
          {
            value: 'checkbox',
            label: 'Checkbox'
          },
          {
            value: 'input',
            label: 'Input'
          },
          {
            value: 'input-number',
            label: 'InputNumber'
          },
          {
            value: 'select',
            label: 'Select'
          },
          {
            value: 'cascader',
            label: 'Cascader'
          },
          {
            value: 'switch',
            label: 'Switch'
          },
          {
            value: 'slider',
            label: 'Slider'
          },
          {
            value: 'time-picker',
            label: 'TimePicker'
          },
          {
            value: 'date-picker',
            label: 'DatePicker'
          },
          {
            value: 'datetime-picker',
            label: 'DateTimePicker'
          },
          {
            value: 'upload',
            label: 'Upload'
          },
          {
            value: 'rate',
            label: 'Rate'
          },
          {
            value: 'form',
            label: 'Form'
          }
        ]
      },
      {
        value: 'data',
        label: 'Data',
        children: [
          {
            value: 'table',
            label: 'Table'
          },
          {
            value: 'tag',
            label: 'Tag'
          },
          {
            value: 'progress',
            label: 'Progress'
          },
          {
            value: 'tree',
            label: 'Tree'
          },
          {
            value: 'pagination',
            label: 'Pagination'
          },
          {
            value: 'badge',
            label: 'Badge'
          }
        ]
      },
      {
        value: 'notice',
        label: 'Notice',
        children: [
          {
            value: 'alert',
            label: 'Alert'
          },
          {
            value: 'loading',
            label: 'Loading'
          },
          {
            value: 'message',
            label: 'Message'
          },
          {
            value: 'message-box',
            label: 'MessageBox'
          },
          {
            value: 'notification',
            label: 'Notification'
          }
        ]
      },
      {
        value: 'navigation',
        label: 'Navigation',
        children: [
          {
            value: 'menu',
            label: 'Menu'
          },
          {
            value: 'tabs',
            label: 'Tabs'
          },
          {
            value: 'breadcrumb',
            label: 'Breadcrumb'
          },
          {
            value: 'dropdown',
            label: 'Dropdown'
          },
          {
            value: 'steps',
            label: 'Steps'
          }
        ]
      },
      {
        value: 'others',
        label: 'Others',
        children: [
          {
            value: 'dialog',
            label: 'Dialog'
          },
          {
            value: 'tooltip',
            label: 'Tooltip'
          },
          {
            value: 'popover',
            label: 'Popover'
          },
          {
            value: 'card',
            label: 'Card'
          },
          {
            value: 'carousel',
            label: 'Carousel'
          },
          {
            value: 'collapse',
            label: 'Collapse'
          }
        ]
      }
    ]
  }
]

const generateData = () => {
  const data: {
    value: number
    desc: string
    disabled: boolean
  }[] = []
  for (let i = 1; i <= 15; i++) {
    data.push({
      value: i,
      desc: `Option ${i}`,
      disabled: i % 4 === 0
    })
  }
  return data
}

const holidays = [
  '2021-10-01',
  '2021-10-02',
  '2021-10-03',
  '2021-10-04',
  '2021-10-05',
  '2021-10-06',
  '2021-10-07'
]

const isHoliday = ({ dayjs }: any) => {
  return holidays.includes(dayjs.format('YYYY-MM-DD'))
}

const treeSelectData = [
  {
    value: '1',
    label: 'Level one 1',
    children: [
      {
        value: '1-1',
        label: 'Level two 1-1',
        children: [
          {
            value: '1-1-1',
            label: 'Level three 1-1-1'
          }
        ]
      }
    ]
  },
  {
    value: '2',
    label: 'Level one 2',
    children: [
      {
        value: '2-1',
        label: 'Level two 2-1',
        children: [
          {
            value: '2-1-1',
            label: 'Level three 2-1-1'
          }
        ]
      },
      {
        value: '2-2',
        label: 'Level two 2-2',
        children: [
          {
            value: '2-2-1',
            label: 'Level three 2-2-1'
          }
        ]
      }
    ]
  },
  {
    value: '3',
    label: 'Level one 3',
    children: [
      {
        value: '3-1',
        label: 'Level two 3-1',
        children: [
          {
            value: '3-1-1',
            label: 'Level three 3-1-1'
          }
        ]
      },
      {
        value: '3-2',
        label: 'Level two 3-2',
        children: [
          {
            value: '3-2-1',
            label: 'Level three 3-2-1'
          }
        ]
      }
    ]
  }
]

// 模拟远程加载
const getTreeSelectData = () => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(treeSelectData)
    }, 3000)
  })
}

let id = 0

const imageUrl = ref('')

const schema = reactive<FormSchema[]>([
  {
    field: 'field1',
    label: '输入框',
    component: 'Divider'
  },
  {
    field: 'field2',
    label: '默认',
    component: 'Input',
    componentProps: {
      formatter: (value: any) => `$ ${value}`.replace(/\B(?=(\d{3})+(?!\d))/g, ','),
      parser: (value: string) => value.replace(/\$\s?|(,*)/g, '')
    }
  },
  {
    field: 'field3',
    label: `图标1`,
    component: 'Input',
    componentProps: {
      suffixIcon: <Icon icon="ep:calendar" />,
      prefixIcon: <Icon icon="ep:share" />
    }
  },
  {
    field: 'field4',
    label: `图标2`,
    component: 'Input',
    componentProps: {
      slots: {
        suffix: () => {
          return <Icon icon="ep:share" />
        },
        prefix: () => <Icon icon="ep:calendar" />
      }
    }
  },
  {
    field: 'field5',
    label: '复合型',
    component: 'Input',
    componentProps: {
      slots: {
        prepend: () => <Icon icon="ep:calendar" />,
        append: () => <Icon icon="ep:share" />
      }
    }
  },
  {
    field: 'input-field7',
    label: '密码框',
    component: 'Input',
    componentProps: {
      showPassword: true
    }
  },
  {
    field: 'field6',
    label: '	多行文本',
    component: 'Input',
    componentProps: {
      type: 'textarea',
      rows: 2
    }
  },
  {
    field: 'field7',
    label: '自动补全',
    component: 'Divider'
  },
  {
    field: 'field8',
    label: '默认',
    component: 'Autocomplete',
    componentProps: {
      fetchSuggestions: querySearch,
      on: {
        select: handleSelect
      }
    }
  },
  {
    field: 'field9',
    label: '插槽',
    component: 'Autocomplete',
    componentProps: {
      fetchSuggestions: querySearch,
      on: {
        select: handleSelect
      },
      slots: {
        default: ({ item }: any) => {
          return (
            <>
              <div class="value">{item?.value}</div>
              <span class="link">{item?.link}</span>
            </>
          )
        }
      }
    }
  },
  {
    field: 'autocomplete-field10',
    label: '远程搜索',
    component: 'Autocomplete',
    componentProps: {
      fetchSuggestions: querySearchAsync,
      on: {
        select: handleSelect
      }
    }
  },
  {
    field: 'field10',
    component: 'Divider',
    label: '数字输入框'
  },
  {
    field: 'field11',
    label: '默认',
    component: 'InputNumber',
    value: 0
  },
  {
    field: 'field12',
    label: '位置',
    component: 'InputNumber',
    componentProps: {
      controlsPosition: 'right'
    },
    value: 10
  },
  {
    field: 'field13',
    label: '选择器',
    component: 'Divider'
  },
  {
    field: 'field14',
    label: '默认',
    component: 'Select',
    componentProps: {
      options: [
        {
          disabled: true,
          label: 'option1',
          value: '1'
        },
        {
          label: 'option2',
          value: '2'
        }
      ]
    }
  },
  {
    field: 'field15',
    label: '插槽',
    component: 'Select',
    componentProps: {
      options: [
        {
          label: 'option1',
          value: '1'
        },
        {
          label: 'option2',
          value: '2'
        }
      ],
      slots: {
        default: (options: SelectOption[]) => {
          if (options.length) {
            return options?.map((v) => {
              return <ElOption key={v.value} label={v.label} value={v.value} />
            })
          } else {
            return null
          }
        },
        prefix: () => <Icon icon="ep:calendar" />
      }
    }
  },
  {
    field: 'select-field18',
    label: '选项插槽',
    component: 'Select',
    componentProps: {
      options: [
        {
          value: 'Beijing',
          label: 'Beijing'
        },
        {
          value: 'Shanghai',
          label: 'Shanghai'
        },
        {
          value: 'Nanjing',
          label: 'Nanjing'
        },
        {
          value: 'Chengdu',
          label: 'Chengdu'
        },
        {
          value: 'Shenzhen',
          label: 'Shenzhen'
        },
        {
          value: 'Guangzhou',
          label: 'Guangzhou'
        }
      ],
      slots: {
        optionDefault: (option: SelectOption) => {
          return (
            <>
              <span style="float: left">{option.label}</span>
              <span style="float: right; color: var(--el-text-color-secondary); font-size: 13px;">
                {option.value}
              </span>
            </>
          )
        }
      }
    }
  },
  {
    field: 'field16',
    label: '选项分组',
    component: 'Select',
    componentProps: {
      options: [
        {
          label: 'option1',
          options: [
            {
              disabled: true,
              label: 'option1-1',
              value: '1-1'
            },
            {
              label: 'option1-2',
              value: '1-2'
            }
          ]
        },
        {
          label: 'option2',
          options: [
            {
              label: 'option2-1',
              value: '2-1'
            },
            {
              label: 'option2-2',
              value: '2-2'
            }
          ]
        }
      ]
    }
  },
  {
    field: 'field17',
    label: `选项分组 插槽`,
    component: 'Select',
    componentProps: {
      options: [
        {
          label: 'option1',
          options: [
            {
              label: 'option1-1',
              value: '1-1'
            },
            {
              label: 'option1-2',
              value: '1-2'
            }
          ]
        },
        {
          label: 'option2',
          options: [
            {
              label: 'option2-1',
              value: '2-1'
            },
            {
              label: 'option2-2',
              value: '2-2'
            }
          ]
        }
      ],
      slots: {
        optionGroupDefault: (option: SelectOption) => {
          return (
            <ElOptionGroup key={option.label} label={`${option.label} ${option.label}`}>
              {option?.options?.map((v) => {
                return <ElOption key={v.value} label={v.label} value={v.value} />
              })}
            </ElOptionGroup>
          )
        }
      }
    }
  },
  {
    field: 'field18',
    label: `虚拟列表选择器`,
    component: 'Divider'
  },
  {
    field: 'field19',
    label: '默认',
    component: 'SelectV2',
    componentProps: {
      value: undefined,
      options: options.value
    }
  },
  {
    field: 'field20',
    label: '插槽',
    component: 'SelectV2',
    componentProps: {
      options: options.value,
      slots: {
        default: (option: SelectOption) => {
          return (
            <>
              <span style="margin-right: 8px">{option?.label}</span>
              <span style="color: var(--el-text-color-secondary); font-size: 13px">
                {option?.value}
              </span>
            </>
          )
        }
      }
    }
  },
  {
    field: 'field21',
    label: '选项分组',
    component: 'SelectV2',
    componentProps: {
      options: options2.value
    }
  },
  {
    field: 'field22',
    label: `选项分组 插槽`,
    component: 'SelectV2',
    componentProps: {
      options: options2.value,
      slots: {
        default: (option: SelectOption) => {
          return (
            <>
              <span style="margin-right: 8px">{option?.label}</span>
              <span style="color: var(--el-text-color-secondary); font-size: 13px">
                {option?.value}
              </span>
            </>
          )
        }
      }
    }
  },
  {
    field: 'field23',
    label: '级联选择器',
    component: 'Divider'
  },
  {
    field: 'field24',
    label: '默认',
    component: 'Cascader',
    componentProps: {
      options: options3,
      props: {
        multiple: true
      }
    }
  },
  {
    field: 'field25',
    label: '插槽',
    component: 'Cascader',
    componentProps: {
      options: options3,
      slots: {
        default: ({ data, node }: any) => {
          return (
            <>
              <span>{data.label}</span>
              {!node.isLeaf ? <span> ({data.children.length}) </span> : null}
            </>
          )
        }
      }
    }
  },
  {
    field: 'field26',
    label: '开关',
    component: 'Divider'
  },
  {
    field: 'field27',
    label: '默认',
    component: 'Switch',
    value: false
  },
  {
    field: 'field28',
    label: '图标',
    component: 'Switch',
    value: false,
    componentProps: {
      activeIcon: <Icon icon="ep:check" />,
      inactiveIcon: <Icon icon="ep:close" />
    }
  },
  {
    field: 'field29',
    label: '评分',
    component: 'Divider'
  },
  {
    field: 'field30',
    label: '默认',
    component: 'Rate',
    value: 0
  },
  {
    field: 'field31',
    label: '图标',
    component: 'Rate',
    value: null,
    componentProps: {
      voidIcon: <Icon icon="ep:chat-round" />,
      icons: [
        <Icon icon="ep:chat-round" />,
        <Icon icon="ep:chat-line-round" />,
        <Icon icon="ep:chat-dot-round" />
      ]
    }
  },
  {
    field: 'field32',
    label: '颜色选择器',
    component: 'Divider'
  },
  {
    field: 'field33',
    label: '默认',
    component: 'ColorPicker'
  },
  {
    field: 'field34',
    label: '穿梭框',
    component: 'Divider'
  },
  {
    field: 'field35',
    label: '默认',
    component: 'Transfer',
    componentProps: {
      props: {
        key: 'value',
        label: 'desc'
      },
      data: generateData()
    },
    value: [],
    colProps: {
      span: 24
    }
  },
  {
    field: 'field36',
    label: '插槽',
    component: 'Transfer',
    componentProps: {
      props: {
        key: 'value',
        label: 'desc'
      },
      filterable: true,
      leftDefaultChecked: [2, 3],
      rightDefaultChecked: [1],
      titles: ['Source', 'Target'],
      buttonTexts: ['To Left', 'To Right'],
      format: {
        noChecked: '${total}',
        hasChecked: '${checked}/${total}'
      },
      data: generateData(),
      slots: {
        default: ({ option }: any) => {
          return (
            <span>
              {option.value} - {option.desc}
            </span>
          )
        },
        leftFooter: () => {
          return (
            <BaseButton class="transfer-footer" size="small">
              Operation
            </BaseButton>
          )
        },
        rightFooter: () => {
          return (
            <BaseButton class="transfer-footer" size="small">
              Operation
            </BaseButton>
          )
        }
      }
    },
    value: [1],
    colProps: {
      span: 24
    }
  },
  {
    field: 'field37',
    label: `渲染器`,
    component: 'Transfer',
    componentProps: {
      props: {
        key: 'value',
        label: 'desc',
        disabled: 'disabled'
      },
      leftDefaultChecked: [2, 3],
      rightDefaultChecked: [1],
      data: generateData(),
      renderContent: (
        h: (arg0: string, arg1: null, arg2: string) => any,
        option: { value: any; desc: any }
      ) => {
        return h('span', null, `${option.value} - ${option.desc}`)
      }
    },
    value: [1],
    colProps: {
      span: 24
    }
  },
  {
    field: 'field38',
    label: '单选框',
    component: 'Divider'
  },
  {
    field: 'field39-2',
    label: '单选框组',
    component: 'RadioGroup',
    componentProps: {
      options: [
        {
          // disabled: true,
          label: 'option-1',
          value: '1'
        },
        {
          label: 'option-2',
          value: '2'
        }
      ]
    }
  },
  {
    field: 'field39-3',
    label: `单选框组 插槽`,
    component: 'RadioGroup',
    componentProps: {
      options: [
        {
          // disabled: true,
          label: 'option-1',
          value: '1'
        },
        {
          label: 'option-2',
          value: '2'
        }
      ],
      slots: {
        default: (options: RadioOption[]) => {
          return options?.map((v) => {
            return <ElRadio label={v.label + `(${v.value})`} value={v.value} />
          })
        }
      }
    }
  },
  {
    field: 'field40',
    label: '按钮',
    component: 'RadioButton',
    componentProps: {
      options: [
        {
          label: 'option-1',
          value: '1'
        },
        {
          label: 'option-2',
          value: '2'
        }
      ]
    }
  },
  {
    field: 'field40-1',
    label: `按钮 插槽`,
    component: 'RadioButton',
    componentProps: {
      options: [
        {
          label: 'option-1',
          value: '1'
        },
        {
          label: 'option-2',
          value: '2'
        }
      ],
      slots: {
        default: (options: RadioOption[]) => {
          return options?.map((v) => {
            return <ElRadioButton label={v.label + `(${v.value})`} value={v.value} />
          })
        }
      }
    }
  },
  {
    field: 'field41',
    label: '多选框',
    component: 'Divider'
  },
  {
    field: 'field42-2',
    label: '多选框组',
    component: 'CheckboxGroup',
    value: [],
    componentProps: {
      options: [
        {
          label: 'option-1',
          value: '1'
        },
        {
          label: 'option-2',
          value: '2'
        },
        {
          label: 'option-3',
          value: '3'
        }
      ]
    }
  },
  {
    field: 'field42-3',
    label: `多选框组 插槽`,
    component: 'CheckboxGroup',
    value: [],
    componentProps: {
      options: [
        {
          label: 'option-1',
          value: '1'
        },
        {
          label: 'option-2',
          value: '2'
        },
        {
          label: 'option-3',
          value: '3'
        }
      ],
      slots: {
        default: (options: CheckboxOption[]) => {
          return options?.map((v) => {
            return <ElCheckbox label={v.label + `(${v.value})`} value={v.value} />
          })
        }
      }
    }
  },
  {
    field: 'field43',
    label: '按钮',
    component: 'CheckboxButton',
    value: [],
    componentProps: {
      options: [
        {
          disabled: true,
          label: 'option-1',
          value: '1'
        },
        {
          label: 'option-2',
          value: '2'
        },
        {
          label: 'option-3',
          value: '23'
        }
      ]
    }
  },
  {
    field: 'field43-1',
    label: `按钮 插槽`,
    component: 'CheckboxButton',
    value: [],
    componentProps: {
      options: [
        {
          disabled: true,
          label: 'option-1',
          value: '1'
        },
        {
          label: 'option-2',
          value: '2'
        },
        {
          label: 'option-3',
          value: '23'
        }
      ],
      slots: {
        default: (options: CheckboxOption[]) => {
          return options?.map((v) => {
            return <ElCheckboxButton label={v.label + `(${v.value})`} value={v.value} />
          })
        }
      }
    }
  },
  {
    field: 'field44',
    component: 'Divider',
    label: '滑块'
  },
  {
    field: 'field45',
    component: 'Slider',
    label: '默认',
    value: 0
  },
  {
    field: 'field46',
    component: 'Divider',
    label: '日期选择器'
  },
  {
    field: 'field47',
    component: 'DatePicker',
    label: '默认',
    componentProps: {
      type: 'date'
    }
  },
  {
    field: 'field48',
    component: 'DatePicker',
    label: '日期选择器',
    componentProps: {
      type: 'date',
      disabledDate: (time: Date) => {
        return time.getTime() > Date.now()
      },
      shortcuts: [
        {
          text: '今天',
          value: new Date()
        },
        {
          text: '昨天',
          value: () => {
            const date = new Date()
            date.setTime(date.getTime() - 3600 * 1000 * 24)
            return date
          }
        },
        {
          text: '一周前',
          value: () => {
            const date = new Date()
            date.setTime(date.getTime() - 3600 * 1000 * 24 * 7)
            return date
          }
        }
      ]
    }
  },
  {
    field: 'field47-1',
    component: 'DatePicker',
    label: '插槽',
    value: '2021-10-29',
    componentProps: {
      type: 'date',
      slots: {
        default: (cell: any) => {
          return (
            <div class={{ cell: true, current: cell.isCurrent }}>
              <span class="text">{cell.text}</span>
              {isHoliday(cell) ? <span class="holiday" /> : null}
            </div>
          )
        }
      }
    }
  },
  {
    field: 'field49',
    component: 'DatePicker',
    label: '周',
    componentProps: {
      type: 'week',
      format: `[周]`
    }
  },
  {
    field: 'field50',
    component: 'DatePicker',
    label: '年',
    componentProps: {
      type: 'year'
    }
  },
  {
    field: 'field51',
    component: 'DatePicker',
    label: '月',
    componentProps: {
      type: 'month'
    }
  },
  {
    field: 'field52',
    component: 'DatePicker',
    label: '日期',
    componentProps: {
      type: 'dates'
    }
  },
  {
    field: 'field53',
    component: 'DatePicker',
    label: '日期范围',
    componentProps: {
      type: 'daterange'
    }
  },
  {
    field: 'field54',
    component: 'DatePicker',
    label: '月份范围',
    componentProps: {
      type: 'monthrange'
    }
  },
  {
    field: 'field56',
    component: 'Divider',
    label: '日期时间选择器'
  },
  {
    field: 'field57',
    component: 'DatePicker',
    label: '默认',
    componentProps: {
      type: 'datetime'
    }
  },
  {
    field: 'field58',
    component: 'DatePicker',
    label: '日期选择器',
    componentProps: {
      type: 'datetime',
      shortcuts: [
        {
          text: '今天',
          value: new Date()
        },
        {
          text: '昨天',
          value: () => {
            const date = new Date()
            date.setTime(date.getTime() - 3600 * 1000 * 24)
            return date
          }
        },
        {
          text: '一周前',
          value: () => {
            const date = new Date()
            date.setTime(date.getTime() - 3600 * 1000 * 24 * 7)
            return date
          }
        }
      ]
    }
  },
  {
    field: 'field59',
    component: 'DatePicker',
    label: '日期时间范围',
    componentProps: {
      type: 'datetimerange'
    }
  },
  {
    field: 'field60',
    component: 'Divider',
    label: '时间选择器'
  },
  {
    field: 'field61',
    component: 'TimePicker',
    label: '默认'
  },
  {
    field: 'field62',
    component: 'Divider',
    label: '时间选择'
  },
  {
    field: 'field63',
    component: 'TimeSelect',
    label: '默认'
  },
  {
    field: 'field66',
    component: 'Divider',
    label: '密码输入框'
  },
  {
    field: 'field67',
    component: 'InputPassword',
    label: '默认',
    componentProps: {
      strength: true
    }
  },
  {
    field: 'field68',
    component: 'Divider',
    label: `表单 插槽`
  },
  {
    field: 'field69',
    component: 'Input',
    label: `label`,
    formItemProps: {
      slots: {
        label: ({ label }) => {
          return (
            <div class="custom-label">
              <span class="label-text">custom {label}</span>
            </div>
          )
        }
      }
    }
  },
  {
    field: 'field69-1',
    component: 'Input',
    label: `custom formItem`,
    formItemProps: {
      slots: {
        default: (formModel: any) => {
          return <ElInput v-model={formModel['field69-1']} />
        }
      }
    }
  },
  {
    field: 'field70',
    component: 'Divider',
    label: `远程加载`
  },
  {
    field: 'field71',
    label: `选择器`,
    component: 'Select',
    componentProps: {
      options: []
    },
    // 远程加载option
    optionApi: async () => {
      const res = await getDictOneApi()
      return res.data
    }
  },
  {
    field: 'field72',
    label: `虚拟列表选择器`,
    component: 'SelectV2',
    componentProps: {
      options: []
    },
    // 远程加载option
    optionApi: async () => {
      const res = await getDictOneApi()
      return res.data
    }
  },
  {
    field: 'field73',
    label: `多选框组`,
    component: 'CheckboxGroup',
    componentProps: {
      options: []
    },
    // 远程加载option
    optionApi: async () => {
      const res = await getDictOneApi()
      return res.data
    }
  },
  {
    field: 'field74',
    label: `单选框组`,
    component: 'RadioGroup',
    componentProps: {
      options: []
    },
    // 远程加载option
    optionApi: async () => {
      const res = await getDictOneApi()
      return res.data
    }
  },
  {
    field: 'field82',
    label: `树形选择器`,
    component: 'TreeSelect',
    // 远程加载option
    optionApi: async () => {
      const res = await getTreeSelectData()
      return res
    }
  },
  {
    field: 'field75',
    component: 'Divider',
    label: `树形选择器`
  },
  {
    field: 'field76',
    component: 'TreeSelect',
    label: `${'默认'}`,
    componentProps: {
      renderAfterExpand: false,
      data: treeSelectData
    }
  },
  {
    field: 'field76',
    component: 'TreeSelect',
    label: `显示复选框`,
    componentProps: {
      renderAfterExpand: false,
      showCheckbox: true,
      data: treeSelectData
    }
  },
  {
    field: 'field77',
    component: 'TreeSelect',
    label: `选择任意级别`,
    componentProps: {
      renderAfterExpand: false,
      showCheckbox: true,
      checkStrictly: true,
      checkOnClickNode: true,
      data: treeSelectData
    }
  },
  {
    field: 'field78',
    component: 'TreeSelect',
    label: `多选`,
    componentProps: {
      renderAfterExpand: false,
      multiple: true,
      showCheckbox: true,
      checkStrictly: true,
      checkOnClickNode: true,
      data: treeSelectData
    }
  },
  {
    field: 'field79',
    component: 'TreeSelect',
    label: `可筛选`,
    componentProps: {
      renderAfterExpand: false,
      multiple: true,
      filterable: true,
      showCheckbox: true,
      checkStrictly: true,
      checkOnClickNode: true,
      filterNodeMethod: (value: any, data: { label: string | any[] }) => data.label.includes(value),
      data: treeSelectData
    }
  },
  {
    field: 'field80',
    component: 'TreeSelect',
    label: `自定义内容`,
    componentProps: {
      renderAfterExpand: false,
      multiple: true,
      filterable: true,
      showCheckbox: true,
      checkStrictly: true,
      checkOnClickNode: true,
      filterNodeMethod: (value: any, data: { label: string | any[] }) => data.label.includes(value),
      slots: {
        default: ({ data: { label } }: any) => {
          return (
            <>
              {label}
              <span style="color: gray">(suffix)</span>
            </>
          )
        }
      },
      data: treeSelectData
    }
  },
  {
    field: 'field81',
    component: 'TreeSelect',
    label: `懒加载`,
    componentProps: {
      renderAfterExpand: false,
      lazy: true,
      load: (
        node: { isLeaf: any },
        resolve: (
          arg0: (
            | { value: number; label: string; isLeaf?: undefined }
            | { value: number; label: string; isLeaf: boolean }
          )[]
        ) => void
      ) => {
        if (node.isLeaf) return resolve([])

        setTimeout(() => {
          resolve([
            {
              value: ++id,
              label: `lazy load node${id}`
            },
            {
              value: ++id,
              label: `lazy load node${id}`,
              isLeaf: true
            }
          ])
        }, 400)
      },
      multiple: true,
      filterable: true,
      showCheckbox: true,
      checkStrictly: true,
      checkOnClickNode: true,
      filterNodeMethod: (value: any, data: { label: string | any[] }) => data.label.includes(value),
      slots: {
        default: ({ data: { label } }: any) => {
          return (
            <>
              {label}
              <span style="color: gray">(suffix)</span>
            </>
          )
        }
      },
      data: treeSelectData
    }
  },
  {
    field: 'field82',
    component: 'Divider',
    label: `上传`
  },
  {
    field: 'field83',
    component: 'Upload',
    label: `${'默认'}`,
    componentProps: {
      limit: 3,
      action: 'https://run.mocky.io/v3/9d059bf9-4660-45f2-925d-ce80ad6c4d15',
      fileList: [
        {
          name: 'element-plus-logo.svg',
          url: 'https://element-plus.org/images/element-plus-logo.svg'
        },
        {
          name: 'element-plus-logo2.svg',
          url: 'https://element-plus.org/images/element-plus-logo.svg'
        }
      ],
      multiple: true,
      onPreview: (uploadFile: any) => {
        console.log(uploadFile)
      },
      onRemove: (file: any) => {
        console.log(file)
      },
      beforeRemove: (uploadFile: { name: any }) => {
        return ElMessageBox.confirm(`Cancel the transfer of ${uploadFile.name} ?`).then(
          () => true,
          () => false
        )
      },
      onExceed: (files: string | any[], uploadFiles: string | any[]) => {
        ElMessage.warning(
          `The limit is 3, you selected ${files.length} files this time, add up to ${
            files.length + uploadFiles.length
          } totally`
        )
      },
      slots: {
        default: () => <BaseButton type="primary">Click to upload</BaseButton>,
        tip: () => <div class="el-upload__tip">jpg/png files with a size less than 500KB.</div>
      }
    }
  },
  {
    field: 'field84',
    component: 'Upload',
    label: `用户头像`,
    componentProps: {
      action: 'https://run.mocky.io/v3/9d059bf9-4660-45f2-925d-ce80ad6c4d15',
      showFileList: false,
      onSuccess: (_response: any, uploadFile: { raw: Blob | MediaSource }) => {
        imageUrl.value = URL.createObjectURL(uploadFile.raw!)
      },
      beforeUpload: (rawFile: { type: string; size: number }) => {
        if (rawFile.type !== 'image/jpeg') {
          ElMessage.error('Avatar picture must be JPG format!')
          return false
        } else if (rawFile.size / 1024 / 1024 > 2) {
          ElMessage.error('Avatar picture size can not exceed 2MB!')
          return false
        }
        return true
      },
      slots: {
        default: () => (
          <>
            {imageUrl.value ? <img src={imageUrl.value} class="avatar" /> : null}
            {!imageUrl.value ? (
              <ElIcon class="avatar-uploader-icon" size="large">
                add
              </ElIcon>
            ) : null}
          </>
        )
      }
    }
  },
  {
    field: 'field87',
    component: 'Divider',
    label: '图标选择器'
  },
  {
    field: 'field88',
    component: 'IconPicker',
    label: '默认',
    value: 'tdesign:archway'
  }
])
</script>

<template>
  <ContentWrap
    title="全部示例"
    message="基于 ElementPlus 的 Form 组件二次封装，实现数据驱动，支持所有 Form 参数"
  >
    <Form :schema="schema" label-width="auto" :label-position="isMobile ? 'top' : 'right'" />
  </ContentWrap>
</template>

<style lang="less">
.cell {
  height: 30px;
  padding: 3px 0;
  box-sizing: border-box;

  .text {
    position: absolute;
    left: 50%;
    display: block;
    width: 24px;
    height: 24px;
    margin: 0 auto;
    line-height: 24px;
    border-radius: 50%;
    transform: translateX(-50%);
  }

  &.current {
    .text {
      color: #fff;
      background: #626aef;
    }
  }

  .holiday {
    position: absolute;
    bottom: 0;
    left: 50%;
    width: 6px;
    height: 6px;
    background: var(--el-color-danger);
    border-radius: 50%;
    transform: translateX(-50%);
  }
}

.transfer-footer {
  padding: 6px 5px;
  margin-left: 15px;
}

.el-upload {
  position: relative;
  overflow: hidden;
  cursor: pointer;
  border: 1px dashed var(--el-border-color);
  border-radius: 6px;
  transition: var(--el-transition-duration-fast);
}

.el-upload:hover {
  border-color: var(--el-color-primary);
}

.el-icon.avatar-uploader-icon {
  width: 178px;
  height: 178px;
  font-size: 28px;
  color: #8c939d;
  text-align: center;
}
</style>
