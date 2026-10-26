/* ==========================================================================
   作品数据层（中英双语）—— 所有案例集中在这里维护
   新增案例：往 PROJECTS 加一条即可，中英两个版本的列表/详情页自动生效
   页面设 window.LANG === 'en' 时渲染英文字段，否则渲染中文
   ========================================================================== */
var PROJECTS = [
  {
    id: "p1",
    name: "山水序 · 新中式大宅",
    name_en: "Shanshui · Chinese Contemporary Residence",
    cat: "villa",
    catName: "别墅大宅", catName_en: "Villa",
    loc: "广东 · 别墅", loc_en: "Guangdong · Villa",
    cover: "assets/img/p1-01.jpg",
    vr: "https://vr.justeasy.cn/view/1dke713i54990405-1742669815.html",
    intro: "以山水为骨、木作为肌，门墙柜一体贯通两层客厅。客厅、茶室、餐厅与卧室由同一套木作语言串联，石材与木皮交替，形成安静而有层次的东方空间。",
    intro_en: "Two storeys organised by one joinery system. Living rooms, tea room, dining and bedrooms share the same timber language, with stone and veneer alternating in a quiet, layered oriental composition.",
    gallery: [
      { src: "assets/img/p1-01.jpg", cap: "客厅 · 空间主视", cap_en: "Living Room" },
      { src: "assets/img/p1-02.jpg", cap: "客厅 · 山水电视墙", cap_en: "Landscape TV Wall" },
      { src: "assets/img/p1-03.jpg", cap: "茶室", cap_en: "Tea Room" },
      { src: "assets/img/p1-04.jpg", cap: "餐厅 · 酒柜与收纳", cap_en: "Dining & Wine Cabinet" },
      { src: "assets/img/p1-05.jpg", cap: "卧室 · 床头整体", cap_en: "Bedroom · Headboard Wall" },
      { src: "assets/img/p1-06.jpg", cap: "卧室 · 空间主视", cap_en: "Bedroom" },
      { src: "assets/img/p1-07.jpg", cap: "卫浴 · 浴缸区", cap_en: "Bathroom · Bathtub" },
      { src: "assets/img/p1-08.jpg", cap: "客厅 · 四号厅", cap_en: "Living Room IV" },
      { src: "assets/img/p1-09.jpg", cap: "客厅 · 五号厅", cap_en: "Living Room V" },
      { src: "assets/img/p1-10.jpg", cap: "窗边会客区", cap_en: "Window Lounge" },
      { src: "assets/img/p1-11.jpg", cap: "客厅 · 七号厅", cap_en: "Living Room VII" },
      { src: "assets/img/p1-12.jpg", cap: "客厅 · 八号厅", cap_en: "Living Room VIII" },
      { src: "assets/img/p1-13.jpg", cap: "餐厅 · 空间主视", cap_en: "Dining" },
      { src: "assets/img/p1-14.jpg", cap: "卧室 · 三号房", cap_en: "Bedroom III" },
      { src: "assets/img/p1-15.jpg", cap: "卫浴 · 双台盆", cap_en: "Bathroom · Double Vanity" }
    ]
  },
  {
    id: "p2",
    name: "观幕 · 现代别墅",
    name_en: "Guanmu · Modern Villa",
    cat: "villa",
    catName: "别墅大宅", catName_en: "Villa",
    loc: "私宅 · 四层", loc_en: "Private · 4 Storeys",
    cover: "assets/img/p2-02.jpg",
    vr: "https://vr.justeasy.cn/view/21697h76t8703w86-1680495825.html",
    intro: "地下观影厅、四层起居动线，全宅木作深色系贯通。从玄关悬浮柜到四楼主卧，每一层都以同一套深木与金属细节收口。",
    intro_en: "A basement home cinema and four floors of living, unified in dark timber joinery — from the floating foyer cabinet to the fourth-floor master suite.",
    gallery: [
      { src: "assets/img/p2-02.jpg", cap: "观影厅 · 投影与座席", cap_en: "Home Cinema" },
      { src: "assets/img/p2-07.jpg", cap: "观影厅 · 入口视角", cap_en: "Home Cinema · Entrance" },
      { src: "assets/img/p2-08.jpg", cap: "观影厅 · 吧台", cap_en: "Cinema Bar Counter" },
      { src: "assets/img/p2-01.jpg", cap: "玄关 · 悬浮柜", cap_en: "Foyer · Floating Cabinet" },
      { src: "assets/img/p2-04.jpg", cap: "客厅 · 电视墙与窗侧", cap_en: "Living Room · TV Wall" },
      { src: "assets/img/p2-10.jpg", cap: "客厅 · 沙发与餐边柜", cap_en: "Sofa & Sideboard" },
      { src: "assets/img/p2-03.jpg", cap: "餐厨", cap_en: "Dining & Kitchen" },
      { src: "assets/img/p2-09.jpg", cap: "餐厅 · 反向视角", cap_en: "Dining · Reverse View" },
      { src: "assets/img/p2-05.jpg", cap: "三楼 · 套房一", cap_en: "3F Suite I" },
      { src: "assets/img/p2-12.jpg", cap: "多功能室 · 书桌与休闲", cap_en: "Multipurpose Desk" },
      { src: "assets/img/p2-06.jpg", cap: "四楼 · 主卧", cap_en: "4F Master Bedroom" },
      { src: "assets/img/p2-11.jpg", cap: "四主卫 · 浴缸与窗", cap_en: "4F Bath · Bathtub" },
      { src: "assets/img/p2-13.jpg", cap: "四楼 · 卧室", cap_en: "4F Bedroom" }
    ]
  },
  {
    id: "p4",
    name: "白集 · 现代四房",
    name_en: "Baiji · Modern 4-Bedroom",
    cat: "apartment",
    catName: "住宅空间", catName_en: "Residential",
    loc: "公寓 · 四房", loc_en: "Apartment · 4 Bedrooms",
    cover: "assets/img/p4-04.jpg",
    vr: "",
    intro: "钢琴玄关、临窗茶区，以白色与浅木组织全家收纳。四个卧室各自成套，公区横向展开，动线简单直接。",
    intro_en: "A piano foyer and window-side tea corner, with whole-home storage in pale oak. Four bedrooms, a horizontal living area and a straightforward circulation.",
    gallery: [
      { src: "assets/img/p4-04.jpg", cap: "客厅", cap_en: "Living Room" },
      { src: "assets/img/p4-01.jpg", cap: "玄关 · 钢琴位", cap_en: "Foyer · Piano Niche" },
      { src: "assets/img/p4-03.jpg", cap: "餐厅", cap_en: "Dining" },
      { src: "assets/img/p4-02.jpg", cap: "厨房", cap_en: "Kitchen" },
      { src: "assets/img/p4-05.jpg", cap: "主卧", cap_en: "Master Bedroom" },
      { src: "assets/img/p4-09.jpg", cap: "主卧 · 套卫", cap_en: "En-suite Bathroom" },
      { src: "assets/img/p4-10.jpg", cap: "次卧一", cap_en: "Bedroom I" },
      { src: "assets/img/p4-11.jpg", cap: "次卧二", cap_en: "Bedroom II" },
      { src: "assets/img/p4-06.jpg", cap: "临窗茶区", cap_en: "Window-side Tea Corner" },
      { src: "assets/img/p4-07.jpg", cap: "阳台 · 洗衣区", cap_en: "Laundry Balcony" },
      { src: "assets/img/p4-08.jpg", cap: "客卫", cap_en: "Guest Bathroom" }
    ]
  },
  {
    id: "p5",
    name: "澄居 · 大平层",
    name_en: "Chengju · Luxury Flat",
    cat: "apartment",
    catName: "住宅空间", catName_en: "Residential",
    loc: "公寓 · 大平层", loc_en: "Apartment · Large Flat",
    cover: "assets/img/p5-01.jpg",
    vr: "",
    intro: "公区横向展开，主卧衣柜与卫浴通道一体化设计，次卧以同一套木饰面收口。",
    intro_en: "A horizontally expanded living area; the master wardrobe and bathroom passage designed as one, with secondary bedrooms finished in the same veneer.",
    gallery: [
      { src: "assets/img/p5-01.jpg", cap: "客厅", cap_en: "Living Room" },
      { src: "assets/img/p5-02.jpg", cap: "餐厅", cap_en: "Dining" },
      { src: "assets/img/p5-03.jpg", cap: "主卧", cap_en: "Master Bedroom" },
      { src: "assets/img/p5-05.jpg", cap: "主卧 · 衣柜与通道", cap_en: "Wardrobe & Passage" },
      { src: "assets/img/p5-04.jpg", cap: "次卧", cap_en: "Second Bedroom" },
      { src: "assets/img/p5-07.jpg", cap: "次卧 · 衣柜与入口", cap_en: "Second Bedroom · Wardrobe" },
      { src: "assets/img/p5-06.jpg", cap: "卫生间", cap_en: "Bathroom" }
    ]
  },
  {
    id: "p6",
    name: "叠山 · 四层宅",
    name_en: "Dieshan · Four-Storey House",
    cat: "villa",
    catName: "别墅大宅", catName_en: "Villa",
    loc: "私宅 · 四层", loc_en: "Private · 4 Storeys",
    cover: "assets/img/p6-01.jpg",
    vr: "",
    intro: "茶区、餐厨自一层向上生长，每层一个完整的生活面，公卫与套卫分层配置。",
    intro_en: "One complete living level per floor, growing from the ground-floor tea area upward, with bathrooms distributed across levels.",
    gallery: [
      { src: "assets/img/p6-01.jpg", cap: "三楼 · 客厅茶区", cap_en: "3F Living & Tea" },
      { src: "assets/img/p6-03.jpg", cap: "一楼 · 茶区", cap_en: "1F Tea Area" },
      { src: "assets/img/p6-04.jpg", cap: "一楼 · 餐厨", cap_en: "1F Dining & Kitchen" },
      { src: "assets/img/p6-05.jpg", cap: "三楼 · 厨房", cap_en: "3F Kitchen" },
      { src: "assets/img/p6-06.jpg", cap: "三楼 · 卧室", cap_en: "3F Bedroom" },
      { src: "assets/img/p6-07.jpg", cap: "三楼 · 公卫", cap_en: "3F Bathroom" },
      { src: "assets/img/p6-02.jpg", cap: "四楼 · 主卧", cap_en: "4F Master Bedroom" }
    ]
  },
  {
    id: "p7",
    name: "栖云 · 山水大宅",
    name_en: "Qiyun · Oriental Mansion",
    cat: "villa",
    catName: "别墅大宅", catName_en: "Villa",
    loc: "大宅 · 多层", loc_en: "Mansion · Multi-level",
    cover: "assets/img/hero.jpg",
    vr: "",
    intro: "餐厅纵深、山水画墙、环灯书房，一套完整的东方叙事。客厅、长辈房、客房与男孩房全屋木作统一对纹。",
    intro_en: "A complete oriental narrative: a deep dining hall, a landscape feature wall and a ring-lit study, with matched veneers across every bedroom.",
    gallery: [
      { src: "assets/img/hero.jpg",  cap: "餐厅 · 纵深主视", cap_en: "Dining Hall" },
      { src: "assets/img/p7-03.jpg", cap: "客厅 · 山水画墙", cap_en: "Landscape Feature Wall" },
      { src: "assets/img/p7-02.jpg", cap: "过廊 · 框景", cap_en: "Framed Corridor" },
      { src: "assets/img/p7-12.jpg", cap: "客厅 · 石墙雕塑", cap_en: "Stone Wall & Sculpture" },
      { src: "assets/img/p7-13.jpg", cap: "客厅 · 窗前沙发", cap_en: "Sofa by the Window" },
      { src: "assets/img/p7-14.jpg", cap: "餐厅 · 圆桌俯拍", cap_en: "Dining Table · Top View" },
      { src: "assets/img/p7-04.jpg", cap: "主卧 · 书房纵深", cap_en: "Bedroom & Study" },
      { src: "assets/img/p7-08.jpg", cap: "主卧 · 床头正视", cap_en: "Master Headboard" },
      { src: "assets/img/p7-09.jpg", cap: "主卧 · 入口壁灯", cap_en: "Entrance Wall Lamps" },
      { src: "assets/img/p7-10.jpg", cap: "长辈房", cap_en: "Elder's Room" },
      { src: "assets/img/p7-11.jpg", cap: "客房 · 床头", cap_en: "Guest Bedroom" },
      { src: "assets/img/p7-15.jpg", cap: "客房 · 窗景", cap_en: "Guest Room View" },
      { src: "assets/img/p7-05.jpg", cap: "阳台 · 茶席", cap_en: "Balcony Tea Setting" },
      { src: "assets/img/p7-06.jpg", cap: "书房 · 柜体与环灯", cap_en: "Ring-lit Study" },
      { src: "assets/img/p7-07.jpg", cap: "男孩房", cap_en: "Boy's Room" }
    ]
  },
  {
    id: "p8",
    name: "玄墨 · 东方平层",
    name_en: "Xuanmo · Oriental Flat",
    cat: "apartment",
    catName: "住宅空间", catName_en: "Residential",
    loc: "平层 · 555㎡", loc_en: "Flat · 555 m²",
    cover: "assets/img/p8-06.jpg",
    vr: "",
    intro: "深木与金箔在同一套柜体语言里交替，走廊、玄关到主卧以暗色木皮连续铺陈，屏风与壁画在暗色中点亮东方气质。",
    intro_en: "Dark timber and gold leaf alternate within one cabinetry language — corridor, foyer and master suite lined in continuous veneer, with screens and murals glowing against the dark.",
    gallery: [
      { src: "assets/img/p8-01.jpg", cap: "休闲椅角落", cap_en: "Lounge Corner" },
      { src: "assets/img/p8-02.jpg", cap: "窗边卧榻", cap_en: "Window Chaise" },
      { src: "assets/img/p8-03.jpg", cap: "走廊 · 纵深", cap_en: "Corridor" },
      { src: "assets/img/p8-04.jpg", cap: "玄关 · 端景", cap_en: "Foyer Console" },
      { src: "assets/img/p8-05.jpg", cap: "金箔山水屏风", cap_en: "Gold-leaf Screen" },
      { src: "assets/img/p8-06.jpg", cap: "客厅 · 深色木作", cap_en: "Living Room" },
      { src: "assets/img/p8-07.jpg", cap: "卧室 · 暖木床头", cap_en: "Bedroom" },
      { src: "assets/img/p8-08.jpg", cap: "卧室 · 床背壁画", cap_en: "Bedroom Mural Wall" },
      { src: "assets/img/p8-09.jpg", cap: "客厅 · 横厅主视", cap_en: "Living · Wide View" },
      { src: "assets/img/p8-10.jpg", cap: "窗边休憩区", cap_en: "Window Lounge" },
      { src: "assets/img/p8-11.jpg", cap: "客厅 · 单椅组合", cap_en: "Accent Chairs" },
      { src: "assets/img/p8-12.jpg", cap: "卧室 · 一角", cap_en: "Bedroom Corner" },
      { src: "assets/img/p8-13.jpg", cap: "阅读角", cap_en: "Reading Corner" },
      { src: "assets/img/p8-14.jpg", cap: "庭院 · 绿植", cap_en: "Courtyard Greenery" }
    ]
  },
  {
    id: "p9",
    name: "沁园 · 法式别墅",
    name_en: "Qinyuan · French Villa",
    cat: "villa",
    catName: "别墅大宅", catName_en: "Villa",
    loc: "别墅 · 578㎡", loc_en: "Villa · 578 m²",
    cover: "assets/img/p9-01.jpg",
    vr: "",
    intro: "旋转楼梯与穹顶大厅定调，奶油白木作、拱形门洞与壁炉护墙板整宅定制，法式骨架配现代生活动线。",
    intro_en: "A spiral staircase and vaulted hall set the tone: cream-toned bespoke joinery, arched openings and panellied fireplaces — a French skeleton with a modern plan.",
    gallery: [
      { src: "assets/img/p9-01.jpg", cap: "旋转楼梯", cap_en: "Spiral Staircase" },
      { src: "assets/img/p9-02.jpg", cap: "穹顶大厅", cap_en: "Vaulted Hall" },
      { src: "assets/img/p9-03.jpg", cap: "楼梯 · 花艺", cap_en: "Stair & Floral" },
      { src: "assets/img/p9-04.jpg", cap: "餐厅", cap_en: "Dining" },
      { src: "assets/img/p9-05.jpg", cap: "入户门厅", cap_en: "Entry Hall" },
      { src: "assets/img/p9-06.jpg", cap: "弧形休闲椅", cap_en: "Curved Lounge Chair" },
      { src: "assets/img/p9-07.jpg", cap: "拱形过廊", cap_en: "Arched Corridor" },
      { src: "assets/img/p9-08.jpg", cap: "客厅 · 壁炉", cap_en: "Living · Fireplace" },
      { src: "assets/img/p9-09.jpg", cap: "客厅 · 吊灯", cap_en: "Living · Chandelier" },
      { src: "assets/img/p9-10.jpg", cap: "客厅 · 横厅", cap_en: "Living · Wide View" },
      { src: "assets/img/p9-11.jpg", cap: "窗边单椅", cap_en: "Window Armchair" },
      { src: "assets/img/p9-12.jpg", cap: "客厅 · 钢琴区", cap_en: "Piano Area" },
      { src: "assets/img/p9-13.jpg", cap: "客厅 · 全景", cap_en: "Living · Panorama" },
      { src: "assets/img/p9-14.jpg", cap: "客厅 · 弧形沙发", cap_en: "Curved Sofa" }
    ]
  },
  {
    id: "p10",
    name: "拾光 · 原木极简",
    name_en: "Shiguang · Timber Minimal",
    cat: "apartment",
    catName: "住宅空间", catName_en: "Residential",
    loc: "公寓 · 大平层", loc_en: "Apartment · Large Flat",
    cover: "assets/img/p10-06.jpg",
    vr: "",
    intro: "全屋以浅橡木柜体组织收纳：客厅木作墙、餐边整柜、厨房高柜与卧室衣柜同色贯通，光与木是唯一的主角。",
    intro_en: "Pale-oak cabinetry organises the whole home — living feature wall, dining sideboard, kitchen tall units and bedroom wardrobes in one continuous tone.",
    gallery: [
      { src: "assets/img/p10-01.jpg", cap: "过廊 · 端景", cap_en: "Corridor" },
      { src: "assets/img/p10-02.jpg", cap: "客厅 · 木作墙", cap_en: "Timber Feature Wall" },
      { src: "assets/img/p10-03.jpg", cap: "阳台 · 休闲椅", cap_en: "Balcony Chairs" },
      { src: "assets/img/p10-04.jpg", cap: "客厅 · 茶桌", cap_en: "Tea Table" },
      { src: "assets/img/p10-05.jpg", cap: "陈列细节", cap_en: "Shelving Detail" },
      { src: "assets/img/p10-06.jpg", cap: "客厅 · 主视", cap_en: "Living Room" },
      { src: "assets/img/p10-07.jpg", cap: "客厅 · 窗景", cap_en: "Living · Window View" },
      { src: "assets/img/p10-08.jpg", cap: "卧室 · 床尾凳", cap_en: "Bedroom Bench" },
      { src: "assets/img/p10-09.jpg", cap: "厨房", cap_en: "Kitchen" },
      { src: "assets/img/p10-10.jpg", cap: "厨房 · 木作柜", cap_en: "Kitchen Cabinets" },
      { src: "assets/img/p10-11.jpg", cap: "餐厅 · 木桌", cap_en: "Dining Table" },
      { src: "assets/img/p10-12.jpg", cap: "餐厅 · 细节", cap_en: "Dining Detail" },
      { src: "assets/img/p10-13.jpg", cap: "厨房 · 台面", cap_en: "Kitchen Counter" },
      { src: "assets/img/p10-14.jpg", cap: "卧室 · 亚麻床品", cap_en: "Bedroom Linen" }
    ]
  },
  {
    id: "p11",
    name: "暖屿 · 暖调平层",
    name_en: "Nuanyu · Warm Flat",
    cat: "apartment",
    catName: "住宅空间", catName_en: "Residential",
    loc: "公寓 · 180㎡", loc_en: "Apartment · 180 m²",
    cover: "assets/img/p11-03.jpg",
    vr: "",
    intro: "米色艺术涂料与暖木柜体包裹全屋，圆窗、纸灯与弧形家具让 180 平米始终松弛，餐厨一体以岛台收口。",
    intro_en: "Beige limewash and warm timber wrap the home; round windows, paper lanterns and curved furniture keep 180 m² relaxed, closed by an island in the open kitchen.",
    gallery: [
      { src: "assets/img/p11-01.jpg", cap: "客厅 · 橄榄绿沙发", cap_en: "Living · Olive Sofa" },
      { src: "assets/img/p11-02.jpg", cap: "起居区", cap_en: "Lounge" },
      { src: "assets/img/p11-03.jpg", cap: "客厅 · 纸灯", cap_en: "Paper Lantern" },
      { src: "assets/img/p11-04.jpg", cap: "休闲角", cap_en: "Lounge Corner" },
      { src: "assets/img/p11-05.jpg", cap: "客厅 · 电视墙", cap_en: "TV Wall" },
      { src: "assets/img/p11-06.jpg", cap: "纸灯细节", cap_en: "Lantern Detail" },
      { src: "assets/img/p11-07.jpg", cap: "餐厅 · 圆桌", cap_en: "Round Dining Table" },
      { src: "assets/img/p11-08.jpg", cap: "餐厅 · 圆窗", cap_en: "Round Window" },
      { src: "assets/img/p11-09.jpg", cap: "餐边柜与吧台凳", cap_en: "Sideboard & Stools" },
      { src: "assets/img/p11-10.jpg", cap: "卡座 · 圆窗", cap_en: "Booth & Porthole" },
      { src: "assets/img/p11-11.jpg", cap: "过廊", cap_en: "Corridor" },
      { src: "assets/img/p11-12.jpg", cap: "餐厅 · 主视", cap_en: "Dining" },
      { src: "assets/img/p11-13.jpg", cap: "厨房 · 岛台", cap_en: "Kitchen Island" },
      { src: "assets/img/p11-14.jpg", cap: "厨房 · 深色岛台", cap_en: "Kitchen · Dark Island" }
    ]
  },
  {
    id: "p12",
    name: "栖野 · 花园之家",
    name_en: "Qiye · Garden House",
    cat: "villa",
    catName: "别墅大宅", catName_en: "Villa",
    loc: "私宅 · 花园", loc_en: "Private · Garden",
    cover: "assets/img/p12-03.jpg",
    vr: "",
    intro: "原木、藤编与白墙把花园请进室内，挑空客厅与楼梯艺术墙成为家的中心，厨房岛台与早餐位围绕日光布置。",
    intro_en: "Timber, rattan and white walls invite the garden in; a double-height living room and art-lined stair anchor the home, with kitchen island and breakfast nook arranged around daylight.",
    gallery: [
      { src: "assets/img/p12-01.jpg", cap: "餐厨 · 主视", cap_en: "Dining & Kitchen" },
      { src: "assets/img/p12-02.jpg", cap: "客厅 · 楼梯", cap_en: "Living & Stair" },
      { src: "assets/img/p12-03.jpg", cap: "客厅 · 花园景", cap_en: "Garden View" },
      { src: "assets/img/p12-04.jpg", cap: "木作柜体", cap_en: "Cabinetry" },
      { src: "assets/img/p12-05.jpg", cap: "花园休闲区", cap_en: "Garden Lounge" },
      { src: "assets/img/p12-06.jpg", cap: "窗边吧台凳", cap_en: "Window Stool" },
      { src: "assets/img/p12-07.jpg", cap: "楼梯 · 艺术墙", cap_en: "Stair & Art" },
      { src: "assets/img/p12-08.jpg", cap: "挑空客厅", cap_en: "Double-height Living" },
      { src: "assets/img/p12-09.jpg", cap: "厨房 · 岛台", cap_en: "Kitchen Island" },
      { src: "assets/img/p12-10.jpg", cap: "厨房", cap_en: "Kitchen" },
      { src: "assets/img/p12-11.jpg", cap: "厨房 · 早餐位", cap_en: "Breakfast Nook" },
      { src: "assets/img/p12-12.jpg", cap: "餐厅 · 黑桌", cap_en: "Dining · Black Table" },
      { src: "assets/img/p12-13.jpg", cap: "餐桌一角", cap_en: "Dining Nook" },
      { src: "assets/img/p12-14.jpg", cap: "阳光房", cap_en: "Sunroom" }
    ]
  },
  {
    id: "p13",
    name: "归家 · 现代平层",
    name_en: "Guijia · Modern Flat",
    cat: "apartment",
    catName: "住宅空间", catName_en: "Residential",
    loc: "私宅 · 平层", loc_en: "Private · Flat",
    cover: "assets/img/p13-04.jpg",
    vr: "",
    intro: "灰绿与暖白分层铺开，横厅以电视墙与条纹餐桌定场，西厨中岛与吧台串联餐厨，是一款克制的现代定制样板。",
    intro_en: "Sage green over warm white: a wide living hall set by the TV wall and striped dining table, with island and bar counter linking kitchen to dining in a restrained modern scheme.",
    gallery: [
      { src: "assets/img/p13-01.jpg", cap: "玻璃展示柜", cap_en: "Glass Display" },
      { src: "assets/img/p13-02.jpg", cap: "窗边起居", cap_en: "Window Lounge" },
      { src: "assets/img/p13-03.jpg", cap: "窗边圆几", cap_en: "Window Side Table" },
      { src: "assets/img/p13-04.jpg", cap: "客厅 · 横厅", cap_en: "Living · Wide View" },
      { src: "assets/img/p13-05.jpg", cap: "客厅 · 电视墙", cap_en: "TV Wall" },
      { src: "assets/img/p13-06.jpg", cap: "客厅 · 沙发与吊灯", cap_en: "Sofa & Pendant" },
      { src: "assets/img/p13-07.jpg", cap: "餐厅 · 条纹桌", cap_en: "Striped Dining Table" },
      { src: "assets/img/p13-08.jpg", cap: "餐厨 · 吧台", cap_en: "Dining & Bar" },
      { src: "assets/img/p13-09.jpg", cap: "餐厅 · 主视", cap_en: "Dining" },
      { src: "assets/img/p13-10.jpg", cap: "厨房 · 中岛", cap_en: "Kitchen Island" },
      { src: "assets/img/p13-11.jpg", cap: "西厨 · 吧台", cap_en: "Bar Counter" },
      { src: "assets/img/p13-12.jpg", cap: "壁画与烛台", cap_en: "Art & Candlelight" },
      { src: "assets/img/p13-13.jpg", cap: "咖啡角", cap_en: "Coffee Corner" }
    ]
  }
];

