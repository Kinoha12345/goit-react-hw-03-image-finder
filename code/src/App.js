import { Component } from 'react';
import './App.css';
import SearchBar from './Components/Searchbar/Searchbar';
import getPhotos from './services/services'
import ImageGalleryList from './Components/ImageGallery/ImageGallery';
import Button from './Components/Button/Button';

class App extends Component {
  state = {
  value: '',
  images : [],
  page : 1,
  // iterator:40
  }
  componentDidUpdate(prevProps,prevState){
  if(prevState.page !==this.state.page || prevState.value !== this.state.value){
    getPhotos(this.state.value,this.state.page).then((data)=>{this.setState(prev=>({images:[...prev.images,...data.hits]}))})
  }
  
  }
  OnbtnClick = (e) =>{
  this.setState({page: this.state.page+1})
  // this.setState({iterator: this.state.iterator+40})
  
  }
 
  onBtnSubmit  = (value) =>{
   this.setState({value})
  }
  render() {return (
    <div className="App">
     <SearchBar onBtnSubmit={this.onBtnSubmit}/>
     <ImageGalleryList images={this.state.images} />
     <Button OnbtnClick={this.OnbtnClick}/>
    </div>
  )}
  
}

export default App;
