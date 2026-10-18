import {useEffect,useRef} from 'react';
import L from 'leaflet';
import 'leaflet/dist/leaflet.css';
import {days} from './tripData';

type Area={name:string;lat:number;lng:number};
const zones:Record<string,Area[]>={
'1024':[{name:'Penn Station',lat:40.7506,lng:-73.9935},{name:'Interfaith Retreats／Chelsea',lat:40.7496,lng:-73.9954}],
'1025':[{name:'Verdi Square',lat:40.7781,lng:-73.9824},{name:'The Dakota',lat:40.7765,lng:-73.9761},{name:'Strawberry Fields',lat:40.7757,lng:-73.9749},{name:'Central Park 湖畔',lat:40.7783,lng:-73.9684},{name:'Cooper Hewitt',lat:40.7844,lng:-73.9578}],
'1026':[{name:'The Met',lat:40.7794,lng:-73.9632}],
'1027':[{name:'Printed Matter',lat:40.7496,lng:-74.0065},{name:'Chelsea Market',lat:40.7424,lng:-74.0060},{name:'Gansevoort Plaza',lat:40.7398,lng:-74.0069},{name:'Whitney Museum 外觀',lat:40.7396,lng:-74.0089},{name:'Little Island',lat:40.7420,lng:-74.0105}],
'1028':[{name:'Rector Park East／Figure Drawing',lat:40.7091,lng:-74.0167},{name:'Wagner Park／可選速寫課',lat:40.7050,lng:-74.0184},{name:'SoHo／Prince Street',lat:40.7247,lng:-73.9991},{name:'West Village',lat:40.7358,lng:-74.0036}],
'1029':[{name:'Flatiron Building',lat:40.7411,lng:-73.9897},{name:'Madison Square Park',lat:40.7425,lng:-73.9877},{name:'Bryant Park',lat:40.7536,lng:-73.9832},{name:'New York Public Library',lat:40.7532,lng:-73.9822},{name:'MoMA',lat:40.7614,lng:-73.9776},{name:'Rockefeller Center',lat:40.7587,lng:-73.9787},{name:'New Amsterdam Theatre',lat:40.7561,lng:-73.9885}],
'1030':[{name:'Brooklyn Bridge 行人入口',lat:40.7132,lng:-74.0046},{name:'Brooklyn Bridge',lat:40.7061,lng:-73.9969},{name:'Washington Street／DUMBO',lat:40.7032,lng:-73.9893},{name:'Pebble Beach',lat:40.7045,lng:-73.9891},{name:'Brooklyn Heights Promenade',lat:40.6968,lng:-73.9973},{name:'DUMBO／Fulton Ferry Landing',lat:40.7034,lng:-73.9946},{name:'Wall St／Pier 11',lat:40.7035,lng:-74.0060}],
'1031':[{name:'Greenwich Village／Halloween Parade',lat:40.7324,lng:-73.9982}],
'1101':[{name:'70 Pine Street・凌晨出發',lat:40.7063,lng:-74.0076},{name:'JFK Terminal 4・07:10 起飛',lat:40.6446,lng:-73.7822}],
'1102':[{name:'桃園機場第二航廈・20:30 抵達',lat:25.0777,lng:121.2328}]
};
const walkingSegments:Record<string,number[][]>={
'1024':[[0,1]],'1025':[[0,1,2,3,4]],'1026':[],'1027':[[0,1,2,3,4]],'1028':[[2,3]],'1029':[[0,1,2,3,4,5,6]],'1030':[[0,1,2,3,4,5]],'1031':[],'1101':[],'1102':[]
};
const palette=['#bd6c4e','#577d67','#b18a45','#597e9b','#9c688b','#557c7e','#aa7751','#7a719e','#70905d','#9b6b6b'];
export default function TripAreaMap({selectedDay,onSelectDay}:{selectedDay:string;onSelectDay:(id:string)=>void}){
 const container=useRef<HTMLDivElement>(null);const map=useRef<L.Map|null>(null);const layers=useRef<L.LayerGroup|null>(null);
 useEffect(()=>{if(!container.current||map.current)return;const m=L.map(container.current,{scrollWheelZoom:false}).setView([40.744,-73.986],11);// Hand-drawn-inspired geographic sketch, not a turn-by-turn navigation map.
const land=(coords:[number,number][],fill:string)=>L.polygon(coords,{color:'#b9c9bb',weight:1.4,fillColor:fill,fillOpacity:1,interactive:false}).addTo(m);
land([[40.695,-74.021],[40.703,-74.018],[40.710,-74.014],[40.717,-74.012],[40.723,-74.010],[40.731,-74.009],[40.742,-74.010],[40.752,-74.009],[40.762,-74.007],[40.773,-73.999],[40.786,-73.981],[40.802,-73.971],[40.813,-73.963],[40.816,-73.951],[40.801,-73.938],[40.787,-73.944],[40.772,-73.961],[40.759,-73.968],[40.748,-73.971],[40.736,-73.974],[40.726,-73.978],[40.716,-73.984],[40.704,-73.993],[40.695,-74.002]],'#f6f0df');
land([[40.680,-74.035],[40.685,-74.019],[40.690,-74.011],[40.696,-74.006],[40.702,-73.998],[40.708,-73.989],[40.718,-73.972],[40.727,-73.956],[40.736,-73.944],[40.749,-73.935],[40.759,-73.920],[40.755,-73.896],[40.737,-73.893],[40.723,-73.905],[40.705,-73.924],[40.690,-73.946],[40.676,-73.965],[40.666,-73.984],[40.663,-74.014]],'#eee7d6');
land([[40.737,-73.961],[40.755,-73.962],[40.774,-73.958],[40.784,-73.946],[40.796,-73.941],[40.807,-73.938],[40.807,-73.921],[40.795,-73.922],[40.779,-73.931],[40.760,-73.944]],'#f2e9d8');
L.polygon([[40.767,-73.981],[40.772,-73.977],[40.800,-73.958],[40.798,-73.950],[40.768,-73.973]],{stroke:false,fillColor:'#c5d9b9',fillOpacity:1,interactive:false}).addTo(m);
L.polygon([[40.704,-74.020],[40.712,-74.019],[40.716,-74.013],[40.709,-74.012]],{stroke:false,fillColor:'#c5d9b9',fillOpacity:1,interactive:false}).addTo(m);
const label=(point:[number,number],name:string)=>L.marker(point,{interactive:false,icon:L.divIcon({className:'sketch-label',html:'<span>'+name+'</span>',iconSize:[130,20],iconAnchor:[65,10]})}).addTo(m);
label([40.786,-73.986],'CENTRAL PARK');label([40.744,-73.994],'MANHATTAN');label([40.693,-73.968],'BROOKLYN');label([40.753,-73.912],'QUEENS');label([40.724,-74.026],'HUDSON RIVER');label([40.721,-73.965],'EAST RIVER');
L.control.attribution({prefix:false}).addAttribution('Illustrated area sketch · approximate locations').addTo(m);map.current=m;layers.current=L.layerGroup().addTo(m);setTimeout(()=>m.invalidateSize(),100);return()=>{m.remove();map.current=null;layers.current=null}},[]);
 useEffect(()=>{const m=map.current,group=layers.current;if(!m||!group)return;group.clearLayers();const bounds:L.LatLngExpression[]=[];days.forEach((day,i)=>{const active=selectedDay===day.id;const areas=zones[day.id]||[];const color=palette[i%palette.length];areas.forEach((area,j)=>{const point:L.LatLngExpression=[area.lat,area.lng];if((active||selectedDay==='all')&&area.lat>35&&area.lng<0)bounds.push(point);const marker=L.circleMarker(point,{radius:active?9:5,color:'#ffffff',weight:active?3:1.5,fillColor:color,fillOpacity:active?1:.8});const popup=document.createElement('div');const title=document.createElement('strong');title.textContent=day.date.slice(5).replace('-','/')+' · '+area.name;popup.appendChild(title);const subtitle=document.createElement('div');subtitle.textContent=day.title;popup.appendChild(subtitle);marker.bindPopup(popup);marker.on('click',()=>onSelectDay(day.id));marker.addTo(group)});if(active){(walkingSegments[day.id]||[]).forEach(segment=>{if(segment.length>1)L.polyline(segment.map(j=>[areas[j].lat,areas[j].lng] as L.LatLngExpression),{color,weight:4,opacity:.85,dashArray:'6,7'}).addTo(group)})}});if(bounds.length)m.fitBounds(L.latLngBounds(bounds),{padding:[35,35],maxZoom:selectedDay==='all'?12:15})},[selectedDay,onSelectDay]);
 return <div className="trip-map" ref={container} role="region" aria-label="紐約每日活動區域互動地圖"/>;
}
