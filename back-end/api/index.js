const adminApi = '/admin',
  userApi = '/user';

  module.exports = {

    // admin
    adminList: adminApi + '/list',
    adminLogin: adminApi + '/login',
    adminLogout: adminApi + '/logout',
    adminGetInfo: adminApi + '/get/info',
    adminAdd: adminApi + '/add',
    adminDelete: adminApi + '/delete',

    // 商品
    goodsList: adminApi + '/good/list',
    addGood: adminApi + '/good/add',
    delGood: adminApi + '/good/delete',
    soldOutGood: adminApi + '/good/sold/out',
    goodDetail: adminApi + '/good/detail',
    goodUploadImg: adminApi + '/good/upload/img',

    // 




  }