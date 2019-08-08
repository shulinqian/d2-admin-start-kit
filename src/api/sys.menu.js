import request from '@/plugin/axios'

export async function sysMenu (data) {
  return request({
    url: '/menu',
    method: 'get',
    data
  })
}
