import { MapPin, CalendarDays, Clock3, Search } from 'lucide-react'
import { bookingUrl } from '../config'
export default function HeroSearch(){
 function search(e){e.preventDefault();const data=new FormData(e.currentTarget);const destination=new URL(bookingUrl);for(const [key,value] of data.entries())if(value)destination.searchParams.set(key,value);window.location.assign(destination.href)}
 const today=new Date();const minDate=`${today.getFullYear()}-${String(today.getMonth()+1).padStart(2,'0')}-${String(today.getDate()).padStart(2,'0')}`
 return <div className="hero-search-shell"><span className="mobile-search-mascot" aria-hidden="true"><img src="/brand/llama-peek.webp" alt="" width="160" height="180"/></span><form className="hero-search" onSubmit={search} aria-label="Buscador rápido de hoteles"><label><span><MapPin size={15}/>Destino</span><input name="district" placeholder="¿A dónde vas?" aria-label="Distrito o zona" maxLength="100"/></label><label><span><CalendarDays size={15}/>Fecha</span><input type="date" name="date" aria-label="Fecha de llegada" min={minDate} defaultValue={minDate}/></label><label><span><Clock3 size={15}/>Horario</span><input type="time" name="time" aria-label="Horario de llegada"/></label><button type="submit" className="btn btn-primary"><Search size={18}/>Buscar</button></form></div>
}
