import { useState, useEffect } from 'react';
import { db } from '../firebase/config';
import { collection, addDoc, doc, updateDoc } from 'firebase/firestore';
import { CategoriaReel, IReel } from '../types/types';

interface Props {
  editando: IReel | null;
  setEditando: (reel: IReel | null) => void;
}

export const ReelForm = ({ editando, setEditando }: Props) => {
  const [titulo, setTitulo] = useState('');
  const [duracion, setDuracion] = useState(0);
  const [categoria, setCategoria] = useState<CategoriaReel>('Vlog');

  useEffect(() => {
    if (editando) {
      setTitulo(editando.titulo);
      setDuracion(editando.duracion);
      setCategoria(editando.categoria);
    }
  }, [editando]);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Intentando guardar..."); 

    const data = {
      titulo,
      duracion,
      categoria,
      esPublico: true,
      fechaCreacion: editando ? editando.fechaCreacion : Date.now()
    };

    try {
      if (editando && editando.id) {
        await updateDoc(doc(db, "reels", editando.id), data);
        setEditando(null);
        alert("¡Reel actualizado con éxito!");
      } else {
        await addDoc(collection(db, "reels"), data);
        alert("¡Reel creado con éxito!");
      }
      
      setTitulo('');
      setDuracion(0);
      setCategoria('Vlog');
      
    } catch (error) {
      console.error("Error en Firebase:", error);
      alert("Hubo un error al conectar con Firebase. Revisa la consola.");
    }
  };

  return (
    <form onSubmit={handleSubmit} className="bg-white p-6 rounded-xl shadow-lg border border-gray-200 text-black">
      <h2 className="text-xl font-bold mb-4">{editando ? ' Editar Reel' : ' Nuevo Reel'}</h2>
      
      <div className="space-y-4">
        <input 
          type="text"
          value={titulo} 
          onChange={(e) => setTitulo(e.target.value)}
          placeholder="Título del Reel"
          className="w-full p-2 border rounded border-gray-300 outline-none focus:ring-2 focus:ring-blue-500"
          required
        />

        <input 
          type="number" 
          value={duracion} 
          onChange={(e) => setDuracion(Number(e.target.value))}
          placeholder="Duración (segundos)"
          className="w-full p-2 border rounded border-gray-300 outline-none focus:ring-2 focus:ring-blue-500"
        />

        <select 
          value={categoria} 
          onChange={(e) => setCategoria(e.target.value as CategoriaReel)}
          className="w-full p-2 border rounded border-gray-300 bg-white"
        >
          <option value="Vlog">Vlog</option>
          <option value="Tutorial">Tutorial</option>
          <option value="Humor">Humor</option>
          <option value="Educativo">Educativo</option>
        </select>

        <button 
          type="submit"
          className={`w-full py-3 rounded-lg font-bold text-white transition-colors ${editando ? 'bg-orange-500 hover:bg-orange-600 border-orange-600' : 'bg-blue-600 hover:bg-blue-700 border-blue-700'}`}
        >
          {editando ? 'Guardar Cambios' : 'Crear Reel'}
        </button>
      </div>
    </form>
  );
};