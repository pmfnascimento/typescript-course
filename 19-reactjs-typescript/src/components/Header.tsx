interface HeaderProps {
    image: {
        src: string;
        alt: string;
    }
}

function Header({ image }: HeaderProps) {

  return (
    <header>
        <img {...image} />
    </header>
  )
}

export default Header
