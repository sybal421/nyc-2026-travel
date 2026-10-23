export type Status='confirmed'|'planned'|'pending'|'backup'|'verify';
export type Stop={time:string;end?:string;title:string;location?:string;transport?:string;detail?:string;status?:Status;url?:string;conditional?:string};
export type Day={id:string;date:string;weekday:string;title:string;area:string;intro:string;stops:Stop[];tips?:string[]};
export type Recommendation={name:string;type:'餐飲'|'商店'|'散步景點';dayIds:string[];nearStop:string;why:string;estimatedBudgetUSD?:string;address?:string;openingHours?:string;googleRating?:number;googleMapsUrl?:string;sourceUrl?:string;verified:false};
export type Ticket={id:string;title:string;date:string;time:string;status:Status;url?:string;note:string;deadline?:string};
export type Task={id:string;group:string;title:string;due?:string;priority?:'high'|'normal';url?:string};
const s=(time:string,title:string,location?:string,transport?:string,detail?:string,status:Status='planned',conditional?:string):Stop=>({time,title,location,transport,detail,status,conditional});
export const days:Day[]=[
{id:'1024',date:'2026-10-24',weekday:'六',title:'飛往紐約・西雅圖轉機',area:'TPE · SEA · JFK',intro:'去程已改為長榮 BR26 + JetBlue B6264。西雅圖僅轉機 2 小時 55 分；所有時間軸採紐約 EDT（西雅圖 PDT +3 小時、台灣時間 -12 小時）。務必優先處理行李、入境與 TSA，取消原 SEA 觀景台／逛街安排。',stops:[
s('11:40','長榮 BR26 桃園起飛','Taiwan Taoyuan International Airport Terminal 2',undefined,'台灣當地 10/24 23:40 起飛；此卡時間為紐約 10/24 11:40 EDT。請以登機證確認航廈與報到時間。','confirmed'),
s('22:20','BR26 抵達西雅圖 SEA','Seattle-Tacoma International Airport, SeaTac, WA',undefined,'西雅圖當地 10/24 19:20 PDT 抵達；轉機僅 2 小時 55 分。','confirmed'),
s('22:20–00:30（預估）','SEA 領行李、入境審查與轉機安檢','Seattle-Tacoma International Airport, SeaTac, WA',undefined,'西雅圖當地 19:20 起：國際入境設施先領行李再過 CBP；確認是否可在轉機區重託 JetBlue 行李，若不行須到 JetBlue 櫃檯重新託運，再過 TSA。請於桃園報到時確認行李牌目的地、JetBlue 登機證及截止收件時間；此時間僅示意，可能因排隊延長。','verify'),
s('00:30–01:15（預估）','確認 JetBlue B6264 登機門、候機','Seattle-Tacoma International Airport, SeaTac, WA',undefined,'西雅圖當地 10/24 21:30–22:15；不要安排觀景台或購物。以 JetBlue 登機證與現場公告為準。','planned'),
s('01:15','JetBlue B6264 西雅圖起飛','Seattle-Tacoma International Airport, SeaTac, WA',undefined,'西雅圖當地 10/24 22:15 PDT 起飛；紐約 10/25 06:35 EDT 抵達 JFK。','confirmed')
]},
{id:'1025',date:'2026-10-25',weekday:'日',title:'抵達 JFK・UWS・公園與設計',area:'JFK · Chelsea · Upper West Side · Central Park · Upper East Side',intro:'JetBlue B6264 06:35 EDT 抵達 JFK；先領行李、進城至 Interfaith Retreats 放行李，早餐與上午散步視體力調整。午後 Cooper Hewitt 仍列為主要安排。',stops:[
s('06:35','JetBlue B6264 抵達 JFK','John F. Kennedy International Airport, Queens, NY',undefined,'紐約當地 10/25 06:35 EDT；抵達航廈以 JetBlue App／登機證為準，勿沿用原 Delta T4 資訊。','confirmed'),
s('06:35–07:30（預估）','下機、領行李與確認進城交通','John F. Kennedy International Airport, Queens, NY',undefined,'已在西雅圖辦理美國入境，JFK 通常無須再過 CBP；預留下機及領取託運行李時間。','planned'),
s('07:30–09:00（預估）','JFK → Interfaith Retreats（Chelsea）','Interfaith Retreats, 370 8th Avenue, New York, NY','方案 A：AirTrain → Jamaica → LIRR 至 Penn Station → 步行至 Interfaith；方案 B：官方計程車／合法叫車直達。實際班次、車程與費用依現場確認。','建議以 LIRR／MTA TrainTime 查即時班次；抵達航廈未確認。','planned'),
s('09:00–09:30（預估）','Interfaith Retreats 寄放行李、早餐','Interfaith Retreats, 370 8th Avenue, New York, NY',undefined,'已預訂 10/24 起的住宿；請先確認 10/25 上午可否直接進房、早餐使用規則，若無法進房先寄放行李。','verify'),
s('10:00–11:15（彈性）','Upper West Side → Central Park 散步','Strawberry Fields, Central Park, New York, NY','從 Penn Station 一帶搭地鐵至 72 St；視長途飛行疲勞縮短','Verdi Square、The Dakota 外觀、Strawberry Fields；若入境交通耽誤可直接略過此段。','planned'),
s('11:15–12:30','午餐與公園休息','Central Park, New York, NY',undefined,'補充體力；若太累可改在住宿附近休息。'),
s('12:30–13:30','穿越中央公園前往 Cooper Hewitt','Cooper Hewitt Smithsonian Design Museum, 2 E 91st St, New York, NY',undefined,'公園東側 91 街；視步行體力改搭車。'),
s('13:30–16:00','Cooper Hewitt：導覽、展覽與商店','Cooper Hewitt Smithsonian Design Museum, 2 E 91st St, New York, NY',undefined,'Carnegie Mansion 設計博物館；13:30 導覽尚待確認。長途飛行後可彈性縮短停留。','pending'),
s('16:00–17:00','返回 Interfaith Retreats、休息','Interfaith Retreats, 370 8th Avenue, New York, NY',undefined,'晚上不再安排遠距離景點。')
]},
{id:'1026',date:'2026-10-26',weekday:'一',title:'Flatiron・SoHo・Staten Island Ferry',area:'Flatiron · SoHo · Lower Manhattan · Staten Island Ferry',intro:'上午 Flatiron 建築散步、下午 SoHo 書店與鑄鐵街景；傍晚往南搭免費 Staten Island Ferry 看港灣與天際線，不再繞去 Roosevelt Island Tram。',stops:[s('08:30–09:30','Chelsea 住宿早餐','370 8th Avenue, New York, NY'),s('10:00–11:30','Flatiron Building、Madison Square Park','175 5th Ave, New York, NY',undefined,'建築、街區與公園散步'),s('11:30–12:30','Flatiron 附近午餐','Madison Square Park, New York, NY'),s('12:30–15:50','SoHo：鑄鐵建築、獨立書店與設計商店','Prince Street and Greene Street, New York, NY',undefined,'McNally Jackson、Housing Works、Greene／Mercer St；Nolita 的 Goods for the Study 移至 10/31'),s('15:50–16:35','前往 Whitehall Terminal','4 South Street, New York, NY','地鐵','SoHo 往南搭地鐵，預留步行與候船時間'),s('16:35–17:00','Whitehall Terminal 候船','4 South Street, New York, NY',undefined,'免費 Staten Island Ferry，無須購票；留意傍晚通勤人潮'),s('17:00–17:25','Staten Island Ferry：Whitehall → St. George','St. George Ferry Terminal, Staten Island, NY','渡輪','免費單程約 25 分鐘，港灣、自由女神像與曼哈頓天際線'),s('17:25–18:00','St. George Terminal 下船與等候回程','1 Bay Street, Staten Island, NY',undefined,'抵達後須下船，再依現場指示排隊搭返程'),s('18:00–18:25','Staten Island Ferry：St. George → Whitehall','4 South Street, New York, NY','渡輪','免費回程約 25 分鐘；以當日班表為準'),s('18:30–19:30','Lower Manhattan 晚餐或返回 Chelsea','Whitehall Street, New York, NY',undefined,'視體力彈性安排')]},
{id:'1027',date:'2026-10-27',weekday:'二',title:'Chelsea・藝術河岸散步',area:'Chelsea · Meatpacking · Hudson River',intro:'藝術海報與獨立印刷品、特色市場、歷史街景及河岸公園；下午換飯店。',stops:[s('09:00–10:15','Chelsea 住宿早餐、整理與退房寄行李','370 8th Avenue, New York, NY',undefined,'先享用住宿提供的早餐，再整理、退房及寄放行李；寄放規則待確認','verify'),s('10:30–11:00','移動到 Chelsea 散步起點','231 11th Ave, New York, NY','步行約 25–30 分｜370 8th Ave → Printed Matter'),s('11:00–12:00','Printed Matter：藝術印刷品與海報','231 11th Ave, New York, NY',undefined,'週二營業 11:00–19:00；建議停留 45–60 分；當日營業時間以官方公告為準'),s('12:00–13:00','Chelsea Market 午餐與特色食品店','75 9th Avenue, New York, NY'),s('13:00–14:20','Meatpacking → Little Island 散步路線','Pier 55, Hudson River Park, New York, NY',undefined,'Gansevoort Plaza 與石板路街景 → Whitney Museum 建築外觀、High Line 南端 → Little Island 河岸散步（建議停留 40–45 分）；全段約 80 分；Little Island 開放時間以當日公告為準'),s('14:20–14:50','Little Island → Chelsea 住宿（步行）','370 8th Avenue, New York, NY','步行約 25–30 分｜Little Island 西側出入口（W 13th／14th St）→ 沿 W 14th St 往東至 8th Ave → 沿 8th Ave 往北至 370 8th Ave；以實際路口為準'),s('14:50–15:15','Chelsea 住宿領行李','370 8th Avenue, New York, NY',undefined,'確認行李寄放、領取及退房規則；預留 25 分'),s('15:20–16:00','Chelsea → 70 Pine Street（地鐵）','70 Pine Street, New York, NY','步行約 5–10 分至 34 St–Penn Station（7th Ave）→ 搭 Downtown 方向 2／3 線至 Wall St → 步行約 3–6 分至 70 Pine St；預估 30–40 分（含候車、步行與搬行李）','地鐵站有樓梯，帶行李請先核對無障礙入口'),s('16:00–17:15','70 Pine Street 入住、整理休息','70 Pine Street, New York, NY',undefined,'入住手續、整理行李與稍作休息；請確認住宿可入住時間'),s('17:20–18:00','70 Pine Street → High Line 觀星地點（地鐵）','Little W 12th St and Washington St, New York, NY','步行至 Fulton St → 搭 Uptown 方向 A／C 線至 14 St–8 Av → 往西步行約 10–15 分至 High Line 的 Little W 12th St／Washington St 觀測點（The Standard Hotel 南側）；預估 30–40 分（含步行與候車），另外保留集合緩衝','觀測點在 High Line 上、Little W 12th St 與 Washington St 交會處（The Standard Hotel 南側）；活動免費、免預約，10/27 當天 15:00 前後查看官網取消公告','planned','stargazing'),s('18:00–19:00','觀星地點附近簡單晚餐、確認集合點','Little W 12th St and Washington St, New York, NY',undefined,'在 Meatpacking District 附近用餐，避免離集合點太遠','planned','stargazing'),s('19:00–21:00（參考時段）','High Line 晚間觀星','Little W 12th St and Washington St, New York, NY',undefined,'2026/10/27（二），High Line 上 Little W 12th St × Washington St（The Standard Hotel 南側）。主辦：Friends of the High Line × Amateur Astronomers Association；免費、免預約、提供望遠鏡，適合所有年齡。官方說明為日落起至公園關閉前約 30 分鐘；第三方 10/27 活動表列 19:00–21:00，實際開始與結束依當晚日落、園區開放時間及公告。陰天或雨天可能取消，當天 15:00 查看官方頁面／@highlinenyc X 更新。官方：https://www.thehighline.org/events/stargazing/','planned','stargazing'),s('21:45（預估）','返回 70 Pine Street','70 Pine Street, New York, NY'),s('19:00–約22:00','Harry Potter 單人場（抽票備案）','Lyric Theatre, 214 W 43rd St, New York, NY',undefined,'抽中 10/27 場次時參加，與觀星擇一','backup','HP_1027')]},
{id:'1028',date:'2026-10-28',weekday:'三',title:'Figure Drawing・MoMA・Midtown・Jazz',area:'Battery Park City · Midtown · Greenwich Village',intro:'10/28 三人同行：上午 Figure Drawing 必去；下午一起逛 MoMA 與 Midtown；晚上爵士樂 Walk-in，Blue Note 未購票。',stops:[s('09:20–09:45','前往 Rector Park East','Rector Park East, Rector Place and South End Avenue, New York, NY',undefined,''),s('10:00–12:00','Artist-Led Figure Drawing【必去】','Rector Park East, Battery Park City, New York, NY',undefined,'免費免預約，現場提供畫材','confirmed'),s('12:00–13:15','午餐、前往 MoMA','11 W 53rd St, New York, NY',undefined,'含地鐵與步行'),s('13:15–16:15','MoMA 現代藝術博物館【重點】','11 W 53rd St, New York, NY',undefined,'週三 10:30–17:30 開放，預留三小時','pending'),s('16:15–18:00','Midtown：設計商店、Rockefeller Center、Bryant Park','Rockefeller Center, New York, NY',undefined,'NYPL 外觀順路；室內參觀依開放時間'),s('18:00–19:15','晚餐、前往爵士樂場地','Greenwich Village, New York, NY',undefined,''),s('19:15–21:30（彈性）','Jazz Walk-in【候位待確認】','Blue Note Jazz Club, 131 W 3rd St, New York, NY',undefined,'Blue Note 沒有購票；三人可現場詢問 Walk-in 候位，亦可改其他俱樂部，未保證入場；須查最低消費','pending')]},
{id:'1029',date:'2026-10-29',weekday:'四',title:'Brooklyn Bridge・DUMBO・Peter Luger・Aladdin',area:'Brooklyn Bridge · DUMBO · Williamsburg · Broadway',intro:'10/29 三人同行：Brooklyn Bridge、DUMBO、Brooklyn Heights Promenade，搭 NYC Ferry 前往 South Williamsburg，16:00 Peter Luger 牛排（待訂位）；19:00 已購票的 Aladdin，散場後步行 Times Square。',stops:[s('09:45–10:15','從 70 Pine 前往 Brooklyn Bridge 行人入口','Centre St and Park Row, New York, NY'),s('10:15–11:00','步行跨越 Brooklyn Bridge','Brooklyn Bridge, New York, NY',undefined,'曼哈頓往 Brooklyn，邊走邊拍照'),s('11:00–12:00','DUMBO：Washington St、河岸與 Powerhouse Arena','Washington Street and Water Street, Brooklyn, NY'),s('12:00–13:15','Brooklyn Bridge Park、Brooklyn Heights Promenade','Montague Street and Pierrepont Place, Brooklyn, NY',undefined,'欣賞曼哈頓天際線與街景'),s('13:15–14:15','Brooklyn Heights 街區散步、簡單輕食','Brooklyn Heights, Brooklyn, NY',undefined,'牛排留肚子'),s('14:15–14:50','返回 DUMBO／Fulton Ferry Landing 候船','Old Fulton Street and Furman Street, Brooklyn, NY',undefined,'預留步行與候船時間'),s('約15:00–15:15','NYC Ferry East River → South Williamsburg','South Williamsburg Ferry Landing, Brooklyn, NY','渡輪','成人單程約 US$5；實際出發時間及停靠站請出發前查官方班表','verify'),s('15:15–15:45','步行至 Peter Luger','178 Broadway, Brooklyn, NY',undefined,'下船後約 15–20 分鐘步行，另留緩衝'),s('16:00–17:15','Peter Luger Steak House 牛排【待訂位】','178 Broadway, Brooklyn, NY',undefined,'16:00 是建議訂位，尚未確認完成；請核對付款方式','pending'),s('17:15–18:15','搭地鐵前往 New Amsterdam Theatre','214 W 42nd St, New York, NY','地鐵','優先地鐵避免尖峰塞車，留轉乘及步行緩衝'),s('18:15–18:30','Broadway 劇院附近休息及入場','214 W 42nd St, New York, NY'),s('19:00–約21:30','Aladdin 音樂劇【已購票】','214 W 42nd St, New York, NY',undefined,'','confirmed'),s('21:30–22:00','Times Square 夜景散步','Times Square, Manhattan, New York, NY','步行','劇院步行約 5 分鐘'),s('22:00–22:45','返回 70 Pine Street','70 Pine Street, New York, NY')]}, 
{id:'1030',date:'2026-10-30',weekday:'五',title:'Central Park・The Met・Upper East Side',area:'Central Park · Upper East Side · The Met',intro:'10/30 不預設第三位朋友同行；將 Central Park 與 The Met 移到週五，晚間保留 Morgan 或 Harry Potter 抽票備案。',stops:[s('09:15–10:00','70 Pine → Central Park 東側','Central Park, East 79th Street, New York, NY',undefined,''),s('10:00–11:30','Central Park 東側散步、速寫','Central Park, East 79th Street, New York, NY',undefined,''),s('11:30–12:15','午餐與休息','1000 5th Ave, New York, NY',undefined,''),s('12:15–16:45','The Met：雕塑、古典藝術與鉛筆速寫【重點】','1000 5th Ave, New York, NY',undefined,'週五通常開放至 21:00，想多看可延長','pending'),s('16:45–18:00','Upper East Side 咖啡、晚餐或休息','Upper East Side, New York, NY',undefined,''),s('18:00–20:00','Morgan 免費週五夜場【須預約，可選】','225 Madison Ave, New York, NY',undefined,'與 Harry Potter 抽票備案擇一','backup'),s('19:00–約22:00','Harry Potter 雙人晚場【抽票備案】','214 W 43rd St, New York, NY',undefined,'抽中才去，與 Morgan 擇一','backup')]},
{id:'1031',date:'2026-10-31',weekday:'六',title:'Little Ukraine・East Village・Nolita・萬聖節',area:'Little Ukraine · East Village · Nolita · Greenwich Village',intro:'上午先逛 Little Ukraine 街景，中午後逛 East Village 的文具、古著與設計選物，下午轉 Nolita；晚上觀賞萬聖節遊行。',stops:[s('10:30–11:30','Little Ukraine 街景、早餐','30 E 7th St, New York, NY',undefined,'先散步，部分獨立店中午才開門'),s('11:30–13:30','East Village：文具、插畫與古著小店','East 10th Street and 1st Avenue, New York, NY',undefined,'Niconeco、Archie’s Press、Casey Rubber Stamps、Spooksvilla、L Train Vintage、Exit9 擇選；萬聖節營業時間待確認'),s('13:30–14:30','East Village 午餐','East 9th Street and 2nd Avenue, New York, NY'),s('14:30–16:30','Nolita：Goods for the Study、Mulberry Street','234 Mulberry Street, New York, NY',undefined,'設計文具、街景與獨立小店；營業時間依當日公告'),s('16:30–18:00','休息、提早晚餐','Greenwich Village, New York, NY',undefined,'遊行前補充體力'),s('18:00–19:00','前往 6th Avenue 遊行路線找位置','6th Avenue and W 10th Street, New York, NY',undefined,'依現場封路與人潮調整'),s('19:00–21:00','Village Halloween Parade','6th Avenue, Greenwich Village, New York, NY',undefined,'實際活動時間與封路以官方公告為準'),s('21:00–22:00','遊行後返回 70 Pine Street','70 Pine Street, New York, NY','地鐵','封路可能影響地鐵出入口')]},
{id:'1101',date:'2026-11-01',weekday:'日',title:'清晨返程・JFK',area:'Financial District · JFK · Seattle',intro:'11/1 07:10 JFK 起飛，清晨前往機場。',stops:[s('02:15–02:45','起床、最後整理與退房','70 Pine Street, New York, NY',undefined,'確認住宿凌晨退房與車輛上車位置'),s('03:00','預約車從 70 Pine Street 出發','70 Pine Street, New York, NY','預約車｜70 Pine Street → JFK Terminal 4；車程估 40–60 分，依凌晨路況','機場接送已預訂：訂單 ZZH697730；11/1 03:00 紐約當地時間從 70 Pine Street 出發。請核對 JFK T4 下車位置與夏令時間切換','confirmed'),s('03:40–04:15','預估抵達 JFK Terminal 4','John F. Kennedy International Airport Terminal 4, Queens, NY',undefined,'實際依車況、航廈及報到櫃台開放時間'),s('04:00–06:15','報到、托運、安檢','John F. Kennedy International Airport Terminal 4, Queens, NY',undefined,'達美航空 Main Basic (E)；行李額度及櫃台時間依訂位資料確認'),s('07:10','DL0699 JFK → SEA 起飛','John F. Kennedy International Airport Terminal 4, Queens, NY',undefined,'Delta Airbus A321neo；SEA 轉機 4 小時 29 分，接 DL0069 飛往桃園','confirmed')]},
{id:'1102',date:'2026-11-02',weekday:'一',title:'抵達台灣',area:'SEA · TPE',intro:'返台抵達日，紐約行程已於 11/1 清晨結束。',stops:[s('20:30','DL0069 抵達桃園國際機場 T2','Taiwan Taoyuan International Airport Terminal 2',undefined,'達美航空 DL0069 Airbus A350-900；11/2（一）20:30 抵達，跨越國際換日線','confirmed')]}
];
export const tickets:Ticket[]=[
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
{id:'stargazing',title:'High Line Stargazing · 免費免預約',date:'10/27（二）',time:'19:00–21:00（參考；官方為日落至閉園前約30分）',status:'planned',url:'https://www.thehighline.org/events/stargazing/',note:'地點：High Line 上 Little W 12th St × Washington St（The Standard Hotel 南側）。Friends of the High Line × Amateur Astronomers Association 提供望遠鏡；免費、免 RSVP，所有年齡皆可。陰天或下雨可能取消，當天 15:00 查看官網或 @highlinenyc X 公告。若抽中 10/27 Harry Potter，改參加劇院。'},
{id:'landscape',title:'Landscape Art Class (Outdoors)【可放棄】',date:'10/28',time:'14:00–16:00',status:'backup',url:'https://www.clubfreetime.com/new-york-city-nyc/free-workshop/2026-10-28/event/760624',note:'Wagner Park，20 Battery Place。免費免預約，提供戶外繪畫材料；與下午 SoHo 行程二擇一。'},
{id:'kpop',title:'K-Pop Dance Lessons',date:'10/30',time:'18:00',status:'backup',note:'免費；需取消 Morgan'},
{id:'pickleball',title:'Pickleball',date:'10/26',time:'10:00',status:'backup',note:'與 Midtown 主線衝突'}
];
export const hpOptions=[{id:'none',label:'尚未抽中／維持原行程'},{id:'HP_1027',label:'10/27 19:00 · 1 人'},{id:'HP_1028_1300',label:'10/28 13:00 · 2 人'},{id:'HP_1028_1900',label:'10/28 19:00 · 2 人'},{id:'HP_1030_1900',label:'10/30 19:00 · 2 人'},{id:'HP_1101_1500',label:'11/01 15:00 · 2 人'}];
export const tasks:Task[]=[
["flight","行前準備","核對 10/24 去程 DL0068 15:45 TPE→11:11 SEA、DL1065 16:00 SEA→10/25 00:21 JFK；SEA 轉機 4 小時 49 分、入境／行李轉運及 11/01 回程、托運與手提額度","10/22"],
["esta","行前準備","確認護照效期、ESTA 核准狀態與資料一致","10/21","https://esta.cbp.dhs.gov/"],
["hotel","行前準備","緊急確認 Interfaith 10/25 凌晨約 02:00–03:00 入住／門禁／自助入住方式；確認 10/24–27 與 Mint House 10/27–11/01 訂單；尤其 10/27 退房後寄放行李、領取時段及凌晨退房方式","10/22"],
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
["Broadway 72nd St bagel / deli","餐飲",["1025"],"Upper West Side","中央公園散步前外帶早餐或輕食","6–16","Broadway and West 72nd Street, New York"],
["Cooper Hewitt Museum Shop","商店",["1025"],"Cooper Hewitt","館內設計禮品與選書，不必另跑街區",undefined,"2 East 91st Street, New York"],
["Kinokuniya New York","商店",["1026"],"Bryant Park／NYPL","插畫書、設計書與文具；在 Bryant Park 附近",undefined,"1073 Avenue of the Americas, New York"],
["MoMA Design Store","商店",["1026"],"MoMA","參觀完直接逛設計商店，不需跨區",undefined,"11 West 53rd Street, New York"],
["Printed Matter Chelsea","商店",["1027"],"Chelsea","原本正式行程的藝術印刷品店，11:00 開始逛",undefined,"231 11th Avenue, New York"],
["SoHo / Nolita 文具店 Goods for the Study","商店",["1026"],"SoHo / Nolita","喜歡紙品與設計文具；按當日步行方向決定是否繞往 Nolita",undefined,"Nolita, Manhattan, New York"],
["Housing Works Bookstore","商店",["1026"],"SoHo","二手書、書店空間，與 SoHo 散步相容",undefined,"126 Crosby Street, New York"],
["McNally Jackson SoHo","商店",["1026"],"SoHo","設計書與獨立選書；先確認分店地址與營業",undefined,"134 Prince Street, New York"],
["The Met Museum Shop","商店",["1030"],"The Met","雕塑速寫之後逛藝術書、明信片與文創",undefined,"1000 Fifth Avenue, New York"],
["Powerhouse Arena","商店",["1029"],"DUMBO","藝術設計、攝影書；在 DUMBO 散步路線上",undefined,"28 Adams Street, Brooklyn, New York"],
["Time Out Market New York","餐飲",["1029"],"DUMBO","橋下河岸午餐，價格偏高可只逛不吃","15–28","55 Water Street, Brooklyn, New York"],
["Spooksvilla + Friends","商店",["1031"],"East Village","插畫、奇趣禮品；當天正式行程",undefined,"309 East 9th Street, New York"],
["Exit9 Gift Emporium","商店",["1031"],"East Village","設計雜貨與小禮品，和其他商店同區",undefined,"51 Avenue A, New York"],
["L Train Vintage","商店",["1031"],"East Village","古著店，正式行程可順路逛",undefined,"204 First Avenue, New York"],
["MoMA Design Store SoHo","商店",["1026"],"SoHo","設計生活用品與創意小物；不必只在 MoMA 館內逛",undefined,"81 Spring Street, New York"],
["Goods for the Study Nolita","商店",["1028"],"Nolita","兩間相鄰店面，筆具與紙品分開；設計文具優先推薦",undefined,"234 Mulberry Street, New York"],
["L Train Vintage","商店",["1031"],"East Village","平價二手服飾，慢慢挖寶挑質感款式",undefined,"204 First Avenue, New York"],
["AuH2O","商店",["1031"],"East Village","二手與改造服飾、飾品；偏平價質感穿搭",undefined,"84 East 7th Street, New York"],
["Niconeco Zakkaya","商店",["1031"],"East Village","日系設計文具、手帳紙品與精緻小物；高優先",undefined,"263 East 10th Street, New York"],
["Archie's Press","商店",["1031"],"East Village","活版印刷城市地圖、海報與卡片；高優先",undefined,"219 East 10th Street, New York"],
["Casey Rubber Stamps","商店",["1031"],"East Village","特色手工橡皮章與印刷工具；路過值得進去",undefined,"322 East 11th Street, New York"],
["Pageant Print Shop","商店",["1031"],"East Village","老地圖、復古海報與版畫，適合挖寶",undefined,"69 East 4th Street, New York"],
["Pink Olive","商店",["1031"],"East Village","創意禮品、卡片、文具與生活小物",undefined,"439 East 9th Street, New York"],
["MoMA Design Store 53rd St","商店",["1026"],"MoMA","展後順逛設計商品與文具，免另排購物時段",undefined,"44 West 53rd Street, New York"]
,
["Gray's Papaya",'餐飲',["1025"],"Upper West Side · W 72nd St","紐約經典熱狗與木瓜飲；早餐或散步前小吃","5–12","2090 Broadway, New York"],
["Los Tacos No. 1 · Madison Square Park",'餐飲',["1026"],"Flatiron","現做墨西哥塔可，上午 Flatiron 路線可外帶","5–15","27 East 23rd Street, New York"],
["Los Tacos No. 1 · Chelsea Market",'餐飲',["1027"],"Chelsea Market","必吃塔可；與 Chelsea Market 正式行程完全同路","5–15","75 Ninth Avenue, New York"],
["Xi'an Famous Foods · Financial District",'餐飲',["1027"],"70 Pine 附近","換住宿後可選平價手工麵；多款帶辣，點餐先確認不辣選項","10–17","8 Liberty Place, New York"],
["Champion Pizza · SoHo",'餐飲',["1026"],"SoHo / Nolita","平價紐約披薩切片，逛文具店途中快吃","4–10","17 Cleveland Place, New York"],
["Los Tacos No. 1 · Times Square",'餐飲',["1029"],"New Amsterdam Theatre","Aladdin 開演前快速吃塔可，步行距離短","5–15","229 West 43rd Street, New York"],
["7th Street Burger · DUMBO",'餐飲',["1029"],"DUMBO / Brooklyn Bridge Park","Smash burger 與薯條，河岸散步可順路外帶","9–18","17 Old Fulton Street, Brooklyn, New York"],
["Front Street Pizza",'餐飲',["1029"],"DUMBO","紐約披薩切片；比河岸觀光餐廳容易控制預算","5–13","80 Front Street, Brooklyn, New York"],
["Xi'an Famous Foods · East Village",'餐飲',["1031"],"East Village / Little Ukraine","手工麵與肉夾饃；口味可能偏辣，點餐前確認","10–17","129 Second Avenue, New York"],
["7th Street Burger · East Village",'餐飲',["1031"],"East Village","平價現做漢堡，逛店途中快速吃","9–18","91 East 7th Street, New York"],
["$1.50 Fresh Pizza · East Village",'餐飲',["1031"],"East Village","超平價披薩切片；小吃備案，不用特地繞路","2–8","71 Second Avenue, New York"]
,
["NY Pizza Suprema","餐飲",["1024"],"Penn Station 西南側","抵達 Penn Station 後可買紐約經典披薩切片；帶行李不必久坐","6–15","413 Eighth Avenue, New York"],
["Best Bagel & Coffee","餐飲",["1025"],"Penn Station / 35th St","貝果三明治與咖啡，10/24 深夜抵達多半已打烊，僅列次日備案","8–18","225 West 35th Street, New York"],
["Woorijip","餐飲",["1025"],"Koreatown / W 32nd St","韓式熟食與飯盒；想吃米飯可選，但從 8th Ave 需稍微向東繞","10–18","12 West 32nd Street, New York"],
["Whole Foods Market · Chelsea","餐飲",["1024"],"Chelsea / 7th Ave","10/24 深夜可能打烊；以便利商店或車站仍營業店家為備案","8–20","250 Seventh Avenue, New York"]
].map((a:any)=>({name:a[0],type:a[1],dayIds:a[2],nearStop:a[3],why:a[4],estimatedBudgetUSD:a[5],address:a[6],openingHours:'待查證',verified:false}));
export const backupActivities: {day:string;title:string;time:string;address:string;note:string}[]=[{day:'10/26',title:'West Thames Park Pickleball',time:'10:00–13:00',address:'West Thames Park, New York, NY',note:'10:00–13:00，與 Midtown 主線衝突'},{day:'10/28',title:'Landscape Art Class',time:'14:00–16:00',address:'Robert F. Wagner Jr. Park, 20 Battery Pl, New York, NY',note:'14:00–16:00，Wagner Park，取代 Bushwick'},{day:'10/30',title:'Gotham Park K-Pop Dance',time:'18:00–19:00',address:'Gotham Park, Manhattan, New York',note:'18:00–19:00，建議註冊；僅取消 Morgan 時可參加'},{day:'11/01',title:'Fulton St A 線 → Howard Beach → AirTrain',time:'凌晨（依航班回推）',address:'Fulton St Station, New York, NY',note:'凌晨約 90–110 分或更久，前一晚核對施工與班次；異動改叫車'}];
export const walkRecommendations:Recommendation[]=[{name:'Central Park · Bethesda Terrace',type:'散步景點',dayIds:['1025'],nearStop:'Central Park',why:'湖畔、階梯與速寫',address:'Bethesda Terrace, Central Park, New York',openingHours:'戶外區域依現場公告',verified:false},{name:'Brooklyn Bridge',type:'散步景點',dayIds:['1029'],nearStop:'DUMBO',why:'步行過橋與城市天際線',address:'Brooklyn Bridge Pedestrian Entrance, Centre St and Park Row, New York',verified:false},{name:'High Line',type:'散步景點',dayIds:['1027'],nearStop:'Meatpacking',why:'高架公園與街景',address:'High Line, Gansevoort St, New York',verified:false},{name:'Washington Square Park',type:'散步景點',dayIds:['1031'],nearStop:'Greenwich Village',why:'拱門與街頭生活',address:'Washington Square Park, New York',verified:false},{name:'Roosevelt Island 河岸',type:'散步景點',dayIds:['1026'],nearStop:'Roosevelt Island',why:'河岸步道與曼哈頓視野',address:'Roosevelt Island, New York',verified:false}];
export const sourceLinks=[['MTA','https://new.mta.info/'],['JFK','https://www.jfkairport.com/'],['Downtown Connection','https://downtownny.com/about-us/services/downtown-connection-bus/']];
