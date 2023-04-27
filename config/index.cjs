/* eslint-disable */

/**
 * 此项目配置为方便新人使用，已缩减至最简配置。
 * 如若想使用更多功能，请查考文档中的 【3. config参数说明】 
 * 自行添加属性，以支持更多个性化功能
 */
const USER_CONFIG = {
USE_PASSAGE: 'push-deer',
  // 使用微信测试号：公众号APP_ID
  APP_ID: 'wxe5fc7db22cc80ee9',

  // 使用微信测试号：公众号APP_SECRET
  APP_SECRET: 'cf2e6f2b8df67b88a387314756e264ac',

  PROVINCE: '四川',
  CITY: '宜宾',

  USERS: [
    {
      // 想要发送的人的名字
      name: '丫头',
      // 使用微信测试号：扫码关注你的微信测试号后生成的一段字符串，在测试号后台能看到
      id: 'PDU22260TQK0o6ciTpmjco94T0UcLPoO0rWsGVKDT',
      // 使用微信测试号：你想对他发送的模板消息的模板ID
      useTemplateId: '0001',
      // 新历生日, 仅用作获取星座运势, 格式必须为MM-DD
      horoscopeDate: '07-24',
      festivals: [
        // 注意：此条配置日期为阴历日期，因为`type`中 “生日” 之前有 * 符号
        {
          type: '*生日', name: '宝贝', year: '1994', date: '07-24',
        },
        // 注意：此条配置日期为阳历日期，因为`type`中 “生日” 之前没有 * 符号
        {
          type: '生日', name: '李四', year: '1994', date: '09-08',
        },
        {
          type: '节日', name: '相识纪念日', year: '2023', date: '04-27',
        },
      ],
      // 我们在一起已经有xxxx天了的配置
      customizedDateList: [
        // 在一起的日子
        { keyword: 'love_day', date: '19994-09-08' },
        // 结婚纪念日
        { keyword: 'marry_day', date: '2023-04-27' },
      ],
    },
  ],


  // 【推送完成提醒】模板id, 用来看自己有没有发送成功的那个模板
  CALLBACK_TEMPLATE_ID: 'Ja4PMxUOPm-OMuKcbZ7s0zS9j76qcaq8akBLMCiIozw',

  CALLBACK_USERS: [
    {
      name: '自己',
      // 使用微信测试号：自己的微信id，扫码关注你的微信测试号后生成的一段字符串，在测试号后台能看到
      id: 'Ja4PMxUOPm-OMuKcbZ7s0zS9j76qcaq8akBLMCiIozw',
    }
  ],

}

module.exports = USER_CONFIG

