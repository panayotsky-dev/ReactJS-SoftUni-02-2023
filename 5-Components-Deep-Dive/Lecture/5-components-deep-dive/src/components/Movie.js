

export default function Movie({title,year,plot,posterUrl}) {
  return (
    <article>
        <h3>{title},{year}</h3>
        <main>
            <img src={posterUrl} alt={title}/>
            <p>{plot}</p>
        </main>
        
    </article>
  )
}

