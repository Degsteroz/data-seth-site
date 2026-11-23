export function Logo({ small = false }: { small?: boolean }) {
  return (
    <a href="#top" className={`logo${small ? ' logo-sm' : ''}`}>
      <img src="/logo-mark-light.png" alt={small ? '' : 'Data Seth'} />
      <span>
        dataset<span className="h">h</span>
      </span>
    </a>
  );
}
