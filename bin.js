/* function addTodo(input) {
    if (input.value.length === 0) {
      isInputValid(false);
      return;
    }
    isInputValid(true);
  
    let inputArray = input.value.split(",");
  
    const isInputContainNaN = [...inputArray].some((item) => {
      let parseToInt = parseInt(item);
      return isNaN(parseToInt);
    });
    if (isInputContainNaN) {
      itemManager.addTodo({ name: input.value, id: ++itemsCount, pokemonId: -1 });
      return render();
    }
    let promisesArray = inputArray.map((item) => {
      return pokemonClient.fetchPokemon(item);
    });
    Promise.all(promisesArray).then((promiseFullfield) => {
      promiseFullfield.forEach((data) => {
        if (data?.name) {
          const isPokemonIdExist = [...itemManager.todos].some((item) => {
            return item.pokemonId === data.id;
          });
          const pokemontypes = data.types.map((typeItem) => {
            return typeItem.type.name;
          });
          const detailedPokemon = `${data.name}, type:${pokemontypes.join(
            " - "
          )}`;
          if (!isPokemonIdExist) {
            itemManager.addTodo({
              name: detailedPokemon,
              id: ++itemsCount,
              pokemonId: data.id,
            });
            return render();
          }
          alert(`pokemon id ${data.id} already exist!`);
        }
      });
    });
  } 
 */
