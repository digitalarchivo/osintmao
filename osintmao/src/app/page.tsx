import Header from '@/components/Header';
import ProjectList from '@/components/ProjectList';
import Footer from '@/components/Footer';

export default function Home() {
  return (
    <main className="min-h-screen bg-black text-white flex flex-col">
      <Header />
      <div className="flex-grow">
        <ProjectList />
      </div>
      <Footer />
    </main>
  );
}
