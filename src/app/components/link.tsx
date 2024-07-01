import Link from 'next/link'

type Props = {
  href: string
  text: string
}

export default function PageLink({ href, text }: Props) {
  return (
    <Link href={href} target="_blank" className="hover:text-white">
      {text}
    </Link>
  )
}
