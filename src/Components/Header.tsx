import '../header.css';

export function Header() {
  return (
    <>
    <div className='div1 darkColor'></div>
    <header className="title darkColor">
      <h3 className='geek pading0 color2'>geek</h3>
      <h1 className='websiteLogo pading0 color2'>web site</h1>
    </header>
    <nav className="nav navColor" />
    <div className="navItems ">
      <div className="item1 navItemsFont">about </div>
      <div className="item2 navItemsFont color2">home </div>
      <div className="item3 navItemsFont">news </div>
      <div className="item4 navItemsFont">a </div>
    </div>
  </>
  )
}