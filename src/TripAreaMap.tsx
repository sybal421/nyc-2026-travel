import {days} from './tripData';
type Zone={id:string;label:string;path:string;fill:string;days:string[];x:number;y:number};
const zones:Zone[]=[
{id:'uws',label:'Upper West Side',path:'M120 140 L196 140 L196 282 L113 282 Z',fill:'#d9dfb4',days:['1025'],x:154,y:210},
{id:'park',label:'Central Park',path:'M200 140 L244 140 L244 282 L200 282 Z',fill:'#b8d8b5',days:['1025'],x:222,y:207},
{id:'ues',label:'Upper East Side',path:'M248 140 L321 150 L321 282 L248 282 Z',fill:'#b8d7e9',days:['1025','1026'],x:284,y:213},
{id:'midtown',label:'Midtown',path:'M113 286 L322 286 L328 390 L108 390 Z',fill:'#f4dfa8',days:['1029'],x:220,y:334},
{id:'chelsea',label:'Chelsea',path:'M108 395 L208 395 L208 476 L103 470 Z',fill:'#efc0b7',days:['1024','1027'],x:157,y:433},
{id:'flatiron',label:'Flatiron',path:'M211 395 L330 395 L332 447 L211 447 Z',fill:'#c6d5bf',days:['1029'],x:269,y:422},
{id:'west',label:'West Village',path:'M102 475 L209 481 L207 550 L117 551 Z',fill:'#bfd9e9',days:['1028'],x:161,y:514},
{id:'east',label:'East Village / Little Ukraine',path:'M213 451 L334 450 L340 550 L211 550 Z',fill:'#edb99e',days:['1031'],x:275,y:500},
{id:'soho',label:'SoHo',path:'M121 556 L211 555 L214 616 L138 614 Z',fill:'#f5dca0',days:['1028'],x:174,y:582},
{id:'les',label:'Lower East Side',path:'M215 555 L341 554 L327 627 L217 617 Z',fill:'#c5d8e8',days:[],x:276,y:589},
{id:'tribeca',label:'Tribeca',path:'M139 619 L216 621 L215 684 L157 683 Z',fill:'#bcd3c6',days:[],x:180,y:650},
{id:'chinatown',label:'Chinatown',path:'M219 622 L327 632 L308 685 L219 684 Z',fill:'#d7c6db',days:[],x:268,y:654},
{id:'fidi',label:'Financial District',path:'M158 689 L309 690 L280 785 L231 816 L177 765 Z',fill:'#efc2bc',days:['1027','1028','1030','1101'],x:234,y:739}
];
const colors=['#db9977','#7ca995','#77abc9','#d2a65e','#a99cc6','#80aab2'];
const dayLabel=(id:string)=>days.find(d=>d.id===id)?.date.slice(5).replace('-','/')||'';
export default function TripAreaMap({selectedDay,onSelectDay}:{selectedDay:string;onSelectDay:(id:string)=>void}){
 const all=selectedDay==='all';
 const activeZones=zones.filter(z=>all||z.days.includes(selectedDay));
 const brooklyn=all||selectedDay==='1030';
 return <div className="illustrated-map" role="img" aria-label="手繪風格紐約活動區域圖；依所選日期標亮區域">
 <svg viewBox="0 0 460 880" xmlns="http://www.w3.org/2000/svg" className="illustrated-map-svg">
 <rect width="460" height="880" fill="#fbf8f0"/>
 <text x="230" y="52" textAnchor="middle" className="map-sketch-title">NEW YORK NOTES</text>
 <path d="M85 66 Q228 57 370 65" fill="none" stroke="#34352d" strokeWidth="2.5" strokeLinecap="round"/>
 <path d="M103 117 Q75 183 86 287 Q74 387 79 467 Q81 583 128 694 Q131 764 173 800 L225 845 L306 816 Q340 768 341 693 Q362 594 354 478 Q352 347 348 245 L338 139" fill="none" stroke="#a8d5e3" strokeWidth="36" strokeLinecap="round" opacity=".75"/>
 <path d="M110 132 L325 139 L342 248 L351 474 L345 592 L319 703 L280 789 L232 830 L174 787 L140 690 L108 558 L96 472 L102 375 L106 274 Z" fill="#f3eedf" stroke="#383c34" strokeWidth="2.4" strokeLinejoin="round"/>
 <path d="M115 137 L319 147 L322 137 L113 130 Z" fill="#e3cddd"/>
 <text x="218" y="112" textAnchor="middle" className="map-sketch-subtitle">MANHATTAN</text>
 {zones.map((z,i)=>{const active=all||z.days.includes(selectedDay);const selectable=z.days.length>0;return <g key={z.id} onClick={()=>{if(selectable&&z.days.length===1)onSelectDay(z.days[0]);else if(selectable)onSelectDay(z.days.includes(selectedDay)?selectedDay:z.days[0])}} style={{cursor:selectable?'pointer':'default'}}><path d={z.path} fill={z.fill} stroke="#fffaf1" strokeWidth="4" strokeLinejoin="round" opacity={active?1:.19}/>{active&&!all&&<path d={z.path} fill="none" stroke="#a8664c" strokeWidth="4" strokeLinejoin="round"/>}<text x={z.x} y={z.y} textAnchor="middle" className={'map-zone-label '+(active?'active':'')} opacity={active?1:.38}>{z.label==='East Village / Little Ukraine'?<><tspan x={z.x} dy="-7">East Village</tspan><tspan x={z.x} dy="16">Little Ukraine</tspan></>:z.label==='Upper West Side'?<><tspan x={z.x} dy="-7">Upper West</tspan><tspan x={z.x} dy="16">Side</tspan></>:z.label==='Upper East Side'?<><tspan x={z.x} dy="-7">Upper East</tspan><tspan x={z.x} dy="16">Side</tspan></>:z.label==='West Village'?<><tspan x={z.x} dy="-7">West</tspan><tspan x={z.x} dy="16">Village</tspan></>:z.label==='Lower East Side'?<><tspan x={z.x} dy="-7">Lower East</tspan><tspan x={z.x} dy="16">Side</tspan></>:z.label==='Financial District'?<><tspan x={z.x} dy="-7">Financial</tspan><tspan x={z.x} dy="16">District</tspan></>:z.label}</text></g>})}
 <text x="37" y="405" transform="rotate(-87 37 405)" className="map-river-label">Hudson River</text><text x="400" y="510" transform="rotate(87 400 510)" className="map-river-label">East River</text>
 <g opacity={brooklyn?1:.3} onClick={()=>onSelectDay('1030')} style={{cursor:'pointer'}}><path d="M350 646 Q388 612 448 629 L449 827 L331 827 Q365 748 350 646" fill="#d4c4e5" stroke="#fff" strokeWidth="3"/><text x="399" y="726" textAnchor="middle" className="map-zone-label">Brooklyn</text><text x="399" y="745" textAnchor="middle" className="map-zone-label">DUMBO</text><path d="M326 679 L377 682 M326 690 L377 693" stroke="#34352d" strokeWidth="2"/><path d="M335 675 L335 701 M367 675 L367 702" stroke="#34352d" strokeWidth="2"/></g>
 <text x="230" y="864" textAnchor="middle" className="map-footnote">illustrated neighborhoods · not to scale</text>
 </svg>
 <div className="illustrated-map-caption"><strong>{all?'十日旅程 · 活動區域':selectedDay==='1102'?'11/02 · 抵達台灣':selectedDay==='1101'?'11/01 · JFK 清晨返程':dayLabel(selectedDay)+' · '+(days.find(d=>d.id===selectedDay)?.title||'')}</strong><span>{all?'選擇上方日期，地圖會標亮當日活動街區。':selectedDay==='1101'||selectedDay==='1102'?'交通日 · 無曼哈頓觀光區域':'亮色區塊為當日行程範圍；示意圖非導航地圖。'}</span></div>
 </div>;
}
