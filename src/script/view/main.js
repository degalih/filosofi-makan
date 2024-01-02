import '../component/meal-list.js';
import '../component/search-bar.js';
import DataSource from '../data/data-source.js';

const main = () => {
    const searchElement = document.querySelector("search-bar");
    const MealListElement = document.querySelector("meal-list");

    const onButtonSearchClicked = async () => {
        try{
            const result = await DataSource.searchmeal(searchElement.value);
            renderResult(result);
        } catch (message) {
            fallbackResult(message)
        }
    };

    const renderResult =  results => {
        MealListElement.meals = results;
    };

    const fallbackResult = message => {
        MealListElement.renderError(message);
    };

    searchElement.clickEvent = onButtonSearchClicked;
};

export default main;