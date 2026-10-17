import {useEffect,useRef} from 'react';
import L from 'leaflet';
import 'leaflet/dist/leaflet.css';
import {days} from './tripData';

type Area={name:string;lat:number;lng:number};
const zones:Record<string,Area[]>={
'1024':[{name:'Penn Station',lat:40.7506,lng:-73.9935},{name:'Interfaith Retreats／Chelsea',lat:40.7496,lng:-73.9954}],
'1025':[{name:'Verdi Square',lat:40.7781,lng:-73.9824},{name:'The Dakota',lat:40.7765,lng:-73.9761},{name:'Strawberry Fields',lat:40.7757,lng:-73.9749},{name:'Central Park 湖畔',lat:40.7783,lng:-73.9684},{name:'Cooper Hewitt',lat:40.7844,lng:-73.9578}],
'1026':[{name:'Flatiron Building',lat:40.7411,lng:-73.9897},{name:'Madison Square Park',lat:40.7425,lng:-73.9877},{name:'MetLife Tower',lat:40.7418,lng:-73.9878},{name:'New York Life Building',lat:40.7427,lng:-73.9862},{name:'NoMad／Broadway',lat:40.7446,lng:-73.9895}],
'1027':[{name:'Printed Matter',lat:40.7496,lng:-74.0065},{name:'Chelsea Market',lat:40.7424,lng:-74.0060},{name:'Gansevoort Plaza',lat:40.7398,lng:-74.0069},{name:'Whitney Museum 外觀',lat:40.7396,lng:-74.0089},{name:'Little Island',lat:40.7420,lng:-74.0105}],
'1028':[{name:'Bethesda Terrace',lat:40.7744,lng:-73.9709},{name:'The Met',lat:40.7794,lng:-73.9632}],
'1029':[{name:'Bryant Park',lat:40.7536,lng:-73.9832},{name:'New York Public Library',lat:40.7532,lng:-73.9822},{name:'MoMA',lat:40.7614,lng:-73.9776},{name:'Rockefeller Center',lat:40.7587,lng:-73.9787},{name:'New Amsterdam Theatre',lat:40.7561,lng:-73.9885}],
'1030':[{name:'Brooklyn Bridge 行人入口',lat:40.7132,lng:-74.0046},{name:'Brooklyn Bridge',lat:40.7061,lng:-73.9969},{name:'Washington Street／DUMBO',lat:40.7032,lng:-73.9893},{name:'Pebble Beach',lat:40.7045,lng:-73.9891},{name:'Brooklyn Heights Promenade',lat:40.6968,lng:-73.9973},{name:'Morgan Library',lat:40.7492,lng:-73.9815}],
'1031':[{name:'SoHo／Prince Street',lat:40.7247,lng:-73.9991},{name:'Washington Square Park',lat:40.7308,lng:-73.9973},{name:'West Village／Bleecker Street',lat:40.7358,lng:-74.0036},{name:'Halloween Parade／Sixth Avenue',lat:40.7324,lng:-73.9982}],
'1101':[{name:'Whitehall Terminal',lat:40.7017,lng:-74.0132},{name:'St. George Ferry Terminal',lat:40.6438,lng:-74.0722},{name:'Roosevelt Island Tram／Manhattan',lat:40.7613,lng:-73.9647},{name:'Roosevelt Island',lat:40.7617,lng:-73.9497}],
'1102':[{name:'70 Pine Street',lat:40.7063,lng:-74.0076},{name:'JFK 機場',lat:40.6413,lng:-73.7781}]
};
const walkingSegments:Record<string,number[][]>={
'1024':[[0,1]],'1025':[[0,1,2,3,4]],'1026':[[0,1,2,3,4]],'1027':[[0,1,2,3,4]],'1028':[[0,1]],'1029':[[0,1],[2,3,4]],'1030':[[0,1,2,3,4]],'1031':[[0,1,2,3]],'1101':[],'1102':[]
};
const palette=['#bd6c4e','#577d67','#b18a45','#597e9b','#9c688b','#557c7e','#aa7751','#7a719e','#70905d','#9b6b6b'];
export default function TripAreaMap({selectedDay,onSelectDay}:{selectedDay:string;onSelectDay:(id:string)=>void}){
 const container=useRef<HTMLDivElement>(null);const map=useRef<L.Map|null>(null);const layers=useRef<L.LayerGroup|null>(null);
 useEffect(()=>{if(!container.current||map.current)return;const m=L.map(container.current,{scrollWheelZoom:false}).setView([40.744,-73.986],11);L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png',{attribution:'&copy; OpenStreetMap contributors',maxZoom:19}).addTo(m);map.current=m;layers.current=L.layerGroup().addTo(m);setTimeout(()=>m.invalidateSize(),100);return()=>{m.remove();map.current=null;layers.current=null}},[]);
 useEffect(()=>{const m=map.current,group=layers.current;if(!m||!group)return;group.clearLayers();const bounds:L.LatLngExpression[]=[];days.forEach((day,i)=>{const active=selectedDay===day.id;const areas=zones[day.id]||[];const color=palette[i%palette.length];areas.forEach((area,j)=>{const point:L.LatLngExpression=[area.lat,area.lng];if(active||selectedDay==='all')bounds.push(point);const marker=L.circleMarker(point,{radius:active?9:5,color:'#ffffff',weight:active?3:1.5,fillColor:color,fillOpacity:active?1:.8});const popup=document.createElement('div');const title=document.createElement('strong');title.textContent=day.date.slice(5).replace('-','/')+' · '+area.name;popup.appendChild(title);const subtitle=document.createElement('div');subtitle.textContent=day.title;popup.appendChild(subtitle);marker.bindPopup(popup);marker.on('click',()=>onSelectDay(day.id));marker.addTo(group)});if(active){(walkingSegments[day.id]||[]).forEach(segment=>{if(segment.length>1)L.polyline(segment.map(j=>[areas[j].lat,areas[j].lng] as L.LatLngExpression),{color,weight:4,opacity:.85,dashArray:'6,7'}).addTo(group)})}});if(bounds.length)m.fitBounds(L.latLngBounds(bounds),{padding:[25,25],maxZoom:selectedDay==='all'?12:15})},[selectedDay,onSelectDay]);
 return <div className="trip-map" ref={container} role="region" aria-label="紐約每日活動區域互動地圖"/>;
}
