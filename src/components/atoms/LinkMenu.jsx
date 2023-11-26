import './LinkMenu.scss';

const LinkMenu = () => {
  return (
    <div className='linkMenuNav'>
        <a className='link' href="./"><p>Home</p></a>
        <a className='link' href="./menu"><p>Menu</p></a>
        <a className='link' href=""><p>Restaurant</p></a>
        <a className='link' href=""><p>Gallery</p></a>
        <a className='link' href=""><p>Contact</p></a>
    </div>
  )
}

export default LinkMenu