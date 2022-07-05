
import { Grid } from '@nextui-org/react';
import  { NextPage, GetStaticProps } from 'next'
import { pokeApi } from '../api';
import { Layout } from '../components/Layouts'
import {PokemonList } from '../components/pokemon';
import { PokemonsList, SmallPokemon } from '../interfaces';

interface Props{
  pokemons: SmallPokemon[]
}

const HomePage: NextPage<Props> = ({pokemons}) => {
  
  return (
    <Layout title="Lista de Pokemons">

      <PokemonList pokemons={pokemons}/>
      
    </Layout>
  );
}


export const getStaticProps: GetStaticProps = async (ctx) => {
  
  const {data} = await pokeApi.get<PokemonsList>("/pokemon?limit=151");
  const pokemons: SmallPokemon[] = data.results.map((poke,i)=> ({
    ...poke,
    id: i + 1,
    img: `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/${i+1}.svg`
  }))

  https: return {
    props: {
      pokemons 
    },
  };
}

export default HomePage
