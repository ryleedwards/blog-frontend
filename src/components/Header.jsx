import TopNav from './TopNav';

const Header = () => {
  return (
    <header className='min-w-full bg-black text-white flex p-4'>
      <h2 className='mr-auto text-3xl'>Ryle Edwards</h2>
      <TopNav />
    </header>
  );
};

export default Header;
