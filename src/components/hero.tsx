import { useState } from 'react'

type Artist = {
  name: string
  genre: string
  color: string
  bio: string
  songs: string[]
}

const artists: Artist[] = [
  {
    name: 'Lyra Bloom',
    genre: 'Folk',
    color: 'bg-[#f5e8df]',
    bio: 'Lyra Bloom writes warm, story-led folk songs inspired by quiet mornings, long train rides, and finding beauty in ordinary moments.',
    songs: ['Paper Boats', 'Northbound', 'The Window Seat'],
  },
  {
    name: 'Milo June',
    genre: 'R&B',
    color: 'bg-[#edf3e8]',
    bio: 'Milo June blends mellow R&B with thoughtful lyrics about growing up, letting go, and making room for something new.',
    songs: ['Slow Motion', 'Green Lights', 'After the Rain'],
  },
  {
    name: 'Nova Lane',
    genre: 'Indie Pop',
    color: 'bg-[#efe5f7]',
    bio: 'Nova Lane makes bright, slightly offbeat indie pop with catchy melodies and lyrics that feel like pages from a personal diary.',
    songs: ['Polaroid Summer', 'Satellite Heart', 'Dancing Alone'],
  },
]

const genres = ['All', ...new Set(artists.map((artist) => artist.genre))]

function Hero() {
  const [selectedArtist, setSelectedArtist] = useState<Artist | null>(null)
  const [selectedGenre, setSelectedGenre] = useState('All')
  const visibleArtists = selectedGenre === 'All'
    ? artists
    : artists.filter((artist) => artist.genre === selectedGenre)

  return (
    <main id="home" className="px-4 pb-14 pt-10 sm:px-6 lg:px-8">
      <section className="mx-auto max-w-5xl">
        <div className="max-w-2xl">
          <span className="inline-flex rounded-full bg-[#f1ddd2] px-3 py-1 text-[0.68rem] font-semibold uppercase tracking-[0.28em] text-[#7a5d4f]">MusicReco</span>
          <h1 className="mt-4 text-4xl font-semibold tracking-tight text-[#4e3d35] sm:text-5xl">Get to know the artists behind the songs.</h1>
          <p className="mt-3 text-base leading-7 text-[#6d5c53] sm:text-lg">Browse a small collection of artists, read their stories, and find songs by genre.</p>
        </div>

        <div id="about" className="mt-10 grid gap-6 lg:grid-cols-[1.1fr_0.9fr]">
          <section id="artists" className="rounded-[2rem] border border-[#decfc4] bg-[#fffaf6] p-6 shadow-[0_10px_30px_rgba(120,90,75,0.08)] sm:p-8">
            <p className="text-[0.68rem] uppercase tracking-[0.28em] text-[#7e6456]">Artists</p>
            <h2 className="mt-2 text-2xl font-semibold text-[#4f3c35]">Explore by sound</h2>
            <div className="mt-5 grid gap-3 sm:grid-cols-3">
              {visibleArtists.map((artist) => (
                <button key={artist.name} type="button" onClick={() => setSelectedArtist(artist)} className={`rounded-2xl ${artist.color} p-4 text-left transition hover:-translate-y-1 hover:shadow-md focus:outline-none focus:ring-2 focus:ring-[#c89f8d]`}>
                  <span className="text-2xl" aria-hidden="true">♪</span>
                  <span className="mt-3 block font-semibold text-[#4e3d35]">{artist.name}</span>
                  <span className="mt-1 block text-sm text-[#77655b]">{artist.genre}</span>
                </button>
              ))}
            </div>
            {selectedArtist && (
              <article className="mt-5 rounded-2xl bg-[#f5e7dd] p-5" aria-live="polite">
                <div className="flex items-start justify-between gap-4">
                  <div>
                    <p className="text-[0.68rem] uppercase tracking-[0.28em] text-[#7e6456]">Artist profile</p>
                    <h3 className="mt-1 text-xl font-semibold text-[#4f3c35]">{selectedArtist.name}</h3>
                  </div>
                  <button type="button" onClick={() => setSelectedArtist(null)} className="text-sm text-[#7a5d4f] underline underline-offset-4 hover:text-[#4e3d35]">Close</button>
                </div>
                <p className="mt-3 text-sm leading-6 text-[#6d5c53]">{selectedArtist.bio}</p>
              </article>
            )}
          </section>

          <section id="contact" className="rounded-[2rem] border border-[#decfc4] bg-[#f1e9f7] p-6 shadow-[0_10px_30px_rgba(120,90,75,0.08)] sm:p-8">
            <p className="text-[0.68rem] uppercase tracking-[0.28em] text-[#80658c]">Song list</p>
            <h2 className="mt-2 text-2xl font-semibold text-[#4f3c35]">Songs by genre</h2>
            <div className="mt-5 flex flex-wrap gap-2">
              {genres.map((genre) => (
                <button key={genre} type="button" onClick={() => setSelectedGenre(genre)} className={`rounded-full px-3 py-2 text-sm font-medium transition ${selectedGenre === genre ? 'bg-[#d9bcb0] text-[#4d3931]' : 'bg-[#fffaf7] text-[#6b5249] hover:bg-[#f5e7de]'}`}>
                  {genre}
                </button>
              ))}
            </div>
            <div className="mt-5 space-y-2">
              {visibleArtists.flatMap((artist) => artist.songs.map((song) => (
                <div key={`${artist.name}-${song}`} className="flex items-center justify-between rounded-xl bg-[#fffaf7] px-4 py-3">
                  <div>
                    <p className="text-sm font-medium text-[#5b463d]">{song}</p>
                    <p className="text-xs text-[#8b7568]">{artist.name}</p>
                  </div>
                  <span className="text-xs text-[#8b7568]">{artist.genre}</span>
                </div>
              )))}
            </div>
          </section>
        </div>
      </section>
    </main>
  )
}

export default Hero
