
export type CategoriaReel = 'Educativo' | 'Humor' | 'Vlog' | 'Tutorial';

export interface IReel {
    id?: string;            
    titulo: string;         
    duracion: number;       
    categoria: CategoriaReel; 
    esPublico: boolean;     
    fechaCreacion: number;  
}