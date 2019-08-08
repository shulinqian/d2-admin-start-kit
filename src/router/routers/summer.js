import layoutHeaderAside from '@/layout/header-aside'

// 由于懒加载页面太多的话会造成webpack热更新太慢，所以开发环境不使用懒加载，只有生产环境使用懒加载
const _import = require('@/libs/util.import.' + process.env.NODE_ENV)

/**
 * 在主框架内显示
 */
const summer = [
  {
    path: '/logs',
    redirect: { name: 'logs' },
    component: layoutHeaderAside,
    children: [
      // 首页
      {
        path: 'search',
        name: 'logSearch',
        meta: {
          auth: true
        },
        component: _import('summer/log/search')
      }
    ]
  }
]

// 重新组织后导出
export default summer
