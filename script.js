const movieRatings = [
  {rating:4.8,hype:99},{rating:4.4,hype:88},{rating:4.6,hype:94},{rating:4.1,hype:67},
  {rating:4.7,hype:98},{rating:4.2,hype:81},{rating:4.3,hype:83},{rating:4.0,hype:75},
  {rating:3.9,hype:68},{rating:4.4,hype:86},{rating:4.1,hype:72},{rating:3.8,hype:62},
  {rating:4.2,hype:77},{rating:4.0,hype:79},{rating:4.8,hype:97},{rating:4.3,hype:85}
];
const movies = [
  ['Drishyam: The Conclusion','Thriller','https://cdn.district.in/movies-assets/images/cinema/_Poster%20(24)-c25c7590-ab87-11f1-bcb6-fdfb134d4939.jpg','#55657c','#8db5dc'],
  ['Hanuman Ansh','Fantasy','https://cdn.district.in/movies-assets/images/cinema/Hanuman-Ansh-3199a900-6975-11f1-a51b-91d242246b61.jpg','#a84c18','#ffb24d'],
  ['Doraemon the Movie: New Nobita and the Castle of the Undersea Devil','Animation','https://cdn.district.in/movies-assets/images/cinema/_Poster-6bdfa9b0-c15f-11f1-ad55-cf0d8513daad.jpg','#176bb4','#6fcaff'],
  ['Thellakaagitham','Thriller','https://cdn.district.in/movies-assets/images/cinema/_Poster-11cd5aa0-b730-11f1-ac4a-cb08da184fee.jpg','#70604a','#e4c88f'],
  ['The Paradise','Action','https://cdn.district.in/movies-assets/images/cinema/The-Paradise_Poster-2c67d280-75d9-11f0-8df3-db01d1baa444.jpg','#39220d','#f4b832'],
  ['Digger','Drama','https://cdn.district.in/movies-assets/images/cinema/Digger-1d6f6160-ac17-11f1-9cff-3f349afd7a9f.jpg','#485744','#a7c775'],
  ['Heart of the Beast','Adventure','https://b.zmtcdn.com/data/edition_assets/17812379225040735.jpg','#395272','#93b7eb'],
  ['Premane Oorilo','Romance','https://cdn.district.in/movies-assets/images/cinema/love-poster-9ae599a0-b32b-11f1-a63e-29cd1093ab5d.jpg','#a64e5a','#ffabb2'],
  ['Dorothy','Thriller','https://cdn.district.in/movies-assets/images/cinema/_Poster-a4f37ab0-908b-11f1-a26d-33e0372878f2.jpg','#544b6a','#b6a1e0'],
  ['Sigma','Action','https://cdn.district.in/movies-assets/images/cinema/Sigma-poster-c5ef44d0-bc94-11f1-9e3b-5bf7ca25fcc8.jpg','#263648','#77b8e8'],
  ['Anakapalli','Drama','https://cdn.district.in/movies-assets/images/cinema/Anakapalli_Poster-9ac20b20-6e16-11f1-9444-c504df2f3dc4.jpg','#99703e','#e7c069'],
  ['Baththa','Drama','https://cdn.district.in/movies-assets/images/cinema/Bathha-3fd4f990-b261-11f1-91d8-6b802fc049ac.jpg','#583947','#da8fa7'],
  ['Tatvam','Drama','https://cdn.district.in/movies-assets/images/cinema/tatvam-f3550900-bca8-11f1-b51e-c3177d1b29d4.jpg','#46685d','#9bd1a6'],
  ["Don't Trouble the Trouble",'Comedy','https://cdn.district.in/movies-assets/images/cinema/_Poster-7e11a9f0-7ea0-11f1-b643-5bca1f306a1b.jpg','#a87828','#f6d05c'],
  ['Avengers Endgame: Encore','Action','https://cdn.district.in/movies-assets/images/cinema/_Poster%20(9)-51332ce0-a2d8-11f1-bed7-5f7230cf7d3c.jpg','#61232b','#f18978'],
  ['Verity','Thriller','https://cdn.district.in/movies-assets/images/cinema/_Poster-237de010-9545-11f1-96a6-fffc47a57db7.jpg','#604549','#d69091']
].map(([title,genre,poster,dark,accent],index)=>({
  id:title.toLowerCase().replace(/[^a-z0-9]+/g,'-').replace(/^-|-$/g,''),
  title,short:title.toUpperCase(),genre,tag:'NOW SHOWING · VIJAYAWADA',
  duration:'In theatres',...movieRatings[index],hypeScore:Math.round(movieRatings[index].hype*.65+movieRatings[index].rating*7),
  color:`linear-gradient(145deg,#101014,${dark} 58%,${accent})`,
  palette:{accent,strong:dark,soft:`${dark}55`,glow:`${accent}55`,onAccent:'#17120d'},
  languages:['Telugu','Hindi','English'],formats:['2D','3D','IMAX','Dolby Atmos'],
  symbol:'✦',cast:'Language and version options shown are demo selections',crew:'Currently listed in Vijayawada',
  synopsis:'Currently listed in Vijayawada theatres. Check the cinema listing for language, showtimes and live seat availability.',
  distance:'Now showing',poster,posterAlt:`${title} poster`
}));

const cities = {
  Vijayawada:{lat:16.5062,lon:80.6480},
  Mangalagiri:{lat:16.4300,lon:80.5680},
  Guntur:{lat:16.3067,lon:80.4365},
  Gannavaram:{lat:16.5400,lon:80.8030}
};
const events = [
  {id:'aca-cricket', region:'Local', sport:'Cricket', icon:'🏏', title:'Deccan Night T20', fixture:'Vijayawada XI vs Guntur XI', date:3, time:'07:00 PM', venue:'ACA International Cricket Stadium', city:'Mangalagiri', capacity:'Demo fixture', scene:'cricket-night', image:'https://images.unsplash.com/photo-1531415074968-036ba1b575da?auto=format&fit=crop&w=1000&q=85'},
  {id:'vijayawada-football', region:'Local', sport:'Football', icon:'⚽', title:'Krishna River Football Cup', fixture:'Vijayawada United vs Amaravati FC', date:5, time:'06:30 PM', venue:'Indira Gandhi Municipal Stadium', city:'Vijayawada', capacity:'Demo fixture', scene:'football-city', image:'https://images.unsplash.com/photo-1522778119026-d647f0596c20?auto=format&fit=crop&w=1000&q=85'},
  {id:'guntur-cricket', region:'Local', sport:'Cricket', icon:'🏏', title:'Guntur Boundary Bash', fixture:'Guntur XI vs Mangalagiri XI', date:8, time:'06:00 PM', venue:'NTR Municipal Stadium', city:'Guntur', capacity:'Demo fixture', scene:'cricket-lights', image:'https://images.unsplash.com/photo-1471295253337-3ceaaedca402?auto=format&fit=crop&w=1000&q=85'},
  {id:'mangalagiri-cricket', region:'Local', sport:'Cricket', icon:'🏏', title:'Amaravati Cricket Evening', fixture:'Capital City XI vs Krishna District XI', date:11, time:'07:30 PM', venue:'ACA International Cricket Stadium', city:'Mangalagiri', capacity:'Demo fixture', scene:'mountain-cricket', image:'https://images.unsplash.com/photo-1593341646782-e0b495cff86d?auto=format&fit=crop&w=1000&q=85'}
];

