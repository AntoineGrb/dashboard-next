import SideNav from '@/app/ui/dashboard/sidenav'; //Importer le composant SideNav depuis le dossier ui
 
//Le composant Layout reçoit une prop children (qui peut etre une page ou un layout) et il sera appliqué à toute l'arbo en dessous
export default function Layout({ children }: { children: React.ReactNode }) { 
  return (
    <div className="flex h-screen flex-col md:flex-row md:overflow-hidden">
      <div className="w-full flex-none md:w-64">
        <SideNav />
      </div>
      <div className="flex-grow p-6 md:overflow-y-auto md:p-12">{children}</div>
    </div>
  );
}