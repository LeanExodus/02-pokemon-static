
import { useState, useEffect } from 'react';
import { Layout } from "../../components/Layouts"
import { FavoriteCardPokemon, FavoritePokemon } from '../../components/pokemon';
import { NoFavorites } from "../../components/ui";
import { localFavorites } from '../../utils';


const FavoritesPage = () => {

  const [favoritePokemons, setFavoritePokemons] = useState<number[]>([])

  useEffect(() => {
    
    setFavoritePokemons(localFavorites.pokemons())
    
  }, [])

  return (
    <Layout title="Pokemons - Favoritos">

      {
        favoritePokemons.length === 0
        ? (<NoFavorites/>)
        : (

         <div>
           <FavoritePokemon pokemons={favoritePokemons} />
          
            
         </div>

        )
      }
        
    </Layout>
  );
}

export default FavoritesPage
