import React from 'react'

function ViewAllList(props) {
    let images = props.pokemonList.map( (entry, index) => { 
        let url = `https://pokeres.bastionbot.org/images/pokemon/${index+1}.png`
        let imgTag =`${url}`
        return (
            <li><img src={imgTag} alt=""></img></li>
        );
    })

    return (
        <div>
            <ul>{images}</ul>
        </div>
        
    );
}

// const getImage = async (index) => {
//     const response = await fetch(`https://pokeres.bastionbot.org/images/pokemon/${index+1}.png`)
//     const json = await response.json()

//     return <img src="https://pokeres.bastionbot.org/images/pokemon/${index+1}.png"></img>
// }

export default ViewAllList