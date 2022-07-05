import Head from "next/head"
import { FC } from "react"
import { NavBar } from "../ui";


type Props ={
    title?: string;
    children?: React.ReactNode;
}

const origin = (typeof window ==='undefined') ? '':window.location.origin

export const Layout:FC<Props> = ({children, title}) => {
  
  return (
    <>
    
        <Head>
            <title>{title || 'Pokemon-App'}</title>
            <meta name="author" content="Leandro Campos" />
            <meta name="description" content={`Info sobre el pokemon ${title}`}/>
            <meta name="keywords" content={`${title}, pokemon, pokedex`}/>

            <meta property="og:title" content={`Info sobre ${title}`} />
            <meta property="og:description" content={`Esta es la pagina de ${title}`} />
            <meta property="og:image" content={`${origin}/img/banner.png`} />
        </Head>

        <NavBar /> 

        <main style={{padding: '0px 20px'}}>
            {children}
        </main>
    </>
  )
}
