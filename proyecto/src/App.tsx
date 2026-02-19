import { useEffect, useState } from 'react';
import { db } from './firebase/config';
import { collection, onSnapshot, doc, deleteDoc } from 'firebase/firestore';
import { IReel } from './types/types';
import { ReelForm } from './components/ReelForm';

function App() {
  const [reels, setReels] = useState<IReel[]>([]);
  const [loading, setLoading] = useState(true);
  
  const [editando, setEditando] = useState<IReel | null>(null);

  useEffect(() => {
    const unsubscribe = onSnapshot(collection(db, "reels"), (snapshot) => {
      const docs: IReel[] = [];
      snapshot.forEach((docSnapshot) => {
        const data = docSnapshot.data() as IReel;
        docs.push({ ...data, id: docSnapshot.id });
      });
      setReels(docs);
      setLoading(false);
    });
    return () => unsubscribe();
  }, []);

  const handleDelete = async (id: string) => {
    if (window.confirm("¿Seguro que quieres borrar este Reel?")) {
      await deleteDoc(doc(db, "reels", id));
    }
  };

  return (
    <div className="min-h-screen bg-zinc-900 text-white p-8">
      <h1 className="text-3xl font-bold mb-2">Reels Studio </h1>

      <div className="mb-12">
        <ReelForm editando={editando} setEditando={setEditando} />
      </div>

      {loading ? (
        <p className="animate-pulse text-center">Cargando Reels...</p>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {reels.map((reel) => (
            <div key={reel.id} className="group relative aspect-[9/16] bg-black rounded-2xl overflow-hidden border border-zinc-800 shadow-xl">
              <div className="SI">
                <h2>{reel.titulo}</h2>
                <p>{reel.categoria} • {reel.duracion}s</p>
                
                <div>
                  <button onClick={() => setEditando(reel)}>Editar</button>
                  <button onClick={() => handleDelete(reel.id!)}>Eliminar</button>
                </div>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

export default App;