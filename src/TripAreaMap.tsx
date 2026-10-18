import {days} from './tripData';

/** Coordinates follow the unscaled 710 × 1536 crop of the supplied watercolor illustration. */
type Area = {id:string;shape:string;days:string[]};
const areas:Area[]=[
  {id:'upper-west-side',shape:'M183 129 L267 157 275 440 219 443 197 389 188 258Z',days:['1025']},
  {id:'central-park',shape:'M271 153 L426 177 456 527 350 511 293 466 274 307Z',days:['1025']},
  {id:'upper-east-side',shape:'M429 218 L616 244 621 474 490 508 461 487Z',days:['1025','1026']},
  {id:'midtown',shape:'M221 442 L454 523 571 505 577 696 422 706 219 646Z',days:['1029']},
  {id:'chelsea',shape:'M211 648 L425 698 422 836 339 887 198 835Z',days:['1024','1027']},
  {id:'flatiron',shape:'M425 695 L593 711 598 789 431 791Z',days:['1029']},
  {id:'west-village',shape:'M196 837 L417 892 413 1036 238 1015Z',days:['1028','1031']},
  {id:'soho',shape:'M247 1033 L413 1036 428 1141 263 1147Z',days:['1028']},
  {id:'east-village',shape:'M419 890 L635 879 651 1069 434 1067Z',days:['1031']},
  {id:'lower-east-waterfront',shape:'M565 1075 L709 1085 709 1250 594 1280Z',days:['1030']},
  {id:'financial-district',shape:'M295 1291 L398 1282 557 1279 567 1437 489 1510 407 1471 325 1405Z',days:['1027','1030']},
  {id:'battery-park',shape:'M287 1254 L396 1247 391 1365 330 1401Z',days:['1028']},
  {id:'brooklyn-bridge',shape:'M581 1190 L709 1170 709 1360 593 1377Z',days:['1030']},
];
const extra:Record<string,string[]>={
  '1025':['Cooper Hewitt · Upper East Side'],
  '1026':['Roosevelt Island · 島外延伸'],
  '1027':['Meatpacking · High Line · Little Island'],
  '1028':['Rector Park East · Battery Park City'],
  '1029':['MoMA · Broadway · Midtown'],
  '1030':['Brooklyn Bridge · DUMBO · Brooklyn Heights','Wall Street · Pier 11'],
  '1031':['Little Ukraine · East Village','Greenwich Village · 萬聖節遊行'],
};
const dateLabel=(id:string)=>days.find(d=>d.id===id)?.date.slice(5).replace('-','/')||'';
export default function TripAreaMap({selectedDay}:{selectedDay:string;onSelectDay:(id:string)=>void}){
  const all=selectedDay==='all';
  const travel=selectedDay==='1101'||selectedDay==='1102';
  const activeShapes=areas.filter(a=>a.days.includes(selectedDay)).map(a=>a.shape);
  return <figure className="illustrated-map watercolor-map">
    <div className="watercolor-map-art" role="img" aria-label={all?'原始水彩曼哈頓插畫，顯示全部街區':travel?'原始水彩曼哈頓插畫，交通日不顯示觀光區域':`${dateLabel(selectedDay)} 主要活動街區以完整水彩色彩顯示，其餘區域柔和淡化`}>
      <img className="watercolor-map-image" src="/nyc-watercolor-map.webp" alt="" draggable={false}/>
      <svg className={`watercolor-map-overlay${all?' is-all':''}${travel?' is-travel':''}`} viewBox="0 0 710 1536" preserveAspectRatio="xMidYMid meet" aria-hidden="true" focusable="false">
        <defs>
          <filter id="watercolor-feather" x="-10%" y="-10%" width="120%" height="120%"><feGaussianBlur stdDeviation="7"/></filter>
          <mask id="watercolor-day-mask" maskUnits="userSpaceOnUse" x="0" y="0" width="710" height="1536">
            <rect width="710" height="1536" fill="white"/>
            <g fill="black" filter="url(#watercolor-feather)">{activeShapes.map((d,i)=><path key={i} d={d}/>)}</g>
            <g fill="black">{activeShapes.map((d,i)=><path key={i} d={d}/>)}</g>
          </mask>
        </defs>
        <rect width="710" height="1536" fill="#fffaf0" opacity={all?0:travel?.45:.59} mask="url(#watercolor-day-mask)" className="watercolor-map-dim"/>
        <g className="watercolor-map-bridge-correction" aria-hidden="true"><path d="M631 1001 L710 1010 710 1095 648 1080Z" fill="#e0f0ef" opacity=".94"/><path d="M606 1220 Q656 1241 710 1218" stroke="#785c48" strokeWidth="7" fill="none" strokeLinecap="round"/><path d="M636 1204 V1232 M680 1203 V1232" stroke="#785c48" strokeWidth="5"/><text x="599" y="1191" fontSize="20" fill="#594b3d" fontFamily="serif">Brooklyn Bridge ↘</text></g>
      </svg>
    </div>
    <figcaption className="illustrated-map-caption">
      <strong>{all?'我們的紐約旅行 · 水彩街區地圖':selectedDay==='1102'?'11/02 · 抵達台灣':selectedDay==='1101'?'11/01 · JFK 清晨返程':`${dateLabel(selectedDay)} · ${days.find(d=>d.id===selectedDay)?.title||''}`}</strong>
      <span>{all?'選擇上方日期，當日活動區域會保留鮮明的水彩色彩。':travel?'交通日 · 不標示曼哈頓觀光區域':'當日活動街區保留原始色彩，其餘區域柔和淡化。示意圖非導航地圖。'}</span>
      {!!extra[selectedDay]?.length&&<div className="watercolor-map-tags">{extra[selectedDay].map(v=><span key={v}>{v}</span>)}</div>}
    </figcaption>
  </figure>;
}
