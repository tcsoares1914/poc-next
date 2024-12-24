import "./../globals.css";
import Sidebar from '@/components/layout/Sidebar';
import Header from '@/components/layout/Header';


export default function AdminLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <>
      <div id="root">
        <Sidebar />
        <div className="relative md:ml-64 bg-blueGray-50">
          <Header />
          <div>{children}</div>
        </div>
      </div>
    </>
  );
}