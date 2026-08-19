export const fetchRecipes = async(query = "")=>{
try{
    const res=await fetch(
    `https://www.themealdb.com/api/json/v1/1/search.php?s=${query}`,
    {cache:"no-store"}
);
    const data=await res.json();
    return data.meals || [];
}
catch(err){
    console.log("Error fetching data:",err);
    return[];
}

}