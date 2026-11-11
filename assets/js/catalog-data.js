/* 博粤美装 · 在线图册数据（硬装按纹理分类，不出现供应商品牌）
 * 图片路径：assets/img/catalog/{dir}/cat-{NN}t.jpg（缩略）/ cat-{NN}f.jpg（大图）
 * materials：单专辑六大纹理分组，pages 用 "目录/页码" 复合键；
 *            pagesVr 键为 "目录/页码"（3D 实铺效果链接）
 * doors：单专辑三大品类分组（门 / 窗 / 浴室隔断），pages 用 "目录/页码" 复合键
 * window.CATALOG_SCOPE 决定页面取用哪一组（materials=硬装 / doors=博粤甄选）
 */
window.CATALOG = {
  materials: [
    {
      id: 'board', zh: '硬装板材馆', en: 'Surface Collection', dir: 'boyue',
      note: {
        zh: '石纹 / 木纹 / 木饰面 / 纯色 / 多色 五大纹理，相似花色归组陈列',
        en: 'Five texture families — Stone, Woodgrain, Veneer, Solid, Palette — similar finishes grouped together'
      },
      groups: [
        { id: 'stone',   zh: '石纹',   en: 'Stone',          pages: ['boyue/5', 'boyue/6', 'boyue/7', 'boyue/8', 'longshi/8', 'longshi/9', 'yubaoshu/17'] },
        { id: 'wood',    zh: '木纹',   en: 'Woodgrain',      pages: [
          'boyue/9', 'boyue/10', 'boyue/11', 'boyue/12', 'boyue/13', 'boyue/14', 'boyue/15', 'boyue/16', 'boyue/17', 'boyue/18', 'boyue/19', 'boyue/20', 'boyue/21', 'boyue/22',
          'qsn-color/1', 'qsn-color/2', 'qsn-color/3', 'qsn-color/4', 'qsn-color/5', 'qsn-color/6', 'qsn-color/7', 'qsn-color/8', 'qsn-color/9', 'qsn-color/10', 'qsn-color/11', 'qsn-color/12', 'qsn-color/13', 'qsn-color/14', 'qsn-color/15',
          'yubaoshu/1', 'yubaoshu/2', 'yubaoshu/3', 'yubaoshu/4', 'yubaoshu/5', 'yubaoshu/6', 'yubaoshu/7', 'yubaoshu/8', 'yubaoshu/9', 'yubaoshu/10', 'yubaoshu/11', 'yubaoshu/12', 'yubaoshu/13', 'yubaoshu/14', 'yubaoshu/15', 'yubaoshu/16',
          'beipei/2', 'beipei/3', 'beipei/4', 'beipei/5', 'beipei/6'
        ] },
        { id: 'veneer',  zh: '木饰面', en: 'Veneer Panels',  pages: [
          'longshi/2', 'longshi/3', 'longshi/4', 'longshi/5', 'longshi/6', 'longshi/7', 'longshi/10', 'longshi/11', 'longshi/12', 'longshi/13', 'longshi/14', 'longshi/15',
          'caizhen/1', 'caizhen/2', 'caizhen/3', 'caizhen/4', 'caizhen/5', 'caizhen/6', 'caizhen/7', 'caizhen/8', 'caizhen/9', 'caizhen/10',
          'moganshan/1', 'moganshan/2', 'moganshan/3', 'moganshan/4', 'moganshan/5', 'moganshan/6', 'moganshan/7', 'moganshan/8', 'moganshan/9'
        ] },
        { id: 'solid',   zh: '纯色',   en: 'Solid Colours',  pages: [
          'boyue/23', 'boyue/24', 'boyue/25', 'boyue/26', 'boyue/27', 'boyue/28', 'boyue/29',
          'qsn-color/16',
          'beipei/7', 'beipei/8',
          'moganshan/10', 'moganshan/11', 'moganshan/12'
        ] },
        { id: 'palette', zh: '多色',   en: 'Colour Palette', pages: [
          'qsn-color/17', 'qsn-color/18', 'qsn-color/19',
          'yubaoshu/18', 'yubaoshu/19', 'yubaoshu/20', 'yubaoshu/21'
        ] }
      ],
      pagesVr: {
        'boyue/5':  ['https://vr.justeasy.cn/view/817h6f3584387t48-1763543748.html'],
        'boyue/6':  ['https://vr.justeasy.cn/view/11g7y6v35493f814-1763543814.html'],
        'boyue/7':  ['https://vr.justeasy.cn/view/176gcx3545j93761-1763543761.html'],
        'boyue/8':  ['https://vr.justeasy.cn/view/917z6tny3b543829-1763543829.html'],
        'boyue/9':  ['https://vr.justeasy.cn/view/217634nq5437a6u8-1763543768.html', 'https://vr.justeasy.cn/view/de0t910763543874-1763543874.html'],
        'boyue/10': ['https://vr.justeasy.cn/view/0q21716w3g543977-1763543977.html', 'https://vr.justeasy.cn/view/17urn6w33543x837-1763543837.html'],
        'boyue/11': ['https://vr.justeasy.cn/view/17631354ht37p745-1763543775.html', 'https://vr.justeasy.cn/view/811qy0v3h509c29-1763543879.html'],
        'boyue/12': ['https://vr.justeasy.cn/view/8159u735u4c3h909-1763543909.html', 'https://vr.justeasy.cn/view/5131i1v35j4m3i51-1763543917.html'],
        'boyue/13': ['https://vr.justeasy.cn/view/1114t7q35d5i4t74-1763543923.html'],
        'boyue/14': ['https://vr.justeasy.cn/view/3139p3g35d4a3r72-1763543929.html', 'https://vr.justeasy.cn/view/4161i4e35k4s4i60-1763543939.html'],
        'boyue/15': ['https://vr.justeasy.cn/view/5161v5n35n4n5v47-1763543944.html', 'https://vr.justeasy.cn/view/8181q8v35j949h43-1763543950.html'],
        'boyue/16': ['https://vr.justeasy.cn/view/1169h1w35q5q1w56-1763543954.html', 'https://vr.justeasy.cn/view/1131u3q35t5c3i57-1763543958.html'],
        'boyue/17': ['https://vr.justeasy.cn/view/3134v3y35e4t3u58-1763543962.html'],
        'boyue/18': ['https://vr.justeasy.cn/view/7173w7n35r4w7r60-1763543966.html'],
        'boyue/19': ['https://vr.justeasy.cn/view/9192j9r35k4j9v63-1763543971.html', 'https://vr.justeasy.cn/view/7172e7l35l4r7f66-1763543974.html'],
        'boyue/20': ['https://vr.justeasy.cn/view/0q21716w3g543977-1763543977.html', 'https://vr.justeasy.cn/view/17urn6w33543x837-1763543837.html'],
        'boyue/21': ['https://vr.justeasy.cn/view/8187y8g35y4v8t68-1763543984.html', 'https://vr.justeasy.cn/view/9191m9v35s4c9n68-1763543988.html'],
        'boyue/22': ['https://vr.justeasy.cn/view/6167e6y35q4w6s71-1763543993.html', 'https://vr.justeasy.cn/view/4143d4w35b4c4r74-1763543997.html'],
        'boyue/23': ['https://vr.justeasy.cn/view/3135a3h35r4s3t00-1763544000.html'],
        'boyue/24': ['https://vr.justeasy.cn/view/6163a6q35g4m6u03-1763544005.html', 'https://vr.justeasy.cn/view/3134j3y35x4m3t07-1763544009.html'],
        'boyue/25': ['https://vr.justeasy.cn/view/7171r7h35y4h7r12-1763544013.html'],
        'boyue/26': ['https://vr.justeasy.cn/view/1163s1y35p4s1u16-1763544018.html', 'https://vr.justeasy.cn/view/4146r4k35f4f4h21-1763544023.html'],
        'boyue/27': ['https://vr.justeasy.cn/view/8188g8j35w4b8t26-1763544028.html', 'https://vr.justeasy.cn/view/3135u3i35t4r3v30.html', 'https://vr.justeasy.cn/view/5155c5b35c4f5j33.html', 'https://vr.justeasy.cn/view/9197y9k35u4v9c36.html', 'https://vr.justeasy.cn/view/2163m2y35b4e2f40.html', 'https://vr.justeasy.cn/view/7177s7m35h4x7t45.html'],
        'boyue/28': ['https://vr.justeasy.cn/view/5156v5g35u4t5i47.html', 'https://vr.justeasy.cn/view/3131n3d35p4r3u51.html', 'https://vr.justeasy.cn/view/8183k8v35y4z8f55.html', 'https://vr.justeasy.cn/view/3139x3g35h4p3u58.html', 'https://vr.justeasy.cn/view/9192c9v35x4m9b62.html', 'https://vr.justeasy.cn/view/7176q7t35r4s7u66.html'],
        'boyue/29': ['https://vr.justeasy.cn/view/1162b1m35v4c1s70.html', 'https://vr.justeasy.cn/view/3136p3v35y4s3q73.html', 'https://vr.justeasy.cn/view/6165x6t35j4g6f76.html', 'https://vr.justeasy.cn/view/8189y8h35n4x8s80.html']
      }
    }
  ],
cabinets: [
    {
      id: 'cabinet', zh: '全屋定制柜', en: 'Whole-House Custom Cabinets', dir: 'yigui',
      note: {
        zh: '衣柜 / 橱柜 / 衣帽间 等 16 大柜类，方案图按柜类归组陈列',
        en: '16 cabinet families — wardrobes, kitchens, closets and more, grouped by type'
      },
      groups: [
        { id: 'yigui', zh: '衣柜', en: 'Wardrobe', pages: ['yigui/1', 'yigui/2', 'yigui/3', 'yigui/4', 'yigui/5', 'yigui/6', 'yigui/7', 'yigui/8', 'yigui/9', 'yigui/10', 'yigui/11', 'yigui/12', 'yigui/13', 'yigui/14'] },
        { id: 'jiugui', zh: '酒柜', en: 'Wine Cabinet', pages: ['jiugui/1', 'jiugui/2', 'jiugui/3', 'jiugui/4', 'jiugui/5', 'jiugui/6', 'jiugui/7', 'jiugui/8', 'jiugui/9', 'jiugui/10', 'jiugui/11', 'jiugui/12', 'jiugui/13', 'jiugui/14'] },
        { id: 'xiegui', zh: '鞋柜', en: 'Shoe Cabinet', pages: ['xiegui/1', 'xiegui/2', 'xiegui/3', 'xiegui/4', 'xiegui/5', 'xiegui/6', 'xiegui/7', 'xiegui/8', 'xiegui/9', 'xiegui/10', 'xiegui/11', 'xiegui/12', 'xiegui/13', 'xiegui/14'] },
        { id: 'chugui', zh: '橱柜', en: 'Kitchen Cabinet', pages: ['chugui/1', 'chugui/2', 'chugui/3', 'chugui/4', 'chugui/5', 'chugui/6', 'chugui/7', 'chugui/8', 'chugui/9', 'chugui/10', 'chugui/11', 'chugui/12', 'chugui/13', 'chugui/14'] },
        { id: 'yushigui', zh: '浴室柜', en: 'Bathroom Vanity', pages: ['yushigui/1', 'yushigui/2', 'yushigui/3', 'yushigui/4', 'yushigui/5', 'yushigui/6', 'yushigui/7', 'yushigui/8', 'yushigui/9', 'yushigui/10', 'yushigui/11', 'yushigui/12', 'yushigui/13', 'yushigui/14'] },
        { id: 'yimaojian', zh: '衣帽间', en: 'Walk-in Closet', pages: ['yimaojian/1', 'yimaojian/2', 'yimaojian/3', 'yimaojian/4', 'yimaojian/5', 'yimaojian/6', 'yimaojian/7', 'yimaojian/8', 'yimaojian/9', 'yimaojian/10', 'yimaojian/11', 'yimaojian/12', 'yimaojian/13', 'yimaojian/14'] },
        { id: 'dianshigui', zh: '电视柜', en: 'TV Unit', pages: ['dianshigui/1', 'dianshigui/2', 'dianshigui/3', 'dianshigui/4', 'dianshigui/5', 'dianshigui/6', 'dianshigui/7', 'dianshigui/8', 'dianshigui/9', 'dianshigui/10', 'dianshigui/11', 'dianshigui/12', 'dianshigui/13', 'dianshigui/14'] },
        { id: 'shugui', zh: '书柜', en: 'Bookcase', pages: ['shugui/1', 'shugui/2', 'shugui/3', 'shugui/4', 'shugui/5', 'shugui/6', 'shugui/7', 'shugui/8', 'shugui/9', 'shugui/10', 'shugui/11', 'shugui/12', 'shugui/13', 'shugui/14'] },
        { id: 'biangui', zh: '边柜', en: 'Side Cabinet', pages: ['biangui/1', 'biangui/2', 'biangui/3', 'biangui/4', 'biangui/5', 'biangui/6', 'biangui/7', 'biangui/8', 'biangui/9', 'biangui/10', 'biangui/11', 'biangui/12', 'biangui/13', 'biangui/14', 'biangui/15', 'biangui/16', 'biangui/17', 'biangui/18', 'biangui/19', 'biangui/20', 'biangui/21'] },
        { id: 'tatami', zh: '榻榻米', en: 'Tatami Room', pages: ['tatami/1', 'tatami/2', 'tatami/3', 'tatami/4', 'tatami/5', 'tatami/6', 'tatami/7', 'tatami/8', 'tatami/9', 'tatami/10', 'tatami/11', 'tatami/12', 'tatami/13', 'tatami/14', 'tatami/15', 'tatami/16', 'tatami/17', 'tatami/18', 'tatami/19', 'tatami/20', 'tatami/21'] },
        { id: 'xuanguangui', zh: '玄关柜', en: 'Entry Cabinet', pages: ['xuanguangui/1', 'xuanguangui/2', 'xuanguangui/3', 'xuanguangui/4', 'xuanguangui/5', 'xuanguangui/6', 'xuanguangui/7', 'xuanguangui/8', 'xuanguangui/9', 'xuanguangui/10', 'xuanguangui/11', 'xuanguangui/12', 'xuanguangui/13', 'xuanguangui/14', 'xuanguangui/15', 'xuanguangui/16', 'xuanguangui/17', 'xuanguangui/18', 'xuanguangui/19', 'xuanguangui/20'] },
        { id: 'yangtaigui', zh: '阳台柜', en: 'Balcony Cabinet', pages: ['yangtaigui/1', 'yangtaigui/2', 'yangtaigui/3', 'yangtaigui/4', 'yangtaigui/5', 'yangtaigui/6', 'yangtaigui/7', 'yangtaigui/8', 'yangtaigui/9', 'yangtaigui/10', 'yangtaigui/11', 'yangtaigui/12', 'yangtaigui/13', 'yangtaigui/14', 'yangtaigui/15', 'yangtaigui/16', 'yangtaigui/17', 'yangtaigui/18', 'yangtaigui/19', 'yangtaigui/20'] },
        { id: 'canbiangui', zh: '餐边柜', en: 'Sideboard', pages: ['canbiangui/1', 'canbiangui/2', 'canbiangui/3', 'canbiangui/4', 'canbiangui/5', 'canbiangui/6', 'canbiangui/7', 'canbiangui/8', 'canbiangui/9', 'canbiangui/10', 'canbiangui/11', 'canbiangui/12', 'canbiangui/13', 'canbiangui/14', 'canbiangui/15', 'canbiangui/16', 'canbiangui/17', 'canbiangui/18', 'canbiangui/19', 'canbiangui/20', 'canbiangui/21'] },
        { id: 'chuantougui', zh: '床头柜', en: 'Nightstand', pages: ['chuantougui/1', 'chuantougui/2', 'chuantougui/3', 'chuantougui/4', 'chuantougui/5', 'chuantougui/6', 'chuantougui/7', 'chuantougui/8', 'chuantougui/9', 'chuantougui/10', 'chuantougui/11', 'chuantougui/12', 'chuantougui/13', 'chuantougui/14', 'chuantougui/15', 'chuantougui/16', 'chuantougui/17', 'chuantougui/18', 'chuantougui/19', 'chuantougui/20', 'chuantougui/21'] },
        { id: 'xiyigui', zh: '洗衣柜', en: 'Laundry Cabinet', pages: ['xiyigui/1', 'xiyigui/2', 'xiyigui/3', 'xiyigui/4', 'xiyigui/5', 'xiyigui/6', 'xiyigui/7', 'xiyigui/8', 'xiyigui/9', 'xiyigui/10', 'xiyigui/11', 'xiyigui/12', 'xiyigui/13', 'xiyigui/14', 'xiyigui/15', 'xiyigui/16', 'xiyigui/17', 'xiyigui/18', 'xiyigui/19', 'xiyigui/20', 'xiyigui/21'] },
        { id: 'bataigui', zh: '吧台柜', en: 'Bar Cabinet', pages: ['bataigui/1', 'bataigui/2', 'bataigui/3', 'bataigui/4', 'bataigui/5', 'bataigui/6', 'bataigui/7', 'bataigui/8', 'bataigui/9', 'bataigui/10', 'bataigui/11', 'bataigui/12', 'bataigui/13', 'bataigui/14', 'bataigui/15', 'bataigui/16', 'bataigui/17', 'bataigui/18', 'bataigui/19', 'bataigui/20', 'bataigui/21'] }
      ]
    }
  ],
  doors: [
    {
      id: 'dw', zh: '门窗与浴室隔断', en: 'Doors, Windows & Bath Screens', dir: 'mingshi',
      note: {
        zh: '门 / 窗 / 浴室隔断 三大品类，相似系列归组陈列',
        en: 'Three families — Doors, Windows, Bathroom Screens — similar series grouped together'
      },
      groups: [
        { id: 'door', zh: '门', en: 'Doors', pages: [
          'mingshi/13', 'mingshi/14', 'mingshi/15', 'mingshi/16', 'mingshi/17', 'mingshi/18', 'mingshi/19', 'mingshi/20', 'mingshi/21', 'mingshi/22',
          'mingshi/23', 'mingshi/24', 'mingshi/25', 'mingshi/26', 'mingshi/27', 'mingshi/28', 'mingshi/29', 'mingshi/30', 'mingshi/31', 'mingshi/32',
          'mingshi/33', 'mingshi/34', 'mingshi/35', 'mingshi/36', 'mingshi/37', 'mingshi/38', 'mingshi/39', 'mingshi/40', 'mingshi/41', 'mingshi/42',
          'mingshi/43', 'mingshi/44', 'mingshi/45', 'mingshi/46', 'mingshi/47', 'mingshi/48', 'mingshi/49', 'mingshi/50', 'mingshi/51', 'mingshi/52',
          'mingshi/53', 'mingshi/54', 'mingshi/55', 'mingshi/56', 'mingshi/57', 'mingshi/58'
        ] },
        { id: 'window', zh: '窗', en: 'Windows', pages: [
          'mingshi/2', 'mingshi/3', 'mingshi/4', 'mingshi/5', 'mingshi/6', 'mingshi/7', 'mingshi/8', 'mingshi/9', 'mingshi/10', 'mingshi/11',
          'mingshi/12'
        ] },
        { id: 'bath', zh: '浴室隔断', en: 'Bathroom Screens', pages: [
          'yomu/1', 'yomu/2', 'yomu/3', 'yomu/4', 'yomu/5', 'yomu/6', 'yomu/7', 'yomu/8', 'yomu/9', 'yomu/10',
          'yomu/11', 'yomu/12', 'yomu/13', 'yomu/14', 'yomu/15', 'yomu/16', 'yomu/17', 'yomu/18', 'yomu/19', 'yomu/20',
          'yomu/21', 'yomu/22', 'yomu/23', 'yomu/24', 'yomu/25', 'yomu/26', 'yomu/27', 'yomu/28', 'yomu/29', 'yomu/30',
          'yomu/31', 'yomu/32', 'yomu/33', 'yomu/34', 'yomu/35', 'yomu/36', 'yomu/37', 'yomu/38', 'yomu/39', 'yomu/40',
          'yomu/41', 'yomu/42', 'yomu/43', 'yomu/44', 'shower/1', 'shower/2', 'shower/3', 'shower/4', 'shower/5', 'shower/6',
          'shower/7', 'shower/8', 'shower/9', 'shower/10', 'shower/11', 'shower/12', 'shower/13', 'shower/14', 'shower/15', 'shower/16',
          'shower/17', 'shower/18', 'shower/19', 'shower/20', 'shower/21', 'shower/22', 'shower/23', 'shower/24', 'shower/25', 'shower/26',
          'shower/27', 'shower23/1', 'shower23/2', 'shower23/3', 'shower23/4', 'shower23/5', 'shower23/6', 'shower23/7'
        ] }
      ]
    }
  ]
};
