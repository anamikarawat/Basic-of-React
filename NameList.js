export const NameList = () =>{
    const names = ['Anamika' , 'Rawat' , 'Krishna']
    return (
        <div>
            {names.map((name)=>{
                return <h2 key= {name}>{name}</h2>
                //we use key to uniquely identify the names
            })}
        </div>
    )
}