// 引入刚刚封装的request
import request from '@/utils/request'
const group_name = 'student'
// 创建一个对象，用于封装请求api
let data = {
  queryAllStudent() {
    // 返回一个request
    return new request({
      url: `/${group_name}/queryAllStudent`,
      method: 'get'
    })
  }
}
// 导出
export default data