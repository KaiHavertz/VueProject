// 引入刚刚封装的request
import request from '@/utils/request'
const group_name = 'department'
export default {
  getDepartmentList() {
    return new request({
      url: `/${group_name}/departmentList`,
      method: 'get'
    })
  }
}