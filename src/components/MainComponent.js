import React, { useState } from 'react'
import Menu from './MenuComponent'
import { DISHES } from '../shared/Dishes'
import Comment from './Comment'
import RenderSelectedDish from './RenderSelectedDish'
import Header from './HeaderComponent'
import Footer from './FooterComponent'
import Home from './HomeComponent'
import Dish from './Dish'
import Contact from './ContactComponent'
import { COMMENTS } from '../shared/Comments'
import { LEADERS } from '../shared/Leaders'
import { PROMOTIONS } from '../shared/Promotions'
import { Switch, Route, Redirect, useParams} from 'react-router-dom';

const MainComponent = () => {
  const [dishes, setDishes] = useState(DISHES)
  const [selectedDishes, setSelectedDish] = useState()

  const selectDish = (dish) => {
    console.log(dish.id)
    setSelectedDish(dish)
  }
  const SelectComment = () => {
    let { dishID } = useParams();
    return (
        <Comment comment={COMMENTS.filter((comment)=> (comment.id === parseInt(dishID)))[0]} />
    )
  }

  const FilterID = () => {
    let { dishID } = useParams();
      return (
          <Dish dish={DISHES.filter((dish)=> (dish.id === parseInt(dishID)))[0]} selectSingleDish={selectDish}/>
      )
  }

  return (
        <div>
            <Switch>
                <Route exact path='/'>
                    <Header />
                    <Menu dishes={dishes} selectDish={(dish) => selectDish(dish)}/>
                    
                    <Footer />
                </Route>
                <Route path='/home'>
                    <Home dish={DISHES[0]} promotion={PROMOTIONS[0]} leader={LEADERS[0]}/>
                </Route>
                <Route exact path='/menu'>
                    <Menu dishes={dishes} selectDish={(dish) => selectDish(dish)}/>
                </Route>
                <Route path='/menu/:dishID'>
                    <FilterID />
                    <div className='row'>
                        <div className='col-12 col-md-5 m-1'>
                            {selectedDishes ? <RenderSelectedDish dish={selectedDishes}/> : <div />}
                        </div>
                        <div className='col-12 col-md-5 m-1'>
                            {selectedDishes ? <SelectComment /> : <div />}
                        </div>
                    </div>
                </Route>
                <Route path='/contactus'>
                    <Contact />
                </Route>
            </Switch>

            
        </div>
  )
}

export default MainComponent