/* 语言取值：window.LANG === 'en' 时取 *_en 字段，否则取中文 */
function L(obj, key) {
  if (window.LANG === 'en') {
    var en = obj[key + '_en'];
    if (en !== undefined && en !== '') return en;
  }
  return obj[key];
}

/* 详情/列表页跳转后缀：英文页互链用 -en 文件 */
function pageSuffix() {
  return window.LANG === 'en' ? '-en' : '';
}

/* ---------------------- 渲染：作品卡片 ---------------------- */
function renderCards(containerId, cat) {
  var box = document.getElementById(containerId);
  if (!box) return;

  var list = PROJECTS.filter(function (p) { return !cat || p.cat === cat; });
  box.innerHTML = list.map(function (p, i) {
    return '' +
      '<a class="card reveal" data-delay="' + (i % 2) + '" href="project' + pageSuffix() + '.html?id=' + p.id + '">' +
        '<div class="card-media">' +
          '<img src="' + p.cover + '" alt="' + L(p, 'name') + '" loading="lazy" width="1600" height="900">' +
        '</div>' +
        '<div class="card-body">' +
          '<h3>' + L(p, 'name') + '</h3>' +
          '<span class="card-meta">' + L(p, 'loc') + '</span>' +
        '</div>' +
      '</a>';
  }).join("");
  if (window.observeReveals) window.observeReveals();
}

