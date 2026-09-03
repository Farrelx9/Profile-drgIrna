export default function Footer() {
  return (
    <footer className="bg-teal-900">
      <div className="max-w-content mx-auto px-6 py-8 flex flex-col sm:flex-row items-center justify-between gap-4">
        <span className="font-display text-paper">drg. Irna Kusuma</span>
        <p className="text-teal-100/60 text-sm">
          © {new Date().getFullYear()} Klinik Gigi drg. Irna. Semua hak dilindungi.
        </p>
      </div>
    </footer>
  );
}
