import React from 'react'

import "./styles/RecipeModal.css"

const RecipeModal = ({recipe,onClose}) => {

  if(!recipe) return null;

  //Collect Ingredients + Measure
  const ingredients=[];

  for(let i=1;i<=20;i++){
    const ingredient=recipe[`strIngredient${i}`]
    const measure=recipe[`strMeasure${i}`]
    if(ingredient && ingredient.trim()!==""){
      ingredients.push(`${measure ? measure:""} ${ingredient}`.trim())
    }
  }

// split the Instructions into clean bullet points

const steps=recipe.strInstructions
? recipe.strInstructions
.split(/[.\n]/)
.map((step)=>step.trim())
.filter((step)=>step.length > 3)
:[];

  return (
    <div className='modal'onClick={onClose}>
      <div className='modal-full' onClick={(e)=>e.stopPropagation()}>
        <button className='close-btn' onClick={onClose}>
          X</button>

          <div className='modal-body'>
            <div className='modal-image'>
            <img src={recipe.strMealThumb} alt="" />
            </div>
            <div className='modal-details'>
              <h2>{recipe.strMeal}</h2>
              <p>
                <strong>Category:</strong>
                {recipe.strCategory}
                </p>

              <p>
                <strong>Area:</strong>
                {recipe.strArea}
                </p>
                {
                  ingredients.length > 0 && (
                    <div className='ingredients-section'>
                        <h3>Ingredients</h3>
                        <ul>
                          {ingredients.map((item,index)=>(
                            <li key={index}>{item} </li>
                          ))}
                        </ul>
                    </div>
                  
                  )
                }
                {
                  steps.length > 0 &&(
                    <div className='instructions'>
                      <h3>Process:</h3>
                      <ol>
                        {steps.map((step,index)=>(
                          <li key={index}>{step}</li>
                        ))}
                      </ol>
                    </div>
                  )
                }

                {
                  recipe.strYoutube && (
                    <a href={recipe.strYoutube} 
                    target="_blank" 
                    className='youtube-link'>
                      Watch on Youtube
                    </a>
                  )
                }

            </div>
          </div>

      </div>
      
    </div>
  )
}

export default RecipeModal
