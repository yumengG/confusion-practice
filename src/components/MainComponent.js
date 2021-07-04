import React, { useState } from 'react'
import Menu from './MenuComponent'
import { DISHES } from '../shared/Dishes'
import Comment from './Comment'
import RenderSelectedDish from './RenderSelectedDish'
import Header from './HeaderComponent'
import Footer from './FooterComponent'
import Home from './HomeComponent'
import { Switch, Route, Redirect } from 'react-router-dom';

const MainComponent = () => {
  const [dishes, setDishes] = useState(DISHES)
  const [selectedDishes, setSelectedDish] = useState()

  const selectDish = (dish) => {
    console.log(dish.id)
    setSelectedDish(dish)
  }

  return (
        <div>
            <Switch>
                <Route exact path='/'>
                    <Header />
                    <Menu dishes={dishes} selectDish={(dish) => selectDish(dish)}/>
                    <div className='row'>
                    <div className='col-12 col-md-5 m-1'>
                        {selectedDishes ? <RenderSelectedDish dish={selectedDishes}/> : <div />}
                    </div>
                    <div className='col-12 col-md-5 m-1'>
                        {selectedDishes ? <Comment dish={selectedDishes}/> : <div />}
                    </div>
                    </div>
                    <Footer />
                </Route>
                <Route path='/home'>
                    <Home />
                </Route>
                <Route exact path='/menu'>
                    <Menu dishes={dishes} selectDish={(dish) => selectDish(dish)}/>
                </Route>
            </Switch>

            
        </div>
  )
}

export default MainComponent
