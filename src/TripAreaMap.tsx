import {days} from './tripData';

/** Coordinates follow the unscaled 1024 × 1536 crop of the supplied watercolor illustration. */
type Area = {id:string;label:string;shape:string;days:string[]};
const areas:Area[]=[
  {id:'central-park',label:'Central Park',shape:'M340 170 L468 194 477 515 359 507Z',days:['1030']},
  {id:'upper-east-side',label:'Upper East Side · The Met',shape:'M462 205 L635 235 652 490 480 508Z',days:['1030']},
  {id:'midtown',label:'Flatiron · Midtown',shape:'M218 465 L479 512 640 500 654 682 451 689 207 631Z',days:['1026','1027','1028','1029']},
  {id:'midtown-west-theater',label:'Theater District · Times Square',shape:'M218 475 L340 491 348 616 218 612Z',days:['1025','1027','1029','1031']},
  {id:'chelsea',label:'Chelsea · High Line · Chelsea Market',shape:'M205 628 L455 687 453 866 220 825Z',days:['1027','1031']},
  {id:'west-village',label:'West Village · Little Island',shape:'M205 834 L456 880 453 1031 225 1026Z',days:['1027']},
  {id:'soho',label:'SoHo · Orchard Street',shape:'M224 1026 L454 1037 453 1123 230 1134Z',days:['1026']},
  {id:'greenwich-village',label:'Greenwich Village',shape:'M225 1124 L454 1122 454 1214 285 1214Z',days:['1028']},
  {id:'east-village',label:'East Village · Lower East Side',shape:'M456 890 L739 883 765 1042 463 1038Z',days:['1026','1031']},
  {id:'financial-district',label:'Financial District · 70 Pine',shape:'M316 1261 L560 1242 623 1405 526 1471 344 1412Z',days:['1027','1028']},
  {id:'battery-park',label:'Battery Park City · Rector Park',shape:'M279 1214 L336 1212 346 1406 300 1378Z',days:['1028']},
  {id:'brooklyn-bridge',label:'Brooklyn Bridge',shape:'M624 1164 L850 1155 1024 1257 1024 1330 833 1279 642 1262Z',days:['1029']},
  {id:'dumbo',label:'DUMBO',shape:'M848 1253 L1024 1225 1024 1362 840 1358Z',days:['1029']},
  {id:'brooklyn-heights',label:'Brooklyn Heights',shape:'M804 1360 L1024 1366 1024 1504 787 1504Z',days:['1029']},
];
const mapTagSources:[string,RegExp][]=[
  ['Stranger Things',/Stranger Things/],['Harry Potter',/Harry Potter/],
  ['Flatiron',/Flatiron/],['SoHo',/SoHo/],['Orchard Street',/Orchard Street/],['Gotham Burger',/Gotham Burger/],
  ['Vessel',/Vessel/],['High Line',/High Line/],['Printed Matter',/Printed Matter/],['Chelsea Market',/Chelsea Market/],['Little Island',/Little Island/],['Staten Island Ferry',/Staten Island Ferry/],['朋友會合',/與朋友會合/],
  ['Figure Drawing',/Figure Drawing/],['MoMA',/MoMA/],['Midtown',/Midtown/],['Jazz',/Jazz Walk-in/],
  ['Brooklyn Bridge',/Brooklyn Bridge/],['DUMBO',/DUMBO/],['Brooklyn Heights',/Brooklyn Heights/],['Peter Luger',/Peter Luger/],['Aladdin',/Aladdin/],
  ['Central Park',/Central Park/],['The Met',/The Met/],
  ['Circle Line',/Circle Line/],['Little Ukraine',/Little Ukraine/],['East Village',/East Village/],['文具、插畫與古著小店',/文具、插畫與古著小店/],
];
const mapDays=Object.fromEntries(days.map(day=>[day.id,{
  title:day.title,
  tags:mapTagSources.filter(([,pattern])=>day.stops.some(stop=>stop.status!=='backup'&&pattern.test(stop.title))).map(([label])=>label)
}])) as Record<string,{title:string;tags:string[]}>;
export const getMapDaySummary=(id:string)=>{
  const day=days.find(value=>value.id===id);
  const matches=mapTagSources.flatMap(([title,pattern],index)=>{
    const stop=day?.stops.find(value=>value.status!=='backup'&&pattern.test(value.title)&&value.location);
    return stop?.location?[{id:`${id}-map-${index}`,title,location:stop.location}]:[];
  });
  return {title:day?.title||'',area:areas.filter(area=>area.days.includes(id)).map(area=>area.label).join(' · '),stops:matches,locations:[...new Set(matches.map(stop=>stop.location))]};
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
