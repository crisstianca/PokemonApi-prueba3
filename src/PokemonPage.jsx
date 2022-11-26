import { useDispatch, useSelector } from "react-redux";
import { useForm } from "./hooks/useForm"
import { getPokemons } from "./store/slices/thunks";

export const PokemonPage = () => {
    
    const { pokemonStats, name, pokemonData } = useSelector( state => state.pokemon );
    const { onImputChange, formState } = useForm();
    const dispatch = useDispatch()
    let pokeImage = ''
    let statsPoke = pokemonData.stats
    let stats = []

    if ( pokemonData.sprites != null ) {
        const pokeSprites = pokemonData.sprites
        pokeImage = pokeSprites.front_default
        stats = statsPoke
        console.log( 'DATA: ', statsPoke)
    }
   
    const evenClick = () => {
        const name = formState.name
        dispatch( getPokemons( name ))
    }

  
    return (
    <>
        <div className="container-title">
            <h1 className="title">Test</h1>
        </div>

        <div className="container-image">
            <img src="src/images/pokemon.webp" alt="image" />
        </div>
        <hr />

        <div className="row">
            <div className="col-4"> </div>
            <div className="col-4">
                <div className="row">
                    <div className="col-3"> </div>
                    <div className="col-5">
                        <input  
                            className="form-control" 
                            type="text"
                            name="name"
                            onChange={ onImputChange  } 
                        />
                    </div>

                    <div className="col-1">
                        <button
                            className="btn btn-primary pd-15"
                            onClick={ evenClick }
                        >
                            Search
                        </button>
                    </div>
                </div>
            </div>
        </div>
        
        <br />
        <div className="container-info">
            {
             <h2> { pokemonData.name  }</h2>   
            }
            {
               pokeImage? <img src={ pokeImage } alt="image" /> : ''
            }
            
            {
                pokemonData.name 
                ? (
                    <div className="container">

                        <table className="table table-bordered">
                            <thead>
                                <tr>
                                    <th scope="col"> Name stat </th>
                                    <th scope="col"> Value </th>
                                </tr>
                            </thead>
                            <tbody className="table-group-divider">
                                    {
                                    stats.map( ( stat, index ) => {
                                        return <tr> <td> { stat.stat.name }</td> <td> { stat.base_stat } </td>  </tr> 
                                    })
                                    }
                            </tbody>
                        </table>
                    </div>
                ) 
                : ''
            }
            {/* {
                !stats.length
                ? <div className="alert alert-info"> No se encontro el Pokemon, ingrese uno nuevo</div>  
                : ''
            } */}
            
        </div>
    </>
  )
}
