// 菜单 顶栏
import { sysMenu } from '@api/sys.menu'

export default async () => {
  let menu = await sysMenu()
  return [
    { path: '/index', title: '首页', icon: 'home' },
    {
      title: '页面',
      icon: 'folder-o',
      children: [
        { path: '/page1', title: '页面 1' },
        { path: '/page2', title: '页面 2' },
        { path: '/page3', title: '页面 3' }
      ]
    },
    ...menu
  ]
}
