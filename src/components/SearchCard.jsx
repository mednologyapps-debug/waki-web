import { Clock3, MapPin, Search } from 'lucide-react'
import { useState } from 'react'

export default function SearchCard() {
  const [zone, setZone] = useState('')
  const [duration, setDuration] = useState('4 horas')
  const [message, setMessage] = useState('')

  const handleSearch = (event) => {
    event.preventDefault()
    setMessage(
      zone.trim()
        ? 'Muy pronto podrás ver disponibilidad real desde la web. Mientras tanto, continúa desde la app WAKI.'
        : 'Cuéntanos por dónde quieres escaparte.'
    )
  }

  return (
    <div className="search-wrap">
      <form className="search-card" onSubmit={handleSearch}>
        <label className="search-field location-field">
          <span><MapPin size={16} /> ¿Por dónde nos escapamos?</span>
          <input
            value={zone}
            onChange={(e) => setZone(e.target.value)}
            placeholder="Miraflores, Barranco, Lince..."
            aria-label="Destino o zona"
          />
        </label>

        <label className="search-field compact-field">
          <span><Clock3 size={16} /> Tiempo</span>
          <select value={duration} onChange={(e) => setDuration(e.target.value)} aria-label="Duración">
            <option>3 horas</option>
            <option>4 horas</option>
            <option>6 horas</option>
            <option>12 horas</option>
          </select>
        </label>

        <button className="btn btn-primary search-button" type="submit">
          <Search size={18} />
          Buscar
        </button>
      </form>

      {message && <p className="search-message">{message}</p>}
    </div>
  )
}