const occupancyPattern = [.50,.75,.36,.50,.75,.22,.50,.75,.42,.68,.50,.75,.30,.58,.18,.50];
const dailySlots = [['09:00 AM','Morning'],['12:30 PM','Matinee'],['04:15 PM','Evening'],['08:15 PM','Prime time']];
function createScreenShows(screenCount, basePrice, theatreIndex, availableFormats){
  const rankedMovies=movies.map((movie,movieIndex)=>({movieIndex,score:movie.hypeScore})).sort((a,b)=>b.score-a.score);
  const showSlots=Array.from({length:screenCount},(_,screenIndex)=>dailySlots.map((_,slotIndex)=>Array.from({length:4},(_,date)=>({screenIndex,slotIndex,date})))).flat(2);
  const weightedMovies=rankedMovies.flatMap(({movieIndex,score})=>Array.from({length:Math.max(1,Math.round(score/12))},()=>movieIndex));
  const assignments=rankedMovies.map(({movieIndex})=>movieIndex);
  for(let i=0;i<showSlots.length-movies.length;i++)assignments.push(weightedMovies[(i+theatreIndex*7)%weightedMovies.length]);
  assignments.sort((a,b)=>movies[b].hypeScore-movies[a].hypeScore);
  showSlots.sort((a,b)=>b.slotIndex-a.slotIndex||a.screenIndex-b.screenIndex||a.date-b.date);
  const movieSchedule=Array.from({length:screenCount},()=>dailySlots.map(()=>Array(4)));
  showSlots.forEach((slot,index)=>{movieSchedule[slot.screenIndex][slot.slotIndex][slot.date]=assignments[index]});
  return Array.from({length:screenCount},(_,screenIndex)=>{
    return dailySlots.map(([time,label],slotIndex)=>({
      time,
      price:basePrice+(slotIndex*25)+(screenIndex%3)*10,
      label,
      screen:`Screen ${String(screenIndex+1).padStart(2,'0')}`,
      movieIndices:movieSchedule[screenIndex][slotIndex],
      screeningOptions:movieSchedule[screenIndex][slotIndex].map(movieIndex=>({
        languages:movies[movieIndex].languages,
        formats:availableFormats
      })),
      movieIndex:movieSchedule[screenIndex][slotIndex][0],
      occupancy:occupancyPattern[(theatreIndex*7+screenIndex*4+slotIndex)%occupancyPattern.length]
    }));
  }).flat();
}
const theatreDirectory = [
  {id:'CF-VJA-001',name:'PVR Ripples',city:'Vijayawada',area:'MG Road',screens:5,type:'Multiplex',logo:'PR',logoMark:'✦',logoColor:'#a9152e',logoAccent:'#ffd8df',featureProfile:'premium',specialty:'Premium recliners, late-night premieres and direct mall access',lat:16.5091,lon:80.6358,price:260,image:'https://images.unsplash.com/photo-1489599849927-2ee91cede3ba?auto=format&fit=crop&w=800&q=80'},
  {id:'CF-VJA-002',name:'Cinépolis · PVP Square',city:'Vijayawada',area:'M.G. Road',screens:6,type:'Multiplex',logo:'CP',logoMark:'◈',logoColor:'#174e8c',logoAccent:'#d3eaff',featureProfile:'immersive',specialty:'Immersive-format screens, premium loungers and mall dining',lat:16.4975,lon:80.6567,price:280,image:'https://images.unsplash.com/photo-1517604931442-7e0c8ed2963c?auto=format&fit=crop&w=800&q=80'},
  {id:'CF-VJA-003',name:'LEPL Icon',city:'Vijayawada',area:'Patamata',screens:6,type:'Multiplex',logo:'LI',logoMark:'⬡',logoColor:'#62349a',logoAccent:'#ebdcff',featureProfile:'multiplex',specialty:'Six-screen choice, reserved seats and quick Patamata access',lat:16.5005,lon:80.6667,price:250,image:'https://images.unsplash.com/photo-1478720568477-152d9b164e26?auto=format&fit=crop&w=800&q=80'},
  {id:'CF-VJA-004',name:'Alankar Theatre',city:'Vijayawada',area:'Gandhi Nagar',screens:1,type:'Single screen',logo:'AT',logoMark:'❖',logoColor:'#8b4c20',logoAccent:'#ffe0b7',featureProfile:'classic-recliner',specialty:'Classic single-screen atmosphere with a dedicated recliner row',lat:16.5194,lon:80.6268,price:150,image:'https://images.unsplash.com/photo-1440404653325-ab127d49abc1?auto=format&fit=crop&w=800&q=80'},
  {id:'CF-VJA-005',name:'Annapurna Theatre',city:'Vijayawada',area:'Governor Peta',screens:1,type:'Single screen',logo:'AN',logoMark:'✿',logoColor:'#277257',logoAccent:'#cff4df',featureProfile:'family',specialty:'Quiet family-friendly seating near Governor Peta',lat:16.5168,lon:80.6324,price:160,image:'https://images.unsplash.com/photo-1505685296765-3a2736de412f?auto=format&fit=crop&w=800&q=80'},
  {id:'CF-VJA-006',name:'Sailaja Theatre',city:'Vijayawada',area:'Bhavanipuram',screens:1,type:'Single screen',logo:'ST',logoMark:'➤',logoColor:'#3e698c',logoAccent:'#d7f0ff',featureProfile:'neighbourhood',specialty:'Neighbourhood value seats and convenient Bhavanipuram access',lat:16.5353,lon:80.6055,price:140,image:'https://images.unsplash.com/photo-1503095396549-807759245b35?auto=format&fit=crop&w=800&q=80'},
  {id:'CF-MGL-001',name:'Venkateswara Theatre',city:'Mangalagiri',area:'Mangalagiri town',screens:1,type:'Single screen',logo:'VM',logoMark:'ૐ',logoColor:'#a14a32',logoAccent:'#ffe1cf',featureProfile:'family',specialty:'Local family seating with an easy-to-reach town-centre location',lat:16.4304,lon:80.5682,price:140,image:'https://images.unsplash.com/photo-1478720568477-152d9b164e26?auto=format&fit=crop&w=800&q=80'},
  {id:'CF-MGL-002',name:'Vijaya Talkies',city:'Mangalagiri',area:'Mangalagiri town',screens:1,type:'Single screen',logo:'VT',logoMark:'✺',logoColor:'#a17c21',logoAccent:'#fff0b5',featureProfile:'telugu-classic',specialty:'Telugu-first programme in a familiar neighbourhood cinema',lat:16.4370,lon:80.5710,price:130,image:'https://images.unsplash.com/photo-1489599849927-2ee91cede3ba?auto=format&fit=crop&w=800&q=80'},
  {id:'CF-GNT-001',name:'PVR · Central Mall',city:'Guntur',area:'Lakshmipuram',screens:4,type:'Multiplex',logo:'PC',logoMark:'⬟',logoColor:'#35477f',logoAccent:'#dce5ff',featureProfile:'premium',specialty:'Four-screen mall cinema with dining and reserved seating',lat:16.3065,lon:80.4362,price:250,image:'https://images.unsplash.com/photo-1517604931442-7e0c8ed2963c?auto=format&fit=crop&w=800&q=80'},
  {id:'CF-GNT-002',name:'Harihar Cinemas',city:'Guntur',area:'Guntur',screens:2,type:'Multiplex',logo:'HC',logoMark:'❂',logoColor:'#1c776d',logoAccent:'#cdf3ea',featureProfile:'family-multiplex',specialty:'Two-screen programme with a relaxed family seating area',lat:16.3008,lon:80.4433,price:180,image:'https://images.unsplash.com/photo-1440404653325-ab127d49abc1?auto=format&fit=crop&w=800&q=80'},
  {id:'CF-GNT-003',name:'Naaz Theatre',city:'Guntur',area:'Guntur',screens:1,type:'Single screen',logo:'NT',logoMark:'✧',logoColor:'#a53856',logoAccent:'#ffdce6',featureProfile:'value-classic',specialty:'Traditional single-screen moviegoing with budget-friendly shows',lat:16.2996,lon:80.4495,price:150,image:'https://images.unsplash.com/photo-1505685296765-3a2736de412f?auto=format&fit=crop&w=800&q=80'},
  {id:'CF-GNT-004',name:'Gowri Shankar Theatre',city:'Guntur',area:'Guntur',screens:1,type:'Single screen',logo:'GS',logoMark:'✥',logoColor:'#6b5d2d',logoAccent:'#f4e9b9',featureProfile:'reserved-classic',specialty:'Reserved-seat neighbourhood screen near central Guntur',lat:16.3100,lon:80.4314,price:150,image:'https://images.unsplash.com/photo-1503095396549-807759245b35?auto=format&fit=crop&w=800&q=80'},
  {id:'CF-GNV-001',name:'Venkateswara Theatre',city:'Gannavaram',area:'Gannavaram',screens:1,type:'Single screen',logo:'VG',logoMark:'❋',logoColor:'#426546',logoAccent:'#ddf0ce',featureProfile:'family',specialty:'Small-town cinema experience with a relaxed family layout',lat:16.5405,lon:80.8025,price:130,image:'https://images.unsplash.com/photo-1478720568477-152d9b164e26?auto=format&fit=crop&w=800&q=80'}
];
const featureProfiles={
  premium:{screen:'Recliner seating · large-format screen · immersive surround audio',projector:'4K laser projection · HDR-ready profile',formats:['2D','3D','IMAX','Dolby Atmos']},
  immersive:{screen:'Immersive-format auditorium · premium seats · object-based audio',projector:'High-brightness laser projection · 3D-capable sample profile',formats:['2D','3D','IMAX','Dolby Atmos']},
  multiplex:{screen:'Reserved seating · digital surround audio · multiplex auditorium',projector:'Digital cinema projection · 2K/4K sample profile',formats:['2D','3D','Dolby Atmos']},
  'family-multiplex':{screen:'Family seating · compact multiplex auditorium · surround audio',projector:'Digital cinema projection · 2K sample profile',formats:['2D','3D','Dolby Atmos']},
  'classic-recliner':{screen:'Single-screen layout · dedicated recliner row',projector:'Digital cinema projection · standard 2K sample profile',formats:['2D','Dolby Atmos']},
  family:{screen:'Family seating · single-screen auditorium · clear sightlines',projector:'Digital cinema projection · standard 2K sample profile',formats:['2D','3D']},
  neighbourhood:{screen:'Neighbourhood single-screen layout · value seating',projector:'Digital cinema projection · standard 2K sample profile',formats:['2D']},
  'telugu-classic':{screen:'Classic single-screen layout · Telugu-first programme',projector:'Digital cinema projection · standard 2K sample profile',formats:['2D']},
  'value-classic':{screen:'Traditional single-screen layout · value seating',projector:'Digital cinema projection · standard 2K sample profile',formats:['2D']},
  'reserved-classic':{screen:'Single-screen auditorium · reserved seating layout',projector:'Digital cinema projection · standard 2K sample profile',formats:['2D','3D']}
};
const theatres=theatreDirectory.map((theatre,index)=>({...theatre,name:`${theatre.name} · ${theatre.city}`,distance:`${theatre.city}`,features:theatre.specialty,screenCount:theatre.screens,screenFeatures:featureProfiles[theatre.featureProfile].screen,projectorFeatures:featureProfiles[theatre.featureProfile].projector,formats:featureProfiles[theatre.featureProfile].formats,shows:createScreenShows(theatre.screens,theatre.price,index,featureProfiles[theatre.featureProfile].formats)}));

