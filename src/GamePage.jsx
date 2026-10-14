import { useEffect, useState } from 'react'

function GamePage({ game, onBack }) {
  const [details, setDetails] = useState(null)
  const [error, setError] = useState('')
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    if (!game?.id) {
      return
    }
    const controller = new AbortController()

    fetch(`http://localhost:8080/game_detail?gameId=${encodeURIComponent(game.id)}`, {
      signal: controller.signal,
    })
      .then((response) => {
        if (!response.ok) {
          throw new Error(`Request failed: ${response.status}`)
        }
        return response.json()
      })
      .then((data) => {
        if (!Array.isArray(data) || !data.length) {
          throw new Error('No details found for this game.')
        }
        setDetails(data[0])
      })
      .catch((fetchError) => {
        if (fetchError.name !== 'AbortError') {
          setError(fetchError.message)
        }
      })
      .finally(() => {
        if (!controller.signal.aborted) {
          setLoading(false)
        }
      })

    return () => controller.abort()
  }, [game?.id])

  const missingGameId = !game?.id
  const displayedGame = details ?? game
  const landscapeImage = displayedGame?.artworks?.[0]
    ?? displayedGame?.screenshots?.[0]
  const imageId = landscapeImage?.image_id ?? displayedGame?.cover?.image_id
  const heroImageUrl = imageId
    ? `https://images.igdb.com/igdb/image/upload/t_original/${imageId}.jpg`
    : '/placeholder.png'

  return (
    <main className="game-page relative flex min-h-screen items-end overflow-hidden bg-slate-950 text-white">
      <img
        src={heroImageUrl}
        alt=""
        aria-hidden="true"
        className="absolute inset-0 h-full w-full object-cover"
      />
      <div
        aria-hidden="true"
        className="absolute inset-0 bg-linear-to-t from-black via-black/50 to-black/10"
      />
      <button
        type="button"
        onClick={onBack}
        className="absolute left-6 top-6 z-20 rounded bg-white/15 px-4 py-2 backdrop-blur transition hover:bg-white/25 sm:left-10 sm:top-10 cursor-pointer"
      >
        Back
      </button>
      <section className="relative z-10 w-full p-6 pt-24 sm:p-10 sm:pt-28 lg:p-16 lg:pt-32">
        <h1 className="mb-4 text-4xl font-bold sm:text-6xl">
          {displayedGame?.name ?? 'Game details'}
        </h1>
        {loading && !missingGameId && <p>Loading game details...</p>}
        {missingGameId && (
          <p role="alert">Cannot load game details: the selected game has no ID.</p>
        )}
        {error && <p role="alert">Error loading game details: {error}</p>}
        {details?.summary && (
          <p className="max-w-3xl text-lg leading-relaxed text-white/90">
            {details.summary}
          </p>
        )}
      </section>
    </main>
  )
}

export default GamePage
