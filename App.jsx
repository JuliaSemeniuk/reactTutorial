import React from 'react'
import './App.css'

import FunctionMain from './BaseExamples/FunctionExamples/FunctionMain'
import ReactMain from './ReactExamples/ReactMain'
import Function from './Practice/01_Function/Function'
import State from './Practice/02_State/State'
import MenuJu from './Practice/03_Menu/MenuJu'
import MenuText from './Practice/04_MenuText/MenuText'
import MenuImg from './Practice/05_Img/MenuImg'
import MenuCircleImg from './Practice/05_Img/MenuCircleImg'
import Gallery from './Practice/05_Img/Gallery'
import SimpleForm from './Practice/06_Forms/SimpleForm'
import UserData from './Practice/06_Forms/UserDataForm'
import CompDetails from './Practice/06_Forms/CompDetailsForm'
import RadioForm from './Practice/06_Forms/RadioForm'
import GitHubUsers from './Practice/06_Forms/GitHubUsers'
import Registration from './Practice/06_Forms/RegistrationForm'
import Menu from './Practice/07_MultiComponent/01_Menu'
import UserList from './Practice/07_MultiComponent/02_UserList'
import ToDoList from './Practice/07_MultiComponent/03_ToDoList'
import MenuRows from './Practice/07_MultiComponent/04_Menu'
import GalleryShop from './Practice/07_MultiComponent/05_GalleryShop'
import FavoritePanel from './Practice/07_MultiComponent/06_FavoritePanel'
import Cats from './Practice/08_Fatch/01_Cats'
import SortByParameters from './Practice/08_Fatch/02_SortByParameters'
import Income from './BudgetProject/Income'
import Exes from './BudgetProject/Exes'
import Balance from './BudgetProject/Balance'
import { Route, Switch, Link } from 'react-router-dom'

    
class App extends React.Component {
    

    render() {
        return (
            <div className="App" style={{ display: 'flex' }}>
                {/* <ReactMain /> */} {/* <FunctionMain /> */} {/* <Function/> */} {/* <State/> */}
                {/* <MenuJu/> */} {/* <MenuText/> */} {/* <MenuCircleImg/> */} {/* <Gallery/> */}
                {/* <SimpleForm/> */} {/* <UserData/> */} 

                {/* <Switch>
                <Route path={'/radio'}>
                <RadioForm/>
                <Link to='/'>main</Link>
                </Route>
                
                <Route path={'/'}>
                <CompDetails/>
                <Link to='/radio'>radio</Link>

                </Route>
                </Switch> */}
                 {/* <RadioForm/> */}
                {/* <GitHubUsers/> */} {/* <Registration/> */} {/* <Menu/> */} {/* <UserList/> */}
                {/* <ToDoList/> */} {/* <MenuRows/> */} {/* <GalleryShop/> */} {/* <FavoritePanel/> */}
                {/* {<Cats/>} */} {/* {<SortByParameters/>} */}

                {/* {<Income/>} */}
                {/* {<Exes/>} */}
                {<Balance/>}

            </div>
                        
        )
    }
}

export default App
