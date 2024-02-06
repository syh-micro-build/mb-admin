import { useTimeAgo as useTimeAgoCore, type UseTimeAgoMessages } from '@vueuse/core'

const messagesOptions: UseTimeAgoMessages = {
  justNow: '刚刚',
  invalid: '无效时间',
  past: (n) => (n.match(/\d/) ? `${n}前` : n),
  future: (n) => (n.match(/\d/) ? `${n}后` : n),
  month: (n, past) => (n === 1 ? (past ? '上个月' : '下个月') : `${n} 个月`),
  year: (n, past) => (n === 1 ? (past ? '去年' : '明年') : `${n} 年`),
  day: (n, past) => (n === 1 ? (past ? '昨天' : '明天') : `${n} 天`),
  week: (n, past) => (n === 1 ? (past ? '上周' : '下周') : `${n} 周`),
  hour: (n) => `${n} 小时`,
  minute: (n) => `${n} 分钟`,
  second: (n) => `${n} 秒`
}

export const useTimeAgo = (time: Date | number | string) => {
  const timeAgo = useTimeAgoCore(time, {
    messages: messagesOptions
  })

  return timeAgo
}
