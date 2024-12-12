import CategoriesMenu from '@/components/categories-menu/CategoriesMenu'

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className="flex flex-col md:flex-row md:h-[calc(100vh-104px)]">
      <CategoriesMenu />
      {children}
    </div>
  );
}