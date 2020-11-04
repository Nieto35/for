// Ejercicio no.4 manejo de objetos y arreglos
//Nota: 
//1. En cada una de las funciones deberás de usar el parametro feed para realizar las operaciones
//2. A partir de la función no 3 se deberá de regresar como resultado el arreglo de tweets con todas sus propiedades y ////// valores actualizados acorde a las operaciones de cada uno
const {feeds} = require('./source');
/*
1. Obtener el numero total de Tweets
Input: feed -> [{propiedades...}, {propiedades...}]
Output: 2
*/
const countTweets = (feeds) => {
    const totalTeewts = feeds.length;
    return totalTeewts;
};
// console.log(countTweets(feeds));


/*
2. Obtener un arreglo con todos los perfiles de usuarios que están en el arreglo de tweets
Input: feed -> [{profile: "AJ + Español"},{ profile: "Elon Musk" }]
Output: ["AJ + Español", "Elon Musk"]
*/

const getProfiles = (feeds) => {
    let arrayProfile = [];
    feeds.forEach(feed => {
        arrayProfile.push(feed.profile)
    });
    return arrayProfile;
}

// console.log(getProfiles(feeds));

/*
3. Crear una función para obtener el arreglo de tweets con todas sus propiedades pero se tendrá
 que agregar un '@' al inicio del valor para la propiedad username
Input:  feed -> [{username: "ajplusespanol", ...},{ username: "elonmusk", ... }]
Output: [{username: "@ajplusespanol"}, {username: "@elonmusk"}]
*/

const updateUsername = (feeds) => {
    // let newArrayfeeds = {};
    // feeds.forEach(feed => {
    //     newArrayfeeds.push(newArrayfeeds.profile = feed.profile)
    //     newArrayfeeds.push(newArrayfeeds.username = '@' + feed.username)
    //     newArrayfeeds.push(newArrayfeeds.content = feed.content)
    //     newArrayfeeds.push(newArrayfeeds.interaction.comments = feed.interaction.comments)
    //     newArrayfeeds.push(newArrayfeeds.interaction.retweets = feed.interaction.retweets)
    //     newArrayfeeds.push(newArrayfeeds.interaction.likes = feed.interaction.likes)
    //     newArrayfeeds.push(newArrayfeeds.verified = feed.verified)
    //     newArrayfeeds.push(newArrayfeeds.blocked = feed.blocked)
    // });
    // return newArrayfeeds;

    let newArrayfeeds = JSON.parse(JSON.stringify(feeds));
    // let juandc = JSON.parse(JSON.stringify(persona))
    
    feeds.forEach((feed, index) => {
        newArrayfeeds[index].username = '@'+feed.username;
    })

    return newArrayfeeds;

}

// console.log(updateUsername(feeds));

/*
4. Crear una función para actualizar el no de interacciones de cada tweet 
para que en los casos donde haya más de 1000 (likes, comentarios, retweets) 
se muestre el noInteracción/1000 y la palabra mil
Input: feed -> [
    {
        interaction: {
            comments: 6700,
            retweets: 3700,
            likes: 84000
        }
    },
    { 
        interaction: {
            comments: 17600,
            retweets: 1300,
            likes: 78800
        }
    }]
Output: arregloTweets -> [
    {
        interaction: {
            comments: "6.7 mil",
            retweets: "3.7 mil",
            likes: "84 mil"
        }
    },
    { 
        interaction: {
            comments: "17.6 mil",
            retweets: "1.3 mil",
            likes: "78.8 mil"
        }
    }]
*/

const updateInteraction = (feeds) => {

    feeds.forEach(feed => {
        if(feed.interaction.comments > 1000) {
             feed.interaction.comments = feed.interaction.comments / 1000 + " mil"
        }
        if(feed.interaction.retweets > 1000) {
            feed.interaction.retweets = feed.interaction.retweets / 1000 + " mil"
       }
       if(feed.interaction.likes > 1000) {
        feed.interaction.likes = feed.interaction.likes / 1000 + " mil"
   }
    })

    return feeds;
}

// console.log(updateInteraction(feeds));

/*
5. Función para obtener todos los tweets que tengan más de "n" comentarios 
y mostrarlos de la misma forma que el punto no 4
Input: 

    feed -> [
        { 
            interaction: {
                comments: 5,
                retweets: 66,
                likes: 126
            }
        },
        {
            interaction: {
                comments: 6700,
                retweets: 3700,
                likes: 84000
            }
        },
        { 
            interaction: {
                comments: 17600,
                retweets: 1300,
                likes: 78800
            }
        }
    ]

    noComments -> 1000


Output: feed -> [
    {
        interaction: {
            comments: "6.7 mil",
            retweets: "3.7 mil",
            likes: "84 mil"
        }
    },
    { 
        interaction: {
            comments: "17.6 mil",
            retweets: "1.3 mil",
            likes: "78.8 mil"
        }
    }]
*/
const getTweetsGreaterThan = (feeds, noComments) => {

    let newArray = feeds.filter(feed => {
        return feed.interaction.comments > noComments
    })

    newArray = updateInteraction(newArray);

    return newArray;
}

// console.log(getTweetsGreaterThan(feeds, 1000));
/*
6. Función para obtener todos los tweets que tengan un numero menor o igual de "n" comentarios 
y mostrarlos de la misma forma que el punto no 4
Input: 

    feed -> [
        { 
            interaction: {
                comments: 5,
                retweets: 66,
                likes: 126
            }
        },
        {
            interaction: {
                comments: 6700,
                retweets: 3700,
                likes: 84000
            }
        },
        { 
            interaction: {
                comments: 17600,
                retweets: 1300,
                likes: 78800
            }
        }
    ]

    noComments -> 1000


Output: arregloTweets -> [
    {
        interaction: {
            comments: "6.7 mil",
            retweets: "3.7 mil",
            likes: "84 mil"
        }
    },
    { 
        interaction: {
            comments: "17.6 mil",
            retweets: "1.3 mil",
            likes: "78.8 mil"
        }
    }]
*/
const getTweetsLessOrEqualsThan = (feeds, noComments) => {

    let newArray = feeds.filter(feed => {
        return feed.interaction.comments <= noComments
    })

    newArray = updateInteraction(newArray);

    return newArray;
}

// console.log(getTweetsLessOrEqualsThan(feeds, 1000));

/*
    7. Función para obtener todos los tweets que tengan un numero mayor de "n" [interacción] 
    y mostrarlos de la misma forma que el punto no 4
    
    Input =========

    feed -> [
        { 
            interaction: {
                comments: 5,
                retweets: 66,
                likes: 126
            }
        },
        {
            interaction: {
                comments: 6700,
                retweets: 3700,
                likes: 84000
            }
        },
        { 
            interaction: {
                comments: 17600,
                retweets: 1300,
                likes: 78800
            }
        }
    ]
    interaction -> "likes",
    quantity -> 85000

    Output ============
    [
        { 
            interaction: {
                comments: 17600,
                retweets: 1300,
                likes: 78800
            }
        }
    ]

*/
const getTweetsGreaterThanInteraction = (feeds, interaction, quantity) => {

    let newArray = feeds.filter(feed => {
        
        if(interaction == "comments") {
            return feed.interaction.comments > quantity
        }
        if(interaction == "retweets") {
            return feed.interaction.retweets > quantity
        }
        if(interaction == "likes") {
            return feed.interaction.likes > quantity
            
        }
       return feed.interaction.comments > quantity
    })

    console.log("entré");
    newArray = updateInteraction(newArray);

    return newArray;
}

// console.log(getTweetsGreaterThanInteraction(feeds,"likes",83000));