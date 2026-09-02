import { CalendarDays, Clock3, MapPin, Search } from 'lucide-react'
import { useState } from 'react'

export default function SearchCard() {
  const [zone, setZone] = useState('')
  const [date, setDate] = useState('')
  const [time, setTime] = useState('')
  const [message, setMessage] = useState('')

  const handleSearch = (e) => {
    e.preventDefault()
    setMessage(
      zone || date || time
        ? 'El buscador se conectará a la disponibilidad real cuando integremos Supabase.'
        : 'Ingresa una zona, fecha u hora para buscar.'
    )
  }

  return (
    <div className="search-wrap">
      <form className="search-card" onSubmit={handleSearch}>
        <label className="search-field">
          <span><MapPin size={18} /> Destino o zona</span>
          <input value={zone} onChange={(e) => setZone(e.target.value)} placeholder="Miraflores, Lince..." />
        </label>

        <label className="search-field">
          <span><CalendarDays size={18} /> Fecha</span>
          <input type="date" value={date} onChange={(e) => setDate(e.target.value)} />
        </label>

        <label className="search-field">
          <span><Clock3 size={18} /> Hora</span>
          <input type="time" value={time} onChange={(e) => setTime(e.target.value)} />
        </label>

        <button className="btn btn-primary search-button" type="submit">
          <Search size={18} /> Buscar hotel
        </button>
      </form>
      {message && <p className="search-message">{message}</p>}
    </div>
  )
}