const snacks = [{name:'Popcorn',price:150,icon:'🍿'},{name:'Samosa',price:50,icon:'△'},{name:'Coke',price:70,icon:'🥤'},{name:'French fries',price:120,icon:'🍟'}];
const seatCapacity = 1000;
const ticketBookingLimit = 250;
const state = {movie:movies[0], theatre:null, show:null, date:0, language:'Telugu', format:'2D', seats:[], snacks:[0,0,0,0], step:1, bookings:[], bookingId:'', paymentMethod:'UPI',city:'Vijayawada',coords:null,located:false,selectedEvent:null,stadiumStand:null,stadiumSeats:[]};
const occupiedSeatCache = new Map();
const $ = s => document.querySelector(s); const $$ = s => [...document.querySelectorAll(s)];
const money = amount => `₹${amount.toLocaleString('en-IN')}`;
const makeBookingId = () => `CFLW-${Date.now().toString(36).toUpperCase()}-${Math.random().toString(36).slice(2,7).toUpperCase()}`;
function occupancyState(occupancy){ return occupancy>=1?{key:'full',label:'FULL',count:seatCapacity}:occupancy>=.75?{key:'high',label:'75% OCCUPIED',count:750}:occupancy>=.5?{key:'half',label:'50% OCCUPIED',count:500}:{key:'open',label:'OPEN',count:Math.round(occupancy*seatCapacity)}; }
function seededSeatNumber(index, seed){ let hash=seed; const value=`${seed}-${index}`; for(let i=0;i<value.length;i++) hash=((hash<<5)-hash)+value.charCodeAt(i)|0; return hash>>>0; }
function takenSeatsFor(theatreIndex, showIndex){ const cacheKey=`${theatreIndex}-${showIndex}-${state.date}`; if(occupiedSeatCache.has(cacheKey)) return occupiedSeatCache.get(cacheKey); const occupancy=theatres[theatreIndex].shows[showIndex].occupancy; const takeCount=Math.round(occupancy*seatCapacity); const picked=new Set([...Array(seatCapacity).keys()].sort((a,b)=>seededSeatNumber(a,cacheKey)-seededSeatNumber(b,cacheKey)).slice(0,takeCount)); occupiedSeatCache.set(cacheKey,picked); return picked; }

