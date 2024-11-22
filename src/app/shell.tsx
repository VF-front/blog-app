
export default function ShallLayout({
    children
}: Readonly<{
    children: React.ReactNode;
}>) {
    const clases = "shell flex justify-between w-full mx-auto max-w-7xl px-4 sm:px-6 lg:px-8";
    return (
        <div className={clases}>{children}</div>
    );
}