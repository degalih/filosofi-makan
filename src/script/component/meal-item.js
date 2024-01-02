class mealItem extends HTMLElement {

    constructor() {
        super();
        this.shadowDOM = this.attachShadow({mode: "open"});
    }

    set meal(meal) {
        this._meal = meal;
        this.render();
    }

    render() {
        this.shadowDOM.innerHTML = `
           <style>
              * {
                   margin: 0;
                   padding: 0;
                   box-sizing: border-box;
               }
               :host {
                   display: block;
                   margin-bottom: 18px;
                   box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);
                   border-radius: 10px;
                   overflow: hidden;
               }
              
               .fan-art-meal {
                   width: 100%;
                   max-height: 300px;
                   object-fit: cover;
                   object-position: center;
               }
              
               .meal-info {
                   padding: 24px;
                   background: #2d4059;
                   color: #e5e5e5;
               }
              
               .meal-info > h2 {
                   font-weight: bolder;
               }
               .meal-info > h4 {
                   font-weight: bold;
                   margin: 0;
                   padding: 0;
               }
              
               .meal-info > p {
                   margin-top: 10px;
                   overflow: hidden;
                   text-overflow: ellipsis;
                   display: -webkit-box;
                   -webkit-box-orient: vertical;
                   -webkit-line-clamp: 10; /* number of lines to show */
               }

               ul li {
                    margin-left: 15px;
               }

           </style>
           <img class="fan-art-meal" src="${this._meal.strMealThumb}" alt="Fan Art">
           <div class="meal-info">
               <h2>${this._meal.strMeal}</h2>
               <h4>Katergori: ${this._meal.strCategory}</h4>
               <h4>Negara Asal: ${this._meal.strArea}</h4>
               <h4>Bahan-Bahan:</h4>
               <ul>
                    <li>${this._meal.strIngredient1}</li>
                    <li>${this._meal.strIngredient2}</li>
                    <li>${this._meal.strIngredient3}</li>
                    <li>${this._meal.strIngredient4}</li>
                    <li>${this._meal.strIngredient5}</li>
                    </ul>
               <p>${this._meal.strInstructions}</p>
           </div>`;
    }
}

customElements.define("meal-item", mealItem);