function posterMarkup(movie, className='movie-art') { return `<div class="${className}" style="background:${movie.color}"><img class="poster-image" src="${movie.poster}" alt="${movie.posterAlt}" loading="lazy" /><span class="poster-fade"></span><span class="poster-tag">${movie.tag}</span><span class="movie-symbol">${movie.symbol}</span><strong class="movie-title-art">${movie.short.replace('\n','<br>')}</strong></div>`; }
function posterImage(movie, className='small-poster-image'){return `<img class="${className}" src="${movie.poster}" alt="${movie.posterAlt}" loading="lazy" />`}
function formatDateOffset(days){const date=new Date();date.setDate(date.getDate()+days);return date.toLocaleDateString('en-IN',{weekday:'short',day:'2-digit',month:'short'})}
function distanceKm(a,b){const radians=value=>value*Math.PI/180;const dLat=radians(b.lat-a.lat),dLon=radians(b.lon-a.lon);const value=Math.sin(dLat/2)**2+Math.cos(radians(a.lat))*Math.cos(radians(b.lat))*Math.sin(dLon/2)**2;return 6371*2*Math.atan2(Math.sqrt(value),Math.sqrt(1-value))}
function currentCityCoords(){return state.coords||cities[state.city]}
function distanceLabel(theatre){return state.located?`${distanceKm(currentCityCoords(),theatre).toFixed(1)} km away`:`${theatre.area} · ${theatre.city}`}
function movieRatingMarkup(movie,className=''){const percentage=Math.round(movie.rating/5*100);return `<div class="movie-rating ${className}" role="img" aria-label="Demo rating ${movie.rating.toFixed(1)} out of 5; hype score ${movie.hype} out of 100"><span class="rating-stars" aria-hidden="true">★★★★★</span><span class="rating-track" aria-hidden="true"><i style="width:${percentage}%"></i></span><b>${movie.rating.toFixed(1)}</b><small>/ 5 · DEMO</small><span class="movie-hype">HYPE ${movie.hype}</span></div>`}
function renderFeatured(){ const movie=movies[0]; $('#featuredTitle').innerHTML=movie.title.replace(': ',':<br><em>')+(movie.title.includes(':')?'</em>':''); $('.hero-copy .hero-description').textContent=movie.synopsis; $('.meta-row').innerHTML=`<span>${movie.duration}</span><i></i><span>${movie.genre}</span><i></i><span>★ ${movie.rating.toFixed(1)} / 5 · demo</span>`; $('.book-featured').innerHTML=`Book ${movie.short.replace('\n',' ')} <span>→</span>`; $('.hero-poster').innerHTML=`<img src="${movie.poster}" alt="${movie.posterAlt}" />`; $('.hero').style.background=movie.color; }
let activeMovieFilter='All';
function renderMovies(filter='All'){
  activeMovieFilter=filter;
  const genres=[...new Set(movies.map(movie=>movie.genre))];
  $('#movieFilters').innerHTML=[['All','All'],...genres.map(genre=>[genre,genre])].map(([label,value])=>`<button class="filter ${activeMovieFilter===value?'active':''}" data-filter="${value}">${label}</button>`).join('');
  const filtered = activeMovieFilter==='All'?movies:movies.filter(m=>m.genre===activeMovieFilter);
  $('#movieGrid').innerHTML = filtered.map(m=>`<article class="movie-card" data-movie="${m.id}">${posterMarkup(m)}<h3>${m.title}</h3>${movieRatingMarkup(m)}<p>${m.genre} · ${m.duration}<span class="distance">${m.distance}</span></p></article>`).join('');
}
function renderEvents(region='All'){
  const filtered=region==='All'?events:events.filter(event=>event.region===region);
  $('#eventGrid').innerHTML=filtered.map(event=>`<article class="event-card"><div class="event-visual ${event.scene}" style="background-image:linear-gradient(180deg,rgba(4,8,16,.08),rgba(4,8,16,.68)),url('${event.image}')"><span class="event-region">LOCAL · DEMO FIXTURE</span><span class="event-sport">${event.icon} ${event.sport}</span><div class="stadium-lights"><i></i><i></i><i></i></div><span class="event-crowd">▰▰▰▰▰▰▰▰▰▰</span></div><div class="event-content"><p class="event-date">${formatDateOffset(event.date)} · ${event.time}</p><h3>${event.title}</h3><strong>${event.fixture}</strong><p class="event-venue">⌖ ${event.venue}<span>${event.city} · Sample stand inventory</span></p><button class="event-button" data-event="${event.id}">Book stadium seats <span>→</span></button></div></article>`).join('');
}
function renderTrending(){
  const picks=[
    ...movies.slice(0,3).map(movie=>({kind:'MOVIE',title:movie.title,detail:`Now showing · ${movie.genre}`,movieId:movie.id})),
    ...events.slice(0,3).map(event=>({kind:event.sport==='Cricket'?'MATCH':'EVENT',title:event.fixture,detail:`${event.city} · ${formatDateOffset(event.date)}`,eventId:event.id}))
  ];
  $('#trendingTrack').innerHTML=picks.map(item=>`<button class="trending-item" type="button" ${item.movieId?`data-trending-movie="${item.movieId}"`:`data-trending-event="${item.eventId}"`}><span class="trending-kind">${item.kind}</span><span class="trending-copy"><b>${item.title}</b><small>${item.detail}</small></span><span class="trending-arrow" aria-hidden="true">↗</span></button>`).join('');
}
function renderDates(){
  const dates=Array.from({length:4},(_,i)=>{const date=new Date();date.setDate(date.getDate()+i);return [i===0?'TODAY':date.toLocaleDateString('en-IN',{weekday:'short'}).toUpperCase(),date.toLocaleDateString('en-IN',{day:'2-digit',month:'short'}).toUpperCase()]});
  $('#datePicker').innerHTML=dates.map((d,i)=>`<button class="date-btn ${i===state.date?'active':''}" data-date="${i}"><span>${d[0]}</span>${d[1]}</button>`).join('');
}
function renderShowOptionFilters(){
  const screenings=theatres.filter(theatre=>theatre.city===state.city).flatMap(theatre=>theatre.shows.flatMap(show=>
    show.movieIndices[state.date]===movies.indexOf(state.movie)?[{...show.screeningOptions[state.date],formats:show.screeningOptions[state.date].formats.filter(format=>theatre.formats.includes(format))}]:[]
  ));
  const languages=[...new Set(screenings.flatMap(screening=>screening.languages))].sort();
  const formats=[...new Set(screenings.flatMap(screening=>screening.formats))].sort();
  if(!languages.includes(state.language))state.language=languages[0]||'';
  if(!formats.includes(state.format))state.format=formats.includes('2D')?'2D':formats[0]||'';
  $('#languageFilter').innerHTML=languages.map(language=>`<option value="${language}">${language}</option>`).join('');
  $('#formatFilter').innerHTML=formats.map(format=>`<option value="${format}">${format}</option>`).join('');
  $('#languageFilter').value=state.language;
  $('#formatFilter').value=state.format;
  $('#showOptionNote').textContent=screenings.length?'Choose a language and format. Screening choices and equipment compatibility are sample demo data.':'No language or format options are listed for this movie and date.';
}
function renderTheatres(){
  renderShowOptionFilters();
  const inCity=theatres.map((theatre,index)=>({theatre,index})).filter(item=>item.theatre.city===state.city).sort((a,b)=>{
    const assignedShows=({theatre})=>theatre.shows.filter(show=>movies[show.movieIndices[state.date]].id===state.movie.id).length;
    return assignedShows(b)-assignedShows(a)||b.theatre.screenCount-a.theatre.screenCount;
  });
  $('#theatreList').innerHTML=inCity.map(({theatre:t,index:ti})=>{
    const screenGroups=Array.from({length:t.screenCount},(_,screenIndex)=>{
      const screenName=`Screen ${String(screenIndex+1).padStart(2,'0')}`;
      const screenShows=t.shows.map((show,showIndex)=>({show,showIndex})).filter(item=>{
        if(item.show.screen!==screenName||movies[item.show.movieIndices[state.date]].id!==state.movie.id)return false;
        const option=item.show.screeningOptions[state.date];
        return option.languages.includes(state.language)&&option.formats.includes(state.format)&&t.formats.includes(state.format);
      });
      if(!screenShows.length)return '';
      return `<section class="auditorium-row"><div class="auditorium-label"><b>${screenName}</b><small>${t.type} · ${state.movie.title}</small><small class="equipment-detail"><span>SCREEN</span>${t.screenFeatures}</small><small class="equipment-detail"><span>PROJECTOR</span>${t.projectorFeatures}</small></div><div class="screen-shows">${screenShows.map(({show,showIndex})=>{const occupancy=occupancyState(show.occupancy);return `<button class="show-btn occupancy-${occupancy.key} ${state.theatre===ti&&state.show===showIndex?'active':''}" data-theatre="${ti}" data-show="${showIndex}" ${occupancy.key==='full'?'disabled':''}><span>${show.time}</span><b>${money(show.price)} · ${show.label}</b><small class="show-localization">${state.language} · ${state.format}</small><em>${occupancy.label} · ${occupancy.count}/${seatCapacity}</em></button>`}).join('')}</div></section>`;
    }).join('');
    if(!screenGroups)return '';
    const matchingShows=t.shows.filter(show=>movies[show.movieIndices[state.date]].id===state.movie.id&&show.screeningOptions[state.date].languages.includes(state.language)&&show.screeningOptions[state.date].formats.includes(state.format)&&t.formats.includes(state.format));
    const availableScreens=new Set(matchingShows.map(show=>show.screen)).size;
    return `<article class="theatre-item theatre-schedule" data-theatre-card="${ti}" data-theatre-id="${t.id}"><div class="theatre-top"><div><strong class="theatre-name"><span class="theatre-mini-logo" style="--logo-color:${t.logoColor};--logo-accent:${t.logoAccent}" aria-hidden="true">${t.logoMark} ${t.logo}</span>${t.name}</strong><p class="theatre-id">THEATRE ID · ${t.id}</p><div class="theatre-feature-list"><p class="theatre-features"><b>THEATRE</b>${t.features}</p><p class="theatre-features"><b>SCREEN</b>${t.screenFeatures}</p><p class="theatre-features"><b>PROJECTOR</b>${t.projectorFeatures}</p></div></div><span class="theatre-distance">⌖ ${distanceLabel(t)}<small>${availableScreens} screen${availableScreens===1?'':'s'} · ${matchingShows.length} sample show${matchingShows.length===1?'':'s'}</small></span></div><div class="all-screens-heading"><span>${state.movie.title}</span><small>Rotating demo programme · four-day schedule</small></div>${screenGroups}</article>`;
  }).join('')||`<p class="directory-empty">No sample ${state.movie.title} screenings in ${state.city} on this date. Try another date in the four-day schedule.</p>`;
}
function renderTheatreDirectory(){
  const local=theatreDirectory.filter(theatre=>theatre.city===state.city);
  const ordered=state.located?local.sort((a,b)=>distanceKm(currentCityCoords(),a)-distanceKm(currentCityCoords(),b)):local;
  $('#nearbyTheatreGrid').innerHTML=ordered.map(theatre=>{const index=theatreDirectory.indexOf(theatre),profile=featureProfiles[theatre.featureProfile];return `<article class="directory-card" data-theatre-id="${theatre.id}"><div class="directory-image" style="background-image:linear-gradient(180deg,transparent,#090909b8),url('${theatre.image}')"><span>${theatre.type}</span><b>${theatre.screens} ${theatre.screens===1?'screen':'screens'}</b><div class="theatre-logo" style="--logo-color:${theatre.logoColor};--logo-accent:${theatre.logoAccent}" role="img" aria-label="${theatre.name} demo logo"><span>${theatre.logoMark}</span><b>${theatre.logo}</b></div></div><div class="directory-copy"><p class="directory-identity"><span>THEATRE ID</span><b>${theatre.id}</b></p><p class="directory-area">⌖ ${distanceLabel(theatre)}</p><h3>${theatre.name}</h3><div class="directory-feature-list"><p><b>THEATRE FEATURES</b>${theatre.specialty}</p><p><b>SCREEN FEATURES</b>${profile.screen}</p><p><b>PROJECTOR FEATURES</b>${profile.projector}</p></div><button class="event-button theatre-open-button" data-open-theatre="${index}">Browse sample shows <span>→</span></button></div></article>`}).join('')||'<p class="directory-empty">No demo theatres are listed for this city yet.</p>';
  $('#locationName').textContent=state.city;
}
function isReclinerSeat(seatId){ return seatId.startsWith('T'); }
function seatPrice(seatId){ if(state.show===null)return 0; const base=theatres[state.theatre].shows[state.show].price; return isReclinerSeat(seatId)?base+300:base; }
function renderSeats(){
  if(state.theatre===null||state.show===null){$('#seatMap').innerHTML='';$('#seatMood').className='seat-mood';$('#seatMood').innerHTML='';return}
  const show=theatres[state.theatre].shows[state.show]; const occupancy=occupancyState(show.occupancy); const taken=takenSeatsFor(state.theatre,state.show); const rows=Array.from({length:20},(_,i)=>String.fromCharCode(65+i)); let html='';
  const mood=$('#seatMood'); const seatWrap=$('#seatMap').closest('.seat-map-wrap'); mood.className=`seat-mood ${state.movie.id==='paradise'?'paradise-crowd':''}`; mood.innerHTML=state.movie.id==='paradise'?'<span class="paradise-title">THE PARADISE · CROWD VIEW</span><span class="crowd-layer crowd-back">♟ ♟ ♟ ♟ ♟ ♟ ♟ ♟ ♟ ♟ ♟ ♟ ♟</span><span class="crowd-layer crowd-front">♟ ♟ ♟ ♟ ♟ ♟ ♟ ♟ ♟ ♟ ♟</span>':''; seatWrap.classList.toggle('paradise-seat-map',state.movie.id==='paradise');
  html='<span class="seat-map-corner">ROW</span>'+Array.from({length:50},(_,index)=>`<span class="seat-column-heading">${String(index+1).padStart(2,'0')}</span>`).join('');
  rows.forEach((row,rowIndex)=>{html+=`<span class="row-label ${rowIndex===19?'recliner-label':''}" aria-label="Row ${rowIndex===19?'T recliner':row}">${rowIndex===19?'T · R':row}</span>`;for(let c=1;c<=50;c++){const id=`${row}${String(c).padStart(2,'0')}`;const index=rowIndex*50+(c-1);const blocked=taken.has(index);const selected=state.seats.includes(id);const recliner=rowIndex===19?'recliner':'';html+=`<button class="seat ${recliner} ${blocked?`occupied occupancy-${occupancy.key}`:selected?'selected':'available'}" ${blocked?'disabled':''} data-seat="${id}" aria-label="${recliner?'Recliner ':''}row ${rowIndex===19?'T':row}, seat ${String(c).padStart(2,'0')} ${blocked?'already booked':'available'}" title="${recliner?'Recliner ':''}seat ${id}${recliner?` · ${money(seatPrice(id))}`:''}">${c}</button>`}});
  $('#seatMap').innerHTML=html;
  $('#seatInstruction').textContent=`${occupancy.count.toLocaleString('en-IN')} of ${seatCapacity.toLocaleString('en-IN')} seats are already booked. Choose a row from the left column (T is recliner); select up to ${ticketBookingLimit} seats.`;
}
function toggleSeatSelection(id){
  if(state.seats.includes(id)){
    state.seats=state.seats.filter(seat=>seat!==id);
    return 'removed';
  }
  if(state.seats.length>=ticketBookingLimit)return 'limit';
  state.seats.push(id);
  return 'added';
}
function selectSeatsByCode(value){
  const codes=value.trim().split(/[,\s;]+/).filter(Boolean);
  if(!codes.length){
    $('#seatEntryStatus').textContent='Enter one or more seat references, such as A01, A02, B04.';
    return;
  }
  const requested=new Set();
  for(const code of codes){
    const match=code.match(/^([A-T])0?([1-9]|[1-4]\d|50)$/i);
    if(!match){
      $('#seatEntryStatus').textContent=`"${code}" is not a valid seat. Use references like A01, G12 or T50.`;
      return;
    }
    requested.add(`${match[1].toUpperCase()}${match[2].padStart(2,'0')}`);
  }
  const additions=[...requested].filter(id=>!state.seats.includes(id));
  for(const id of additions){
    const seat=$(`#seatMap [data-seat="${id}"]`);
    if(!seat||seat.classList.contains('occupied')){
      $('#seatEntryStatus').textContent=`Seat ${id} is unavailable. No seats from this entry were added.`;
      return;
    }
  }
  if(state.seats.length+additions.length>ticketBookingLimit){
    $('#seatEntryStatus').textContent=`This would exceed the ${ticketBookingLimit}-seat booking limit. No seats from this entry were added.`;
    return;
  }
  if(!additions.length){
    $('#seatEntryStatus').textContent='All entered seats are already selected on the map.';
    return;
  }
  state.seats.push(...additions);
  $('#seatEntryStatus').textContent=`${additions.length} seat${additions.length===1?'':'s'} selected and highlighted: ${additions.join(', ')}.`;
  $('#seatCodeInput').value='';
  $('#paymentConsent').checked=false;
  renderSeats();
  renderSummary();
}
function renderSnacks(){
  $('#snackGrid').innerHTML=snacks.map((s,i)=>`<article class="snack-card"><span class="snack-icon">${s.icon}</span><div><h4>${s.name}</h4><p>${money(s.price)}</p></div><div class="quantity"><button data-snack="${i}" data-change="-1" aria-label="Remove ${s.name}">−</button><b>${state.snacks[i]}</b><button data-snack="${i}" data-change="1" aria-label="Add ${s.name}">+</button></div></article>`).join('');
}
function ticketTotal(){return state.seats.reduce((sum,seat)=>sum+seatPrice(seat),0)}
function snackTotal(){return state.snacks.reduce((sum,q,i)=>sum+q*snacks[i].price,0)}
function currentDate(){return formatDateOffset(state.date)}
function renderSummary(){
  $('#summaryMovie').textContent=state.movie.title; $('#summaryPoster').innerHTML=posterImage(state.movie);
  const selectedShow=state.show===null?null:theatres[state.theatre].shows[state.show];
  const meta=selectedShow===null?'Choose a show':`${theatres[state.theatre].name} · ${selectedShow.screen} · ${selectedShow.time} · ${state.language} · ${state.format}`;
  $('#summaryMeta').textContent=meta;
  let lines=[];
  if(state.show!==null){const base=theatres[state.theatre].shows[state.show].price;const standard=state.seats.filter(seat=>!isReclinerSeat(seat));const recliners=state.seats.filter(isReclinerSeat);const seatDetails=[standard.length?`${standard.length} standard × ${money(base)}`:'',recliners.length?`${recliners.length} recliner × ${money(base+300)}`:''].filter(Boolean).join(' · ');lines.push(`<div class="summary-line"><span>Tickets <small>${seatDetails||'Select your seats'}</small></span><b>${money(ticketTotal())}</b></div>`)}
  state.snacks.forEach((q,i)=>{if(q)lines.push(`<div class="summary-line"><span>${snacks[i].name} <small>${q} × ${money(snacks[i].price)}</small></span><b>${money(q*snacks[i].price)}</b></div>`)});
  $('#summaryLines').innerHTML=lines.length?lines.join(''):'<p class="empty-summary">Select a show to see your total.</p>';
  $('#totalAmount').textContent=money(ticketTotal()+snackTotal());
}
function updateModalMovie(){
  const palette=state.movie.palette||movies[0].palette;
  const modal=$('#bookingModal');
  modal.style.setProperty('--movie-accent',palette.accent);
  modal.style.setProperty('--movie-strong',palette.strong);
  modal.style.setProperty('--movie-soft',palette.soft);
  modal.style.setProperty('--movie-glow',palette.glow);
  modal.style.setProperty('--movie-on-accent',palette.onAccent);
  $('#miniPoster').innerHTML=posterImage(state.movie);
  $('#modalTitle').textContent=state.movie.title; $('#movieFacts').textContent=`${state.movie.genre} · ${state.movie.duration} · ★ ${state.movie.rating.toFixed(1)} demo`;
  $('#movieInfo').innerHTML=`<div class="movie-info-poster">${posterImage(state.movie,'info-poster-image')}</div><div class="movie-info-copy"><p class="eyebrow">NOW PLAYING IN VIJAYAWADA · DEMO SCORES</p>${movieRatingMarkup(state.movie,'movie-rating-detail')}<p class="movie-synopsis">${state.movie.synopsis}</p><div class="movie-credits"><span><b>LANGUAGE / VERSION</b>${state.movie.languages.join(' · ')} · sample choices</span><span><b>FORMAT</b>${state.movie.formats.join(' · ')} · availability varies by theatre</span></div></div>`;
  renderSummary();
}
function setStep(step){
  state.step=step; $$('.booking-step').forEach(p=>p.classList.toggle('hidden',+p.dataset.pane!==step));
  $$('.step').forEach(s=>s.classList.toggle('active',+s.dataset.step===step));
  $('#backButton').style.visibility=step===1?'hidden':'visible';
  $('#nextButton').innerHTML=step===5?'Close pass <span>×</span>':step===4?`Confirm demo booking · ${money(ticketTotal()+snackTotal())} <span>→</span>`:step===3?'Review demo booking <span>→</span>':'Continue <span>→</span>';
  if(step===4) renderPayment();
  if(step===5) preparePass();
}
function resetBooking(){state.theatre=null;state.show=null;state.date=0;state.language=state.movie.languages[0];state.format='2D';state.seats=[];state.snacks=[0,0,0,0];state.bookingId='';state.paymentMethod='UPI';$('#seatCodeInput').value='';$('#seatEntryStatus').textContent='Enter multiple seat references separated by commas, such as A01, A02, B04.';$('#printedTicket').checked=false;$('#paymentConsent').checked=false;$('#deliveryAddress').value='';$('#addressField').classList.add('hidden');renderDates();renderTheatres();renderSeats();renderSnacks();renderSummary();setStep(1)}
function openBooking(id,theatreIndex=null){state.movie=movies.find(m=>m.id===id)||movies[0];resetBooking();updateModalMovie();$('#modalBackdrop').classList.remove('hidden');document.body.style.overflow='hidden';if(theatreIndex!==null)setTimeout(()=>document.querySelector(`[data-theatre-card="${theatreIndex}"]`)?.scrollIntoView({behavior:'smooth',block:'center'}),80)}
function closeBooking(){ $('#modalBackdrop').classList.add('hidden');document.body.style.overflow=$('#stadiumBackdrop').classList.contains('hidden')?'':'hidden'; }
function toast(message){const box=$('#toast');box.textContent=message;box.classList.remove('hidden');setTimeout(()=>box.classList.add('hidden'),2700)}
function makeQR(seed){const qr=$('#qrCode');let value=[...seed].reduce((a,c)=>a+c.charCodeAt(0),0);let cells='';for(let i=0;i<121;i++){const row=Math.floor(i/11),col=i%11;const finder=(row<3&&col<3)||(row<3&&col>7)||(row>7&&col<3);let dark;if(finder){dark=(row%2===0||col%2===0)||(row===1&&col===1)}else{value=(value*9301+49297)%233280;dark=value/233280>.52}cells+=`<i class="qr-cell ${dark?'dark':''}"></i>`}qr.innerHTML=cells}
function preparePass(){
  const booking=state.bookingId;const theatre=theatres[state.theatre]; const show=theatre.shows[state.show];
  const gmailValue=$('#userId').value.trim();
  $('#confirmationEmail').textContent=gmailValue || 'your email'; $('#passMovie').textContent=state.movie.title;$('#passTheatre').textContent=`${theatre.name} · ${theatre.id} · ${show.screen}`;$('#passScreeningOptions').textContent=`${state.language} · ${state.format}`;$('#passTime').textContent=`${currentDate()} · ${show.time}`;$('#passSeats').textContent=state.seats.join(', ');$('#bookingId').textContent=booking;makeQR(`${booking}-${state.seats.join('')}-${state.movie.id}-${state.language}-${state.format}`);
}
function renderPayment(){ const theatre=theatres[state.theatre];$('#paymentAgency').textContent=`${theatre.name} · ${theatre.id}`;$('#paymentReference').textContent=state.bookingId;$('#paymentTotal').textContent=money(ticketTotal()+snackTotal());$$('.payment-method').forEach(card=>card.classList.toggle('selected',card.querySelector('input').value===state.paymentMethod)); }
function validateStep(){
 if(state.step===1&&!state.theatre){toast('Choose a theatre and showtime first.');return false}
 if(state.step===2&&!state.seats.length){toast('Select at least one seat to continue.');return false}
 if(state.step===4&&$('#printedTicket').checked&&!$('#deliveryAddress').value.trim()){toast('Enter an address for your printed-ticket delivery.');return false}
 if(state.step===4&&!$('#paymentConsent').checked){toast('Please confirm the demo booking before continuing.');return false}
 return true;
}
const stadiumStands=[{id:'west',name:'West stand',detail:'Covered · pavilion side',price:1800},{id:'east',name:'East stand',detail:'Open air · lively crowd',price:950},{id:'north',name:'North gallery',detail:'Best-value match view',price:450}];
function stadiumSeatIsTaken(seatIndex){let hash=0;const key=`${state.selectedEvent.id}-${state.stadiumStand}-${seatIndex}`;for(let i=0;i<key.length;i++)hash=((hash<<5)-hash+key.charCodeAt(i)|0);return Math.abs(hash%100)<19}
function renderStadiumSeats(){const stand=stadiumStands.find(item=>item.id===state.stadiumStand);if(!stand){$('#stadiumSeatMap').innerHTML='<p class="stadium-empty">Select a stand above to view seats.</p>';updateStadiumTotal();return}const rows=['A','B','C','D','E','F','G','H'];$('#stadiumSeatMap').innerHTML=`<div class="stadium-seat-map-title"><b>${stand.name}</b><span>${money(stand.price)} per seat · demo availability</span></div><div class="stadium-seats">${rows.map((row,rowIndex)=>`<div class="stadium-seat-row"><b class="stadium-row-label">${row}</b><div class="stadium-seat-cells">${Array.from({length:12},(_,seatIndex)=>{const seatId=`${stand.id.toUpperCase()}-${row}${String(seatIndex+1).padStart(2,'0')}`;const taken=stadiumSeatIsTaken(rowIndex*12+seatIndex);const selected=state.stadiumSeats.includes(seatId);return `<button class="stadium-seat ${taken?'taken':selected?'selected':'available'}" type="button" data-stadium-seat="${seatId}" ${taken?'disabled':''} aria-label="${stand.name} seat ${row}${seatIndex+1} ${taken?'taken':selected?'selected':'available'}" title="${taken?'Taken':`${row}${seatIndex+1} · ${money(stand.price)}`}">${seatIndex+1}</button>`}).join('')}</div></div>`).join('')}</div>`;updateStadiumTotal()}
function updateStadiumTotal(){const stand=stadiumStands.find(item=>item.id===state.stadiumStand);$('#stadiumSelection').textContent=stand&&state.stadiumSeats.length?`${state.stadiumSeats.length} seats · ${stand.name}`:'Select seats to see total';$('#stadiumTotal').textContent=stand?money(stand.price*state.stadiumSeats.length):money(0)}
function openStadiumBooking(eventId){state.selectedEvent=events.find(item=>item.id===eventId);if(!state.selectedEvent)return;state.stadiumStand=null;state.stadiumSeats=[];$('#stadiumConsent').checked=false;$('#stadiumTitle').textContent=state.selectedEvent.title;$('#stadiumFixture').textContent=state.selectedEvent.fixture;$('#stadiumVenue').textContent=`${state.selectedEvent.venue} · ${state.selectedEvent.city} · ${formatDateOffset(state.selectedEvent.date)} · ${state.selectedEvent.time}`;$('#stadiumBookingHero').style.backgroundImage=`linear-gradient(105deg,rgba(5,9,12,.91),rgba(5,9,12,.36)),url('${state.selectedEvent.image}')`;$('#stadiumStandTabs').innerHTML=stadiumStands.map(stand=>`<button type="button" class="stadium-stand-tab" data-stand="${stand.id}"><b>${stand.name}</b><span>${stand.detail}</span><strong>${money(stand.price)} <small>/ seat</small></strong></button>`).join('');$$('.stadium-stand-tab').forEach(button=>button.classList.toggle('selected',button.dataset.stand===state.stadiumStand));renderStadiumSeats();$('#stadiumBackdrop').classList.remove('hidden');document.body.style.overflow='hidden'}
function selectStadiumStand(id){if(state.stadiumStand!==id){state.stadiumStand=id;state.stadiumSeats=[];$('#stadiumConsent').checked=false}$$('.stadium-stand-tab').forEach(button=>button.classList.toggle('selected',button.dataset.stand===id));renderStadiumSeats()}
function closeStadiumBooking(){$('#stadiumBackdrop').classList.add('hidden');document.body.style.overflow=$('#modalBackdrop').classList.contains('hidden')?'':'hidden'}
function closestCity(coords){return Object.keys(cities).sort((a,b)=>distanceKm(coords,cities[a])-distanceKm(coords,cities[b]))[0]}
function requestLocation(){
  if(!navigator.geolocation){$('#locationStatus').textContent='Location unavailable · choose city';toast('Location is unavailable. Choose your city from the theatre directory.');return}
  if(!window.confirm('Allow CineFlow to use your device location to sort the demo theatre directory? Your location is only used in this browser session.'))return;
  $('#locationStatus').textContent='Waiting for browser permission…';
  navigator.geolocation.getCurrentPosition(position=>{state.coords={lat:position.coords.latitude,lon:position.coords.longitude};state.city=closestCity(state.coords);state.located=true;$('#citySelect').value=state.city;$('#locationStatus').textContent='Nearby sort enabled';renderTheatreDirectory();renderTheatres();toast(`Showing demo cinemas nearest to ${state.city}.`)},error=>{state.located=false;state.coords=null;$('#locationStatus').textContent='Choose city manually';renderTheatreDirectory();const message=error.code===1?'Location permission was denied. Choose a city manually.':'Could not get your location. Choose a city manually.';toast(message)},{enableHighAccuracy:false,timeout:10000,maximumAge:300000})
}

