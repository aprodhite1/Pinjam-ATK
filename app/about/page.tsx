import Footer from "@/components/footer";
import Header from "@/components/header";

export default function AboutPage() {
  return (
    <>
      <Header />
      <div className="hero h-screen bg-slate-100">
        <div className="hero-content text-center">
          <div className="max-w-md">
            <h1 className="text-xl font-bold">website ini dibuat untuk ...</h1>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}
