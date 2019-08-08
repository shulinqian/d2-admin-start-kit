export default [
  {
    path: '/api/menu',
    method: 'get',
    handle ({ body }) {
      return {
        code: 0,
        msg: '',
        data: [
          { path: '/logs/search', title: '日志调试', icon: 'file-code-o' }
        ]
      }
    }
  }
]
