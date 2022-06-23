export function Header({
  logoUrl = '/logo.png',
  backgroundColor = '#222',
  title = 'Uptime Monitor',
  logoAlt = 'Uptime Monitor',
}) {
  return (
    <header
      style={{
        backgroundColor,
      }}
    >
      <img className="logo" src={logoUrl} alt={logoAlt} />
      <span className="title">{title}</span>
    </header>
  );
}
