import Sidebar from "./components/Sidebar"
import Topbar from "./components/Topbar"
import Footer from "./components/Footer"
import "./globals.css"

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="fr">
      <body>
        <div className="flex min-h-screen flex-col">
          <Topbar />
          <div className="flex flex-1">
            <Sidebar />
            <main className="flex-1 bg-background">
              {children}
              {/* <Footer /> */}
            </main>
          </div>
        </div>
      </body>
    </html>
  )
}
