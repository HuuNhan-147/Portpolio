interface HeaderProps {
  title: string;
  subtitle?: string;
  image?: string;
}

export default function Header({ title, subtitle, image }: HeaderProps) {
  return (
    <header 
      className="relative h-96 bg-gradient-to-r from-primary-900 to-primary-700"
      style={{
        backgroundImage: image ? `url(${image})` : undefined,
        backgroundSize: 'cover',
        backgroundPosition: 'center'
      }}
    >
      <div className="absolute inset-0 bg-black bg-opacity-50"></div>
      <div className="relative h-full flex items-center justify-center text-center px-4">
        <div className="max-w-3xl">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
            {title}
          </h1>
          {subtitle && (
            <p className="text-xl text-gray-200">
              {subtitle}
            </p>
          )}
        </div>
      </div>
    </header>
  );
}