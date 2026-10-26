export type Status='confirmed'|'planned'|'pending'|'backup'|'verify';
export type Stop={time:string;end?:string;title:string;location?:string;transport?:string;detail?:string;status?:Status;url?:string;conditional?:string};
export type Day={id:string;date:string;weekday:string;title:string;area:string;intro:string;stops:Stop[];tips?:string[]};
export type Recommendation={name:string;type:'餐飲'|'商店'|'散步景點';dayIds:string[];nearStop:string;why:string;estimatedBudgetUSD?:string;address?:string;openingHours?:string;googleRating?:number;referenceRating?:number;googleMapsUrl?:string;sourceUrl?:string;verified:boolean};
export type Ticket={id:string;title:string;date:string;time:string;status:Status;url?:string;note:string;deadline?:string};
export type Task={id:string;group:string;title:string;due?:string;priority?:'high'|'normal';url?:string};
const s=(time:string,title:string,location?:string,transport?:string,detail?:string,status:Status='planned',conditional?:string):Stop=>({time,title,location,transport,detail,status,conditional});
export const days:Day[]=[
{id:'1024',date:'2026-10-24',weekday:'六',title:'長榮 BR26・西雅圖轉機',area:'桃園 TPE → 西雅圖 SEA',intro:'桃園飛西雅圖，轉機後續飛紐約。航班時間均標示當地時區。',stops:[
s('11:40 EDT','BR26｜桃園機場 TPE 起飛','Taiwan Taoyuan International Airport, Taoyuan, Taiwan',undefined,'桃園當地時間：10/24（六）23:40；長榮 BR026；桃園第二航廈 T2；目的地西雅圖 SEA','confirmed'),
s('22:20 EDT','BR26｜抵達西雅圖 SEA','Seattle-Tacoma International Airport, SeaTac, WA',undefined,'西雅圖當地時間：10/24（六）19:20 PDT；下機後辦理 CBP 入境、領取行李並轉機。','confirmed'),
s('22:20–23:59 EDT（預估）','SEA｜入境、領行李、確認 JetBlue 轉機','Seattle-Tacoma International Airport, SeaTac, WA',undefined,'西雅圖當地時間：約 19:20–22:15 PDT；轉機時間 2 小時 55 分；辦理 CBP 入境、取行李（若未直掛則重託）及 TSA 安檢；依 JetBlue 規定準時抵達登機門。','verify')
]},
{id:'1025',date:'2026-10-25',weekday:'日',title:'百老匯雙劇日｜怪奇物語・哈利波特',area:'Chelsea · Theater District · Times Square',intro:'今天已購得 Stranger Things $40 Rush（Orchestra B7），13:00 午場；19:00 已購票 Harry Potter。中央公園寫生移至 10/30，Cooper Hewitt 暫列備案。',stops:[
s('06:35','JetBlue B6264｜抵達 JFK','John F. Kennedy International Airport, Queens, NY',undefined,'抵達紐約；航班實際狀況依當日資訊。','confirmed'),
s('上午','Interfaith Retreats｜行李與入住安排','Interfaith Retreats, 370 8th Avenue, New York, NY',undefined,'依住宿現場安排。','planned'),
s('11:45–12:15','劇院區｜簡單午餐、洗手間','Marquis Theatre, 210 W 46th St, New York, NY',undefined,'不要走遠，預留入場時間。','planned'),
s('12:15–12:30','Marquis Theatre｜入場','Marquis Theatre, 210 W 46th St, New York, NY',undefined,'持紙本票入場；票券註明遲到入座由劇院決定。','confirmed'),
s('13:00–約15:45','Stranger Things: The First Shadow【已購票】','Marquis Theatre, 210 W 46th St, New York, NY',undefined,'Rush US$40；Orchestra Row B Seat 7；10/25（日）13:00。結束時間為預估。','confirmed'),
s('16:00–17:45','晚餐、休息｜Theater District','Times Square, Manhattan, New York, NY',undefined,'兩場戲中間以吃飯、坐下休息為主。','planned'),
s('18:20–18:40','Lyric Theatre｜入場','Lyric Theatre, 214 W 43rd St, New York, NY',undefined,'預留安檢及找座位時間。','confirmed'),
s('19:00–約22:00','Harry Potter and the Cursed Child【已購票】','Lyric Theatre, 214 W 43rd St, New York, NY',undefined,'已購票 US$88；Balcony Row D Seat 14；視線受限座位；散場時間為預估。','confirmed'),
s('22:00 後','返回 Interfaith Retreats 休息','Interfaith Retreats, 370 8th Avenue, New York, NY',undefined,'夜間注意周遭與隨身物品。','planned')
]},
{id:'1026',date:'2026-10-26',weekday:'一',title:'Flatiron・SoHo・Orchard Street・洋蔥 smash burger',area:'Flatiron · SoHo · Orchard Street · Lower East Side',intro:'Flatiron 與 SoHo 街區散步；逛完往 Orchard Street 看獨立小店，再到 Gotham Burger Social Club 吃洋蔥 smash burger。',stops:[s('08:30–09:30','Chelsea 住宿早餐','370 8th Avenue, New York, NY'),s('10:00–11:30','Flatiron Building、Madison Square Park','175 5th Ave, New York, NY',undefined,'建築、街區與公園散步'),s('11:30–12:30','Flatiron 附近午餐','Madison Square Park, New York, NY'),s('12:30–15:50','SoHo：鑄鐵建築、獨立書店與設計商店','Prince Street and Greene Street, New York, NY',undefined,'McNally Jackson、Housing Works；Greene 與 Mercer 街鑄鐵建築。'),s('15:50–17:45','Orchard Street｜November 19 Shop 與沿街小店','37 Orchard Street, New York, NY','步行','從 SoHo 往 Lower East Side；先逛 November 19 Shop，再沿 Orchard Street 看小店。'),s('17:45–18:00','步行到 Gotham Burger Social Club','131 Essex St, New York, NY','步行','從 Orchard Street 往 Essex 與 Rivington 街口。'),s('18:00–19:00','Gotham Burger Social Club｜洋蔥 smash burger','131 Essex St, New York, NY',undefined,'點 Gotham Smash：grilled onions、American cheese、housemade pickles、jalapeños；單層 US$9、雙層 US$12.50，價格以現場菜單為準。')]},
{id:'1027',date:'2026-10-27',weekday:'二',title:'Chelsea・Morgan・入住 70 Pine・Staten Island Ferry 日落',area:'Chelsea · Morgan · Financial District · Staten Island Ferry · Midtown',intro:'11:00 前退房並寄放行李；下午參觀 Morgan，之後回 Interfaith 取行李、到 Mint House 70 Pine check-in，再搭免費 Staten Island Ferry 看夕陽。須確認 check-in 能在 17:00 前完成；晚上 22:30 在 MSG 與朋友會合。',stops:[
s('09:00–10:30','Interfaith｜早餐、整理行李與休息','Interfaith Retreats, 370 8th Avenue, New York, NY',undefined,'11:00 前退房；早餐依住宿提供時間。'),
s('10:30–11:00','Interfaith｜退房、寄放行李','Interfaith Retreats, 370 8th Avenue, New York, NY',undefined,'請確認可否在 20:00 左右回來領行李，以及晚間門禁規定。','verify'),
s('11:00–12:00','Printed Matter｜藝術書與插畫出版品','Printed Matter, 231 11th Avenue, New York, NY',undefined,'預留步行交通，若 11:00 才退房則抵達時間順延。'),
s('12:00–13:00','Chelsea Market｜午餐','Chelsea Market, 75 9th Avenue, New York, NY'),
s('13:00–14:00','Little Island、Meatpacking｜散步','Little Island, Pier 55, New York, NY',undefined,'河岸、石板路與街區建築；依體力縮短。'),
s('14:00–15:00','前往 Morgan Library & Museum','The Morgan Library & Museum, 225 Madison Avenue, New York, NY','地鐵／步行；預留跨區交通緩衝'),
s('15:00–16:00','Morgan｜免費參觀古典歷史圖書館','The Morgan Library & Museum, 225 Madison Avenue, New York, NY',undefined,'週二 15:00–17:00 免費參觀歷史館，無須預約，不含特展。官方：https://www.themorgan.org/visit；僅鉛筆可速寫。','confirmed'),
s('16:00–16:45','Morgan → Interfaith 取行李 → Mint House','Mint House 70 Pine by Kasa, 70 Pine Street, New York, NY','計程車／Uber','需先向 Interfaith 確認可提早領行李；接著前往 70 Pine。行程較緊，請預留交通時間。','verify'),s('16:45–17:05','Mint House 70 Pine｜check-in','Mint House 70 Pine by Kasa, 70 Pine Street, New York, NY',undefined,'為了看日落，需在約 17:05 前完成入住，行李先放房間；若延誤就直接去 Whitehall，check-in 可稍後處理。','planned'),s('17:05–17:25','前往 Whitehall Terminal','4 South Street, New York, NY','步行／計程車','從 70 Pine 前往碼頭，預留候船緩衝。'),s('17:25–17:30','Whitehall Terminal｜候船','4 South Street, New York, NY',undefined,'免費 Staten Island Ferry；平日傍晚班次較密集，當天確認官方班表。'),s('17:30–17:55','Staten Island Ferry：Whitehall → St. George','St. George Ferry Terminal, Staten Island, NY','渡輪','免費單程約 25 分鐘；日落約 17:58，搭這班可在航程中看夕陽。','planned'),s('17:55–18:00','St. George Terminal｜下船、轉乘回程','1 Bay Street, Staten Island, NY',undefined,'需下船並依現場指示重新排隊搭返程。'),s('18:00–18:25','Staten Island Ferry：St. George → Whitehall','4 South Street, New York, NY','渡輪','免費回程約 25 分鐘；以當日班表為準。'),s('18:30–20:00','前往 Moynihan Train Hall 等朋友','Moynihan Train Hall, 351 W 31st Street, New York, NY','地鐵／計程車','大廳作室內等候點；注意個人物品。'),s('22:30','Madison Square Garden｜與朋友會合','Madison Square Garden, 4 Pennsylvania Plaza, New York, NY',undefined,'朋友 NBA 散場後會合；飯店已先 check-in，朋友散場後會合。','confirmed'),
s('22:30–23:15（預估）','與朋友返回 Mint House 70 Pine','Mint House 70 Pine by Kasa, 70 Pine Street, New York, NY','Uber／計程車｜MSG → 70 Pine Street','同行返回住宿，車程依散場車流調整。','planned'),
s('19:00–約22:00','Harry Potter 單人場（抽票備案）','Lyric Theatre, 214 W 43rd St, New York, NY',undefined,'若抽中 10/27 場次，與觀星擇一','backup','HP_1027')
]},
{id:'1028',date:'2026-10-28',weekday:'三',title:'Figure Drawing・MoMA・Midtown・Jazz',area:'Battery Park City · Midtown · Greenwich Village',intro:'上午參加 Figure Drawing；下午逛 MoMA 與 Midtown；晚上預留爵士樂。',stops:[s('09:20–09:45','前往 Rector Park East','Rector Park East, Rector Place and South End Avenue, New York, NY',undefined,''),s('10:00–12:00','Artist-Led Figure Drawing【必去】','Rector Park East, Battery Park City, New York, NY',undefined,'免費免預約，現場提供畫材','confirmed'),s('12:00–13:15','午餐、前往 MoMA','11 W 53rd St, New York, NY',undefined,'含地鐵與步行'),s('13:15–16:15','MoMA 現代藝術博物館【重點】','11 W 53rd St, New York, NY',undefined,'週三 10:30–17:30 開放，預留三小時','pending'),s('16:15–18:00','Midtown：設計商店、Rockefeller Center、Bryant Park','Rockefeller Center, New York, NY',undefined,'NYPL 外觀順路；室內參觀依開放時間'),s('18:00–19:15','晚餐、前往爵士樂場地','Greenwich Village, New York, NY',undefined,''),s('19:15–21:30（彈性）','Jazz Walk-in【候位待確認】','Blue Note Jazz Club, 131 W 3rd St, New York, NY',undefined,'未預購門票；3 人現場詢問 Walk-in 候位；入場與最低消費依場館規定。','pending')]},
{id:'1029',date:'2026-10-29',weekday:'四',title:'Brooklyn Bridge・DUMBO・Peter Luger・Aladdin',area:'Brooklyn Bridge · DUMBO · Williamsburg · Broadway',intro:'走 Brooklyn Bridge、DUMBO 與 Brooklyn Heights；晚餐 Peter Luger（待訂位），晚上看已購票的 Aladdin。',stops:[s('09:45–10:15','從 70 Pine 前往 Brooklyn Bridge 行人入口','Centre St and Park Row, New York, NY'),s('10:15–11:00','步行跨越 Brooklyn Bridge','Brooklyn Bridge, New York, NY',undefined,'曼哈頓往 Brooklyn，邊走邊拍照'),s('11:00–12:00','DUMBO：Washington St、河岸與 Powerhouse Arena','Washington Street and Water Street, Brooklyn, NY'),s('12:00–13:15','Brooklyn Bridge Park、Brooklyn Heights Promenade','Montague Street and Pierrepont Place, Brooklyn, NY',undefined,'欣賞曼哈頓天際線與街景'),s('13:15–14:15','Brooklyn Heights 街區散步、簡單輕食','Brooklyn Heights, Brooklyn, NY',undefined,'牛排留肚子'),s('14:15–14:50','返回 DUMBO／Fulton Ferry Landing 候船','Old Fulton Street and Furman Street, Brooklyn, NY',undefined,'預留步行與候船時間'),s('約15:00–15:15','NYC Ferry East River → South Williamsburg','South Williamsburg Ferry Landing, Brooklyn, NY','渡輪','成人單程約 US$5；實際出發時間及停靠站請出發前查官方班表','verify'),s('15:15–15:45','步行至 Peter Luger','178 Broadway, Brooklyn, NY',undefined,'下船後約 15–20 分鐘步行，另留緩衝'),s('16:00–17:15','Peter Luger Steak House 牛排【待訂位】','178 Broadway, Brooklyn, NY',undefined,'16:00 是建議訂位，尚未確認完成；請核對付款方式','pending'),s('17:15–18:15','搭地鐵前往 New Amsterdam Theatre','214 W 42nd St, New York, NY','地鐵','優先地鐵避免尖峰塞車，留轉乘及步行緩衝'),s('18:15–18:30','Broadway 劇院附近休息及入場','214 W 42nd St, New York, NY'),s('19:00–約21:30','Aladdin 音樂劇【已購票】','214 W 42nd St, New York, NY',undefined,'','confirmed'),s('21:30–22:00','Times Square 夜景散步','Times Square, Manhattan, New York, NY','步行','劇院步行約 5 分鐘'),s('22:00–22:45','返回 70 Pine Street','70 Pine Street, New York, NY')]}, 
{id:'1030',date:'2026-10-30',weekday:'五',title:'Central Park・The Met・Upper East Side',area:'Central Park · Upper East Side · The Met',intro:'Central Park 散步與速寫、參觀 The Met；晚間可選 Morgan 或 Harry Potter 抽票場次。',stops:[s('09:15–10:00','70 Pine → Central Park 東側','Central Park, East 79th Street, New York, NY',undefined,''),s('10:00–11:30','Central Park 東側散步、速寫','Central Park, East 79th Street, New York, NY',undefined,''),s('11:30–12:15','午餐與休息','1000 5th Ave, New York, NY',undefined,''),s('12:15–16:45','The Met：雕塑、古典藝術與鉛筆速寫【重點】','1000 5th Ave, New York, NY',undefined,'週五通常開放至 21:00，想多看可延長','pending'),s('16:45–18:00','Upper East Side 咖啡、晚餐或休息','Upper East Side, New York, NY',undefined,''),s('18:00–20:00','Morgan 免費週五夜場【須預約，可選】','225 Madison Ave, New York, NY',undefined,'與 Harry Potter 抽票備案擇一','backup'),s('19:00–約22:00','Harry Potter 雙人晚場【抽票備案】','214 W 43rd St, New York, NY',undefined,'抽中才去，與 Morgan 擇一','backup')]},
{id:'1031',date:'2026-10-31',weekday:'六',title:'Little Ukraine・East Village・Nolita・萬聖節',area:'Little Ukraine · East Village · Nolita · Greenwich Village',intro:'逛 Little Ukraine、East Village 與 Nolita；晚上觀賞 Village Halloween Parade。',stops:[s('10:30–11:30','Little Ukraine 街景、早餐','30 E 7th St, New York, NY',undefined,'先散步，部分獨立店中午才開門'),s('11:30–13:30','East Village：文具、插畫與古著小店','East 10th Street and 1st Avenue, New York, NY',undefined,'文具與選物：Niconeco、Archie’s Press、Casey Rubber Stamps、Spooksvilla；古著：L Train Vintage；禮品：Exit9；營業時間依店家公告。'),s('13:30–14:30','East Village 午餐','East 9th Street and 2nd Avenue, New York, NY'),s('14:30–16:30','Nolita：Goods for the Study、Mulberry Street','234 Mulberry Street, New York, NY',undefined,'設計文具、街景與獨立小店；營業時間依當日公告'),s('16:30–18:00','休息、提早晚餐','Greenwich Village, New York, NY',undefined,'遊行前補充體力'),s('18:00–19:00','前往 6th Avenue 遊行路線找位置','6th Avenue and W 10th Street, New York, NY',undefined,'依現場封路與人潮調整'),s('19:00–21:00','Village Halloween Parade','6th Avenue, Greenwich Village, New York, NY',undefined,'實際活動時間與封路以官方公告為準'),s('21:00–22:00','遊行後返回 70 Pine Street','70 Pine Street, New York, NY','地鐵','封路可能影響地鐵出入口')]},
{id:'1101',date:'2026-11-01',weekday:'日',title:'清晨返程・JFK',area:'Financial District · JFK · Seattle',intro:'03:00 從 70 Pine 出發前往 JFK，搭乘 07:10 航班。',stops:[s('02:15–02:45','起床、最後整理與退房','70 Pine Street, New York, NY',undefined,'確認住宿凌晨退房與車輛上車位置'),s('03:00','預約車從 70 Pine Street 出發','70 Pine Street, New York, NY','預約車｜70 Pine Street → JFK Terminal 4；車程估 40–60 分，依凌晨路況','已預訂機場接送（訂單 ZZH697730）；11/1 03:00 自 70 Pine Street 出發，送至 JFK T4。','confirmed'),s('03:40–04:15','預估抵達 JFK Terminal 4','John F. Kennedy International Airport Terminal 4, Queens, NY',undefined,'實際依車況、航廈及報到櫃台開放時間'),s('04:00–06:15','報到、托運、安檢','John F. Kennedy International Airport Terminal 4, Queens, NY',undefined,'達美航空 Main Basic (E)；行李額度及櫃台時間依訂位資料確認'),s('07:10','DL0699 JFK → SEA 起飛','John F. Kennedy International Airport Terminal 4, Queens, NY',undefined,'Delta Airbus A321neo；SEA 轉機 4 小時 29 分，接 DL0069 飛往桃園','confirmed')]},
{id:'1102',date:'2026-11-02',weekday:'一',title:'抵達台灣',area:'SEA · TPE',intro:'抵達桃園第二航廈 T2。',stops:[s('20:30','DL0069 抵達桃園國際機場 T2','Taiwan Taoyuan International Airport Terminal 2',undefined,'達美航空 DL0069 Airbus A350-900；11/2（一）20:30 抵達，跨越國際換日線','confirmed')]}
];
export const tickets:Ticket[]=[
{id:'stranger1025',title:'Stranger Things: The First Shadow · Rush',date:'10/25',time:'13:00',status:'confirmed',note:'已購票 US$40；Marquis Theatre；Orchestra B 排 7 號。'},
{id:'harry1025',title:'Harry Potter and the Cursed Child',date:'10/25',time:'19:00',status:'confirmed',note:'已購票 US$88；Lyric Theatre；Balcony D 排 14 號（視線受限）。'},
{id:'cooper',title:'Cooper Hewitt',date:'10/25',time:'13:30',status:'planned',url:'https://www.cooperhewitt.org/visit/plan-your-visit/',note:'成人暫估 US$10；現場售票、展廳待查'},
{id:'gugg',title:'Guggenheim · Pay What You Wish',date:'10/25',time:'16:00',status:'pending',url:'https://www.guggenheim.org/plan-your-visit',note:'週日優惠時段待確認，建議預訂'},
{id:'moma',title:'MoMA',date:'10/28',time:'13:15',status:'pending',url:'https://www.moma.org/visit/',note:'成人暫估 US$30'},
{id:'hp',title:'Harry Potter · Friday Forty',date:'10/27–10/31',time:'多場次',status:'pending',url:'https://broadway.harrypottertheplay.com/friday-forty/',note:'抽籤尚未確定；10/19–23 時程需核對'},
{id:'aladdin',title:'Aladdin',date:'10/29',time:'19:00',status:'confirmed',note:'已購票；New Amsterdam Theatre；票面散場時間待核'},
{id:'morgan',title:'Morgan Friday Free【10/30 晚間可選】',date:'10/30',time:'17:00–20:00',status:'pending',url:'https://www.themorgan.org/free-friday-evenings',note:'10/23 查詢 10/30 放票'},
{id:'illustrators',title:'Society of Illustrators',date:'10/30 或 10/31',time:'待確認',status:'pending',url:'https://societyillustrators.org/',note:'萬聖節營業、展覽、US$18 暫估'},
{id:'drawing',title:'Artist-Led Figure Drawing in the Park【必去】',date:'10/28',time:'10:00–12:00',status:'confirmed',url:'https://www.clubfreetime.com/new-york-city-nyc/free-workshop/2026-10-28/event/760636',note:'Rector Park East，Rector Place × South End Avenue，Battery Park City。免費免預約，提供畫材與模特兒速寫指導。'},
{id:'nature',title:'Drawing in Nature',date:'10/31',time:'10:00',status:'backup',note:'免費免預約；天候影響'},
{id:'parade',title:'Halloween Parade',date:'10/31',time:'19:00',status:'planned',note:'免費；6th Ave'},
{id:'stargazing',title:'High Line Stargazing · 免費免預約',date:'10/27（二）',time:'19:00–21:00（參考；官方為日落至閉園前約30分）',status:'backup',url:'https://www.thehighline.org/events/stargazing/',note:'地點：High Line 上 Little W 12th St × Washington St（The Standard Hotel 南側）。Friends of the High Line × Amateur Astronomers Association 提供望遠鏡；免費、免 RSVP，陰天或下雨可能取消；10/27 已改排 Staten Island Ferry 日落行程，觀星留作備案。'},
{id:'landscape',title:'Landscape Art Class (Outdoors)【可放棄】',date:'10/28',time:'14:00–16:00',status:'backup',url:'https://www.clubfreetime.com/new-york-city-nyc/free-workshop/2026-10-28/event/760624',note:'Wagner Park，20 Battery Place。免費免預約，提供戶外繪畫材料；與下午 SoHo 行程二擇一。'},
{id:'kpop',title:'K-Pop Dance Lessons',date:'10/30',time:'18:00',status:'backup',note:'免費；需取消 Morgan'},
{id:'pickleball',title:'Pickleball',date:'10/26',time:'10:00',status:'backup',note:'與 Midtown 主線衝突'}
];
export const hpOptions=[{id:'none',label:'尚未抽中／維持原行程'},{id:'HP_1027',label:'10/27 19:00 · 1 人'},{id:'HP_1028_1300',label:'10/28 13:00 · 2 人'},{id:'HP_1028_1900',label:'10/28 19:00 · 2 人'},{id:'HP_1030_1900',label:'10/30 19:00 · 2 人'},{id:'HP_1101_1500',label:'11/01 15:00 · 2 人'}];
export const tasks:Task[]=[
["flight","行前準備","核對 10/24 BR026：TPE 第二航廈（T2）23:40 起飛、SEA 19:20 抵達；JetBlue B6264：SEA 22:15 起飛、10/25 JFK 06:35 抵達。SEA 轉機 2 小時 55 分，確認入境／行李轉運及 11/01 回程、托運與手提額度","10/22"],
["esta","行前準備","確認護照效期、ESTA 核准狀態與資料一致","10/21","https://esta.cbp.dhs.gov/"],
["hotel","行前準備","確認 Interfaith 10/25 凌晨約 02:00–03:00 入住／門禁／自助入住方式；核對 10/24–27 與 Mint House 10/27–11/01 訂單；確認 10/27 行李可寄放至晚間、NBA 約 22:30 散場後領取及門禁安排","10/22"],
["car","行前準備","核對 11/01 03:00 已預約機場接送（ZZH697730）：70 Pine 上車點、司機聯絡方式、JFK T4 與夏令時間切換","10/28"],
["screens","行前準備","離線保存 Delta 電子機票、住宿訂單、Aladdin 10/29 19:00 票券及機場接送憑證","10/23"],
["cooper","行前準備","10/25（週日）Cooper Hewitt：13:30 公開 Carnegie Mansion 導覽含於入場票，確認當天是否舉行；可現場購票","10/22","https://www.cooperhewitt.org/visit/plan-your-visit/"],
["met","行前準備","10/30（週五）The Met：建議線上購票免現場排隊；確認館內鉛筆速寫規定","10/23","https://www.metmuseum.org/"],
["moma","行前準備","10/28（週三）MoMA：建議預購 13:15 門票，避免現場排隊","10/23","https://www.moma.org/visit/"],
["jazz","行前準備","10/28 三人 Jazz Walk-in：Blue Note 未買票，確認候位方式、最低消費與演出時間","10/23"],
["lottery","行前準備","若仍想抽 Harry Potter，確認 Friday Forty 抽票規則與 10/27／30 可行場次（10/28 晚擬 Jazz Walk-in）","10/19","https://broadway.harrypottertheplay.com/friday-forty/"],
["society","行前準備","Society of Illustrators 目前未排入正式日程；若要加入，先確認 10/31 萬聖節營業時間與展覽","10/23","https://societyillustrators.org/"],
["esim","行前準備","設定 eSIM／漫遊、確認海外收簡訊與下載 NYC 離線地圖","10/22"],
["money","行前準備","確認海外信用卡、行動支付、少量美元及備用付款方式","10/22"],
["omny","行前準備","設定 Apple Pay／Google Wallet 海外感應信用卡並確認可用；紐約 OMNY 地鐵公車直接刷卡，不必預購交通卡","10/22","https://omny.info/"],
["morganbook","行前準備","若想參加 10/30 Morgan 免費週五夜場，10/23 起預約名額（免費但必須預約）","10/23","https://www.themorgan.org/free-friday-evenings"],
["trainapp","行前準備","下載 MTA TrainTime：10/24 晚間 JFK Jamaica → Penn Station 的 LIRR 班次及車票另購，不能當 OMNY 地鐵票使用","10/23","https://new.mta.info/traintime"],
["insurance","行前準備","確認旅遊保險、緊急聯絡資訊及護照證件離線備份","10/22"],
["pack-clothes","行李清單","秋季分層衣物：保暖外套、長袖上衣、長褲、內衣褲襪與睡衣","10/23"],
["pack-shoes","行李清單","舒適好走的鞋子（建議防水）及備用襪子","10/23"],
["pack-rain","行李清單","折疊傘或輕便雨衣","10/23"],
["pack-power","行李清單","行動電源、手機充電線、充電器及美規插頭／轉接頭（行動電源隨身攜帶）","10/23"],
["sketch","行李清單","鉛筆、橡皮擦、輕量速寫本；10/28 Figure Drawing 現場有畫材","10/23"],
["pack-docs","行李清單","護照、信用卡、少量美元、實體證件及重要訂單備份","10/23"],
["pack-health","行李清單","個人常備藥、處方藥（如有）、盥洗用品與日常保養品","10/23"],
["pack-day","行李清單","隨身小包、環保水瓶、面紙與隨身衛生用品","10/23"],
["weather","行前準備","查看 10/26 Staten Island Ferry、10/27 High Line 觀星、10/28 戶外速寫及 10/31 遊行天氣備案","10/23"],
["si-ferry","行前準備","10/26 確認免費 Staten Island Ferry 的 Whitehall／St. George 往返班次及天氣；兩端需下船重新排隊","10/25","https://siferry.com/schedules/"],
["nolita-hours","行前準備","確認 10/31 萬聖節 East Village／Nolita 文具、古著店營業時間，優先中午後逛店","10/29"],
["marathon","行前準備","確認 11/01 清晨 JFK 接送路線及可能道路管制；提醒司機確認上車點","10/28"],
["lirr","旅途中","10/24 20:28 抵達 JFK 後查晚間 AirTrain → Jamaica → LIRR → Penn Station 班次、票價與末班；備案計程車","10/24"],
["guggday","旅途中","10/25 前往 Cooper Hewitt 前再次確認導覽與當日展廳開放","10/25"],
["si-ferry-day","旅途中","10/26 16:35 前抵達 Whitehall Terminal；搭免費 Staten Island Ferry 往返，視天候與現場候船調整","10/26","https://siferry.com/schedules/"],
["hp27","旅途中","10/27 下午查看 High Line Stargazing 天候公告；若 HP 抽中則切換劇院行程","10/27","https://www.thehighline.org/events/stargazing/"],
["hp28","旅途中","10/28 10:00 Figure Drawing；下午 MoMA；晚上 Jazz Walk-in 視候位","10/28"],
["ferrybook","行前準備","10/29 NYC Ferry：確認 East River 線 DUMBO → South Williamsburg 的下午班次、碼頭位置、票價及購票方式","10/27","https://www.ferry.nyc/routes-and-schedules/east-river/"],
["lugerbook","行前準備","預訂 10/29 Peter Luger 三人 16:00 座位，確認訂位與可接受的付款方式","10/25","https://peterluger.com/pages/locations-reservations"],
["promenade","旅途中","10/29 Brooklyn Bridge → DUMBO → Brooklyn Heights Promenade；視天氣調整散步時間並預留渡輪候船","10/29"],
["aladdinday","旅途中","10/29 18:30 前抵達 New Amsterdam Theatre；出示已購 Aladdin 票券，散場後步行 Times Square","10/29"],
["hp30","旅途中","10/30 The Met：確認門票、鉛筆速寫規定及 Morgan Library 晚間備案","10/30","https://www.metmuseum.org/"],
["paradeday","旅途中","10/31 確認 Village Halloween Parade 起訖、6th Ave 觀賞位置、封路與返程地鐵","10/31"],
["airport","旅途中","11/01 02:15–02:45 整理退房；03:00 從 70 Pine 搭已預約接送，07:10 搭 DL0699 由 JFK T4 出發","11/01"]].map((a:any)=>({id:a[0],group:a[1],title:a[2],due:a[3],url:a[4],priority:['flight','esta','hotel','car','screens'].includes(a[0])?'high':'normal'}));
export const recommendations:Recommendation[]=[


["Kinokuniya New York","商店",["1026"],"Bryant Park／NYPL","日文書、插畫書與地下樓文具區",undefined,"1073 Avenue of the Americas, New York"],



["Housing Works Bookstore","商店",["1026"],"SoHo","二手書、書店空間，與 SoHo 散步相容",undefined,"126 Crosby Street, New York"],
["McNally Jackson SoHo","商店",["1026"],"SoHo","設計書與獨立選書；先確認分店地址與營業",undefined,"134 Prince Street, New York"],

["Powerhouse Arena","商店",["1029"],"DUMBO","藝術設計、攝影書；在 DUMBO 散步路線上",undefined,"28 Adams Street, Brooklyn, New York"],
["Time Out Market New York","餐飲",["1029"],"DUMBO","橋下河岸午餐，價格偏高可只逛不吃","15–28","55 Water Street, Brooklyn, New York"],

["Exit9 Gift Emporium","商店",["1031"],"East Village","設計雜貨與小禮品，和其他商店同區",undefined,"51 Avenue A, New York"],
["L Train Vintage","商店",["1031"],"East Village","古著店，正式行程可順路逛",undefined,"204 First Avenue, New York"],
["MoMA Design Store SoHo","商店",["1026"],"SoHo","設計生活用品與創意小物；不必只在 MoMA 館內逛",undefined,"81 Spring Street, New York"],
["Goods for the Study Nolita","商店",["1026"],"Nolita","兩間相鄰店面，筆具與紙品分開；設計文具優先推薦",undefined,"234 Mulberry Street, New York"],

["AuH2O","商店",["1031"],"East Village","二手與改造服飾、飾品；偏平價質感穿搭",undefined,"84 East 7th Street, New York"],
["Niconeco Zakkaya","商店",["1031"],"East Village","日系設計文具、手帳紙品與精緻小物；高優先",undefined,"263 East 10th Street, New York"],
["Archie's Press","商店",["1031"],"East Village","活版印刷城市地圖、海報與卡片；高優先",undefined,"220 East 10th Street, New York"],
["Casey Rubber Stamps","商店",["1031"],"East Village","特色手工橡皮章與印刷工具；路過值得進去",undefined,"322 East 11th Street, New York"],
["Pageant Print Shop","商店",["1031"],"East Village","老地圖、復古海報與版畫，適合挖寶",undefined,"69 East 4th Street, New York"],
["Pink Olive","商店",["1031"],"East Village","創意禮品、卡片、文具與生活小物",undefined,"439 East 9th Street, New York"],

,
["Gray's Papaya",'餐飲',["1025"],"Upper West Side · W 72nd St","紐約經典熱狗與木瓜飲；早餐或散步前小吃","5–12","2090 Broadway, New York"],
["Los Tacos No. 1 · Madison Square Park",'餐飲',["1026"],"Flatiron","現做墨西哥塔可，上午 Flatiron 路線可外帶","5–15","27 East 23rd Street, New York"],
["Gotham Burger Social Club",'餐飲',["1026"],"Orchard Street","推薦 Gotham Smash 洋蔥 smash burger；131 Essex St，靠近 Orchard Street。單層 US$9、雙層 US$12.50。","9–15","131 Essex Street, New York, NY"],
["Los Tacos No. 1 · Chelsea Market",'餐飲',["1027"],"Chelsea Market","必吃塔可；與 Chelsea Market 正式行程完全同路","5–15","75 Ninth Avenue, New York"],

["Champion Pizza · SoHo",'餐飲',["1026"],"SoHo / Nolita","平價紐約披薩切片，逛文具店途中快吃","4–10","17 Cleveland Place, New York"],
["Los Tacos No. 1 · Times Square",'餐飲',["1029"],"New Amsterdam Theatre","Aladdin 開演前快速吃塔可，步行距離短","5–15","229 West 43rd Street, New York"],
["7th Street Burger · DUMBO",'餐飲',["1029"],"DUMBO / Brooklyn Bridge Park","Smash burger 與薯條，河岸散步可順路外帶","9–18","17 Old Fulton Street, Brooklyn, New York"],
["Front Street Pizza",'餐飲',["1029"],"DUMBO","紐約披薩切片；比河岸觀光餐廳容易控制預算","5–13","80 Front Street, Brooklyn, New York"],
["Xi'an Famous Foods · East Village",'餐飲',["1031"],"East Village / Little Ukraine","手工麵與肉夾饃；口味可能偏辣，點餐前確認","10–17","129 Second Avenue, New York"],
["7th Street Burger · East Village",'餐飲',["1031"],"East Village","平價現做漢堡，逛店途中快速吃","9–18","91 East 7th Street, New York"],
["$1.50 Fresh Pizza · East Village",'餐飲',["1031"],"East Village","超平價披薩切片；小吃備案，不用特地繞路","2–8","71 Second Avenue, New York"]
,




].map((a:any)=>{const details:Record<string,{hours:string;rating?:number}>={
'Kinokuniya New York':{hours:'週一至六 10:00–20:00；週日 11:00–19:30',rating:4.7},
'Housing Works Bookstore':{hours:'週一至六 11:00–19:00；週日 11:00–17:00',rating:4.6},
'McNally Jackson SoHo':{hours:'每日 10:00–21:00',rating:4.7},
'MoMA Design Store SoHo':{hours:'週一至六 10:00–19:00；週日 11:00–19:00'},
'Powerhouse Arena':{hours:'週一至五 11:00–19:00；週末 10:00–19:00',rating:3.9},
'Time Out Market New York':{hours:'週日至四 08:00–22:00；週五六 08:00–23:00',rating:4},
'Exit9 Gift Emporium':{hours:'週一至四 11:00–19:00；週五六 10:00–19:00；週日 11:00–18:00',rating:3.8},
'L Train Vintage':{hours:'週一至四、日 12:00–19:00；週五六 12:00–20:00',rating:4},
'Goods for the Study Nolita':{hours:'每日 12:00–20:00',rating:4.2},
'Gotham Burger Social Club':{hours:'每日 11:00–23:00（週四至六至 00:00）',rating:4.4},
'AuH2O':{hours:'週三至日 12:00–19:00；週一二休'},
'Niconeco Zakkaya':{hours:'週一至五 12:00–19:00；週六 10:00–19:00；週日 10:00–18:00',rating:4.9},
'Archie\'s Press':{hours:'週五至日 12:00–18:00（營業日可能變動）',rating:4.2},
'Casey Rubber Stamps':{hours:'週一至六 13:00–20:00；週日 14:30–19:00',rating:4.5},
'Pageant Print Shop':{hours:'週二至日 13:00–19:00；週一休（官方頁面資訊有出入）',rating:3.5},
'Pink Olive':{hours:'週一至五 12:00–20:00；週六 11:00–19:00；週日 11:00–18:00',rating:4.4}};const d=details[a[0]];return {name:a[0],type:a[1],dayIds:a[2],nearStop:a[3],why:a[4],estimatedBudgetUSD:a[5],address:a[6],openingHours:d?.hours||'待查證',googleRating:undefined,referenceRating:d?.rating,verified:!!d}});
export const backupActivities: {day:string;title:string;time:string;address:string;note:string}[]=[{day:'10/26',title:'West Thames Park Pickleball',time:'10:00–13:00',address:'West Thames Park, New York, NY',note:'10:00–13:00，與 Midtown 主線衝突'},{day:'10/28',title:'Landscape Art Class',time:'14:00–16:00',address:'Robert F. Wagner Jr. Park, 20 Battery Pl, New York, NY',note:'14:00–16:00，Wagner Park，取代 Bushwick'},{day:'10/30',title:'Gotham Park K-Pop Dance',time:'18:00–19:00',address:'Gotham Park, Manhattan, New York',note:'18:00–19:00，建議註冊；僅取消 Morgan 時可參加'},{day:'11/01',title:'Fulton St A 線 → Howard Beach → AirTrain',time:'凌晨（依航班回推）',address:'Fulton St Station, New York, NY',note:'凌晨約 90–110 分或更久，前一晚核對施工與班次；異動改叫車'}];
export const walkRecommendations:Recommendation[]=[{name:'Central Park · Bethesda Terrace',type:'散步景點',dayIds:['1025'],nearStop:'Central Park',why:'湖畔、階梯與速寫',address:'Bethesda Terrace, Central Park, New York',openingHours:'戶外區域依現場公告',verified:false},{name:'Brooklyn Bridge',type:'散步景點',dayIds:['1029'],nearStop:'DUMBO',why:'步行過橋與城市天際線',address:'Brooklyn Bridge Pedestrian Entrance, Centre St and Park Row, New York',verified:false},{name:'High Line',type:'散步景點',dayIds:['1027'],nearStop:'Meatpacking',why:'高架公園與街景',address:'High Line, Gansevoort St, New York',verified:false},{name:'Washington Square Park',type:'散步景點',dayIds:['1031'],nearStop:'Greenwich Village',why:'拱門與街頭生活',address:'Washington Square Park, New York',verified:false},{name:'Roosevelt Island 河岸',type:'散步景點',dayIds:['1026'],nearStop:'Roosevelt Island',why:'河岸步道與曼哈頓視野',address:'Roosevelt Island, New York',verified:false}];
export const sourceLinks=[['MTA','https://new.mta.info/'],['JFK','https://www.jfkairport.com/'],['Downtown Connection','https://downtownny.com/about-us/services/downtown-connection-bus/']];
