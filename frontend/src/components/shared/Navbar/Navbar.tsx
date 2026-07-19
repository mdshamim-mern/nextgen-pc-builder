import TopBar from './TopBar';
import CategoryNav from './CategoryNav';

export default function Navbar() {
  return (
    <header className="w-full sticky top-0 z-50 flex flex-col">
      <TopBar />
      <CategoryNav />
    </header>
  );
}