$('#todayLabel').textContent=new Date().toLocaleDateString('en-IN',{weekday:'long',day:'2-digit',month:'long'}).toUpperCase();
renderMovies(); renderFeatured(); renderEvents(); renderTrending(); renderDates(); renderTheatres(); renderTheatreDirectory(); renderSeats(); renderSnacks();
$('#loginForm').addEventListener('submit',e=>{e.preventDefault();const email=$('#userId').value.trim();const localPart=(email.split('@')[0]||'cinema').replace(/[._-]+/g,' ');const name=(localPart.split(/\s+/)[0]||'cinema').replace(/^./,c=>c.toUpperCase());$('#userName').textContent=name||'cinema lover';$('#avatar').textContent=(email.slice(0,2)||'CL').toUpperCase();$('#loginView').classList.add('hidden');$('#dashboard').classList.remove('hidden');toast(`Welcome, ${name}! Your booking desk is ready.`)});
$('#signOut').addEventListener('click',()=>{closeBooking();closeStadiumBooking();$('#dashboard').classList.add('hidden');$('#loginView').classList.remove('hidden');$('#loginForm').reset();$('.sidebar').classList.remove('open')});
$('#movieGrid').addEventListener('click',e=>{const card=e.target.closest('.movie-card');if(card)openBooking(card.dataset.movie)});
$('.book-featured').addEventListener('click',()=>openBooking(movies[0].id));
$('#movieFilters').addEventListener('click',event=>{const button=event.target.closest('[data-filter]');if(button)renderMovies(button.dataset.filter)});
$$('.event-filter').forEach(btn=>btn.addEventListener('click',()=>{$$('.event-filter').forEach(b=>b.classList.remove('active'));btn.classList.add('active');renderEvents(btn.dataset.region)}));
$('#eventGrid').addEventListener('click',event=>{const button=event.target.closest('.event-button');if(button)openStadiumBooking(button.dataset.event)});
$('#trendingTrack').addEventListener('click',event=>{const movie=event.target.closest('[data-trending-movie]');const match=event.target.closest('[data-trending-event]');if(movie)openBooking(movie.dataset.trendingMovie);else if(match)openStadiumBooking(match.dataset.trendingEvent)});
$('#nearbyTheatreGrid').addEventListener('click',event=>{const button=event.target.closest('[data-open-theatre]');if(button)openBooking(movies[0].id,+button.dataset.openTheatre)});
$('#citySelect').addEventListener('change',event=>{state.city=event.target.value;state.coords=null;state.located=false;$('#locationStatus').textContent='City selected manually';renderTheatreDirectory();renderTheatres()});
$('#datePicker').addEventListener('click',e=>{const btn=e.target.closest('.date-btn');if(!btn)return;state.date=+btn.dataset.date;renderDates();renderTheatres();renderSummary()});
$('#languageFilter').addEventListener('change',event=>{state.language=event.target.value;renderTheatres()});
$('#formatFilter').addEventListener('change',event=>{state.format=event.target.value;renderTheatres()});
$('#theatreList').addEventListener('click',e=>{const btn=e.target.closest('.show-btn');if(!btn||btn.disabled)return;state.theatre=+btn.dataset.theatre;state.show=+btn.dataset.show;state.seats=[];state.snacks=[0,0,0,0];state.bookingId=makeBookingId();$('#paymentConsent').checked=false;renderTheatres();renderSeats();renderSnacks();renderSummary();$('#reservationId').textContent=state.bookingId;setStep(2);});
$('#seatMap').addEventListener('click',e=>{const seat=e.target.closest('.seat.available,.seat.selected');if(!seat)return;const result=toggleSeatSelection(seat.dataset.seat);if(result==='limit'){toast(`You can select up to ${ticketBookingLimit} seats per booking.`);return}$('#seatEntryStatus').textContent=`${seat.dataset.seat} ${result==='added'?'selected':'removed'} ${result==='added'?'and highlighted on the map.':'from your selection.'}`;$('#paymentConsent').checked=false;renderSeats();renderSummary()});
$('#seatQuickSelect').addEventListener('submit',event=>{event.preventDefault();selectSeatsByCode($('#seatCodeInput').value);});
$('#snackGrid').addEventListener('click',e=>{const btn=e.target.closest('[data-snack]');if(!btn)return;const i=+btn.dataset.snack;state.snacks[i]=Math.max(0,state.snacks[i]+ +btn.dataset.change);$('#paymentConsent').checked=false;renderSnacks();renderSummary()});
$('#nextButton').addEventListener('click',()=>{if(state.step===5){closeBooking();toast('Your sample cinema pass remains in My tickets.');return}if(!validateStep())return;if(state.step===4){state.bookings.push({movie:state.movie.title,seats:[...state.seats],id:state.bookingId,city:state.city,type:'Cinema demo'});$('#ticketCount').textContent=state.bookings.length;toast('Demo booking confirmed — no payment was made.')}setStep(state.step+1)});
$('#backButton').addEventListener('click',()=>{if(state.step>1)setStep(state.step-1)});$('#modalClose').addEventListener('click',closeBooking);$('#modalBackdrop').addEventListener('click',e=>{if(e.target===$('#modalBackdrop'))closeBooking()});
$('#clearSelection').addEventListener('click',()=>{state.theatre=null;state.show=null;state.seats=[];state.snacks=[0,0,0,0];$('#paymentConsent').checked=false;renderTheatres();renderSeats();renderSnacks();renderSummary();toast('Your booking choices were cleared.')});
$('#paymentMethods').addEventListener('change',e=>{if(!e.target.matches('input[name="payment"]'))return;state.paymentMethod=e.target.value;renderPayment()});
$('#printedTicket').addEventListener('change',e=>$('#addressField').classList.toggle('hidden',!e.target.checked));
$('#dismissNotice').addEventListener('click',()=>$('.notice-bar').classList.add('hidden'));
$('#locationButton').addEventListener('click',requestLocation);
$('#mobileMenu').addEventListener('click',()=>$('.sidebar').classList.toggle('open'));$$('.nav-link').forEach(link=>link.addEventListener('click',()=>$('.sidebar').classList.remove('open')));
$('#showTickets').addEventListener('click',()=>state.bookings.length?toast(`You have ${state.bookings.length} saved cinema pass${state.bookings.length===1?'':'es'}.`):toast('Your booked cinema passes will appear here.'));
$('#stadiumClose').addEventListener('click',closeStadiumBooking);$('#stadiumBackdrop').addEventListener('click',event=>{if(event.target===$('#stadiumBackdrop'))closeStadiumBooking()});
$('#stadiumStandTabs').addEventListener('click',event=>{const button=event.target.closest('[data-stand]');if(button)selectStadiumStand(button.dataset.stand)});
$('#stadiumSeatMap').addEventListener('click',event=>{const button=event.target.closest('[data-stadium-seat]');if(!button||button.disabled)return;const seat=button.dataset.stadiumSeat;$('#stadiumConsent').checked=false;if(state.stadiumSeats.includes(seat))state.stadiumSeats=state.stadiumSeats.filter(item=>item!==seat);else if(state.stadiumSeats.length>=8){toast('Choose up to 8 stadium seats.');return}else state.stadiumSeats.push(seat);renderStadiumSeats()});
$('#stadiumBookButton').addEventListener('click',()=>{if(!state.stadiumStand||!state.stadiumSeats.length){toast('Choose a stand and at least one available seat.');return}if(!$('#stadiumConsent').checked){toast('Please confirm this sample match booking.');return}state.bookings.push({movie:state.selectedEvent.title,seats:[...state.stadiumSeats],id:makeBookingId(),city:state.selectedEvent.city,type:'Stadium demo'});$('#ticketCount').textContent=state.bookings.length;closeStadiumBooking();toast('Sample stadium pass saved. No payment was made.')});