/* ---------------------- 渲染：作品详情（森境式：标题区 + 满版图墙） ---------------------- */
function renderProject() {
  var box = document.getElementById("project-root");
  if (!box) return;

  var id = new URLSearchParams(location.search).get("id") || "p1";
  var idx = Math.max(0, PROJECTS.findIndex(function (p) { return p.id === id; }));
  var p = PROJECTS[idx];
  var prev = PROJECTS[(idx - 1 + PROJECTS.length) % PROJECTS.length];
  var next = PROJECTS[(idx + 1) % PROJECTS.length];
  var suffix = pageSuffix();
  var isEn = window.LANG === 'en';

  document.title = L(p, 'name') + ' | 博粤美装智造 BOYUE';

  // 标题区：主语言名 + 另一语言名 + 地点；右侧两段文案（本语言在前）
  var titleMain = L(p, 'name');
  var titleAlt = isEn ? p.name : (p.name_en || '');
  var meta = L(p, 'loc') + ' · ' + L(p, 'catName');
  var introA = isEn ? p.intro_en : p.intro;
  var introB = isEn ? p.intro : (p.intro_en || '');

  box.innerHTML = '' +
    '<section class="sec--tight">' +
      '<div class="wrap">' +
        '<nav class="crumb" aria-label="breadcrumb" style="margin-bottom:clamp(20px,3vw,40px)">' +
          '<a href="index' + suffix + '.html">' + (isEn ? 'Home' : '首页') + '</a>' +
          '<span aria-hidden="true">/</span>' +
          '<a href="projects' + suffix + '.html">' + (isEn ? 'Works' : '作品') + '</a>' +
          '<span aria-hidden="true">/</span><span>' + L(p, 'catName') + '</span>' +
        '</nav>' +

        '<div class="detail-head reveal is-in">' +
          '<div class="detail-title">' +
            '<span class="eyebrow">' + L(p, 'catName') + '</span>' +
            '<h1>' + titleMain + '</h1>' +
            (titleAlt ? '<p class="detail-en-name">' + titleAlt + '</p>' : '') +
            '<p class="detail-meta">' + meta + '</p>' +
          '</div>' +
          '<div class="detail-intro">' +
            '<p>' + introA + '</p>' +
            (introB && introB !== introA ? '<p>' + introB + '</p>' : '') +
          '</div>' +
        '</div>' +

        '<div class="gallery" id="case-gallery">' +
          p.gallery.map(function (g) {
            return '<figure class="reveal" data-cap="' + (L(g, 'cap') || '').replace(/"/g, '') + '">' +
                     '<img src="' + g.src + '" alt="' + L(p, 'name') + ' ' + L(g, 'cap') + '" loading="lazy" width="1600" height="900">' +
                   '</figure>';
          }).join("") +
        '</div>' +

        (p.vr
          ? '<p style="margin-top:clamp(36px,5vw,56px)"><a class="link-underline" href="' + p.vr + '" target="_blank" rel="noopener">' +
              (isEn ? '720° VR Tour' : '720° VR 全景') +
              ' <span class="arw" aria-hidden="true">↗</span></a></p>'
          : '') +

        '<nav class="pager" style="margin-top:clamp(48px,7vw,88px)" aria-label="pager">' +
          '<a href="project' + suffix + '.html?id=' + prev.id + '"><span class="k">← Previous</span><span>' + L(prev, 'name') + '</span></a>' +
          '<a href="project' + suffix + '.html?id=' + next.id + '" style="text-align:right"><span class="k">Next →</span><span>' + L(next, 'name') + '</span></a>' +
        '</nav>' +
      '</div>' +
    '</section>';

  // 图墙点击放大（灯箱）
  var gal = box.querySelector('#case-gallery');
  if (gal) {
    var galleryData = p.gallery.map(function (g) {
      return { src: g.src, alt: L(p, 'name') + ' ' + (L(g, 'cap') || '') };
    });
    gal.addEventListener('click', function (e) {
      var fig = e.target.closest('figure');
      if (!fig) return;
      var idx = Array.prototype.indexOf.call(gal.children, fig);
      if (idx > -1) lbOpen(galleryData, idx);
    });
  }

  if (window.observeReveals) window.observeReveals();
}

/* ---------------------- 灯箱：案例图墙点击放大 ---------------------- */
var LB = { items: [], i: 0 };

function lbBuild() {
  if (document.getElementById('lightbox')) return;
  var el = document.createElement('div');
  el.id = 'lightbox';
  el.setAttribute('role', 'dialog');
  el.setAttribute('aria-modal', 'true');
  el.innerHTML = '' +
    '<div class="lb-stage"><img class="lb-img" src="" alt=""></div>' +
    '<p class="lb-count" aria-live="polite"></p>' +
    '<button class="lb-btn lb-close" type="button" aria-label="Close">&times;</button>' +
    '<button class="lb-btn lb-prev" type="button" aria-label="Previous">&#8592;</button>' +
    '<button class="lb-btn lb-next" type="button" aria-label="Next">&#8594;</button>';
  document.body.appendChild(el);

  el.addEventListener('click', function (e) {
    if (e.target === el || e.target.classList.contains('lb-stage')) lbClose();
  });
  el.querySelector('.lb-close').addEventListener('click', lbClose);
  el.querySelector('.lb-prev').addEventListener('click', function () { lbGo(LB.i - 1); });
  el.querySelector('.lb-next').addEventListener('click', function () { lbGo(LB.i + 1); });

  document.addEventListener('keydown', function (e) {
    if (!el.classList.contains('is-open')) return;
    if (e.key === 'Escape') lbClose();
    else if (e.key === 'ArrowLeft') lbGo(LB.i - 1);
    else if (e.key === 'ArrowRight') lbGo(LB.i + 1);
  });
}

function lbOpen(items, i) {
  lbBuild();
  LB.items = items;
  document.getElementById('lightbox').classList.add('is-open');
  document.body.style.overflow = 'hidden';
  lbGo(i);
}

function lbGo(i) {
  var n = LB.items.length;
  if (!n) return;
  LB.i = ((i % n) + n) % n;
  var g = LB.items[LB.i];
  var img = document.querySelector('.lb-img');
  img.src = g.src;
  img.alt = g.alt || '';
  document.querySelector('.lb-count').textContent = (LB.i + 1) + ' / ' + n;
}

function lbClose() {
  var el = document.getElementById('lightbox');
  if (el) el.classList.remove('is-open');
  document.body.style.overflow = '';
}

/* 首页精选：前 4 个项目 */
function renderHomePicks(containerId) {
  var box = document.getElementById(containerId);
  if (!box) return;
  var list = PROJECTS.slice(0, 4);
  box.innerHTML = list.map(function (p, i) {
    return '' +
      '<a class="card reveal" data-delay="' + (i % 2) + '" href="project' + pageSuffix() + '.html?id=' + p.id + '">' +
        '<div class="card-media">' +
          '<img src="' + p.cover + '" alt="' + L(p, 'name') + '" loading="lazy" width="1600" height="900">' +
        '</div>' +
        '<div class="card-body">' +
          '<h3>' + L(p, 'name') + '</h3>' +
          '<span class="card-meta">' + L(p, 'loc') + '</span>' +
        '</div>' +
      '</a>';
  }).join("");
  if (window.observeReveals) window.observeReveals();
}
