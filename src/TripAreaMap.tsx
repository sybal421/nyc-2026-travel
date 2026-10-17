import {useEffect,useRef} from 'react';
import L from 'leaflet';
import 'leaflet/dist/leaflet.css';
import {days} from './tripData';

type Area={name:string;lat:number;lng:number};
const zones:Record<string,Area[]>={
'1024':[{name:'JFK 機場',lat:40.6413,lng:-73.7781},{name:'Chelsea／Penn Station',lat:40.7506,lng:-73.9935}],
'1025':[{name:'Upper West Side',lat:40.778,lng:-73.982},{name:'Central Park',lat:40.779,lng:-73.967},{name:'Cooper Hewitt／Upper East Side',lat:40.7844,lng:-73.9578}],
'1026':[{name:'Flatiron',lat:40.7411,lng:-73.9897},{name:'Madison Square Park／NoMad',lat:40.7436,lng:-73.9875}],
'1027':[{name:'Chelsea／Printed Matter',lat:40.7494,lng:-74.0064},{name:'Meatpacking／Little Island',lat:40.7421,lng:-74.0102},{name:'Financial District／住宿',lat:40.7063,lng:-74.0076}],
'1028':[{name:'Central Park',lat:40.7744,lng:-73.9709},{name:'The Met',lat:40.7794,lng:-73.9632}],
'1029':[{name:'Bryant Park',lat:40.7536,lng:-73.9832},{name:'MoMA／Midtown',lat:40.7614,lng:-73.9776},{name:'Broadway 劇院區',lat:40.7561,lng:-73.9885}],
'1030':[{name:'Brooklyn Bridge',lat:40.7061,lng:-73.9969},{name:'DUMBO／Brooklyn Heights',lat:40.7029,lng:-73.9905},{name:'Morgan Library／Midtown',lat:40.7492,lng:-73.9815}],
'1031':[{name:'SoHo',lat:40.7233,lng:-73.9985},{name:'West Village',lat:40.7358,lng:-74.0036},{name:'Halloween Parade／Sixth Avenue',lat:40.7324,lng:-73.9982}],
'1101':[{name:'Staten Island Ferry／Battery Park',lat:40.7017,lng:-74.0132},{name:'Roosevelt Island Tram',lat:40.7613,lng:-73.9647}],
'1102':[{name:'Financial District／出發',lat:40.7063,lng:-74.0076},{name:'JFK 機場',lat:40.6413,lng:-73.7781}]
};
const palette=['#bd6c4e','#577d67','#b18a45','#597e9b','#9c688b','#557c7e','#aa7751','#7a719e','#70905d','#9b6b6b'];
export default function TripAreaMap({selectedDay,onSelectDay}:{selectedDay:string;onSelectDay:(id:string)=>void}){
 const container=useRef<HTMLDivElement>(null);const map=useRef<L.Map|null>(null);const layers=useRef<L.LayerGroup|null>(null);
 useEffect(()=>{if(!container.current||map.current)return;const m=L.map(container.current,{scrollWheelZoom:false}).setView([40.744,-73.986],11);L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png',{attribution:'&copy; OpenStreetMap contributors',maxZoom:19}).addTo(m);map.current=m;layers.current=L.layerGroup().addTo(m);setTimeout(()=>m.invalidateSize(),100);return()=>{m.remove();map.current=null;layers.current=null}},[]);
 useEffect(()=>{const m=map.current,group=layers.current;if(!m||!group)return;group.clearLayers();const bounds:L.LatLngExpression[]=[];days.forEach((day,i)=>{const active=selectedDay===day.id;const areas=zones[day.id]||[];const color=palette[i%palette.length];areas.forEach((area,j)=>{const point:L.LatLngExpression=[area.lat,area.lng];if(active||selectedDay==='all')bounds.push(point);const marker=L.circleMarker(point,{radius:active?10:7,color:'#ffffff',weight:active?3:2,fillColor:color,fillOpacity:active?1:.78});marker.bindPopup('<strong>'+day.date.slice(5).replace('-','/')+' · '+area.name+'</strong><br/>'+day.title);marker.on('click',()=>onSelectDay(day.id));marker.addTo(group)});if(active&&areas.length>1)L.polyline(areas.map(a=>[a.lat,a.lng] as L.LatLngExpression),{color,weight:3,opacity:.8,dashArray:'5,7'}).addTo(group)});if(bounds.length)m.fitBounds(L.latLngBounds(bounds),{padding:[25,25],maxZoom:selectedDay==='all'?12:14})},[selectedDay,onSelectDay]);
 return <div className="trip-map" ref={container} role="region" aria-label="紐約每日活動區域互動地圖"/>;
}
