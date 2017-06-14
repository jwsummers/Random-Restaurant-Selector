var restaurantList = {
  restaurants: [],
  addRestaurant: function(restaurantText) {
    this.restaurants.push({
      restaurantText: restaurantText,
      completed: false
    });
  },

  editRestaurant: function(restaurantText) {
  this.restaurants.restaurantText = restaurantText;
  },
  deleteRestaurant: function(position) {
  this.restaurants.splice(position, 1);
  },
}

var handlers = {
      addRestaurant: function() {
        var addRestaurantTextInput = document.getElementById('addRestaurantTextInput');
        restaurantList.addRestaurant(addRestaurantTextInput.value);
        addRestaurantTextInput.value = '';
        view.displayRestaurants();
      },
      editRestaurant: function() {
        var editRestaurantPositionInput = document.getElementById('editRestaurantPositionInput');
        var editRestaurantTextInput = document.getElementById('editRestaurantTextInput');
        restaurantList.editRestaurant(editRestaurantPositionInput.valueAsNumber, editRestaurantTextInput.value);
        editRestaurantPositionInput.value = '';
        editRestaurantTextInput.value = '';
        view.displayRestaurants();
      },
      deleteRestaurant: function(position) {
        restaurantList.deleteRestaurant(position);
        view.displayRestaurants();
      }
}

var view = {
  displayRestaurants: function() {
    var restaurantUl = document.querySelector('ul');
    restaurantUl.innerHTML = '';
    restaurantList.restaurants.forEach(function(restaurant, position) {
    var restaurantLi = document.createElement('li');
    var restaurantText = ''
    restaurantText = restaurant.restaurantText
    restaurantLi.id = position;
    restaurantLi.textContent = restaurantText;
    restaurantLi.appendChild(this.createDeleteButton());
    restaurantUl.appendChild(restaurantLi);
    }, this);
  },
  createDeleteButton: function() {
    var deleteButton = document.createElement('button');
    deleteButton.textContent = 'Delete';
    deleteButton.className = 'deleteButton';
    return deleteButton;
  },

  createEditButton: function() {
    var editButton = document.createElement('button');
    editButton.textContent = 'Edit';
    editButton.className = 'editButton';
    return editButton;
  },


  setUpEventListeners: function() {
    var restaurantsUl = document.querySelector('ul');
    restaurantsUl.addEventListener('click', function(event) {
      // Get the element that was clicked on.
      var elementClicked = event.target;

      //Check if elementClicked is a delete button.
      if (elementClicked.className === 'deleteButton') {
        handlers.deleteRestaurant(parseInt(elementClicked.parentNode.id));
      } else {
        handlers.changeRestaurant(parseInt(elementClicked.parnetNode.id));
      }

    });
  }
};

view.setUpEventListeners();
