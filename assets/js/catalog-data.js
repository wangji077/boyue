/* 博粤美装 · 在线图册数据（硬装按纹理分类，不出现供应商品牌）
 * 图片路径：assets/img/catalog/{dir}/cat-{NN}t.jpg（缩略）/ cat-{NN}f.jpg（大图）
 * materials：单专辑六大纹理分组，pages 用 "目录/页码" 复合键；
 *            pagesVr 键为 "目录/页码"（3D 实铺效果链接）
 * doors：沿用整册结构（count 页，1..count 顺序展示）
 * window.CATALOG_SCOPE 决定页面取用哪一组（materials=硬装 / doors=博粤甄选）
 */
window.CATALOG = {
  materials: [
    {
      id: 'board', zh: '硬装板材馆', en: 'Surface Collection', dir: 'boyue',
      note: {
        zh: '石纹 / 木纹 / 木饰面 / 纯色 / 多色 / 布纹 六大纹理，相似花色归组陈列',
        en: 'Six texture families — Stone, Woodgrain, Veneer, Solid, Palette, Fabric — similar finishes grouped together'
      },
      groups: [
        { id: 'stone',   zh: '石纹',   en: 'Stone',          pages: ['boyue/5', 'boyue/6', 'boyue/7', 'boyue/8', 'longshi/8', 'longshi/9', 'yubaoshu/17'] },
        { id: 'wood',    zh: '木纹',   en: 'Woodgrain',      pages: [
          'boyue/9', 'boyue/10', 'boyue/11', 'boyue/12', 'boyue/13', 'boyue/14', 'boyue/15', 'boyue/16', 'boyue/17', 'boyue/18', 'boyue/19', 'boyue/20', 'boyue/21', 'boyue/22',
          'qsn-color/1', 'qsn-color/2', 'qsn-color/3', 'qsn-color/4', 'qsn-color/5', 'qsn-color/6', 'qsn-color/7', 'qsn-color/8', 'qsn-color/9', 'qsn-color/10', 'qsn-color/11', 'qsn-color/12', 'qsn-color/13', 'qsn-color/14',
          'yubaoshu/1', 'yubaoshu/2', 'yubaoshu/3', 'yubaoshu/4', 'yubaoshu/5', 'yubaoshu/6', 'yubaoshu/7', 'yubaoshu/8', 'yubaoshu/9', 'yubaoshu/10', 'yubaoshu/11', 'yubaoshu/12', 'yubaoshu/13', 'yubaoshu/14', 'yubaoshu/15', 'yubaoshu/16',
          'beipei/6'
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
        ] },
        { id: 'fabric',  zh: '布纹',   en: 'Fabric',         pages: [
          'beipei/2', 'beipei/3', 'beipei/4', 'beipei/5',
          'qsn-color/15'
        ] },
        { id: 'metal',   zh: '金属细节', en: 'Metal Details', pages: [] }
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
  doors: [
    { id: 'mingshi',  zh: '铭师门窗', en: 'Mingshi Doors & Windows', dir: 'mingshi', count: 59 },
    { id: 'yomu',     zh: '优沐 YOMU 淋浴系统', en: 'YOMU Shower Systems', dir: 'yomu', count: 44 },
    { id: 'shower',   zh: '高端淋浴房', en: 'Premium Shower Enclosures', dir: 'shower', count: 27 },
    { id: 'shower23', zh: '2023 淋浴精选册', en: '2023 Shower Brochure', dir: 'shower23', count: 7 }
  ]
};
