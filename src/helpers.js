// choose a radom item.
const choice = ( items ) =>
{
    let idx = Math.floor( Math.random() * items.length );
    return items[ idx ];
};

/** remove first matching item from items
 return array with out remove item */
 
const remove = ( item, items ) =>
{
    for ( let i = 0; i < items.length; i++ )
    {
        if ( item[ i ] === item )
        {
            return [ ...items.slice( 0, i ), ...items.slice( i + 1 ) ]
        }
    }
};

export { choice, remove };