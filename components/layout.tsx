import Link from "next/link";

const Layout = (props: any) => {
  return (
    <div className="hero min-h-screen bg-slate-100">
      <div className="hero-content text-center">
        <div className="max-w-md">
          <h1 className="text-5xl font-bold">Peminjaman Alat Tulis Kantor</h1>
          <p className="py-6">
            Website Peminjaman alat tulis kantor untuk BPS Padang pariaman
          </p>
          <Link href="/list">
            <button className="btn btn-primary">Ayo Mulai Mencatat</button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Layout;
