//librerías de react por defecto
//react sirve para la creación de componentes, etc..
import React, {Component} from 'react';
//ReactDOM es para renderizan los componentes dentro del dom de la web
import ReactDOM from 'react-dom';

//importo libreria de api para busqueda de youtube
import YTSearch from 'youtube-api-search';

//importo componentes para dibujar
import SearchBar from './components/search_bar';
import VideoList from './components/video_list';
import VideoDetail from './components/video_detail';

//esta key que me da youtube es constante... simpre utilizo la misma para hacer las búsquedas
const API_KEY = 'AIzaSyBZi7GCRVGDofqMFcfIb3fYZqM11HrQ9h0'

class App extends Component{
 constructor(props){
   super(props);

   this.state = {videos: []};

  //se le define la llave que me da youtube (de goggle) y le paso el término que se está buscando
  // me devuelve los datos en "data".. a los cuales le pongo una funcion para hacer algo con eso que devuelve
  YTSearch(
    {key: API_KEY, term: 'surfboards'} 
    , (videos) => {
        this.setState({videos}); //esto es igual al this.setState({videos: videos});
      }
  );   
 }
  render(){
    return(
      <div> 
        <SearchBar />
        <VideoDetail video={this.state.videos[0]} />
        <VideoList videos={this.state.videos} />
    </div>
    );
  }
}

ReactDOM.render(<App />, document.querySelector('.container'));