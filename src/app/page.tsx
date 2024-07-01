import AsciiArt from './components/asciiArt'
import PageLink from './components/link'

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col ">
      <div className="self-center flex flex-col gap-3">
        <AsciiArt />
        <h1 className="text-3xl font-bold self-center">JannisKaranikis.Dev</h1>
        <nav className="flex space-x-4 underline text-lg">
          <PageLink href="https://github.com/JannisK89" text="Github" />
          <PageLink
            href="https://www.linkedin.com/in/jannis-karanikis-58248a179/"
            text="LinkedIn"
          />
          <PageLink href="https://techblog.janniskaranikis.dev/" text="Blog" />
          <PageLink
            href="https://techblog.janniskaranikis.dev/portfolio"
            text="Portfolio"
          />
          <PageLink href="mailto:jannis.karanikis@gmail.com" text="Email" />
        </nav>
      </div>
    </main>
  )
}
