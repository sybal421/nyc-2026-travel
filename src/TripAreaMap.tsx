import {days} from './tripData';

/** Coordinates follow the unscaled 1024 × 1536 crop of the supplied watercolor illustration. */
type Area = {id:string;label:string;shape:string;days:string[]};
const areas:Area[]=[
  {id:'central-park',label:'Central Park',shape:'M340 170 L468 194 477 515 359 507Z',days:['1030']},
  {id:'upper-east-side',label:'Upper East Side',shape:'M462 205 L635 235 652 490 480 508Z',days:['1030']},
  {id:'roosevelt-island',label:'Roosevelt Island',shape:'M830 153 Q909 154 914 232 L862 520 Q804 510 795 434Z',days:['1026']},
  {id:'midtown',label:'Midtown',shape:'M218 465 L479 512 640 500 654 682 451 689 207 631Z',days:['1026']},
  {id:'midtown-west-theater',label:'Theater District',shape:'M218 475 L340 491 348 616 218 612Z',days:['1025','1026','1029']},
  {id:'chelsea',label:'Chelsea · Meatpacking · High Line',shape:'M205 628 L455 687 453 866 220 825Z',days:['1025','1027']},
  {id:'west-village',label:'West Village · Little Island',shape:'M205 834 L456 880 453 1031 225 1026Z',days:['1025','1027','1031']},
  {id:'soho',label:'SoHo · Nolita',shape:'M224 1026 L454 1037 453 1123 230 1134Z',days:['1028','1031']},
  {id:'east-village',label:'East Village · Lower East Side',shape:'M456 890 L739 883 765 1042 463 1038Z',days:['1028','1031']},
  {id:'financial-district',label:'Financial District · 70 Pine',shape:'M316 1261 L560 1242 623 1405 526 1471 344 1412Z',days:['1027']},
  {id:'battery-park',label:'Battery Park City · Rector Park',shape:'M279 1214 L336 1212 346 1406 300 1378Z',days:['1028']},
  {id:'brooklyn-bridge',label:'Brooklyn Bridge',shape:'M624 1164 L850 1155 1024 1257 1024 1330 833 1279 642 1262Z',days:['1029']},
  {id:'dumbo',label:'DUMBO',shape:'M848 1253 L1024 1225 1024 1362 840 1358Z',days:['1029']},
  {id:'brooklyn-heights',label:'Brooklyn Heights',shape:'M804 1360 L1024 1366 1024 1504 787 1504Z',days:['1029']},
];
const mapDays:Record<string,{title:string;tags:string[]}>= {
  '1025':{title:'Chelsea・Meatpacking・High Line',tags:['High Line','Printed Matter','Little Island','Harry Potter']},
  '1026':{title:'Midtown・MoMA・Roosevelt Island',tags:['MoMA','Roosevelt Island Tram','Times Square','Stranger Things']},
  '1027':{title:'High Line・Chelsea Market・Little Island',tags:['Printed Matter','Chelsea Market','Little Island','High Line Stargazing','22:30 與朋友會合']},
  '1028':{title:'SoHo・Nolita・Lower East Side',tags:['SoHo','Nolita','Orchard Street','Lower East Side']},
  '1029':{title:'Brooklyn Bridge・DUMBO・Brooklyn Heights',tags:['Peter Luger 15:45','Williamsburg','Aladdin','Times Square']},
  '1030':{title:'Central Park 東側・The Met',tags:['Central Park','The Met','Upper East Side']},
  '1031':{title:'Little Ukraine・East Village・萬聖節遊行',tags:['Niconeco','Spooksvilla','Exit9','L Train Vintage','Village Halloween Parade']},
};
const dateLabel=(id:string)=>days.find(d=>d.id===id)?.date.slice(5).replace('-','/')||'';
export default function TripAreaMap({selectedDay,onSelectDay}:{selectedDay:string;onSelectDay:(id:string)=>void}){
  const all=selectedDay==='all';
  const activeShapes=areas.filter(a=>a.days.includes(selectedDay)).map(a=>a.shape);
  const info=mapDays[selectedDay];
  return <figure className="illustrated-map watercolor-map">
    <div className="watercolor-map-art" role="img" aria-label={all?'原始水彩曼哈頓與布魯克林插畫，顯示全部旅遊街區':`${dateLabel(selectedDay)} ${info?.title||'主要活動區域'}以完整水彩色彩顯示，其餘區域柔和淡化`}>
      <img className="watercolor-map-image" src="/nyc-watercolor-map-v2.webp" alt="" draggable={false}/>
      <svg className={`watercolor-map-overlay${all?' is-all':''}`} viewBox="0 0 1024 1536" preserveAspectRatio="xMidYMid meet" aria-hidden="true" focusable="false">
        <defs>
          <filter id="watercolor-feather" x="-10%" y="-10%" width="120%" height="120%"><feGaussianBlur stdDeviation="7"/></filter>
          <mask id="watercolor-day-mask" maskUnits="userSpaceOnUse" x="0" y="0" width="1024" height="1536">
            <rect width="1024" height="1536" fill="white"/>
            <g fill="black" filter="url(#watercolor-feather)">{activeShapes.map((d,i)=><path key={i} d={d}/>)}</g>
            <g fill="black">{activeShapes.map((d,i)=><path key={i} d={d}/>)}</g>
          </mask>
        </defs>
        <rect width="1024" height="1536" fill="#fffaf0" opacity={all?0:.59} mask="url(#watercolor-day-mask)" className="watercolor-map-dim"/>
        <g className="watercolor-map-click-targets">{areas.map(a=><path key={a.id} d={a.shape} fill="transparent" stroke="transparent" strokeWidth="2" style={{cursor:'pointer',pointerEvents:'all'}} role="button" tabIndex={0} aria-label={`${a.label}：${a.days.map(dateLabel).join('、')}`} onClick={()=>{if(!a.days.length)return;onSelectDay(a.days.includes(selectedDay)?a.days[(a.days.indexOf(selectedDay)+1)%a.days.length]:a.days[0])}} onKeyDown={e=>{if((e.key==='Enter'||e.key===' ')&&a.days.length){e.preventDefault();onSelectDay(a.days.includes(selectedDay)?a.days[(a.days.indexOf(selectedDay)+1)%a.days.length]:a.days[0])}}}/>)}</g>
      </svg>
    </div>
    <figcaption className="illustrated-map-caption">
      <strong>{all?'我們的紐約旅行 · 水彩街區地圖':`${dateLabel(selectedDay)} · ${info?.title||''}`}</strong>
      <span>{all?'選擇日期或點擊地圖街區，切換對應的旅遊日；同一街區可再次點擊切換其他日期。':'當日活動街區保留原始色彩，其餘區域柔和淡化。示意圖非導航地圖。'}</span>
      {!!info?.tags.length&&<div className="watercolor-map-tags">{info.tags.map(v=><span key={v}>{v}</span>)}</div>}
    </figcaption>
  </figure>;
}
