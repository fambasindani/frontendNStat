const Footer = () => {
  return (
    <footer className="border-t border-gray-200 bg-white">
      <div className="mx-auto max-w-7xl px-6 py-4">
        <div className="flex flex-col items-center justify-between gap-4 text-sm text-gray-600 sm:flex-row">
          <span>© 2025 N&apos;Stat. Tous droits réservés.</span>
          <div className="flex gap-6">
            <button className="transition-colors hover:text-gray-900">Confidentialité</button>
            <span>•</span>
            <button className="transition-colors hover:text-gray-900">Conditions</button>
          </div>
        </div>
      </div>
    </footer>
  )
}
export default Footer
