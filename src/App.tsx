import omelette from './assets/images/image-omelette.jpeg'
import BulletList from './components/BulletList';
import Header from './components/Header';
import NumberList from './components/NumberList';
import PreparationTime from './components/PreparationTime';
import Table from './components/Table';

export default function App(){
  const prepartionTimeData = [ 
    'Total: Approximately 10 minutes', 
    'Preparation: 5 minutes', 
    'Cooking: 5 minutes' 
  ];
  const ingredientsData = [
    '2-3 large eggs', 
    'Salt, to taste', 
    'Pepper, to taste', 
    '1 tablespoon of butter or oil', 
    'Optional fillings: cheese, diced vegetables, cooked meats, herbs'
  ]
  const instructionsData = [
    'Beat the eggs: In a bowl, beat the eggs with a pinch of salt and pepper until they are well mixed. You can add a tablespoon of water or milk for a fluffier texture.',
    'Heat the pan: Place a non-stick frying pan over medium heat and add butter or oil.',
    'Cook the omelette: Once the butter is melted and bubbling, pour in the eggs. Tilt the pan to ensure the eggs evenly coat the surface.',
    'Add fillings (optional): When the eggs begin to set at the edges but are still slightly runny in the middle, sprinkle your chosen fillings over one half of the omelette.',
    'Fold and serve: As the omelette continues to cook, carefully lift one edge and fold it over the fillings. Let it cook for another minute, then slide it onto a plate.',
    'Enjoy: Serve hot, with additional salt and pepper if needed.'
  ];

  return(
    <div className="bg-[#f3e5d8] min-h-screen flex items-center justify-center font-main text-sm text-stone-600">
      <div className="bg-white max-w-170 sm:p-8 sm:my-10 sm:rounded-2xl">
        <img src={omelette} className='w-full mb-8 sm:rounded-xl'></img>
        <div className='space-y-4 sm:p-0'>
          <h1 className='text-4xl font-[YoungSerif-Regular] text-stone-900'>
            Simple Omelette Recipe
          </h1>
          <p>
            An easy and quick dish, perfect for any meal. This classic omelette combines beaten eggs cooked to perfection, optionally filled with your choice of cheese, vegetables, or meats.
          </p>
          <PreparationTime arr={prepartionTimeData}></PreparationTime>
          <Header title="Ingredients"></Header>
          <BulletList arr={ingredientsData}></BulletList>
          <hr className='text-stone-200 my-8'></hr>
          <Header title="Instructions"></Header>
          <NumberList arr={instructionsData}></NumberList>
          <hr className='text-stone-200 my-8'></hr>
          <Header title="Nutrition"></Header>
          <p className='mb-8'>
            The table below shows nutritional values per serving without the additional fillings.
          </p>
          <Table title="Calories" desc="277kcal"></Table>
          <Table title="Carbs" desc="0g"></Table>
          <Table title="Protein" desc="20g"></Table>
          <Table title="Fat" desc="22g" underline={false}></Table>
        </div>
      </div>
    </div>
  );
}