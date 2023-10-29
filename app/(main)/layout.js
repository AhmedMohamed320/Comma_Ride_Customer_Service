import "../globals.css"; 
import MainNav from "@/components/main_nav/MainNav";


export const metadata = {
    title: "comma ride",
    description: "comma ride delivery",
};

export default function RootLayout({ children }) {
    return (
        <html lang="en" >
            <body>
                <MainNav/>
                {children}
            </body>
        </html>
    );
}
