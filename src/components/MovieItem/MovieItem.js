import React, { Component } from 'react';
import { connect } from 'react-redux';
import { addToMylistAction } from '../../Redux/actions';


import './MovieItem.css';

class MovieItem extends Component {
    render() {
        const { imdbID, Title, Year, Poster } = this.props;

        return (
            <article className="movie-item">
                <img className="movie-item__poster" src={Poster} alt={Title} />
                <div className="movie-item__info">
                    <h3 className="movie-item__title">{Title}&nbsp;({Year})</h3>
                    <button type="button" className="movie-item__add-button" onClick={() => this.props.addToMylist(imdbID)}>Добавить в список</button>
                </div>
            </article>
        );
    }
}

const mapStateToProps = (state) => {
    return state;
}

const mapDispatchToProps = dispatch => ({
    addToMylist: (id)  => dispatch(addToMylistAction(id))
});

export default connect(mapStateToProps, mapDispatchToProps)(MovieItem);