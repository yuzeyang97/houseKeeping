const firstTabMap = {
  banjia: {
    name: '搬家',
    secondTab: [
      { name: '公司搬家', secondParams: 'gongsibanjia' },
      { name: '居民搬家', secondParams: 'juminbanjia' },
      { name: '长途搬家', secondParams: 'changtubanjia' },
      { name: '搬家搬场', secondParams: 'banjiabanchang' },
      { name: '小型搬家', secondParams: 'xiaoxingbanjia' },
      { name: '钢琴搬运', secondParams: 'gangqinbanyun' },
      { name: '设备搬迁', secondParams: 'shebeibanqian' },
      { name: '空调移机', secondParams: 'kongtiaoyiji' },
      { name: '起重吊装', secondParams: 'qizhongdiaozhuang' },
      { name: '家具拆装', secondParams: 'jiajuchaizhuang' },
      { name: '国际搬家', secondParams: 'guojibanjia' },
    ]
  },
  baomu: {
    name: '保姆/月嫂',
    secondTab: [
      { name: '保姆', secondParams: 'baomu' },
      { name: '钟点工', secondParams: 'zhongdiangong' },
      { name: '月嫂', secondParams: 'yuesao' },
      { name: '育婴师/育儿嫂', secondParams: 'yuyingshi' },
      { name: '催乳师', secondParams: 'cuirushi' },
      { name: '月子中心', secondParams: 'yuezizhongxin' },
      { name: '陪护', secondParams: 'peihu' },
      { name: '管家', secondParams: 'guanjia' },
      { name: '涉外家政', secondParams: 'shewaijiazheng' }
    ]
  },
  fangwuweixiu: {
    name: '房屋维修',
    secondTab: [
      {
        name: '防水补漏',
        secondParams: 'fangshuibulou'
      },
      {
        name: '卫浴/洁具维修',
        secondParams: 'weiyu'
      },
      {
        name: '灯具维修',
        secondParams: 'dengjuweixiu'
      },
      {
        name: '电路维修/安装',
        secondParams: 'dianluweixiu'
      },
      {
        name: '水管/水龙头维修',
        secondParams: 'shuiguan'
      },
      {
        name: '门窗维修/安装',
        secondParams: 'menchuangweixiu'
      }
    ]
  },
  jiadianweixiu: {
    name: '家电维修',
    secondTab: [
      {
        name: '冰箱',
        secondParams: 'bingxiang'
      },
      {
        name: '洗衣机',
        secondParams: 'xiyiji'
      },
      {
        name: '空调',
        secondParams: 'kongtiao'
      },
      {
        name: '电视',
        secondParams: 'dianshi'
      },
      {
        name: '厨房家电',
        secondParams: 'chufangjiadian'
      },
      {
        name: '热水器',
        secondParams: 'reshuiqi'
      }
    ]
  },
  jiajuweixiu: {
    name: '家具维修',
    secondTab: [
      {
        name: '沙发',
        secondParams: 'shafa'
      },
      {
        name: '桌椅柜',
        secondParams: 'zhuoyigui'
      },
      {
        name: '地板',
        secondParams: 'diban'
      },
      {
        name: '办公家具',
        secondParams: 'bangongjiaju'
      },
      {
        name: '钟表',
        secondParams: 'zhongbiao'
      }
    ]
  },
  kaisuo: {
    name: '开锁/换锁/修锁',
    secondTab: [
      {
        name: '开锁/换锁/修锁',
        secondParams: 'kaisuo'
      }
    ]
  },
  shenghuopeisong: {
    name: '生活配送',
    secondTab: [
      {
        name: '煤气/液化气',
        secondParams: 'meiqi'
      },
      {
        name: '煤炭',
        secondParams: 'meitan'
      },
      {
        name: '桶装水',
        secondParams: 'tongzhuangshui'
      },
      {
        name: '蔬菜水果',
        secondParams: 'shucai'
      },
      {
        name: '粮油副食',
        secondParams: 'liangyou'
      },
      {
        name: '机场接送',
        secondParams: 'jichang'
      }
    ]
  },
  xianhualvzhi: {
    name: '鲜花绿植',
    secondTab: [
      {
        name: '鲜花',
        secondParams: 'xianhua'
      },
      {
        name: '绿植栽培',
        secondParams: 'lvzhizaipei'
      },
      {
        name: '园林/园艺',
        secondParams: 'yuanlin'
      },
      {
        name: '仿真花',
        secondParams: 'fangzhenhua'
      },
      {
        name: '卡通花',
        secondParams: 'katonghua'
      }
    ]
  },
  ershouhuishou: {
    name: '二手回收',
    secondTab: [
      {
        name: '手机',
        secondParams: 'shouji'
      },
      {
        name: '电脑',
        secondParams: 'diannao'
      },
      {
        name: '家具',
        secondParams: 'jiaju'
      },
      {
        name: '电器',
        secondParams: 'dianqi'
      },
      {
        name: '金银',
        secondParams: 'jinyin'
      }
    ]
  },
  ganxi: {
    name: '干洗/洗衣/修鞋',
    secondTab: [
      {
        name: '干洗',
        secondParams: 'ganxi'
      },
      {
        name: '改衣',
        secondParams: 'gaiyi'
      },
      {
        name: '修鞋',
        secondParams: 'xiuxie'
      },
      {
        name: '皮衣护理',
        secondParams: 'piyihuli'
      },
      {
        name: '皮鞋护理',
        secondParams: 'pixiehuli'
      },
      {
        name: '汽车座椅清洗养护',
        secondParams: 'qichezuoyi'
      }
    ]
  },
  diannaoweixiu: {
    name: '电脑维修',
    secondTab: [
      {
        name: '笔记本电脑',
        secondParams: 'bijiben'
      },
      {
        name: '台式电脑',
        secondParams: 'taishi'
      },
      {
        name: 'ipad/平板电脑',
        secondParams: 'ipad'
      },
      {
        name: '服务器维修',
        secondParams: 'fuwuqiweixiu'
      },
      {
        name: '数据恢复',
        secondParams: 'shujuhuifu'
      },
      {
        name: '网络维修',
        secondParams: 'wangluoweixiu'
      }
    ]
  },
  shoujiweixiu: {
    name: '手机维修',
    secondTab: [
      {
        name: '苹果',
        secondParams: 'pingguo'
      },
      {
        name: '三星',
        secondParams: 'sanxing'
      },
      {
        name: '小米',
        secondParams: 'xiaomi'
      },
      {
        name: '华为',
        secondParams: 'huawei'
      },
      {
        name: '魅族',
        secondParams: 'meizu'
      },
      {
        name: '联想',
        secondParams: 'lianxiang'
      }
    ]
  },
  shumaweixiu: {
    name: '数码维修',
    secondTab: [
      {
        name: '数码相机',
        secondParams: 'shumaxiangji'
      },
      {
        name: '摄像机',
        secondParams: 'shexiangji'
      },
      {
        name: '单反相机/单反配件',
        secondParams: 'danfanxiangji'
      },
      {
        name: '单电/微电相机',
        secondParams: 'dandian'
      },
      {
        name: '游戏机',
        secondParams: 'youxiji'
      }
    ]
  },
  baojieqingxi: {
    name: '保洁清洗',
    secondTab: [
      {
        name: '物业保洁',
        secondParams: 'wuyebaojie'
      },
      {
        name: '家庭保洁',
        secondParams: 'jiatingbaojie'
      },
      {
        name: '空调清洗',
        secondParams: 'kongtiaoqingxi'
      },
      {
        name: '冰箱清洗',
        secondParams: 'bingxiangqingxi'
      },
      {
        name: '洗衣机清洗',
        secondParams: 'xiyijiqingxi'
      },
      {
        name: '饮水机清洗',
        secondParams: 'yingshuijiqingxi'
      }
    ]
  },
  guandaoshutong: {
    name: '管道疏通',
    secondTab: [
      {
        name: '马桶疏通',
        secondParams: 'matongshutong'
      },
      {
        name: '下水道疏通',
        secondParams: 'xiashuidaoshutong'
      },
      {
        name: '化粪池清理',
        secondParams: 'huafenchiqingli'
      },
      {
        name: '管道安装/改造',
        secondParams: 'guandaoanzhuang'
      },
      {
        name: '打捞',
        secondParams: 'dalao'
      }
    ]
  },
  yanglaoyuan: {
    name: '养老院',
    secondTab: [
      {
        name: '养老院',
        secondParams: 'yanglaoyuan'
      }
    ]
  },
  gonggongfuwu: {
    name: '公共服务',
    secondTab: [
      {
        name: '银行',
        secondParams: 'yinhang'
      },
      {
        name: '自来水/电力营业厅',
        secondParams: 'zilaishui'
      },
      {
        name: '邮局通讯',
        secondParams: 'youjutongxun'
      },
      {
        name: '加油站',
        secondParams: 'jiayouzhan'
      },
      {
        name: '金融机构',
        secondParams: 'jinrongjigong'
      }
    ]
  },
  baishifuwu: {
    name: '白事服务',
    secondTab: [
      {
        name: '殡仪馆/殡葬服务',
        secondParams: 'binyiguan'
      },
      {
        name: '墓地陵园',
        secondParams: 'mudiyuanlin'
      },
      {
        name: '殡葬用品',
        secondParams: 'binzangyongpin'
      },
      {
        name: '火葬',
        secondParams: 'huozang'
      },
      {
        name: '骨灰盒',
        secondParams: 'guhuihe'
      }
    ]
  }
};

export default firstTabMap;
