export function Tagline({tagline, type = 'default'}: {tagline: string; type?: 'default' | 'mini'}) {
  if (type === 'mini') {
    return (
      <label className='text-form-label text-sm font-title'>{"// " + tagline}</label>
    );
  }
  
  return (
    <h2 className='text-sm font-heading text-accent tracking-widest font-medium'>{"// " + tagline}</h2>
  );
}