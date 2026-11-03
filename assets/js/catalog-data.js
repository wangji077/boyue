/* 博粤美装 · 在线图册数据（由 AAA-图册文件 交付包整理生成）
 * 图片路径：assets/img/catalog/{album.dir}/cat-{NN}t.jpg（缩略）/ cat-{NN}f.jpg（大图）
 * pagesVr：页码 → 3D 实铺效果链接（仅博粤精选册有可靠识别结果）
 * window.CATALOG_SCOPE 决定页面取用哪一组（materials=硬装 / doors=博粤甄选）
 */
window.CATALOG = {
  materials: [
    {
      id: 'boyue', zh: '博粤精选', en: 'BOYUE Selection', dir: 'boyue',
      note: { zh: '博粤自有《设计与选材手册》，六大系列 27 页', en: 'BOYUE in-house Design & Materials Handbook, 27 pages' },
      groups: [
        { id: 'guide',   zh: '板材知识',   en: 'Panel Knowledge',   pages: [2, 3] },
        { id: 'stone',   zh: '石纹系列',   en: 'Stone Series',      pages: [5, 6, 7, 8] },
        { id: 'panel',   zh: '木饰面大板', en: 'Wood Panels',       pages: [9, 10, 11, 12, 13] },
        { id: 'wood',    zh: '经典木纹',   en: 'Classic Woodgrain', pages: [14, 15, 16, 17, 18, 19, 20] },
        { id: 'solid',   zh: '纯色布纹',   en: 'Solid & Fabric',    pages: [21, 22, 23, 24, 25] },
        { id: 'palette', zh: '多色拼板',   en: 'Colour Palettes',   pages: [26, 27, 28, 29] },
        { id: 'metal',   zh: '金属细节',   en: 'Metal Details',     pages: [] }
      ],
      pagesVr: {
        5: ['https://vr.justeasy.cn/view/817h6f3584387t48-1763543748.html'],
        6: ['https://vr.justeasy.cn/view/11g7y6v35493f814-1763543814.html'],
        7: ['https://vr.justeasy.cn/view/176gcx3545j93761-1763543761.html'],
        8: ['https://vr.justeasy.cn/view/917z6tny3b543829-1763543829.html'],
        9: ['https://vr.justeasy.cn/view/217634nq5437a6u8-1763543768.html', 'https://vr.justeasy.cn/view/de0t910763543874-1763543874.html'],
        10: ['https://vr.justeasy.cn/view/0q21716w3g543977-1763543977.html', 'https://vr.justeasy.cn/view/17urn6w33543x837-1763543837.html'],
        11: ['https://vr.justeasy.cn/view/17631354ht37p745-1763543775.html', 'https://vr.justeasy.cn/view/811qy0v3h509c29-1763543879.html'],
        12: ['https://vr.justeasy.cn/view/8159u735u4c3h909-1763543909.html', 'https://vr.justeasy.cn/view/5131i1v35j4m3i51-1763543917.html'],
        13: ['https://vr.justeasy.cn/view/1114t7q35d5i4t74-1763543923.html'],
        14: ['https://vr.justeasy.cn/view/3139p3g35d4a3r72-1763543929.html', 'https://vr.justeasy.cn/view/4161i4e35k4s4i60-1763543939.html'],
        15: ['https://vr.justeasy.cn/view/5161v5n35n4n5v47-1763543944.html', 'https://vr.justeasy.cn/view/8181q8v35j949h43-1763543950.html'],
        16: ['https://vr.justeasy.cn/view/1169h1w35q5q1w56-1763543954.html', 'https://vr.justeasy.cn/view/1131u3q35t5c3i57-1763543958.html'],
        17: ['https://vr.justeasy.cn/view/3134v3y35e4t3u58-1763543962.html'],
        18: ['https://vr.justeasy.cn/view/7173w7n35r4w7r60-1763543966.html'],
        19: ['https://vr.justeasy.cn/view/9192j9r35k4j9v63-1763543971.html', 'https://vr.justeasy.cn/view/7172e7l35l4r7f66-1763543974.html'],
        20: ['https://vr.justeasy.cn/view/0q21716w3g543977-1763543977.html', 'https://vr.justeasy.cn/view/17urn6w33543x837-1763543837.html'],
        21: ['https://vr.justeasy.cn/view/8187y8g35y4v8t68-1763543984.html', 'https://vr.justeasy.cn/view/9191m9v35s4c9n68-1763543988.html'],
        22: ['https://vr.justeasy.cn/view/6167e6y35q4w6s71-1763543993.html', 'https://vr.justeasy.cn/view/4143d4w35b4c4r74-1763543997.html'],
        23: ['https://vr.justeasy.cn/view/3135a3h35r4s3t00-1763544000.html'],
        24: ['https://vr.justeasy.cn/view/6163a6q35g4m6u03-1763544005.html', 'https://vr.justeasy.cn/view/3134j3y35x4m3t07-1763544009.html'],
        25: ['https://vr.justeasy.cn/view/7171r7h35y4h7r12-1763544013.html'],
        26: ['https://vr.justeasy.cn/view/1163s1y35p4s1u16-1763544018.html', 'https://vr.justeasy.cn/view/4146r4k35f4f4h21-1763544023.html'],
        27: ['https://vr.justeasy.cn/view/8188g8j35w4b8t26-1763544028.html', 'https://vr.justeasy.cn/view/3135u3i35t4r3v30.html', 'https://vr.justeasy.cn/view/5155c5b35c4f5j33.html', 'https://vr.justeasy.cn/view/9197y9k35u4v9c36.html', 'https://vr.justeasy.cn/view/2163m2y35b4e2f40.html', 'https://vr.justeasy.cn/view/7177s7m35h4x7t45.html'],
        28: ['https://vr.justeasy.cn/view/5156v5g35u4t5i47.html', 'https://vr.justeasy.cn/view/3131n3d35p4r3u51.html', 'https://vr.justeasy.cn/view/8183k8v35y4z8f55.html', 'https://vr.justeasy.cn/view/3139x3g35h4p3u58.html', 'https://vr.justeasy.cn/view/9192c9v35x4m9b62.html', 'https://vr.justeasy.cn/view/7176q7t35r4s7u66.html'],
        29: ['https://vr.justeasy.cn/view/1162b1m35v4c1s70.html', 'https://vr.justeasy.cn/view/3136p3v35y4s3q73.html', 'https://vr.justeasy.cn/view/6165x6t35j4g6f76.html', 'https://vr.justeasy.cn/view/8189y8h35n4x8s80.html']
      }
    },
    { id: 'qsn-board', zh: '千年舟 · 博粤板材', en: 'Qiannianzhou Boards', dir: 'qsn-board', count: 20 },
    { id: 'qsn-color', zh: '千年舟 · 石墨烯电子色卡', en: 'Qiannianzhou Colour Cards', dir: 'qsn-color', count: 19 },
    { id: 'beipei',    zh: '北培板材', en: 'Beipei Boards', dir: 'beipei', count: 8 },
    { id: 'longshi',   zh: '隆饰板材', en: 'Longshi Boards', dir: 'longshi', count: 16 },
    { id: 'yubaoshu',  zh: '玉宝树海洋板', en: 'Yubaoshu Ocean Boards', dir: 'yubaoshu', count: 21 },
    { id: 'caizhen',   zh: '彩臻系列', en: 'Caizhen Series', dir: 'caizhen', count: 10 },
    { id: 'moganshan', zh: '莫干山板材', en: 'Moganshan Boards', dir: 'moganshan', count: 12 }
  ],
  doors: [
    { id: 'mingshi',  zh: '铭师门窗', en: 'Mingshi Doors & Windows', dir: 'mingshi', count: 59 },
    { id: 'yomu',     zh: '优沐 YOMU 淋浴系统', en: 'YOMU Shower Systems', dir: 'yomu', count: 44 },
    { id: 'shower',   zh: '高端淋浴房', en: 'Premium Shower Enclosures', dir: 'shower', count: 27 },
    { id: 'shower23', zh: '2023 淋浴精选册', en: '2023 Shower Brochure', dir: 'shower23', count: 7 }
  ]
};
