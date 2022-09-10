import React, { Component } from 'react';
import './ListPage.css';

class ListPage extends Component {
    state = {
        movies: [
        ], 
        title: ''
    }
    getMoviesById(imdbIDs) {
        imdbIDs.forEach(id=> {
            fetch(`http://www.omdbapi.com/?i=${id}&apikey=ed3e284b`)
                .then(data => data.json())
                .then(data => {
                    this.setState({
                        movies: [
                        ...this.state.movies, 
                        data
                        ]
                    })
                })


        })
    }
    getListTitle(title) {
       this.setState({
        title: title
       })
    }

    componentDidMount() {
        const id = this.props.match.params;

        // TODO: запрос к сервер на получение списка
        fetch(`https://acb-api.algoritmika.org/api/movies/list/${id.id}`)
            .then(data => data.json())
            .then(data => {
                console.log(data)
                this.getListTitle(data.title)
                this.getMoviesById(data.movies)
            })
        //здесь запрос в котором мы отправляем 


        // TODO: запросы к серверу по всем imdbID
        
    }


    // componentDidMount() {
    //     const id = this.props.match.params;
    //     console.log(id);
    //     // TODO: запрос к сервер на получение списка
    //     // TODO: запросы к серверу по всем imdbID
    // }
    render() {
        return (
            <div className="list-page">
                <h1 className="list-page__title">Мой список: {this.state.title}</h1>
                <ul>
                {this.state.movies.map((item) => {
                        return (
                            <li key={item.imdbID}>
                                <a href={"https://www.imdb.com/title/" + item.imdbID + "/"} target="_blank">{item.Title} ({item.Year})</a>
                            </li>
                        );
                    })}

                </ul>
            </div>
        );
    }
}

export default ListPage;
