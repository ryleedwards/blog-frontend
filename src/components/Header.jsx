import TopNav from './TopNav';

const Header = () => {
  return (
    <header className='min-w-full bg-black text-white flex justify-between py-4'>
      <h2 className='pl-4 font-semibold text-3xl'>Ryle Edwards</h2>
      <TopNav />
    </header>
  );
};

export default Header;
