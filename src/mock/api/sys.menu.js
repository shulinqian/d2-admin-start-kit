export default [
  {
    path: '/api/menu',
    method: 'get',
    handle ({ body }) {
      return {
        code: 0,
        msg: '',
        data: [
          { path: '/indexssv/sss', title: '首页666677', icon: 'home' }
        ]
      }
    }
  }
]
