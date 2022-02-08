import { Component } from "react";
import "./App.css";
import SearchBar from "./Components/Searchbar/Searchbar";
import getPhotos from "./services/services";
import ImageGalleryList from "./Components/ImageGallery/ImageGallery";
import Button from "./Components/Button/Button";
import "./styles.css";
import Modal from "./Components/Modal/Modal";
import Loader from './Components/Loader/Loader';
class App extends Component {
  state = {
    value: "",
    images: [],
    page: 1,
    largeImg: "",
    isOpen: false,
    isLoading: false,
  };
  componentDidUpdate(prevProps, prevState) {
    if (prevState.page !== this.state.page || prevState.value !== this.state.value) {
      getPhotos(this.state.value, this.state.page).then((data) => {
        this.setState((prev) => ({ images: [...prev.images, ...data.hits] ,isLoading: false }));
      });
    }
  }
  OnbtnClick = (e) => {
    this.setState({ page: this.state.page + 1 ,isLoading: true});
  };
  onModalOpen = (url) => {
    this.setState({ largeImg: url });
    this.onTogleModal();
  };
  onTogleModal = () => {
    this.setState({ isOpen: !this.state.isOpen });
  };
  onBtnSubmit = (value) => {
    this.setState({ value });
  };
  render() {
    return (
      <div className="App">
        <SearchBar onBtnSubmit={this.onBtnSubmit} />
        <ImageGalleryList onModalOpen={this.onModalOpen} images={this.state.images} />
        {this.state.isLoading ?<Loader/>:null }
        <Button OnbtnClick={this.OnbtnClick} />
       
        {this.state.isOpen ? <Modal url={this.state.largeImg} onTogleModal={this.onTogleModal} /> : null}
      </div>
    );
  }
}

export default App;