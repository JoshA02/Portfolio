export function Tagline({tagline}: {tagline: string}) {
  return (
    <h2 className='text-sm font-heading text-accent tracking-widest font-medium'>{"// " + tagline}</h2>
  )
}